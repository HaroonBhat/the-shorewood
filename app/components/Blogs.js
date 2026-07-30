import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { posts } from "../lib/Data";

export default function Blogs() {
  return (
    <section className="bg-[#FAF8F0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Blogs"
            title="Inspiration and tips for your next journey"
          />
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[15px] font-medium text-[#191919] transition-colors hover:bg-[#F7F7F7]"
          >
            All articles
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.title} href={p.href} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[13px] uppercase tracking-wider text-[#7D7D7D]">
                {p.date}
              </p>
              <h3 className="mt-2 text-[20px] font-semibold leading-snug tracking-[-0.01em] text-[#191919] transition-colors group-hover:text-[#033D4A]">
                {p.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#033D4A]">
                Read article
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
