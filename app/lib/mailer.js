import nodemailer from "nodemailer";
import { promises as dns } from "node:dns";

/**
 * Shared email plumbing for /api/booking and /api/contact.
 *
 * Keeps one pooled SMTP connection, the escaping helpers, and the two
 * email templates (team notification + customer auto-reply) in one place
 * so the two routes cannot drift apart.
 */

/* ── helpers ─────────────────────────────────────────── */

export const isEmail = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
export const clean = (v = "", max = 2000) => String(v).trim().slice(0, max);

/** strip CR/LF so a value can never inject extra mail headers */
export const safeHeader = (v = "") => clean(v, 200).replace(/[\r\n]+/g, " ");

/** escape before interpolating into HTML */
export const esc = (v = "") =>
  String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const nowIST = () =>
  new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

/* ── rate limiting ───────────────────────────────────── */

const hits = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

/**
 * Sliding-window rate limit.
 *
 * `scope` namespaces the bucket per route, so hammering /api/contact
 * cannot lock out /api/booking. Previously both routes shared one bucket
 * and, because localhost sends no x-forwarded-for header, every request
 * collapsed onto the key "unknown" — testing one form blocked the other.
 *
 * In development the limit is relaxed, since repeated testing from a
 * single machine is normal and expected.
 */
export function rateLimited(ip, scope = "global") {
  if (process.env.NODE_ENV !== "production") return false;

  const key = `${scope}:${ip}`;
  const now = Date.now();
  const list = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

/** Best-effort client IP. Falls back to a per-route key on localhost. */
export function clientIp(req) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "local"
  );
}

/**
 * Does this address's domain actually accept mail?
 *
 * Regex validation only proves an address is well-formed — "a@hskgs.com"
 * passes happily even though the domain does not exist. Sending an
 * auto-reply there produces a bounce that lands back in our own inbox.
 *
 * A quick MX lookup (falling back to A/AAAA, which RFC 5321 permits as an
 * implicit mail route) filters out typos and junk before we send.
 * Failure is treated as "do not send" — we never block the enquiry itself.
 */
export async function domainCanReceiveMail(email) {
  const domain = String(email).split("@")[1]?.trim().toLowerCase();
  if (!domain) return false;

  const lookup = async () => {
    try {
      const mx = await dns.resolveMx(domain);
      if (mx?.length) return true;
    } catch {
      /* fall through to A/AAAA */
    }
    try {
      const a = await dns.resolve4(domain);
      return Boolean(a?.length);
    } catch {
      /* ignore */
    }
    try {
      const aaaa = await dns.resolve6(domain);
      return Boolean(aaaa?.length);
    } catch {
      return false;
    }
  };

  // never let a slow resolver hold up the response
  return Promise.race([
    lookup(),
    new Promise((resolve) => setTimeout(() => resolve(false), 3000)),
  ]);
}

/* ── transporter ─────────────────────────────────────── */

/* One transporter per mailbox, cached by username.
   Sending as the mailbox you authenticated as keeps From, envelope
   sender and SMTP AUTH aligned — misalignment is a strong spam signal. */
const transporters = new Map();

/**
 * @param {{user?:string, pass?:string}} account
 *        Defaults to SMTP_USER / SMTP_PASS.
 */
export function getTransporter(account = {}) {
  const user = account.user || process.env.SMTP_USER;
  const pass = account.pass || process.env.SMTP_PASS;

  if (transporters.has(user)) return transporters.get(user);

  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || 465);

  /* SMTP_INSECURE_TLS: local escape hatch for antivirus/proxy TLS
     interception. Ignored in production so it can never weaken the
     deployed site. See BOOKING-EMAIL-SETUP.md. */
  const allowInsecure =
    process.env.SMTP_INSECURE_TLS === "true" &&
    process.env.NODE_ENV !== "production";

  if (allowInsecure) {
    console.warn(
      "[mail] SMTP_INSECURE_TLS is on — TLS chain verification DISABLED. Development only."
    );
  }

  const t = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: {
      servername: host,
      rejectUnauthorized: !allowInsecure,
      minVersion: "TLSv1.2",
    },
    pool: true,
    maxConnections: 3,
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
  });

  transporters.set(user, t);
  return t;
}

