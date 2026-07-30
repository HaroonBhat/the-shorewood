"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../lib/Data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (dir) =>
    setI((v) => (v + dir + testimonials.length) % testimonials.length);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        align="center"
        eyebrow="Testimonials"
        title="Words from those who travelled with us"
      />

      <div className="mt-14 grid items-center gap-8 lg:grid-cols-[420px_1fr] lg:gap-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[16/10] lg:aspect-[4/5]">
          {testimonials.map((item, idx) => (
            <Image
              key={item.name}
              src={item.img}
              alt={item.name}
              fill
              sizes="(max-width: 1024px) 92vw, 420px"
              className={`object-cover transition-opacity duration-500 ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div>
          <span className="text-[16px] tracking-[0.2em] text-amber-400">
            ★★★★★
          </span>
          <blockquote className="mt-5 text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-[#191919] sm:text-[30px] lg:text-[34px]">
            “{t.quote}”
          </blockquote>

          <div className="mt-8 flex items-center justify-between gap-6">
            <div>
              <p className="text-[16px] font-semibold text-[#191919]">
                {t.name}
              </p>
              <p className="text-[14px] text-[#7D7D7D]">{t.role}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-[#191919] transition-colors hover:bg-[#F7F7F7]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full bg-[#033D4A] text-white transition-colors hover:bg-[#012830]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-6 flex gap-1.5">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === i ? "w-8 bg-[#033D4A]" : "w-4 bg-black/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
