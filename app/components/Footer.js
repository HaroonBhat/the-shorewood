import Link from "next/link";

const COLUMNS = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Tours", href: "/tours" },
      { label: "Destinations", href: "/destinations" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Book a trip", href: "/book-a-trip" },
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
      { label: "Terms & Conditions", href: "/policies/terms-conditions" },
    ],
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm12.5-.5h.01",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M14 8h2V5h-2a3.5 3.5 0 00-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V8.8c0-.5.4-.8 1-.8z",
  },
  {
    name: "X",
    href: "https://x.com",
    path: "M4 4l7.5 9.5L4.5 20h2l6-6.2L17 20h3l-7.8-9.9L19.5 4h-2l-5.6 5.8L7.5 4H4z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6 9v10M6 5.5v.01M11 19v-5.5a2.5 2.5 0 015 0V19M11 9v10",
  },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-[100vw] overflow-hidden  bg-[#012830] px-6 pt-14  sm:px-10 lg:px-14">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#033D4A]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 16c2.2 0 2.2 1.5 4.4 1.5S8.6 16 10.8 16s2.2 1.5 4.4 1.5S17.4 16 19.6 16H22" />
                  <path d="M4 12l8-8 8 8" />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Shorewood
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              Curated coastal journeys designed to be felt, not rushed. Small
              groups, local guides, slow mornings.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] uppercase tracking-wider text-white/45">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[15px] text-white/75 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="text-[13px] uppercase tracking-wider text-white/45">
              Newsletter
            </p>
            <p className="mt-5 text-[15px] text-white/60">
              One thoughtful email a month. No spam, ever.
            </p>
            <form className="mt-4 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5">
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-3 text-[15px] text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#033D4A] transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>

            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white hover:text-[#033D4A]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/12 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-white/50">
            © {new Date().getFullYear()} Shorewood. All rights reserved.
          </p>
          <p className="text-[14px] text-white/50">
            Crafted for travellers who take their time.
          </p>
        </div>
      </div>
    </footer>
  );
}
