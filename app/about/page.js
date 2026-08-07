import Image from "next/image";
import Link from "next/link";

import Reveal from "../components/Reveal";
import { milestones, team } from "../lib/Data";
export const metadata = {
  title: "About The Shorewood | Luxury Travel Experts in Kashmir",
  description:
    "Learn about The Shorewood, a luxury travel company creating personalized Kashmir travel experiences with local expertise, premium hospitality, and unforgettable journeys.",
  keywords: [
    "About The Shorewood",
    "Luxury Travel Company",
    "Travel Experts Kashmir",
    "Kashmir Tour Operator",
    "Luxury Kashmir Holidays",
    "Local Travel Experts",
    "Premium Kashmir Travel"
  ],
};

const HERO_LETTERS = "ABOUT THE SHOREWOOD";

const JOURNEY = [
  {
    title: "Our Beginning",
    text:
      "The Shorewood was founded with a passion for sharing the untouched beauty of Kashmir through thoughtfully designed travel experiences. We believe every journey should feel personal, comfortable, and unforgettable rather than rushed or ordinary.",
  },
  {
    title: "Our Vision",
    text:
      "Our vision is to become Kashmir's most trusted luxury travel partner by delivering exceptional service, authentic local experiences, and personalized itineraries that create memories lasting a lifetime.",
  },
];

/* shared section tag */
function Tag({ children, dark = false }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
          dark ? "bg-white/10 text-white" : "bg-[#033D4A]/10 text-[#033D4A]"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 16c2.2 0 2.2 1.5 4.4 1.5S8.6 16 10.8 16s2.2 1.5 4.4 1.5S17.4 16 19.6 16H22" />
          <path d="M4 12l8-8 8 8" />
        </svg>
      </span>
      <p className={`text-[13px] ${dark ? "text-white/60" : "text-[#545454]"}`}>
        {children}
      </p>
    </div>
  );
}

/* stat pill used by the milestones band */
function Stat({ value, label, align = "start" }) {
  return (
    <div
      className={`flex w-full flex-col ${
        align === "end" ? "lg:items-end" : "lg:items-start"
      }`}
    >
      <div className="flex w-max items-center gap-2.5 rounded-full bg-[#033D4A]/[0.06] py-[5px] pl-[5px] pr-[18px]">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#033D4A] text-[13px] font-medium text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <span className="text-[20px] font-medium tracking-[-0.03em] text-[#191919] sm:text-[24px]">
          {value}
        </span>
        <span className="text-[14px] text-[#545454]">{label}</span>
      </div>
      <span className="mt-4 block h-px w-full bg-black/10" />
    </div>
  );
}

