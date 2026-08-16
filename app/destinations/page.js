import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SeasonExplorer from "../components/SeasonExplorer";
import { seasons, places } from "../lib/Data";

/**
 * Destinations — Kashmir, organised by season.
 *
 *   hero        eyebrow + title + intro
 *   at a glance four season cards, quick comparison
 *   explorer    tabbed deep-dive (SeasonExplorer)
 *   places      Srinagar, Gulmarg, Pahalgam, Sonmarg
 *   when-to-go  month strip so people can find their own dates
 */

export const metadata = {
  title: "Destinations — Kashmir Through the Seasons | Shorewood",
  description:
    "Kashmir changes completely four times a year. Spring blossom, summer meadows, autumn chinar and deep winter snow — find the season that suits how you want to travel.",
};

const MONTHS = [
  { m: "Jan", s: "winter" },
  { m: "Feb", s: "winter" },
  { m: "Mar", s: "spring" },
  { m: "Apr", s: "spring" },
  { m: "May", s: "spring" },
  { m: "Jun", s: "summer" },
  { m: "Jul", s: "summer" },
  { m: "Aug", s: "summer" },
  { m: "Sep", s: "autumn" },
  { m: "Oct", s: "autumn" },
  { m: "Nov", s: "autumn" },
  { m: "Dec", s: "winter" },
];

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

export default function DestinationsPage() {
  const byId = Object.fromEntries(seasons.map((s) => [s.id, s]));

  return (
    <>

      <main>
        {/* ── hero ──────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[56px] pt-[140px] sm:px-10 lg:pb-[72px] lg:pt-[180px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-8">
            <Reveal y={20} className="flex w-full flex-col items-start gap-2">
              <p className="text-[12px] uppercase tracking-[0.42em] text-[#7D7D7D]">
                Kashmir, thoughtfully explored
              </p>
              <h1 className="max-w-[820px] text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-[#191919] sm:text-[40px] lg:text-[52px]">
                Discover Kashmir, your way
              </h1>
            </Reveal>

            <Reveal
              y={20}
              delay={90}
              className="flex w-full flex-col gap-6 lg:flex-row lg:gap-10"
            >
              <p className="flex-1 text-[15px] leading-[1.7] text-[#545454] sm:text-[16px]">
                 From serene mornings on Dal Lake to snow-covered Gulmarg and the valleys of
                 Pahalgam, The Shorewood creates private Kashmir journeys shaped around how
                 you want to travel.
              </p>
              <p className="flex-1 text-[15px] leading-[1.7] text-[#545454] sm:text-[16px]">
                 Explore Kashmir through its changing seasons, discover places worth slowing
                 down for, and experience the valley beyond the usual itinerary.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── at a glance ───────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[72px] sm:px-10 lg:pb-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-8">
            <Reveal y={20}>
              <Tag>Discover Kashmir</Tag>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {seasons.map((s, i) => (
                <Reveal
                  key={s.id}
                  y={36}
                  delay={i * 90}
                  className="group h-full"
                >
                  <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-black/5 bg-white/55 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/80">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={s.thumb}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 90vw, 280px"
                        className=" transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      />
                      <span
                        className="absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-medium text-white"
                        style={{ backgroundColor: s.accent }}
                      >
                        {s.months}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col gap-1.5 p-4">
                      <h3 className="text-[18px] font-medium tracking-[-0.03em] text-[#191919]">
                        {s.name}
                      </h3>
                      <p className="text-[14px] leading-[1.5] text-[#545454]">
                        {s.tagline}
                      </p>
                      <p className="mt-auto pt-3 text-[13px] text-[#7D7D7D]">
                        {s.temp}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── season explorer ───────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden border-y border-white/50 bg-white/40 px-5 py-[72px] backdrop-blur-xl sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-10 lg:gap-14">
            <Reveal y={20} className="flex flex-col items-start gap-3">
              <Tag>Explore by season</Tag>
              <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                 One valley, countless ways to experience it
              </h2>
            </Reveal>

            <Reveal y={36} delay={100}>
              <SeasonExplorer />
            </Reveal>
          </div>
        </section>

        {/* ── places ────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-10 lg:gap-14">
            <Reveal y={20} className="flex flex-col items-start gap-3">
              <Tag>Travel by season</Tag>
              <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Choose the Kashmir that feels right for you
              </h2>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {places.map((p, i) => (
                <Reveal key={p.name} y={36} delay={i * 90} className="group">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 280px"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
                      <h3 className="text-[19px] font-medium tracking-[-0.03em] text-white">
                        {p.name}
                      </h3>
                      <p className="text-[13px] leading-[1.5] text-white/75">
                        {p.text}
                      </p>
                      <p className="mt-1 text-[12px] text-white/55">
                        {p.seasons}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── when to go strip ──────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[72px] sm:px-10 lg:pb-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col gap-8">
            <Reveal y={20} className="flex flex-col items-start gap-3">
              <Tag>Places to discover</Tag>
              <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                From Srinagar to the quietest corners of Kashmir
              </h2>
            </Reveal>

            <Reveal y={20} delay={90} className="w-full">
              <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-6 sm:px-0 lg:grid-cols-12">
                {MONTHS.map(({ m, s }) => {
                  const season = byId[s];
                  return (
                    <div
                      key={m}
                      className="flex shrink-0 flex-col items-center gap-2 rounded-[14px] border border-black/5 bg-white/50 px-4 py-3 sm:px-2"
                    >
                      <span className="text-[13px] font-medium text-[#191919]">
                        {m}
                      </span>
                      <span
                        className="h-1.5 w-full min-w-[28px] rounded-full"
                        style={{ backgroundColor: season.accent }}
                      />
                      <span className="text-[11px] capitalize text-[#7D7D7D]">
                        {s}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal
              y={20}
              delay={140}
              className="flex flex-col items-start gap-4 rounded-[20px] border border-black/5 bg-white/50 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-medium tracking-[-0.03em] text-[#191919]">
                  Not sure which season suits you?
                </p>
                <p className="text-[14px] leading-[1.6] text-[#545454]">
                   Tell us what you imagine for your Kashmir journey and we'll help you find
                    the places, experiences and season that fit.
                </p>
              </div>

              <Link
                href="/BookATrip"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#033D4A] py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                 Plan your journey
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
