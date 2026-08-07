import Image from "next/image";
import Reveal from "../components/Reveal";
import BookingForm from "../components/BookingForm";
import Faq from "../components/Faq";
import { contactDetails } from "../lib/Data";


export const metadata = {
  title: "Plan Your Kashmir Trip | Request an Itinerary | The Shorewood",
  description:
    "Tell us your travel plans and our experts will create a personalized Kashmir itinerary with luxury stays, sightseeing, transport, and unforgettable experiences.",
  keywords: [
    "Book Kashmir Tour",
    "Custom Kashmir Itinerary",
    "Luxury Kashmir Trip",
    "Travel Planner Kashmir",
    "Private Tour Booking",
    "Kashmir Vacation Planner",
    "Kashmir Travel Agency"
  ],
};

const REASSURANCE = [
  {
    title: "100% Personalized",
    text: "Every itinerary is crafted around your travel preferences."
  },
  {
    title: "Local Experts",
    text: "Designed by Kashmir specialists with local knowledge."
  },
  {
    title: "Premium Support",
    text: "We're available before, during and after your journey."
  },
  {
    title: "No Booking Commitment",
    text: "Receive your itinerary before making any payment."
  },
];
export default function BookATripPage() {
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
              Tell us how you travel &amp; we&rsquo;ll build the rest around
              you.
            </h1>
          </Reveal>
        </section>

        {/* ── booking form ──────────────────────────── */}
        <section className="relative flex w-full flex-col items-center px-5 py-[60px] sm:px-10 lg:py-[80px]">
          <div className="flex w-full max-w-[1200px] flex-col items-start gap-12 lg:flex-row lg:gap-16">
            {/* left rail */}
            <Reveal
              y={20}
              className="flex w-full flex-col items-start gap-8 lg:sticky lg:top-28 lg:flex-1"
            >
              <div className="flex flex-col items-start gap-3">
                <h2 className="max-w-[520px] text-[24px] font-medium leading-[1.2] tracking-[-0.04em] text-[#191919] sm:text-[30px] lg:text-[34px]">
                  Your journey starts with a conversation.
                </h2>
                <p className="max-w-[480px] text-[15px] leading-[1.6] text-[#545454] sm:text-[16px]">
                  Every traveller is different. Share your travel plans and we'll create a personalised Kashmir itinerary based on your dates, interests, travel style and budget.
                </p>
              </div>

              <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/6.jpg"
                  alt="Turquoise shoreline from above"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </figure>

              {/* reassurance */}
              <ul className="grid w-full gap-4 sm:grid-cols-2">
                {REASSURANCE.map((r) => (
                  <li key={r.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#033D4A] text-white">
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
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-medium text-[#191919]">
                        {r.title}
                      </span>
                      <span className="text-[13px] leading-[1.5] text-[#545454]">
                        {r.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* prefer to talk */}
              <div className="flex w-full flex-col items-start gap-2 rounded-[16px] border border-black/5 bg-white/50 p-4">
                <p className="text-[14px] font-medium text-[#191919]">
                  Prefer to talk it through?
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                    className="text-[#033D4A] underline underline-offset-4"
                  >
                    {contactDetails.phone}
                  </a>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-[#033D4A] underline underline-offset-4"
                  >
                    {contactDetails.email}
                  </a>
                </div>
                <p className="text-[13px] text-[#7D7D7D]">
                  {contactDetails.hours}
                </p>
              </div>
            </Reveal>

            {/* form */}
            <Reveal y={36} delay={120} className="w-full lg:flex-1">
              <BookingForm />
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
