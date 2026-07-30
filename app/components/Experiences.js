import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { experiences } from "../lib/Data";

export default function Experiences() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        eyebrow="Explore by Experience"
        title="Experience diverse worlds on one planet"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[24px] p-5"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
              className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#033D4A]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>

            <h3 className="text-[19px] font-semibold leading-tight text-white">
              {item.title}
            </h3>
            <p className="mt-1.5 text-[14px] leading-snug text-white/75">
              {item.text}
            </p>
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
