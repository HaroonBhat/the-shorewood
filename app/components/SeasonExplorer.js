"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { seasons } from "../lib/Data";

/**
 * SeasonExplorer — tabbed view of Kashmir's four seasons.
 *
 * Each season carries its own accent colour, which drives the active tab,
 * the underline, the highlight bullets and the temperature chip. Switching
 * tabs cross-fades the image rather than swapping it hard.
 */

const EASE = "cubic-bezier(.16,1,.3,1)";

export default function SeasonExplorer() {
  const [active, setActive] = useState(0);
  const s = seasons[active];

  return (
    <div className="flex w-full flex-col gap-8">
      {/* ── tabs ──────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Seasons in Kashmir"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0"
      >
        {seasons.map((season, i) => {
          const on = i === active;
          return (
            <button
              key={season.id}
              role="tab"
              aria-selected={on}
              aria-controls={`season-${season.id}`}
              id={`tab-${season.id}`}
              onClick={() => setActive(i)}
              className="group/tab relative flex shrink-0 items-center gap-3 rounded-[16px] border px-4 py-3 text-left outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#033D4A]/30"
              style={{
                borderColor: on ? "transparent" : "rgba(0,0,0,.08)",
                backgroundColor: on ? season.accent : "rgba(255,255,255,.55)",
                transitionTimingFunction: EASE,
              }}
            >
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={season.thumb}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span
                  className="text-[15px] font-medium tracking-[-0.03em] transition-colors duration-500"
                  style={{ color: on ? "#fff" : "#191919" }}
                >
                  {season.name}
                </span>
                <span
                  className="text-[12px] transition-colors duration-500"
                  style={{ color: on ? "rgba(255,255,255,.75)" : "#7D7D7D" }}
                >
                  {season.months}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── panel ─────────────────────────────────── */}
      <div
        role="tabpanel"
        id={`season-${s.id}`}
        aria-labelledby={`tab-${s.id}`}
        className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12"
      >
        {/* image stack — cross-fades between seasons */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] sm:aspect-[16/11] lg:aspect-[4/5]">
          {seasons.map((season, i) => (
            <Image
              key={season.id}
              src={season.img}
              alt={`Kashmir in ${season.name.toLowerCase()}`}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 92vw, 560px"
              className="object-cover"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "scale(1)" : "scale(1.04)",
                transition: `opacity 700ms ${EASE}, transform 1200ms ${EASE}`,
              }}
            />
          ))}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 to-transparent" />

          {/* temperature chip */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 backdrop-blur-md">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: s.accent }}
            />
            <span className="text-[13px] font-medium text-[#191919]">
              {s.temp}
            </span>
          </div>

          <p className="absolute inset-x-0 bottom-0 p-5 text-[20px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
            {s.tagline}
          </p>
        </div>

        {/* copy */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-baseline gap-3">
            <h3 className="text-[28px] font-medium leading-none tracking-[-0.04em] text-[#191919] sm:text-[34px]">
              {s.name}
            </h3>
            <span className="text-[14px] text-[#7D7D7D]">{s.months}</span>
          </div>

          <p className="max-w-[520px] text-[15px] leading-[1.7] text-[#545454] sm:text-[16px]">
            {s.blurb}
          </p>

          {/* highlights */}
          <ul className="flex w-full flex-col gap-2.5">
            {s.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: s.accent }}
                />
                <span className="text-[15px] leading-[1.5] text-[#404040]">
                  {h}
                </span>
              </li>
            ))}
          </ul>

          {/* best for */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[13px] text-[#7D7D7D]">Best for</span>
            {s.bestFor.map((b) => (
              <span
                key={b}
                className="rounded-full border px-3 py-1.5 text-[13px]"
                style={{
                  borderColor: `${s.accent}55`,
                  color: s.accent,
                  backgroundColor: `${s.accent}0f`,
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* local note */}
          <p className="flex items-start gap-2.5 rounded-[14px] border border-black/5 bg-white/50 px-4 py-3 text-[14px] leading-[1.6] text-[#545454]">
            <svg
              viewBox="0 0 24 24"
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: s.accent }}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8h.01M11 12h1v4h1" />
            </svg>
            {s.note}
          </p>

          <Link
            href="/BookATrip"
            className="group mt-1 inline-flex items-center gap-3 rounded-full bg-[#033D4A] py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Plan a {s.name.toLowerCase()} trip
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#033D4A] transition-transform duration-300 group-hover:rotate-45">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
