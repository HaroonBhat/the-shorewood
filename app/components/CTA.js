import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-3 py-16 sm:px-4 lg:py-24">
      <div className="relative isolate mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[28px] px-5 py-20 text-center sm:rounded-[36px] sm:px-8">
        <Image
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=2000&q=80&auto=format&fit=crop"
          alt="Kite surfer at sunset"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/90 backdrop-blur-md">
          Ready when you are
        </span>
        <h2 className="mt-5 max-w-3xl text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[52px]">
          Your next shoreline is waiting
        </h2>
        <p className="mt-4 max-w-lg text-[16px] text-white/80">
          Tell us how you like to travel and we'll build the itinerary around
          you — usually within 24 hours.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book-a-trip"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-[#033D4A] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a trip
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#033D4A] text-white transition-transform duration-300 group-hover:rotate-45">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </section>
  );
}
