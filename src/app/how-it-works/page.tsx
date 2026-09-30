import type { Metadata } from "next";
import { Banknote, FileSearch, Handshake, MessagesSquare } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Float works: a useful conversation, a focused lender search and a clear explanation of the options before you decide.",
};

const steps = [
  {
    icon: MessagesSquare,
    title: "Tell us the plan",
    copy: "What the funding is for, how trading has been and when you need it by. The more context we get, the sharper the search.",
  },
  {
    icon: FileSearch,
    title: "We do the legwork",
    copy: "We work out which lenders are genuinely worth approaching for a business like yours, and which are a waste of everyone's time.",
  },
  {
    icon: Handshake,
    title: "We lay out the options",
    copy: "Where there are workable routes, we explain how they differ in plain English, including the trade-offs and anything that deserves a second look.",
  },
  {
    icon: Banknote,
    title: "You decide",
    copy: "Your call, entirely. There is no obligation to proceed, and we would rather you walked away than took something that does not fit.",
  },
];

const expectations = [
  {
    title: "What we will need from you",
    points: [
      "A clear idea of what the funding is for",
      "How the business has been trading recently",
      "Recent bank statements or accounts, where relevant",
      "The timescale you are working to",
    ],
  },
  {
    title: "What you can expect from us",
    points: [
      "A straight answer on whether we can help",
      "Options explained without the jargon",
      "Full disclosure of how we are paid if finance completes",
      "Zero pressure to proceed with anything",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="One conversation, then a focused search."
        copy="Commercial finance gets complicated quickly. Our job is to cut a clear path through it, and to be honest with you when something is not going to work."
        image="/images/how-it-works-hero.jpg"
      />

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="Four steps. No mystery."
            copy="You should always know where your enquiry has got to and what happens next."
          />
          <MobileCardRail label="How Float works" className="mt-10 md:grid-cols-2 md:gap-5 lg:mt-14">
            {steps.map((step, index) => (
              <div key={step.title} className="float-card min-h-72 p-8 md:min-h-0 md:p-10">
                <div className="flex items-center justify-between">
                  <step.icon size={36} strokeWidth={1.5} className="text-coral" aria-hidden />
                  <span className="display text-5xl font-extrabold text-navy/15">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-10 text-xl font-extrabold text-navy">{step.title}</h2>
                <p className="mt-4 leading-7 text-ink/65">{step.copy}</p>
              </div>
            ))}
          </MobileCardRail>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="page-shell">
          <SectionHeading title="Clear expectations, both ways." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
            {expectations.map((block) => (
              <div key={block.title} className="border border-line bg-white p-8 md:p-10">
                <h2 className="display text-2xl font-extrabold text-navy-deep md:text-3xl">{block.title}</h2>
                <ul className="mt-6 space-y-4">
                  {block.points.map((point) => (
                    <li key={point} className="border-b border-line pb-4 text-sm font-semibold leading-6 text-navy last:border-0 last:pb-0">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-12">
        <p className="border-l-4 border-coral bg-white p-6 text-sm leading-7 text-ink/65">
          Making an enquiry with Float will not affect your credit score. A lender may carry out credit checks later in the process, and this should be explained to you before it happens. All finance is subject to status, lender criteria and affordability.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
