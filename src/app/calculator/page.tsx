import { ArrowUpRight, Banknote, CalendarClock, Factory, Gauge, PoundSterling, ShieldCheck, Tag, Wallet } from "lucide-react";
import Link from "next/link";
import { Calculator } from "@/components/calculator";
import { FaqCards, type Faq } from "@/components/faq-cards";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, SectionHeading } from "@/components/ui";
import { calculatorJsonLd, faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/calculator");

const steps = [
  {
    title: "Turnover sets the starting point",
    copy: "Lenders size most business finance against what the business brings in, so annual turnover is where the estimate begins.",
  },
  {
    title: "Your track record adjusts it",
    copy: "Trading history and credit profile move the figure up or down, the same way they shape how a lender views an application.",
  },
  {
    title: "You get a range, not a promise",
    copy: "We show a band rather than a single number, because the final figure always comes down to a lender's own assessment.",
  },
];

const factors = [
  {
    icon: PoundSterling,
    title: "Annual turnover",
    copy: "Higher, steadier revenue generally supports a larger facility. Lenders will want to see it in your bank statements and accounts.",
  },
  {
    icon: CalendarClock,
    title: "Time trading",
    copy: "A longer track record gives lenders more to go on. Newer businesses can still borrow, though often smaller amounts to start with.",
  },
  {
    icon: Gauge,
    title: "Credit profile",
    copy: "Commitments paid on time widen the options. Recent difficulties narrow them, but do not always rule finance out.",
  },
  {
    icon: Tag,
    title: "What you are financing",
    copy: "Asset finance is secured against the asset itself, so it can often stretch further than an unsecured cash flow or working capital loan.",
  },
];

const products = [
  { icon: Banknote, title: "Cash flow finance", copy: "Cover the gap between paying for work and getting paid for it.", href: "/cash-flow-finance" },
  { icon: Wallet, title: "Working capital", copy: "Keep stock, staff and suppliers covered day to day.", href: "/working-capital" },
  { icon: Factory, title: "Asset finance", copy: "Spread the cost of vehicles, machinery and equipment.", href: "/asset-finance" },
];

const faqs: Faq[] = [
  {
    question: "Is the calculator result an offer of finance?",
    answer:
      "No. It is a broad, indicative range based on a few details and general assumptions. It is not an offer, quote or approval. Any offer comes from a lender after it has assessed your application.",
  },
  {
    question: "Will using the calculator affect my credit score?",
    answer:
      "No. The calculator runs in your browser, does not run a credit check and does not store what you enter. Making an enquiry with Float will not affect your credit score either.",
  },
  {
    question: "Why might a lender offer a different amount?",
    answer:
      "Lenders look at much more than turnover: profitability, existing borrowing, bank statement conduct, security and what the money is for. The amount offered, if any, may be higher or lower than the estimate.",
  },
  {
    question: "Can my business borrow more than the calculator shows?",
    answer:
      "Possibly. The calculator's range tops out at £500,000 for loans and £1,000,000 for asset finance. If you need more than that, start an enquiry and we will talk it through.",
  },
  {
    question: "What happens after I use the calculator?",
    answer:
      "Nothing, unless you want it to. If the range looks useful, select \"Discuss this estimate\" and we will pick it up from there. There is no obligation to go any further.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={[calculatorJsonLd(), faqPageJsonLd(faqs)]} />

      <section className="section-space grid-lines bg-mist">
        <div className="page-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="display balance text-5xl font-extrabold leading-[1] text-navy-deep md:text-7xl">What could your business raise?</h1>
            <p className="mt-6 text-lg leading-8 text-ink/65">A broad borrowing range from a few quick details. Takes about a minute and will not touch your credit score.</p>
          </div>
          <Calculator />
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="How the estimate works."
            copy="The calculator uses broad, market-style bands to give you a sense of scale before you speak to anyone. Here is what goes into it."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
            {steps.map((step, index) => (
              <li key={step.title} className="float-card p-7 md:p-8">
                <span className="display text-4xl font-extrabold text-navy/15" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-navy">{step.title}</h3>
                <p className="mt-4 leading-7 text-ink/65">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="What affects how much you could borrow."
              copy="These are the four things the calculator asks about, and broadly how lenders weigh them."
            />
            <p className="mt-8 flex items-start gap-3 border-l-4 border-coral bg-white p-5 text-sm leading-6 text-ink/70">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-coral" aria-hidden />
              Float is a broker, not a lender. We use the full picture to work out which lenders on our panel are worth approaching for a business like yours.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {factors.map((factor) => (
              <li key={factor.title} className="float-card p-7">
                <factor.icon size={30} strokeWidth={1.5} className="text-coral" aria-hidden />
                <h3 className="mt-5 text-lg font-extrabold text-navy">{factor.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{factor.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="Finance the calculator covers."
            copy="Estimate for a cash flow or working capital loan, or for asset finance. Find out how each one works before you enquire."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
            {products.map((product) => (
              <Link key={product.href} href={product.href} className="group border border-line p-7 transition hover:border-navy md:p-8">
                <product.icon size={32} strokeWidth={1.5} className="text-navy" aria-hidden />
                <h3 className="display mt-6 text-2xl font-extrabold text-navy-deep">{product.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{product.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-navy">
                  Explore {product.title.toLowerCase()}
                  <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="page-shell max-w-4xl">
          <SectionHeading title="Calculator questions." compact />
          <FaqCards faqs={faqs} />
        </div>
      </section>

      <CtaBand
        title="Got a figure in mind? Let's test it."
        copy="Tell us what the money is for and we will find out what lenders will actually do. No obligation, no effect on your credit score."
      />
    </>
  );
}
