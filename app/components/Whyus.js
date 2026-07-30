import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { features } from "../lib/Data";

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
  return (
    <section className="px-3 py-6 sm:px-4">
      <div className="relative isolate overflow-hidden rounded-[28px] px-5 py-20 sm:rounded-[36px] sm:px-8 lg:px-12 lg:py-28">
        <Image
          src="https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=2400&q=80&auto=format&fit=crop"
          alt="Night sky over the coast"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#012830]/85" />

        <div className="mx-auto max-w-7xl">
          <SectionHeading
            dark
            align="center"
            eyebrow="Why Travel With Us"
            title="Book with confidence, travel with peace of mind"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-[24px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.11]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#033D4A]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    {ICONS[f.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 text-[18px] font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
