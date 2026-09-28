import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/ui";
import { FaqCards, type Faq } from "@/components/faq-cards";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about commercial finance, the Float process, eligibility, documents and how Float is paid.",
};

const groups: { heading: string; faqs: Faq[] }[] = [
  {
    heading: "About Float",
    faqs: [
      {
        question: "What types of business finance can Float help with?",
        answer:
          "Float focuses on cash flow finance, working capital and asset finance. We learn what the funding needs to achieve, then consider relevant options from our lender panel.",
      },
      {
        question: "Is Float a lender?",
        answer:
          "No. Float is a commercial finance broker. We introduce businesses to a panel of lenders for non-regulated commercial finance. The finance itself comes from the lender, on their terms.",
      },
      {
        question: "How does Float get paid?",
        answer:
          "Float may receive commission from a lender when finance completes. We will tell you the basis and the amount during your journey, before you decide whether to go ahead.",
      },
      {
        question: "Is there any obligation to proceed?",
        answer:
          "None. Talk to us, see what is available and walk away if it is not right. We would far rather you passed than took something that does not suit the business.",
      },
    ],
  },
  {
    heading: "Eligibility and applying",
    faqs: [
      {
        question: "Can a new or small business apply?",
        answer:
          "Potentially. Lenders use different criteria for trading history, turnover and affordability. We can review the circumstances and explain whether there may be a suitable route.",
      },
      {
        question: "Will an enquiry affect my credit score?",
        answer:
          "Making an initial enquiry with Float will not affect your credit score. A lender may carry out credit checks later in the process, but these should be explained before they take place.",
      },
      {
        question: "What information will I need?",
        answer:
          "This varies by lender and product. You may be asked for recent bank statements, filed accounts, management figures, identification and details about how the funding will be used.",
      },
      {
        question: "Will I need to provide security or a guarantee?",
        answer:
          "Some lenders request security or a personal guarantee, and some do not. Where this applies, it will be set out clearly so you understand what is being asked before you commit.",
      },
    ],
  },
  {
    heading: "Timescales and decisions",
    faqs: [
      {
        question: "How quickly could funding be arranged?",
        answer:
          "Timescales depend on the product, lender, amount and complexity of the application. Having accurate financial information ready tends to help the process move more smoothly.",
      },
      {
        question: "What happens if an application is declined?",
        answer:
          "A decline from one lender does not necessarily end the matter. Where it is reasonable to do so, we can look at whether another lender or a different structure may be more appropriate.",
      },
      {
        question: "Can Float guarantee I will be approved?",
        answer:
          "No, and be wary of anyone who says otherwise. Every application is subject to the lender's own assessment, criteria and documentation. What we will do is tell you honestly how likely something looks.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="The questions business owners actually ask."
        copy="Straight answers on how commercial finance works, what lenders look for and where Float fits in. Select a question to reveal the answer."
        image="/images/business-planning.jpg"
      />

      <section className="section-space">
        <div className="page-shell max-w-4xl space-y-14">
          {groups.map((group) => (
            <div key={group.heading}>
              <h2 className="display text-3xl font-extrabold text-navy-deep md:text-4xl">{group.heading}</h2>
              <FaqCards faqs={group.faqs} />
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-12">
        <p className="border-l-4 border-coral bg-mist p-6 text-sm leading-7 text-ink/65">
          These answers are general information rather than advice, and they are not an offer or guarantee of finance. If your situation is not covered here, get in touch and we will give you a straight answer.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
