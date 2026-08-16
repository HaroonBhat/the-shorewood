"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * ExperienceCard — image card that expands to reveal what's included.
 *
 * Collapsed it shows name + one-line description. Expanding uses the
 * grid-template-rows 0fr → 1fr trick so it animates to content height
 * without hardcoding a pixel value.
 */

const EASE = "cubic-bezier(.16,1,.3,1)";

const ICONS = {
  boat: (
    <>
      <path d="M3 17c2 0 2 1.4 4 1.4S9 17 11 17s2 1.4 4 1.4S17 17 19 17h2" />
      <path d="M5 14l1.5-5h11L19 14M12 4v5" />
    </>
  ),
  cup: (
    <>
      <path d="M4 8h12v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z" />
      <path d="M16 10h2.5a2.5 2.5 0 010 5H16M7 4v1.5M11 3.5V5" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 19l6-11 4 7 2.5-4L21 19H3z" />
      <circle cx="8" cy="6" r="1.6" />
    </>
  ),
  utensils: (
    <>
      <path d="M4 3v7a3 3 0 003 3v8M7 3v7M10 3v7" />
      <path d="M17 3c-1.5 2-2 4-2 6s.7 3 2 3v9" />
    </>
  ),
  arch: (
    <>
      <path d="M5 21V10a7 7 0 0114 0v11" />
      <path d="M9 21v-9a3 3 0 016 0v9M3 21h18" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" />
      <path d="M9.5 4.8L12 6.6l2.5-1.8M9.5 19.2L12 17.4l2.5 1.8" />
    </>
  ),
};

export default function ExperienceCard({ item, index = 0 }) {
  const [open, setOpen] = useState(false);
  const panelId = `exp-panel-${item.id}`;

  return (
    <article className="group/exp flex h-full flex-col overflow-hidden rounded-[20px] border border-black/5 bg-white/55 backdrop-blur-md transition-all duration-500 hover:border-black/10 hover:bg-white/80">
      {/* image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          priority={index < 2}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 380px"
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover/exp:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {/* icon */}
        <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#033D4A] backdrop-blur-md">
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ICONS[item.icon]}
          </svg>
        </span>

        {/* meta */}
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 p-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium text-[#191919] backdrop-blur-md">
            {item.duration}
          </span>
          <span className="rounded-full bg-black/30 px-3 py-1 text-[12px] text-white backdrop-blur-md">
            {item.best}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-[19px] font-medium leading-tight tracking-[-0.03em] text-[#191919] sm:text-[21px]">
          {item.name}
        </h3>

        <p className="text-[15px] leading-[1.6] text-[#545454]">{item.text}</p>

        {/* expandable detail */}
        <div
          id={panelId}
          className="grid transition-all duration-500"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            opacity: open ? 1 : 0,
            transitionTimingFunction: EASE,
          }}
        >
          <div className="overflow-hidden">
            <p className="pt-1 text-[14px] leading-[1.7] text-[#545454]">
              {item.detail}
            </p>

            <p className="mt-4 text-[12px] uppercase tracking-[0.14em] text-[#7D7D7D]">
              What&rsquo;s included
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {item.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#033D4A] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-2.5 w-2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[14px] leading-[1.5] text-[#404040]">
                    {inc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* actions */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#033D4A] outline-none transition-opacity hover:opacity-70 focus-visible:underline focus-visible:underline-offset-4"
          >
            {open ? "Show less" : "What's included"}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-500"
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transitionTimingFunction: EASE,
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <Link
            href="/BookATrip"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#033D4A]/8 text-[#033D4A] transition-all duration-300 hover:bg-[#033D4A] hover:text-white"
            aria-label={`Enquire about ${item.name}`}
          >
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
          </Link>
        </div>
      </div>
    </article>
  );
}
