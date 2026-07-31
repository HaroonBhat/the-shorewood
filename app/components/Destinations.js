"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { destinations } from "../lib/Data";

export default function Destinations() {
  const [active, setActive] = useState(0);
  const current = destinations[active];

  return (
    <section className="bg-[#FAF8F0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Discover Kashmir"
          title="Explore Kashmir's Most Iconic & Hidden Destinations"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_340px]">
          {/* Active destination */}
          <div className="relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:min-h-[520px] sm:p-8">
            {destinations.map((d, i) => (
              <Image
                key={d.name}
                src={d.img}
                alt={d.name}
                fill
                sizes="(max-width: 1024px) 92vw, 60vw"
                className={`-z-20 object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"
                  }`}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />

            <span className="w-fit rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-md">
              0{active + 1} / 0{destinations.length}
            </span>

            <div>
              <h3 className="text-[34px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[46px]">
                {current.name}
              </h3>
              <p className="mt-2 max-w-md text-[15px] text-white/80">
                {current.tag}
              </p>
              <Link
                href={`/destinations/${current.name.toLowerCase()}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[15px] font-medium text-[#033D4A] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore {current.name}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Selector list */}
          <ul className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {destinations.map((d, i) => (
              <li key={d.name} className="shrink-0 lg:shrink lg:flex-1">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`flex h-full w-[220px] items-center gap-3 rounded-[20px] border p-3 text-left transition-all duration-300 lg:w-full ${i === active
                      ? "border-transparent bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                      : "border-black/5 bg-white/40 hover:bg-white/70"
                    }`}
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
                    <Image src={d.img} alt="" fill sizes="56px" className="object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[16px] font-semibold text-[#191919]">
                      {d.name}
                    </span>
                    <span className="block truncate text-[13px] text-[#7D7D7D]">
                      {d.tag}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
