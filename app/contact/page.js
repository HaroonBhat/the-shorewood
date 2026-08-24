import Image from "next/image";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import { contactDetails } from "../lib/Data";


export const metadata = {
  title: "Contact The Shorewood | Plan Your Kashmir Journey",
  description:
    "Contact The Shorewood for customized Kashmir itineraries, luxury travel planning, hotel bookings, sightseeing, and premium travel experiences.",
  keywords: [
    "Contact Shorewood",
    "Travel Agency Srinagar",
    "Kashmir Travel Contact",
    "Luxury Travel Planner",
    "Book Kashmir Tour",
    "Travel Consultation Kashmir"
  ],
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

         <Reveal y={20} delay={60} className="flex w-full justify-center">
              {/* ── location ───────────────────────────────── */}
              <section className="relative flex w-full flex-col items-center overflow-hidden px-5 pb-[72px] sm:px-10 lg:pb-[100px]">
                <div className="flex w-full max-w-[1200px] flex-col gap-6">

                  <Reveal y={20} className="flex flex-col items-start gap-3">
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
                          <path d="M12 21s-7-5.2-7-10a7 7 0 1114 0c0 4.8-7 10-7 10z" />
                          <circle cx="12" cy="11" r="2.4" />
                        </svg>
                      </span>

                      <p className="text-[13px] text-[#545454]">
                        Find us
                      </p>
                    </div>

                    <h2 className="max-w-[620px] text-[26px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[32px] lg:text-[36px]">
                      Come and meet us
                    </h2>

                    <p className="max-w-[560px] text-[15px] leading-[1.7] text-[#545454] sm:text-[16px]">
                      Our team is based in Kashmir and ready to help you plan your journey.
                    </p>
                  </Reveal>

                  <Reveal y={30} delay={100} className="w-full">
                    <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] border border-black/5 bg-[#eee] sm:h-[380px]">

                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.3507910398597!2d74.79305989955978!3d34.00115209163119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6410b209cc5ff6fd%3A0xd46d03514165df71!2sThe%20Shorewood!5e0!3m2!1sen!2sin!4v1787574745915!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="The Shorewood location on Google Maps"
                      />

                    </div>
                  </Reveal>

                  <Reveal y={20} delay={150}>
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] font-medium text-[#191919]">
                        The Shorewood
                      </p>

                      <p className="text-[14px] text-[#7D7D7D]">
                        {contactDetails.address}
                      </p>
                    </div>
                  </Reveal>

                </div>
              </section>
            </Reveal>

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
