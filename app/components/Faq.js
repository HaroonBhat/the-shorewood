"use client";

import { useState } from "react";
import { faqs } from "../lib/Data";

/**
 * FAQ accordion.
 *
 * Uses buttons + aria-expanded rather than <details>, so the open/close
 * height can be animated. Only one panel is open at a time.
 */

const EASE = "cubic-bezier(.16,1,.3,1)";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex w-full max-w-[820px] flex-col">
      {faqs.map((item, i) => {
        const on = i === open;
        return (
          <div key={item.q} className="border-b border-black/10 first:border-t">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(on ? -1 : i)}
                aria-expanded={on}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left outline-none transition-colors duration-300 focus-visible:text-[#033D4A]"
              >
                <span
                  className="text-[16px] font-medium leading-[1.4] tracking-[-0.02em] transition-colors duration-300 sm:text-[18px]"
                  style={{ color: on ? "#033D4A" : "#191919" }}
                >
                  {item.q}
                </span>

                {/* plus → minus */}
                <span
                  className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500"
                  style={{
                    borderColor: on ? "transparent" : "rgba(0,0,0,.12)",
                    backgroundColor: on ? "#033D4A" : "transparent",
                    color: on ? "#fff" : "#191919",
                    transitionTimingFunction: EASE,
                  }}
                >
                  <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current" />
                  <span
                    className="absolute h-[1.5px] w-3.5 rounded-full bg-current transition-transform duration-500"
                    style={{
                      transform: on ? "rotate(0deg)" : "rotate(90deg)",
                      transitionTimingFunction: EASE,
                    }}
                  />
                </span>
              </button>
            </h3>

            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className="grid transition-all duration-500"
              style={{
                gridTemplateRows: on ? "1fr" : "0fr",
                opacity: on ? 1 : 0,
                transitionTimingFunction: EASE,
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[680px] pb-6 pr-12 text-[15px] leading-[1.65] text-[#545454]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
