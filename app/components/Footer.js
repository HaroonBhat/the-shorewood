import Image from "next/image";
import Link from "next/link";

import { contactDetails } from "../lib/Data";

/**
 * Footer — mirrors the Traavellio footer structure.
 *
 *   footer            column, gap 40px, padding-bottom 40px
 *     ├ conversion    padding 200px 0 80px, full-bleed photo overlay
 *     │   ├ marquee   86px strip pinned to top:0
 *     │   └ container gap 40px, max-width 1200px
 *     │       ├ titles  gap 24px, max-width 520px, centred
 *     │       └ button  "Book a trip" pill
 *     └ container     column, gap 56px, padding 0 40px
 *         ├ top       row, gap 72px (column + 64px on mobile)
 *         │   ├ links   row, gap 40px — 3 columns, each gap 16px
 *         │   │           nav items gap 8px; each link has a 1px "Line"
 *         │   │           that grows to 25px on hover
 *         │   └ social  row, gap 16px
 *         └ bottom    1px rule + row, padding 20px 0, space-between
 */

const COLUMNS = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Tours", href: "/tours" },
      { label: "Book a Trip", href: "/BookATrip" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
      { label: "Terms & Conditions", href: "/policies/terms-conditions" },
    ],
  },
  {
    title: "Other Pages",
    links: [{ label: "404", href: "/404" }],
  },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    d: "M14 8h2V5h-2a3.5 3.5 0 00-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V8.8c0-.5.4-.8 1-.8z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/theshorewood/",
    d: "M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm12.5-.5h.01",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    d: "M6 9v10M6 5.5v.01M11 19v-5.5a2.5 2.5 0 015 0V19M11 9v10",
  },
  {
    name: "X",
    href: "https://x.com",
    d: "M4 4l7.5 9.5L4.5 20h2l6-6.2L17 20h3l-7.8-9.9L19.5 4h-2l-5.6 5.8L7.5 4H4z",
  },
];
const CONTACT = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    d: "M4 6h16v12H4zM4 7l8 6 8-6",
  },
  {
    label: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, "")}`,
    d: "M6.5 3h3l1.5 4-2 1.5a12 12 0 005.5 5.5L16 12l4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.2 2 2 0 016.5 3z",
  },
  {
    label: "Address",
    value: contactDetails.address,
    href: null,
    d: "M12 21s-7-5.2-7-10a7 7 0 1114 0c0 4.8-7 10-7 10zM12 13.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z",
  },
];

const MARQUEE = [
  "Where Nature Finds Luxury",
  "Bespoke Travel Experiences",
  "Authentic Kashmiri Hospitality",
  "Exclusive Scenic Escapes",
  "Luxury Meets Adventure",
  "Crafted With Local Expertise",
];

/** footer link with the 1px → 25px underline that grows on hover */
function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group/link flex w-max items-center gap-0 text-[15px] text-white/70 transition-colors duration-300 hover:text-white"
    >
      <span className="h-px w-px overflow-hidden bg-white transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover/link:mr-2 group-hover/link:w-[25px]" />
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center gap-10 overflow-hidden bg-[#012830] pb-10">
      {/* ── conversion band ───────────────────────────── */}
      <section className="relative flex w-full flex-col items-center overflow-hidden px-0 pb-20 pt-[140px] lg:pt-[200px]">
        {/* background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/footer.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover brightness-[.45]"
          />
        </div>

        {/* marquee strip, 86px tall, pinned to the top */}
        <div className="absolute left-0 top-0 z-[1] flex h-[86px] w-full items-center overflow-hidden border-b border-white/10 bg-black/25 backdrop-blur-sm">
          <div className="flex w-max animate-marquee items-center gap-0 whitespace-nowrap will-change-transform">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {MARQUEE.map((item) => (
                  <span
                    key={`${dup}-${item}`}
                    className="flex items-center text-[15px] text-white/75 sm:text-[17px]"
                  >
                    {item}
                    <span className="mx-6 inline-block h-1 w-1 rounded-full bg-white/40" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA content */}
        <div className="relative z-[1] flex w-full max-w-[1200px] flex-col items-center gap-10 px-5 sm:px-10">
          <div className="flex w-full max-w-[520px] flex-col items-center gap-6 text-center">
            <h3 className="max-w-[800px] text-[28px] font-medium leading-[1.15] tracking-[-0.04em] text-white sm:text-[38px] lg:text-[44px]">
              Turn your travel dreams into reality
            </h3>
            <p className="text-[15px] leading-[1.5] text-white/70 sm:text-[16px]">
              From the first idea to the final detail, we design journeys
              you&rsquo;ll remember forever.
            </p>
          </div>

          <Link
            href="/BookATrip"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-medium text-[#033D4A] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a trip
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#033D4A] text-white transition-transform duration-300 group-hover:rotate-45">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* ── link container ────────────────────────────── */}
      <div className="relative z-[1] flex w-full flex-col items-center gap-14 px-5 sm:px-10">
        {/* top content */}
        <div className="flex w-full max-w-[1200px] flex-col items-start gap-16 lg:flex-row lg:gap-[72px]">
          {/* link columns */}
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:gap-10 lg:flex-1">
            {COLUMNS.map((col) => (
              <div
                key={col.title}
                className="flex w-full flex-col items-start gap-4 lg:flex-1"
              >
                <p className="text-[13px] text-[#7D7D7D]">{col.title}</p>
                <nav className="flex w-full flex-col items-start gap-2">
                  {col.links.map((l) => (
                    <FooterLink key={l.label} href={l.href} label={l.label} />
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* get in touch */}
          <div className="flex w-full flex-col items-start gap-4 lg:w-[300px] lg:shrink-0">
            <p className="text-[13px] text-[#7D7D7D]">Get in touch</p>
            <ul className="flex w-full flex-col items-start gap-3">
              {CONTACT.map((c) => {
                const body = (
                  <>
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 group-hover/c:border-white group-hover/c:bg-white group-hover/c:text-[#033D4A]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-[15px] w-[15px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={c.d} />
                      </svg>
                    </span>
                    <span className="flex flex-col items-start gap-0.5">
                      <span className="text-[12px] text-[#7D7D7D]">
                        {c.label}
                      </span>
                      <span className="text-[14px] leading-[1.45] text-white/75 transition-colors duration-300 group-hover/c:text-white">
                        {c.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={c.label} className="w-full">
                    {c.href ? (
                      <a
                        href={c.href}
                        className="group/c flex w-full items-start gap-3"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="group/c flex w-full items-start gap-3">
                        {body}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>


          {/* social */}
          <div className="flex flex-col items-start gap-4">
            <p className="text-[13px] text-[#7D7D7D]">Social</p>
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:bg-white hover:text-[#033D4A]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="relative w-full max-w-[1200px]">
          <div className="absolute left-0 top-0 h-px w-full bg-white/20" />
          <div className="flex flex-col items-start justify-between gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-[14px] text-[#7D7D7D]">
              All rights reserved for @Shorewood
            </p>
            <p className="text-[14px] text-[#7D7D7D]">
              Crafted for travellers who take their time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
