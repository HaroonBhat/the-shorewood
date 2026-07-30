"use client";

import Image from "next/image";
import { useState } from "react";
import { features } from "../lib/Data";

const EASE = "cubic-bezier(.16,1,.3,1)";

const ICONS = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  utensils: (
    <>
      <path d="M4 3v7a3 3 0 003 3v8M7 3v7M10 3v7" />
      <path d="M17 3c-1.5 2-2 4-2 6s.7 3 2 3v9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z" />
    </>
  ),
};

export default function WhyUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative flex w-full flex-col items-center gap-9 overflow-hidden bg-[#033D4A] px-5 py-[72px] sm:px-10 lg:py-[100px]">
      {/* full-bleed darkened photo */}
      <div className="absolute inset-x-0 -inset-y-[2px] z-0">
        <Image
          src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=2000&q=80&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover brightness-[.4]"
        />
      </div>

      <div className="relative z-[1] flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16">
        {/* ── title ─────────────────────────────────── */}
        <div className="flex w-full max-w-[520px] flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <p className="text-[13px] text-white/60">Why Travel With Us</p>
          </div>
          <h2 className="text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[36px]">
            Book with confidence, travel with peace of mind
          </h2>
        </div>

        {/* ── row: image stack + menu ───────────────── */}
        <div className="flex w-full max-w-[1120px] flex-col items-center gap-6 lg:flex-row lg:gap-6">
          {/* image stack — cross-fades to the active feature */}
          <div
            className="relative w-full overflow-hidden rounded-[16px] lg:w-[536px] lg:shrink-0"
            style={{ aspectRatio: "536 / 538" }}
          >
            j
            {features.map((f, i) => (
              <Image
                key={f.title}
                src={f.img}
                alt={f.title}
                fill
                sizes="(max-width: 1024px) 92vw, 536px"
                priority={i === 0} 
                className="object-cover"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(1.04)",
                  transition: `opacity 700ms ${EASE}, transform 1200ms ${EASE}`,
                }}
              />
            ))}
          </div>

          {/* menu */}
          <div className="flex w-full flex-1 flex-col items-start gap-5 lg:p-6">
            {features.map((f, i) => {
              const on = i === active;
              return (
                <div key={f.title} className="w-full">
                  <div
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={on}
                    className="flex w-full cursor-default items-center gap-6 rounded-[12px] p-3 outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-white/40"
                    style={{
                      backgroundColor: on
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                    }}
                  >
                    {/* 40px icon */}
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: on
                          ? "#ffffff"
                          : "rgba(255,255,255,0.10)",
                        color: on ? "#033D4A" : "#ffffff",
                        transitionTimingFunction: EASE,
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[18px] w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {ICONS[f.icon]}
                      </svg>
                    </span>

                    {/* title + subtext */}
                    <div className="flex flex-1 flex-col items-start gap-1">
                      <h3
                        className="text-[17px] font-medium leading-[1.3] tracking-[-0.03em] transition-colors duration-500 sm:text-[19px]"
                        style={{ color: on ? "#fff" : "rgba(255,255,255,.75)" }}
                      >
                        {f.title}
                      </h3>
                      <p className="text-[14px] leading-[1.4] text-white/55">
                        {f.text}
                      </p>
                    </div>
                  </div>

                  {/* 1px divider that fills as the row activates */}
                  {i < features.length - 1 && (
                    <div className="relative mt-5 h-px w-full overflow-hidden bg-white/15">
                      <span
                        className="absolute inset-y-0 left-0 bg-white"
                        style={{
                          width: on ? "100%" : "0%",
                          transition: `width 700ms ${EASE}`,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
