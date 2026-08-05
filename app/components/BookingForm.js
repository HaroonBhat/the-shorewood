"use client";

import { useState } from "react";
// import { destinations } from "../lib/Data";

/**
 * ContactForm — enquiry form modelled on the reference's booking form.
 *
 * Fields: Full Name · Contact Number · Email · Destination · Dates · Message
 *
 * Notes:
 *   • a hidden honeypot input catches bots (the reference uses the same trick)
 *   • validation is native HTML5 first, with a JS guard before submit
 *   • submitting is simulated here — wire `onSubmit` to a route handler
 *     (app/api/contact/route.js) or a service like Formspree / Resend
 */

const EASE = "cubic-bezier(.16,1,.3,1)";

const FIELD =
  "w-full rounded-[12px] border border-black/10 bg-white/70 px-4 py-3 text-[15px] text-[#191919] outline-none transition-colors duration-300 placeholder:text-[#9a9a9a] focus:border-[#033D4A]/50 focus:bg-white";

function Label({ htmlFor, children, required }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[14px] font-medium text-[#191919]"
    >
      {children}
      {required && <span className="ml-0.5 text-[#BA2525]">*</span>}
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [serverError, setServerError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));

    // honeypot: real people never fill this
    if (raw.website) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: raw.name,
          phone: raw.phone,
          email: raw.email,
          date: raw.dates,
          message: [
            raw.message || ""
          ]
            .filter(Boolean)
            .join("\n\n"),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setServerError(
          json.error || "We couldn't send that. Please try again."
        );
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setServerError(
        "Network problem — please check your connection and try again."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="flex w-full flex-col items-start gap-4 rounded-[24px] border border-black/5 bg-white/70 p-8 backdrop-blur-xl"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#033D4A] text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="text-[22px] font-medium tracking-[-0.03em] text-[#191919]">
          Thanks — that&rsquo;s with us.
        </h3>
        <p className="text-[15px] leading-[1.6] text-[#545454]">
          A trip designer will reply within one working day. If it&rsquo;s
          urgent, email us directly at{" "}
          <a
            href="mailto:bookings@theshorewood.com"
            className="text-[#033D4A] underline underline-offset-4"
          >
            bookings@theshorewood.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-[14px] text-[#545454] underline underline-offset-4 transition-colors hover:text-[#033D4A]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="flex w-full flex-col gap-7 rounded-[24px] border border-black/5 bg-white/60 p-6 backdrop-blur-xl sm:p-8"
    >
      {/* name */}
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="name" required>
          Full Name
        </Label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={FIELD}
        />
      </div>

      {/* phone + email */}
      <div className="grid w-full gap-7 sm:grid-cols-2">
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="phone" required>
            Contact Number
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 00000 00000"
            className={FIELD}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="email" required>
            Email Address
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={FIELD}
          />
        </div>
      </div>

      {/* destination + dates */}
      <div className="grid w-full gap-7 sm:grid-cols-2">
      
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="dates">Preferred Dates</Label>
          <input id="dates" name="dates" type="date" className={FIELD} />
        </div>
      </div>

      {/* message */}
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="message">Tell us about the trip</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Who's travelling, how long you have, and the kind of pace you enjoy…"
          className={`${FIELD} resize-y`}
        />
      </div>

      {/* honeypot — hidden from people, tempting to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 scale-0 opacity-0"
      />

      {status === "error" && (
        <div
          role="alert"
          className="flex flex-col gap-1 rounded-[12px] border border-[#BA2525]/25 bg-[#BA2525]/[0.06] px-4 py-3"
        >
          <p className="text-[14px] text-[#BA2525]">{serverError}</p>
          <p className="text-[13px] text-[#545454]">
            You can also email us directly at{" "}
            <a
              href="mailto:bookings@theshorewood.com"
              className="text-[#033D4A] underline underline-offset-4"
            >
              support@theshorewood.com
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 rounded-full bg-[#033D4A] py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ transitionTimingFunction: EASE }}
        >
          {status === "sending" ? "Sending…" : "Submit enquiry"}
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#033D4A] transition-transform duration-300 group-hover:rotate-45">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </button>
        <p className="text-[13px] text-[#7D7D7D]">
          No obligation — we reply within one working day.
        </p>
      </div>
    </form>
  );
}
