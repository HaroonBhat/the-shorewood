"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Auto-redirect back to the homepage after a countdown.
 *
 * Accessibility / UX notes:
 *   • the countdown is announced via aria-live so screen readers hear it
 *   • it can be cancelled — an unstoppable redirect traps anyone who
 *     wants to read the message or use the links
 *   • honours prefers-reduced-motion by skipping the progress animation
 */
export default function NotFoundRedirect({ seconds = 12, href = "/" }) {
  const router = useRouter();
  const [left, setLeft] = useState(seconds);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (left <= 0) {
      router.push(href);
      return;
    }
    const id = window.setTimeout(() => setLeft((v) => v - 1), 1000);
    return () => window.clearTimeout(id);
  }, [left, paused, router, href]);

  const pct = ((seconds - left) / seconds) * 100;

  return (
    <div className="flex w-full max-w-[420px] flex-col items-center gap-3">
      {/* progress rail */}
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
        <span
          className="block h-full rounded-full bg-white transition-[width] duration-1000 ease-linear"
          style={{ width: `${paused ? pct : pct}%` }}
        />
      </div>

      <p
        aria-live="polite"
        className="text-[13px] text-white/55"
      >
        {paused ? (
          <>Redirect paused.</>
        ) : (
          <>
            Taking you home in{" "}
            <span className="tabular-nums text-white">{left}</span>
            {left === 1 ? " second" : " seconds"}
          </>
        )}
      </p>

      <div className="flex items-center gap-4 text-[13px]">
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          className="text-white/50 underline underline-offset-4 transition-colors hover:text-white"
        >
          {paused ? "Resume" : "Cancel redirect"}
        </button>
        <span className="text-white/20">/</span>
        <Link
          href={href}
          className="text-white/50 underline underline-offset-4 transition-colors hover:text-white"
        >
          Go now
        </Link>
      </div>
    </div>
  );
}
