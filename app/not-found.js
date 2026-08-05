import Image from "next/image";
import Link from "next/link";
import NotFoundRedirect from "./components/NotFoundRedirect";

/**
 * 404 — mirrors the Traavellio /404 layout.
 *
 *   section   height 100vh, padding 200px 0 100px, gap 90px, overflow hidden
 *     ├ photo   full-bleed background, darkened
 *     └ content column, gap 64px, max-width 1200px
 *         └ text  column, gap 24px, centred
 *             ├ eyebrow  "Oops …"        (max-width 600px)
 *             ├ numeral  big 404 mark    (aspect 3.17568, 731px wide)
 *             ├ body     two lines       (max-width 610px)
 *             └ button   "Back to Home"
 *
 * Next.js renders this automatically for unmatched routes, and it
 * responds with a real HTTP 404 status.
 */

export const metadata = {
  title: "404 — Page not found | Shorewood",
  description:
    "That page doesn't exist or may have been moved — parts of Shorewood are still in development. Head back home, or email support@theshorewood.com.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <>

      <main>
        <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 pb-[100px] pt-[160px] sm:px-10 lg:pt-[200px]">
          {/* background photo */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=2000&q=80&auto=format&fit=crop"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#012830]/80" />
          </div>

          {/* content */}
          <div className="relative z-[1] flex w-full max-w-[1200px] flex-col items-center gap-12 lg:gap-16">
            <div className="flex w-full flex-col items-center gap-6 text-center">
              {/* development notice */}
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-[12px] uppercase tracking-[0.14em] text-amber-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
                </span>
                Site under development
              </p>

              {/* eyebrow */}
              <p className="max-w-[600px] text-[15px] uppercase tracking-[0.16em] text-white/60">
                Oops &hellip;
              </p>

              {/* the 404 numeral */}
              <p
                className="select-none text-[96px] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-[150px] lg:text-[190px]"
                style={{ textShadow: "0 6px 40px rgba(0,0,0,0.45)" }}
                aria-hidden="true"
              >
                404
              </p>
              <h1 className="sr-only">Page not found</h1>

              {/* body copy */}
              <p className="max-w-[610px] text-[16px] leading-[1.6] text-white/75 sm:text-[18px]">
                You&rsquo;ve reached a page that doesn&rsquo;t exist &mdash; or
                may have been moved. We&rsquo;re still building parts of
                Shorewood, so some pages aren&rsquo;t live yet.
                <br />
                Let&rsquo;s get you back home.
              </p>

              {/* primary action */}
              <Link
                href="/"
                className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-medium text-[#033D4A] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Back to Home
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
            </div>

            {/* countdown redirect */}
            <NotFoundRedirect seconds={20} href="/" />

            {/* quick links so the page is a useful dead-end, not a trap */}
            <div className="flex w-full flex-col items-center gap-4">
              <p className="text-[13px] text-white/40">Or jump straight to</p>
              <nav className="flex flex-wrap items-center justify-center gap-2">
                {QUICK_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-white/20 px-4 py-2 text-[14px] text-white/75 transition-colors duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* support contact */}
            <div className="flex w-full max-w-[560px] flex-col items-center gap-3 rounded-[20px] border border-white/12 bg-white/[0.04] px-6 py-6 text-center backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </span>

              <p className="text-[15px] leading-[1.6] text-white/70">
                Found something broken, or looking for a page that used to be
                here? We&rsquo;d genuinely like to know.
              </p>

              <a
                href="mailto:support@theshorewood.com?subject=Shorewood%20—%20404%20page%20report"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                info@theshorewood.com
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <p className="text-[12px] text-white/35">
                We usually reply within one working day.
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
