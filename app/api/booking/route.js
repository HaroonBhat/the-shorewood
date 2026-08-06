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


export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* Authenticate AS the bookings mailbox so From, envelope sender and
   SMTP AUTH all align — misalignment is a strong spam signal. */
const ACCOUNT = mailbox("BOOKINGS");

/* Deliver to the dedicated inbox, or back to the sending mailbox. */
const TO = process.env.BOOKINGS_TO || ACCOUNT.user;

export async function POST(req) {
  let payload;

  try {
    if (rateLimited(clientIp(req), "booking")) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // honeypot
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
        `[booking] no usable SMTP credentials. Set BOOKINGS_SMTP_USER and ` +
          `BOOKINGS_SMTP_PASS (both), or SMTP_USER and SMTP_PASS as a fallback.`
      );
      console.warn("[booking] SMTP not configured. Enquiry:", payload);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email is not configured yet. Please write to bookings@theshorewood.com.",
        },
        { status: 503 }
      );
    }
  } catch (err) {
    console.error("[booking] bad request:", err?.message || err);
    return NextResponse.json(
      { ok: false, error: "Could not read that request. Please try again." },
      { status: 400 }
    );
  }

  /* ── 1. notify the team (must succeed) ─────────────── */
  try {
    const mail = teamEmail({
      kind: "booking",
      ...payload,
      source: "theshorewood.com/BookATrip",
    });

    await getTransporter(ACCOUNT).sendMail({
      // MUST be the authenticated mailbox — Hostinger rejects mismatched
      // From addresses as an anti-spoofing measure.
      from: `"Shorewood Website" <${ACCOUNT.user}>`,
      to: TO,
      envelope: { from: ACCOUNT.user, to: TO },
      replyTo: `"${payload.name}" <${payload.email}>`,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });
  } catch (err) {
    logMailError("booking", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send that just now. Please email bookings@theshorewood.com.",
      },
      { status: 502 }
    );
  }

  try {
    const deliverable = await domainCanReceiveMail(payload.email);

    if (!deliverable) {
      console.warn(
        `[booking] skipped auto-reply — ${payload.email} has no mail route`
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
      "[booking] auto-reply failed (enquiry was still received):",
      err?.message || err
    );
  }

  try {
    console.log(`[booking] sent OK → ${TO} | from ${payload.email}`);
  } catch {
    /* logging must never break a successful booking */
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
