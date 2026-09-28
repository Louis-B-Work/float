"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export type Faq = {
  question: string;
  answer: string;
};

export const defaultFaqs: Faq[] = [
  {
    question: "What types of business finance can Float help with?",
    answer:
      "Cash flow finance, working capital and asset finance. We work out what the funding needs to achieve, then look at the relevant options from our lender panel.",
  },
  {
    question: "How quickly could funding be arranged?",
    answer:
      "It depends on the product, the lender, the amount and how complex the application is. Having accurate figures ready from the start makes a real difference.",
  },
  {
    question: "Can a new or small business apply?",
    answer:
      "Possibly. Lenders take very different views on trading history, turnover and affordability. Tell us the situation and we will say whether there is a realistic route.",
  },
  {
    question: "Will an enquiry affect my credit score?",
    answer:
      "No. Making an initial enquiry with Float will not affect your credit score. A lender may run credit checks later on, but you will know before that happens.",
  },
  {
    question: "What information will I need?",
    answer:
      "It varies by lender and product. Expect to be asked for recent bank statements, filed accounts, management figures, ID and details of what the funding is for.",
  },
  {
    question: "How does Float get paid?",
    answer:
      "We may receive commission from a lender when finance completes. We will tell you the basis and the amount during your journey, not after the fact.",
  },
];

export function FaqCards({ faqs = defaultFaqs }: { faqs?: Faq[] }) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="mt-7 grid grid-cols-1 gap-2">
      {faqs.map((faq, index) => (
        <article
          key={faq.question}
          className="faq-card border border-navy/20 bg-sky text-navy-deep"
        >
          <button
            type="button"
            className="flex w-full cursor-pointer items-start justify-between gap-5 p-4 text-left"
            aria-expanded={openQuestion === faq.question}
            aria-controls={`faq-${index}`}
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
            id={`faq-${index}`}
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
