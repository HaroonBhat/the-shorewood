import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { packages } from "../lib/Data";

export default function Packages() {
  return (
    <section id="tours" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        eyebrow="Handcrafted Tour Packages"
        title="Journeys designed for every travel style"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-medium text-[#033D4A] backdrop-blur-md">
                {p.duration}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[18px] font-semibold leading-snug text-[#191919]">
                {p.title}
              </h3>

              <div className="mt-auto flex items-end justify-between pt-5">
                <div>
                  <p className="text-[12px] text-[#7D7D7D]">From</p>
                  <p className="text-[20px] font-semibold text-[#033D4A]">
                    {p.price}
                    <span className="ml-1 text-[12px] font-normal text-[#7D7D7D]">
                      / per person
                    </span>
                  </p>
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F7F7F7] text-[#033D4A] transition-all duration-300 group-hover:bg-[#033D4A] group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <p className="text-[15px] text-[#545454]">
          Explore more journeys waiting for you
        </p>
        <Link
          href="/tours"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-[15px] font-medium text-[#191919] transition-colors hover:bg-[#F7F7F7]"
        >
          View packages
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