/**
 * Resolve the mailbox a route should authenticate and send as.
 *
 * user and pass fall back TOGETHER, never independently. Mixing a
 * dedicated username with the fallback password would authenticate as one
 * mailbox using another's credentials — which fails as a confusing 535
 * Invalid login. A blank value counts as unset.
 *
 * @param {"SUPPORT"|"BOOKINGS"} prefix
 */
export function mailbox(prefix) {
  const user = (process.env[`${prefix}_SMTP_USER`] || "").trim();
  const pass = (process.env[`${prefix}_SMTP_PASS`] || "").trim();

  // both present → use the dedicated mailbox
  if (user && pass) return { user, pass, source: prefix };

  // partially filled in → warn loudly, it is almost always a mistake
  if (user || pass) {
    console.warn(
      `[mail] ${prefix}_SMTP_${user ? "PASS" : "USER"} is empty — ` +
        `ignoring ${prefix}_SMTP_* and falling back to SMTP_USER. ` +
        `Set both to send as ${user || prefix.toLowerCase() + "@…"}.`
    );
  }

  return {
    user: (process.env.SMTP_USER || "").trim(),
    pass: (process.env.SMTP_PASS || "").trim(),
    source: "SMTP",
  };
}

/* ── templates ───────────────────────────────────────── */

const SHELL = (inner) => `<!doctype html>
<html><body style="margin:0;background:#f8f3ea;padding:28px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">
<table role="presentation" width="100%" style="max-width:620px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #0000000d;">
${inner}
</table>
<p style="max-width:620px;margin:14px auto 0;color:#9a9a9a;font-size:11px;text-align:center;">
  Shorewood &middot; Dal Lake Road, Srinagar, J&amp;K 190001
</p>
</body></html>`;

const header = (title) => `
<tr><td style="background:#033d4a;padding:22px 26px;">
  <p style="margin:0;color:#fff;font-size:17px;font-weight:600;letter-spacing:-.03em;">${title}</p>
  <p style="margin:5px 0 0;color:#ffffffb3;font-size:13px;">Shorewood &middot; theshorewood.com</p>
</td></tr>`;

const row = (label, value) => `
<tr>
  <td style="padding:10px 0;border-bottom:1px solid #eee;color:#7d7d7d;font-size:13px;width:150px;vertical-align:top;">${label}</td>
  <td style="padding:10px 0;border-bottom:1px solid #eee;color:#191919;font-size:15px;">${value}</td>
</tr>`;

/** Notification sent to the team inbox. */
export function teamEmail({ kind, name, phone, email, date, message, source }) {
  const title =
    kind === "contact" ? "New contact enquiry" : "New booking enquiry";

  const html = SHELL(`
${header(title)}
<tr><td style="padding:26px;">
  <table role="presentation" width="100%" style="border-collapse:collapse;">
    ${row("Name", esc(name))}
    ${row("Phone", `<a href="tel:${esc(phone).replace(/[^0-9+]/g, "")}" style="color:#033d4a;">${esc(phone)}</a>`)}
    ${row("Email", `<a href="mailto:${esc(email)}" style="color:#033d4a;">${esc(email)}</a>`)}
    ${date ? row("Preferred date", esc(date)) : ""}
    ${row("Message", message ? esc(message).replace(/\n/g, "<br>") : "&mdash;")}
  </table>
  <div style="margin-top:22px;padding:14px 16px;background:#033d4a0a;border-radius:10px;">
    <p style="margin:0;color:#545454;font-size:13px;line-height:1.6;">
      Hit reply to answer ${esc(name)} directly &mdash; reply-to is already their address.
    </p>
  </div>
  <p style="margin:18px 0 0;color:#9a9a9a;font-size:11px;line-height:1.6;">
    Submitted ${esc(nowIST())}<br>Source: ${esc(source)}
  </p>
</td></tr>`);

  const text = [
    title.toUpperCase(),
    "",
    `Name:   ${name}`,
    `Phone:  ${phone}`,
    `Email:  ${email}`,
    date ? `Date:   ${date}` : "",
    "",
    "Message:",
    message || "—",
    "",
    `Submitted: ${nowIST()}`,
    `Source:    ${source}`,
  ]
    .filter(Boolean)
    .join("\n");

  return { subject: `${title} — ${name}`, html, text };
}

