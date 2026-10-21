import { ArrowUpRight, Banknote, Building2, CalendarClock, CreditCard, Gauge, ShieldCheck, Tag, Wallet } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { FaqCards, type Faq } from "@/components/faq-cards";
import { FinanceCalculators, FinanceCalculatorsFromQuery } from "@/components/finance-calculators";
import { JsonLd } from "@/components/json-ld";
import { CtaBand, SectionHeading } from "@/components/ui";
import { calculatorJsonLd, faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/calculator");

const factors = [
  {
    icon: CalendarClock,
    title: "Trading history",
    copy: "How long the business has traded, and how steady turnover and profit have been, shape how comfortable a lender feels.",
  },
  {
    icon: Gauge,
    title: "Credit and bank conduct",
    copy: "Commitments paid on time and a well-run bank account widen the options. Recent difficulties narrow them, but do not always rule finance out.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    copy: "Property or other business assets can let a lender go further, on amount, term or rate, than it would unsecured.",
  },
  {
    icon: Tag,
    title: "Purpose and sector",
    copy: "What the money is for and the sector you trade in both matter. Two lenders can land a long way apart on the same business.",
  },
];

const products = [
  { icon: Banknote, title: "Business loans", copy: "Unsecured and secured loans for growth, stock or a gap in cash flow. The loan calculator charges interest on the balance still owed, with each monthly payment covering interest and paying down the loan.", href: "/business-loans" },
  { icon: CreditCard, title: "Merchant cash advance", copy: "Funding repaid as a share of card takings, with a fixed total cost set by a factor rate. An advance of £30,000 at 1.25 means £37,500 repaid in total; the time it takes moves with your trade.", href: "/business-loans/merchant-cash-advance" },
  { icon: Wallet, title: "Working capital loans", copy: "Loans to keep stock, staff and suppliers covered day to day. Use the business loan calculator to see repayments over your chosen term, with interest charged on the reducing balance.", href: "/working-capital/loans" },
];

const faqs: Faq[] = [
  {
    question: "Is the calculator result an offer of finance?",
    answer:
      "No. The figures are illustrations based on the amounts and rates you choose. They are not a quote, an offer or an approval. Any offer comes from a lender after it has assessed the business.",
  },
  {
    question: "Will using the calculator affect my credit score?",
    answer:
      "No. The calculator runs in your browser, does not run a credit check and does not store what you enter. Making an enquiry with Float will not affect your credit score either.",
  },
  {
    question: "Why might the rate I am offered be different?",
    answer:
      "Lenders look at the whole picture, not just turnover: trading history, bank conduct, what the money is for, any security and the sector. Two lenders can land a long way apart on the same business, so the rate you are offered could sit outside these presets.",
  },
  {
    question: "What is the difference between an interest rate and a factor rate?",
    answer:
      "A loan charges interest on the balance still owed, so the cost depends on the rate and how long you borrow for. A merchant cash advance uses a factor rate instead: the total to repay is fixed when you take it, and only the time it takes to repay moves with your card takings.",
  },
  {
    question: "What happens after I use the calculator?",
    answer:
      "Nothing, unless you want it to. Select \"Start an enquiry\" and the figures you chose will be carried across to the enquiry form. There is no obligation to go any further.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={[calculatorJsonLd(), faqPageJsonLd(faqs)]} />

      <section className="section-space grid-lines bg-mist">
        <div className="page-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="display balance text-5xl font-extrabold leading-[1] text-navy-deep md:text-7xl">What would the finance cost?</h1>
            <p className="mt-6 text-lg leading-8 text-ink/65">
              See the monthly cost of a business loan, or the total cost of a merchant cash advance. Illustrative figures, and no credit check.
            </p>
          </div>
          <Suspense fallback={<FinanceCalculators />}>
            <FinanceCalculatorsFromQuery />
          </Suspense>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="How the calculators work."
            copy="Explore the finance they cover and how each cost is calculated. Loans use a reducing balance; a merchant cash advance has a fixed total cost."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
            {products.map((product) => (
              <Link key={product.href} href={product.href} className="group flex h-full flex-col border border-line p-7 transition-colors hover:border-navy hover:bg-sky focus-visible:border-navy focus-visible:bg-sky md:p-8">
                <product.icon size={32} strokeWidth={1.5} className="shrink-0 text-navy" aria-hidden />
                <h3 className="display mt-6 text-2xl font-extrabold text-navy-deep">{product.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{product.copy}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-navy">
                  Explore {product.title.toLowerCase()}
                  <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 border-l-4 border-coral bg-mist p-5 text-sm leading-6 text-ink/70">
            <strong className="text-navy">Illustrations, not quotes.</strong> Rates, factor rates and fees are set by each lender once it has looked at the business. Use the figures for a sense of scale before you speak to anyone.
          </p>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              title="What shapes the rate a lender offers."
              copy="Lenders look at the whole picture, not just turnover, so the rate or amount you are offered could sit outside what the calculator shows."
            />
            <p className="mt-8 flex items-start gap-3 border-l-4 border-coral bg-white p-5 text-sm leading-6 text-ink/70">
              <Building2 size={20} className="mt-0.5 shrink-0 text-coral" aria-hidden />
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
