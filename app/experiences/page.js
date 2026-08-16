import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ExperienceCard from "../components/ExperienceCard";
import { experienceList } from "../lib/Data";

/**
 * Experiences — Kashmir, beyond the itinerary.
 *
 *   hero    eyebrow + title + intro, over a wide image
 *   grid    six expandable experience cards
 *   how     three steps: tell us / we shape it / you travel
 *   cta     closing prompt
 */

export const metadata = {
  title: "Kashmir Experiences | Private & Luxury Travel | The Shorewood",
  description:
    "Discover Kashmir through private experiences with The Shorewood — serene mornings on Dal Lake, mountain escapes, Kashmiri cuisine, heritage, culture and winter experiences in Gulmarg.",
};

const STEPS = [
  {
    n: "01",
    title: "Tell us how you want to travel",
    text: "Share your dates, the places you want to see and the experiences that interest you. We begin with what matters to you.",
  },
  {
    n: "02",
    title: "We shape your journey",
    text: "We bring together the right destinations, stays and experiences to create a private itinerary around your pace and interests.",
  },
  {
    n: "03",
    title: "Arrive and experience Kashmir",
    text: "From the moment your journey begins, our local team helps everything come together so you can focus on experiencing the valley.",
  },
];

function Tag({ children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#033D4A]/10 text-[#033D4A]">
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
      <p className="text-[13px] text-[#545454]">{children}</p>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <>

      <main>
        {/* ── hero ──────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[56px] pt-[140px] sm:px-10 lg:pb-[72px] lg:pt-[180px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-9">
            <Reveal y={20} className="flex w-full flex-col items-start gap-3">
              <p className="text-[12px] uppercase tracking-[0.42em] text-[#7D7D7D]">
                Kashmir experiences
              </p>
              <h1 className="max-w-[820px] text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-[#191919] sm:text-[40px] lg:text-[52px]">
                 Kashmir, beyond the ordinary.
              </h1>
              <p className="max-w-[640px] text-[15px] leading-[1.7] text-[#545454] sm:text-[17px]">
                Discover the valley through private experiences shaped around
                your pace — from quiet mornings on Dal Lake and mountain
                  escapes to Kashmiri cuisine, culture and winter days in Gulmarg.
              </p>
            </Reveal>

            <Reveal y={36} delay={100} className="w-full">
              <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] sm:aspect-[1200/520]">
                <Image
                  src="/images/expPage/h1.jpg"
                  alt="Shikaras on Dal Lake at first light"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── experience grid ───────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[72px] sm:px-10 lg:pb-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-9">
            <Reveal y={20} className="flex flex-col items-start gap-3">
              <Tag>Curated experiences</Tag>
              <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Discover Kashmir in a way that feels entirely your own
              </h2>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experienceList.map((item, i) => (
                <Reveal key={item.id} y={36} delay={(i % 3) * 90}>
                  <ExperienceCard item={item} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── how it works ──────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden border-y border-white/50 bg-white/40 px-5 py-[72px] backdrop-blur-xl sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-10 lg:gap-14">
            <Reveal y={20} className="flex flex-col items-start gap-3">
              <Tag>Your journey, your way</Tag>
              <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Nothing fixed. Nothing ordinary.
              </h2>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {STEPS.map((s, i) => (
                <Reveal
                  key={s.n}
                  y={36}
                  delay={i * 90}
                  className="flex flex-col items-start gap-3 border-t border-black/10 pt-6"
                >
                  <span className="text-[13px] tabular-nums text-[#033D4A]">
                    {s.n}
                  </span>
                  <h3 className="text-[19px] font-medium leading-tight tracking-[-0.03em] text-[#191919]">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[#545454]">
                    {s.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── closing cta ───────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
          <Reveal y={20} className="w-full max-w-[1200px]">
            <div className="relative isolate flex flex-col items-start gap-5 overflow-hidden rounded-[28px] px-6 py-12 sm:px-10 sm:py-16">
              <Image
                src="https://images.unsplash.com/photo-1548777123-e216912df7d8?w=2000&q=80&auto=format&fit=crop"
                alt=""
                fill
                sizes="100vw"
                className="-z-10 object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-[#012830]/80" />

              <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[36px]">
                 Your Kashmir journey starts with an idea
              </h2>
              <p className="max-w-[520px] text-[15px] leading-[1.7] text-white/70 sm:text-[16px]">
                  Tell us what you imagine for your time in Kashmir — the places,
                    experiences, pace and dates that matter to you. We&rsquo;ll help
                    shape it into a journey that feels uniquely yours.
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/BookATrip"
                  className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-medium text-[#033D4A] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Start my journey
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#033D4A] text-white transition-transform duration-300 group-hover:rotate-45">
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

                <Link
                  href="/destinations"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  See the seasons
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

    </>
  );
}
