import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Images */}

        <div className="relative">

          <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-[28px] border-[5px] border-white">
            <Image
              src="/images/about1.jpg"
              alt="Luxury travel experience in Kashmir"
              fill
              sizes="(max-width:1024px) 78vw,40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-[-28px] right-0 aspect-square w-[52%] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl">
            <Image
              src="/images/about2.jpg"
              alt="Shikara ride on Dal Lake"
              fill
              sizes="(max-width:1024px) 52vw,26vw"
              className="object-cover"
            />
          </div>

          <div className="absolute left-4 top-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
            <p className="text-[24px] font-semibold leading-none text-[#143D2D]">
              Classic
            </p>

            
          </div>

        </div>

        {/* Content */}

        <div className="pt-10 lg:pt-0">

          <SectionHeading
            eyebrow="About The Shorewood"
            title="Experience Kashmir Beyond Ordinary Travel"
          />

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#545454] sm:text-[17px]">
            At <strong>The Shorewood</strong>, we believe every journey should
            be unforgettable. From peaceful Shikara rides on Dal Lake to the
            snow-covered peaks of Gulmarg and the lush valleys of Pahalgam, we
            create luxury travel experiences that combine comfort, culture,
            adventure, and authentic Kashmiri hospitality.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">

            {[
              "Luxury stays & premium houseboats",
              "Personalized Kashmir tour packages",
              "Experienced local travel experts",
              "24/7 travel assistance throughout your journey",
            ].map((item) => (

              <li
                key={item}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#143D2D] text-white">

                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>

                </span>

                <span className="text-[15px] text-[#404040]">
                  {item}
                </span>

              </li>

            ))}

          </ul>

          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#143D2D] px-6 py-3.5 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Discover Our Story

            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[#143D2D] transition-transform duration-300 group-hover:rotate-45">

              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>

            </span>

          </Link>

        </div>

      </div>
    </section>
  );
}