import Image from "next/image";
import Link from "next/link";
import { experiences } from "../lib/Data";

const CARD_ASPECT = "256 / 324";

function Card({ item, flipped }) {
  const image = (
    <div
      className="relative w-full overflow-hidden rounded-[16px] "
      style={{ aspectRatio: CARD_ASPECT }}
    >
      <Image
        src={item.img}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 285px"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.15]"
      />
    </div>
  );

  const text = (
    <div className="flex w-full flex-col  items-start gap-1 ">
      <h3 className="w-full text-[20px] font-medium leading-[1.3] mt-7 sm:mt-1 tracking-[-0.03em] text-[#191919] sm:text-[30px]">
        {item.title}
      </h3>
      <p className="w-full text-[15px] leading-[1.4] text-[#404040] sm:text-[16px]">
        {item.text}
      </p>
    </div>
  );

  return (
    <Link
      href={item.href}
      className="group flex w-full flex-col items-center gap-2.5 "
    >
      {flipped ? (
        <>
          {text}
          {image}
        </>
      ) : (
        <>
          {image}
          {text}
        </>
      )}
    </Link>
  );
}

export default function Experiences() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16">
        {/* ── title ─────────────────────────────────── */}
        <div className="flex w-full flex-col items-start gap-3">
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
                <circle cx="12" cy="12" r="9" />
                <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
              </svg>
            </span>
            <p className="text-[13px] text-[#545454]">Explore by Experience</p>
          </div>

          <h2 className="max-w-[620px] text-[26px] font-medium  leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
            Experience diverse worlds on one planet
          </h2>
        </div>

        {/* ── content ───────────────────────────────── */}
        <div className="flex w-full flex-col items-center gap-10">
          {/* cards: zig-zag row on desktop, plain grid below */}
          <div className="grid w-full grid-cols-1 items-center gap-6  sm:grid-cols-2 lg:flex lg:flex-row lg:gap-6">
            {experiences.map((item, i) => {
              const flipped = i % 2 === 1;
              return (
                <div
                  key={item.title}
                  className="w-full  lg:flex-1"
                  style={{
                    // ±20px vertical offset creates the alternating baseline
                    transform: flipped
                      ? "translateY(-20px)"
                      : "translateY(20px)",
                  }}
                >
                  <Card item={item} flipped={flipped} />
                </div>
              );
            })}
          </div>

          {/* ── footer row ──────────────────────────── */}
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center ">
            <p className="text-[15px] text-[#545454]">
              Explore more journeys waiting for you
            </p>
            <Link
              href="/experiences"
              className="group inline-flex items-center gap-3 rounded-full bg-[#033D4A] py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View
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
          </div>
        </div>
      </div>
    </section>
  );
}
