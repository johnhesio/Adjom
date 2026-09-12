import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-amethyst/10 border-y border-amethyst/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span className="font-display font-medium text-[17px] text-amethyst">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full border border-amethyst/15 flex items-center justify-center text-amethyst transition-transform ${
                    isOpen ? "rotate-45 bg-orange border-orange text-white" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-64 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-slate text-[15px] leading-relaxed max-w-2xl">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
