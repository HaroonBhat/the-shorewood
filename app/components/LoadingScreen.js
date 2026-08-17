"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * LoadingScreen — the Shorewood roundel with a gold progress ring.
 *
 * The logo already contains the wordmark and tagline, so nothing is
 * repeated underneath it. Everything supports the mark instead:
 *   • gold ring drawing clockwise around the edge
 *   • slow counter-rotating tick ring for depth
 *   • soft gold glow behind the roundel
 *   • the logo itself settles in from a slight scale-up and blur
 *
 * Self-contained: keyframes inline, no external CSS, no props.
 * Requires /public/logo.png (transparent PNG — alpha matters here).
 */

const DURATION = 2600;
const EXIT = 900;
const EASE = "cubic-bezier(.16,1,.3,1)";

const GOLD = "#C9A227";
const GOLD_SOFT = "#BF9867"; // sampled from the logo artwork

// ring geometry: circumference = 2πr
const R = 61;
const CIRC = 2 * Math.PI * R; // 383.27

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let frame = 0;
    let start = null;

    const tick = (now) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setLeaving(true), 240);
        window.setTimeout(() => setGone(true), 240 + EXIT);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  /* Scroll lock.
   *
   * This effect MUST depend on `gone`. The component returns null when it
   * finishes, but returning null does not unmount it — layout.jsx keeps
   * <LoadingScreen /> in the tree forever, so an empty dependency array
   * would never fire its cleanup and the body would stay locked.
   *
   * Depending on `gone` re-runs the effect the moment the loader ends,
   * which restores scrolling. The cleanup is kept as a safety net for a
   * genuine unmount (e.g. fast refresh in development).
   */
  useEffect(() => {
    if (gone) {
      document.body.style.overflow = "";
      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-[#07120F]"
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.06)" : "scale(1)",
        transition: `opacity ${EXIT}ms ease, transform ${EXIT}ms ${EASE}`,
      }}
    >
      <style>{`
        @keyframes lsSpin   { to { transform: rotate(360deg); } }
        @keyframes lsSpinRev{ to { transform: rotate(-360deg); } }
        @keyframes lsHalo   { 0%,100% { transform: scale(1);    opacity:.35 }
                              50%     { transform: scale(1.09); opacity:.06 } }
        @keyframes lsLogoIn { from { opacity:0; transform: scale(1.08); filter: blur(10px) }
                              to   { opacity:1; transform: scale(1);    filter: blur(0) } }
        @keyframes lsFade   { from { opacity:0; transform: translateY(8px) }
                              to   { opacity:1; transform: translateY(0) } }
        @keyframes lsGlow   { 0%,100% { opacity:.30 } 50% { opacity:.55 } }
        @media (prefers-reduced-motion: reduce) {
          .ls-anim { animation: none !important; }
        }
      `}</style>

      {/* deep vignette so the roundel sits in its own pool of light */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 46%, rgba(28,52,44,.55), rgba(7,18,15,.96) 62%)",
        }}
      />

      {/* warm glow behind the mark */}
      <div
        className="ls-anim pointer-events-none absolute h-[420px] w-[420px] rounded-full blur-[90px]"
        style={{
          background: `radial-gradient(circle, ${GOLD_SOFT}55, transparent 66%)`,
          animation: "lsGlow 3.4s ease-in-out infinite",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* ── roundel + rings ─────────────────────────── */}
        <div className="relative grid h-[260px] w-[260px] place-items-center sm:h-[300px] sm:w-[300px]">
          {/* breathing halo */}
          <span
            className="ls-anim absolute h-[236px] w-[236px] rounded-full border sm:h-[272px] sm:w-[272px]"
            style={{
              borderColor: `${GOLD}66`,
              animation: "lsHalo 3s ease-out infinite",
            }}
          />

          {/* dashed tick ring, slow clockwise */}
          <svg
            viewBox="0 0 140 140"
            className="ls-anim absolute h-full w-full opacity-40"
            style={{ animation: "lsSpin 26s linear infinite" }}
          >
            <circle
              cx="70"
              cy="70"
              r="68"
              fill="none"
              stroke={GOLD}
              strokeWidth="0.6"
              strokeDasharray="0.5 7"
              strokeLinecap="round"
            />
          </svg>

          {/* fine ring, slow anticlockwise — counter-motion reads as depth */}
          <svg
            viewBox="0 0 140 140"
            className="ls-anim absolute h-full w-full opacity-25"
            style={{ animation: "lsSpinRev 40s linear infinite" }}
          >
            <circle
              cx="70"
              cy="70"
              r="64.5"
              fill="none"
              stroke={GOLD_SOFT}
              strokeWidth="0.5"
              strokeDasharray="18 10"
            />
          </svg>

          {/* progress ring */}
          <svg
            viewBox="0 0 140 140"
            className="absolute h-full w-full -rotate-90"
          >
            <circle
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke="rgba(255,255,255,.10)"
              strokeWidth="1.6"
            />
            <circle
              cx="70"
              cy="70"
              r={R}
              fill="none"
              stroke={GOLD}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC - (progress / 100) * CIRC}
              style={{
                transition: "stroke-dashoffset 120ms linear",
                filter: `drop-shadow(0 0 6px ${GOLD}aa)`,
              }}
            />
          </svg>

          {/* the logo */}
          <div
            className="ls-anim relative h-[196px] w-[196px] sm:h-[226px] sm:w-[226px]"
            style={{ animation: `lsLogoIn 1200ms ${EASE} both` }}
          >
            <Image
              src="/logo.webp"
              alt="The Shorewood"
              fill
              priority
              sizes="240px"
              className="rounded-full object-contain"
              style={{
                filter: `drop-shadow(0 10px 40px rgba(0,0,0,.6))`,
              }}
            />
          </div>
        </div>

        {/* ── progress readout ────────────────────────── */}
        <div
          className="ls-anim mt-9 flex items-center gap-4"
          style={{ animation: "lsFade 800ms ease 700ms both" }}
        >
          <span
            className="block h-px w-10"
            style={{
              background: `linear-gradient(to right, transparent, ${GOLD}88)`,
            }}
          />
          <span
            className="text-[11px] tabular-nums tracking-[0.34em]"
            style={{ color: GOLD }}
          >
            {String(progress).padStart(3, "0")}
          </span>
          <span
            className="block h-px w-10"
            style={{
              background: `linear-gradient(to left, transparent, ${GOLD}88)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
