"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of business finance can Float help with?",
    answer:
      "Float currently focuses on business loans and asset finance. We learn what the funding needs to achieve, then consider relevant options from our lender panel.",
  },
  {
    question: "How quickly could funding be arranged?",
    answer:
      "Timescales depend on the product, lender, amount and complexity of the application. Having accurate financial information ready can help the process move more smoothly.",
  },
  {
    question: "Can a new or small business apply?",
    answer:
      "Potentially. Lenders use different criteria for trading history, turnover and affordability. We can review the circumstances and explain whether there may be a suitable route.",
  },
  {
    question: "Will an enquiry affect my credit score?",
    answer:
      "Making an initial enquiry with Float will not affect your credit score. A lender may carry out credit checks later, but these should be explained before they take place.",
  },
  {
    question: "What information will I need?",
    answer:
      "This varies by lender and product. You may be asked for recent bank statements, filed accounts, management figures, identification and details about how the funding will be used.",
  },
  {
    question: "How does Float get paid?",
    answer:
      "Float may receive commission from a lender when finance completes. The basis and amount of commission will be disclosed during your journey.",
  },
];

export function FaqCards() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="mt-7 grid grid-cols-1 gap-2">
      {faqs.map((faq) => (
        <article
          key={faq.question}
          className="faq-card border border-navy/20 bg-sky text-navy-deep"
        >
          <button
            type="button"
            className="flex w-full cursor-pointer items-start justify-between gap-5 p-4 text-left"
            aria-expanded={openQuestion === faq.question}
            aria-controls={`faq-${faqs.indexOf(faq)}`}
            onClick={() =>
              setOpenQuestion((current) =>
                current === faq.question ? null : faq.question,
              )
            }
          >
            <h3 className="display text-lg font-extrabold leading-tight">
              {faq.question}
            </h3>
            <span
              className={`grid size-7 shrink-0 place-items-center rounded-full border border-navy/25 text-navy transition-transform duration-300 ${
                openQuestion === faq.question ? "rotate-45" : ""
              }`}
            >
              <Plus size={14} aria-hidden />
            </span>
          </button>
          <div
            id={`faq-${faqs.indexOf(faq)}`}
            className={`faq-answer-shell ${
              openQuestion === faq.question ? "is-open" : ""
            }`}
          >
            <div>
              <p className="px-4 pb-4 text-sm leading-6 text-navy-deep/75">
                {faq.answer}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