export default function AboutPage() {
  const left = milestones.slice(0, 3);
  const right = milestones.slice(3);

  return (
    <>
      
      <main>
        {/* ── hero ──────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[72px] pt-[140px] sm:px-10 lg:pb-[100px] lg:pt-[180px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-10">
            <Reveal y={20} className="flex w-full flex-col items-start gap-2">
              {/* spaced-out lettering, as on the reference */}
              <p className="text-[12px] uppercase tracking-[0.42em] text-[#7D7D7D]">
                {HERO_LETTERS}
              </p>
              <h1 className="max-w-[760px] text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-[#191919] sm:text-[40px] lg:text-[52px]">
                Crafting unforgettable journeys through the timeless beauty of Kashmir
              </h1>
            </Reveal>

            <div className="flex w-full flex-col items-center gap-10">
              {/* wide image */}
              <Reveal y={36} className="w-full">
                <figure className="relative aspect-[1200/560] w-full overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/3.jpg"
                    alt="Shoreline seen from above"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              {/* two text columns */}
              <Reveal
                y={20}
                delay={100}
                className="flex w-full flex-col items-start gap-6 lg:flex-row lg:gap-10"
              >
                <p className="flex-1 text-[15px] leading-[1.6] text-[#545454] sm:text-[16px]">
                  The Shorewood was created with a simple vision—to showcase Kashmir beyond ordinary sightseeing. We design journeys that combine breathtaking landscapes, authentic local culture, luxury stays, and unforgettable experiences, allowing every traveller to discover the true soul of paradise.
                </p>
                <p className="flex-1 text-[15px] leading-[1.6] text-[#545454] sm:text-[16px]">
                  Whether you're planning a romantic honeymoon, a family vacation, an adventure-filled escape, or a peaceful retreat, every itinerary is thoughtfully tailored to your interests, pace, and travel style. From the moment you arrive until your journey ends, we take care of every detail.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── milestones ────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center gap-9 overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16">
            <Reveal y={20} className="flex flex-col items-center gap-3">
              <Tag>Milestones</Tag>
              <h2 className="max-w-[620px] text-center text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Why Travelers Choose The Shorewood
              </h2>
            </Reveal>

            {/* stats | image | stats */}
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
              <Reveal y={36} className="flex flex-col gap-6">
                {left.map((m) => (
                  <Stat key={m.label} {...m} align="end" />
                ))}
              </Reveal>

              <Reveal y={36} delay={120} className="mx-auto w-full max-w-[320px]">
                <figure
                  className="relative w-full overflow-hidden rounded-[24px] border-2 border-black/5"
                  style={{ aspectRatio: "0.746" }}
                >
                  <Image
                    src="/images/1.jpg"
                    alt="Travellers on a coastal path"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              <Reveal y={36} delay={200} className="flex flex-col gap-6">
                {right.map((m) => (
                  <Stat key={m.label} {...m} />
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── journey ───────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16">
            <Reveal y={20} className="flex flex-col items-center gap-3">
              <Tag>Our Journey</Tag>
              <h2 className="max-w-[620px] text-center text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Inspired by Kashmir. Designed for Every Traveler.
              </h2>
            </Reveal>

            <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-10">
              <Reveal y={36} className="w-full lg:flex-1">
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/4.jpg"
                    alt="Coast at golden hour"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </figure>
              </Reveal>

              <Reveal
                y={20}
                delay={120}
                className="flex w-full flex-col items-start gap-6 lg:flex-1 lg:gap-10"
              >
                {JOURNEY.map((j) => (
                  <div key={j.title} className="flex flex-col items-start gap-3">
                    <h3 className="text-[20px] font-medium leading-[1.3] tracking-[-0.03em] text-[#191919] sm:text-[24px]">
                      {j.title}
                    </h3>
                    <p className="text-[15px] leading-[1.6] text-[#545454] sm:text-[16px]">
                      {j.text}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── team ──────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16">
            <Reveal y={20} className="flex flex-col items-center gap-3">
              <Tag>Our Team</Tag>
              <h2 className="max-w-[620px] text-center text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Meet the people dedicated to creating exceptional Kashmir experiences
              </h2>
            </Reveal>

            <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
              {team.map((person, i) => (
                <Reveal
                  key={person.name}
                  y={36}
                  delay={i * 90}
                  className="group flex w-full flex-col gap-3"
                >
                  <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      sizes="(max-width: 1024px) 45vw, 280px"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </figure>
                  <div className="flex flex-col items-start gap-0.5">
                    <p className="text-[16px] font-medium tracking-[-0.03em] text-[#191919] sm:text-[18px]">
                      {person.name}
                    </p>
                    <p className="text-[14px] text-[#7D7D7D]">{person.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* soft close */}
            <Reveal y={20} className="flex flex-col items-center gap-4 pt-2">
              <p className="text-[15px] text-[#545454]">
                Ready to discover the beauty of Kashmir?
              </p>
              <Link
                href="/book-a-trip"
                className="group inline-flex items-center gap-3 rounded-full bg-[#033D4A] py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Plan Your Journey
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
            </Reveal>
          </div>
        </section>
      </main>

    </>
  );
}
