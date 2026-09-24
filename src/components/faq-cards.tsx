import { Plus } from "lucide-react";
import { MobileCardRail } from "@/components/mobile-card-rail";

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

const colours = ["bg-sky", "bg-aqua", "bg-coral"];

export function FaqCards() {
  return (
    <MobileCardRail className="mt-10 md:grid-cols-2 md:gap-4 lg:mt-14 lg:grid-cols-3">
      {faqs.map((faq, index) => (
        <article
          key={faq.question}
          tabIndex={0}
          className={`faq-card group min-h-72 border border-navy/20 p-7 text-navy-deep ${colours[index % colours.length]}`}
        >
          <div className="flex items-start justify-between gap-5">
            <h3 className="display text-xl font-extrabold leading-tight">
              {faq.question}
            </h3>
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-navy/25 text-navy transition-transform group-hover:rotate-45 group-focus-visible:rotate-45">
              <Plus size={16} aria-hidden />
            </span>
          </div>
          <p className="faq-answer mt-7 text-sm leading-7 text-navy-deep/75">
            {faq.answer}
          </p>
        </article>
      ))}
    </MobileCardRail>
  );
}
