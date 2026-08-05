import Image from "next/image";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import { contactDetails } from "../lib/Data";


export const metadata = {
  title: "Contact — The Shorewood",
  description:
    "Tell us where you'd like to go and we'll plan the rest. Reach the Shorewood team by form, email or phone.",
};

const DETAILS = [
  {
    label: "Phone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, "")}`,
    icon: (
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005.5 5.5L16 12l4 1.5v3a2 2 0 01-2.2 2A16.5 16.5 0 014.5 5.2 2 2 0 016.5 3z" />
    ),
  },
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4 7l8 6 8-6" />
      </>
    ),
  },
  {
    label: "Studio",
    value: contactDetails.address,
    href: null,
    icon: (
      <>
        <path d="M12 21s-7-5.2-7-10a7 7 0 1114 0c0 4.8-7 10-7 10z" />
        <circle cx="12" cy="11" r="2.4" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>

      <main>
        {/* ── hero ──────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-8 pt-[140px] sm:px-10 lg:pt-[180px]">
          <Reveal
            y={20}
            className="flex w-full max-w-[1200px] flex-col items-start gap-2"
          >
            <p className="text-[12px] uppercase tracking-[0.42em] text-[#7D7D7D]">
              Start your journey
            </p>
            <h1 className="max-w-[760px] text-[30px] font-medium leading-[1.15] tracking-[-0.04em] text-[#191919] sm:text-[40px] lg:text-[52px]">
              Tell us your destination &amp; we&rsquo;ll plan the rest.
            </h1>
          </Reveal>
        </section>

        {/* ── form ──────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-visible px-5 py-[60px] sm:px-10 lg:py-[80px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            {/* left */}
            <Reveal
              y={20}
              className="flex w-full flex-col items-start gap-8 lg:flex-1"
            >
              <div className="flex flex-col items-start gap-3">
                <h2 className="max-w-[520px] text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[30px] lg:text-[34px]">
                  Plan your next journey with us
                </h2>
                <p className="max-w-[480px] text-[15px] leading-[1.6] text-[#545454] sm:text-[16px]">
                  Share your travel details and our trip designers will shape an
                  itinerary around the way you actually like to travel.
                </p>
              </div>

              <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/contact.jpg"
                  alt="Coastal village at dusk"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </figure>

              {/* contact links card */}
              <div className="flex w-full max-w-[730px] flex-col items-start gap-3">
                <p className="text-[15px] font-medium text-[#191919]">
                  Reach out to us.
                </p>

                <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {DETAILS.map((d) => {
                    const inner = (
                      <>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#033D4A]/10 text-[#033D4A]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-[16px] w-[16px]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            {d.icon}
                          </svg>
                        </span>
                        <span className="flex flex-col items-start">
                          <span className="text-[12px] text-[#7D7D7D]">
                            {d.label}
                          </span>
                          <span className="text-[14px] text-[#191919]">
                            {d.value}
                          </span>
                        </span>
                      </>
                    );

                    return d.href ? (
                      <a
                        key={d.label}
                        href={d.href}
                        className="flex items-center gap-3 rounded-[14px] border border-black/5 bg-white/50 px-4 py-3 transition-colors duration-300 hover:border-black/15 hover:bg-white/80"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div
                        key={d.label}
                        className="flex items-center gap-3 rounded-[14px] border border-black/5 bg-white/50 px-4 py-3"
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>

                <p className="text-[13px] text-[#7D7D7D]">
                  {contactDetails.hours}
                </p>
              </div>
            </Reveal>

            {/* right */}
            <Reveal y={36} delay={120} className="w-full lg:flex-1">
              <ContactForm />
            </Reveal>
          </div>
        </section>

        {/* ── faq ───────────────────────────────────── */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-5 py-[72px] sm:px-10 lg:py-[100px]">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-14">
            <Reveal y={20} className="flex flex-col items-center gap-3">
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
                    <path d="M9.5 9.5a2.6 2.6 0 015 .9c0 1.7-2.5 2.1-2.5 3.6M12 17h.01" />
                  </svg>
                </span>
                <p className="text-[13px] text-[#545454]">FAQ</p>
              </div>
              <h2 className="max-w-[620px] text-center text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                Everything you need to know before you travel
              </h2>
            </Reveal>

            <Reveal y={20} delay={100} className="flex w-full justify-center">
              <Faq />
            </Reveal>
          </div>
        </section>
      </main>

    </>
  );
}
