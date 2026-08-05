import { NextResponse } from "next/server";
import {
  isEmail,
  clean,
  safeHeader,
  rateLimited,
  clientIp,
  getTransporter,
  mailbox,
  teamEmail,
  customerEmail,
  logMailError,
  domainCanReceiveMail,
} from "../../lib/mailer";

/**
 * POST /api/contact
 *
 * 1. emails the enquiry to SUPPORT_TO (support@theshorewood.com)
 * 2. sends the customer an automatic confirmation
 *
 * The customer confirmation is best-effort: if it fails, the enquiry has
 * still reached the team, so the visitor is told it succeeded.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Authenticate AS support@ so From, envelope sender and SMTP AUTH all
   match. Sending as one mailbox and delivering to another looks like
   spoofing to the receiving server and reliably lands in spam. */
const ACCOUNT = mailbox("SUPPORT");

/* Deliver to the dedicated inbox, or back to the sending mailbox. */
const TO = process.env.SUPPORT_TO || ACCOUNT.user;

export async function POST(req) {
  let payload;

  try {
    if (rateLimited(clientIp(req), "contact")) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // honeypot — pretend success so bots don't retry
    if (body.website) return NextResponse.json({ ok: true });

    const name = safeHeader(body.name);
    const phone = safeHeader(body.phone);
    const email = safeHeader(body.email);
    const date = safeHeader(body.date);
    const message = clean(body.message, 4000);

    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!isEmail(email)) errors.email = "A valid email is required";
    if (phone.replace(/\D/g, "").length < 7)
      errors.phone = "A contact number is required";

    if (Object.keys(errors).length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    payload = { name, phone, email, date, message };

    if (!ACCOUNT.user || !ACCOUNT.pass) {
      console.error(
        `[contact] no usable SMTP credentials. Set SUPPORT_SMTP_USER and ` +
          `SUPPORT_SMTP_PASS (both), or SMTP_USER and SMTP_PASS as a fallback.`
      );
      console.warn("[contact] SMTP not configured. Enquiry:", payload);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email is not configured yet. Please write to support@theshorewood.com.",
        },
        { status: 503 }
      );
    }
  } catch (err) {
    console.error("[contact] bad request:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: "Could not read that request. Please try again." },
      { status: 400 }
    );
  }

  const from = `"Shorewood Website" <${ACCOUNT.user}>`;

  /* ── 1. notify the team (must succeed) ─────────────── */
  try {
    const mail = teamEmail({
      kind: "contact",
      ...payload,
      source: "theshorewood.com /contact",
    });

    await getTransporter(ACCOUNT).sendMail({
      from,
      to: TO,
      envelope: { from: ACCOUNT.user, to: TO },
      replyTo: `"${payload.name}" <${payload.email}>`,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
  } catch (err) {
    logMailError("contact", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send that just now. Please email support@theshorewood.com.",
      },
      { status: 502 }
    );
  }

  /* ── 2. confirm to the customer (best effort) ──────── */
  // Never allowed to fail the request: the enquiry is already delivered.
  // Skipped when the domain has no mail route, otherwise the auto-reply
  // bounces straight back into our own inbox (typos, junk submissions).
  try {
    const deliverable = await domainCanReceiveMail(payload.email);

    if (!deliverable) {
      console.warn(
        `[contact] skipped auto-reply — ${payload.email} has no mail route`
      );
    } else {
      const reply = customerEmail({
        name: payload.name,
        message: payload.message,
        date: payload.date,
        replyTo: TO,
      });

      await getTransporter(ACCOUNT).sendMail({
        from: `"Shorewood" <${ACCOUNT.user}>`,
        to: payload.email,
        replyTo: TO,
        // bounces go here instead of the team inbox
        envelope: {
          from: process.env.BOUNCE_TO || ACCOUNT.user,
          to: payload.email,
        },
        subject: reply.subject,
        html: reply.html,
        text: reply.text,
      });
    }
  } catch (err) {
    console.warn(
      "[contact] auto-reply failed (enquiry was still received):",
      err?.message || err
    );
  }

  try {
    console.log(`[contact] sent OK → ${TO} | from ${payload.email}`);
  } catch {
    /* logging must never break a successful enquiry */
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
