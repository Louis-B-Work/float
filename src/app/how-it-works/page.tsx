import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { processSteps } from "@/lib/process";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/how-it-works");

const steps = processSteps;

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
      "A clear yes or no on whether we can help",
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
          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-14">
            {steps.map((step, index) => (
              <div key={step.title} className="float-card p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <step.icon size={36} strokeWidth={1.5} className="text-coral" aria-hidden />
                  <span className="display text-5xl font-extrabold text-navy/15">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-6 text-xl font-extrabold text-navy md:mt-10">{step.title}</h2>
                <p className="mt-4 leading-7 text-ink/65">{step.copy}</p>
              </div>
            ))}
          </div>
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