/** Confirmation sent back to the customer. */
export function customerEmail({ name, message, date, replyTo }) {
  const first = String(name).trim().split(" ")[0] || "there";

  const html = SHELL(`
${header("We've got your enquiry")}
<tr><td style="padding:26px;">
  <p style="margin:0 0 14px;color:#191919;font-size:16px;line-height:1.6;">Hi ${esc(first)},</p>
  <p style="margin:0 0 14px;color:#545454;font-size:15px;line-height:1.7;">
    Thanks for getting in touch with Shorewood. Your enquiry has reached our team
    and a trip designer will reply <strong style="color:#191919;">within one working day</strong>.
  </p>
  <p style="margin:0 0 20px;color:#545454;font-size:15px;line-height:1.7;">
    There's nothing to pay and nothing is booked yet &mdash; this is just the start
    of the conversation.
  </p>

  <div style="padding:16px 18px;background:#033d4a0a;border-radius:12px;">
    <p style="margin:0 0 8px;color:#7d7d7d;font-size:12px;letter-spacing:.12em;text-transform:uppercase;">What you sent us</p>
    ${date ? `<p style="margin:0 0 6px;color:#191919;font-size:14px;">Preferred date: ${esc(date)}</p>` : ""}
    <p style="margin:0;color:#545454;font-size:14px;line-height:1.6;">
      ${message ? esc(message).replace(/\n/g, "<br>") : "<em>No message added.</em>"}
    </p>
  </div>

  <p style="margin:20px 0 0;color:#545454;font-size:14px;line-height:1.7;">
    Need us sooner? Call
    <a href="tel:+919730627087" style="color:#033d4a;">+91 97306 27087</a>
    or reply to this email &mdash; it reaches us directly.
  </p>

  <p style="margin:22px 0 0;color:#191919;font-size:15px;line-height:1.6;">
    &mdash; The Shorewood team
  </p>
  <p style="margin:6px 0 0;color:#9a9a9a;font-size:12px;">Where Nature Finds Luxury.</p>
</td></tr>`);

  const text = [
    `Hi ${first},`,
    "",
    "Thanks for getting in touch with Shorewood. Your enquiry has reached our",
    "team and a trip designer will reply within one working day.",
    "",
    "There's nothing to pay and nothing is booked yet — this is just the start",
    "of the conversation.",
    "",
    "WHAT YOU SENT US",
    date ? `Preferred date: ${date}` : "",
    message || "No message added.",
    "",
    "Need us sooner? Call +91 97306 27087, or reply to this email.",
    "",
    "— The Shorewood team",
    "Where Nature Finds Luxury.",
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: "We've got your enquiry — Shorewood",
    html,
    text,
    replyTo,
  };
}

/** Turn a Nodemailer error into a terminal hint. */
export function logMailError(scope, err) {
  const code = err?.code || "";
  console.error(`[${scope}] send failed:`, code, err?.message || err);

  if (
    code === "SELF_SIGNED_CERT_IN_CHAIN" ||
    code === "ERR_TLS_CERT_ALTNAME_INVALID"
  ) {
    console.error(
      `[${scope}] TLS chain rejected — antivirus or a proxy is intercepting TLS.\n` +
        "         Disable its mail/HTTPS scanning, or set SMTP_INSECURE_TLS=true locally."
    );
  }
  if (code === "EAUTH") {
    console.error(
      `[${scope}] Auth rejected. SMTP_USER must be the FULL address, and ` +
        "SMTP_PASS the mailbox password."
    );
  }
  if (code === "ETIMEDOUT" || code === "ECONNECTION") {
    console.error(
      `[${scope}] Could not reach the SMTP host. Port 465 may be blocked — try 587.`
    );
  }
}
