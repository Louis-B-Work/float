import { ArrowUpRight, Banknote, Check, Factory, Wallet } from "lucide-react";
import Link from "next/link";
import { ButtonLink, CtaBand, SectionHeading } from "@/components/ui";
import { FaqCards } from "@/components/faq-cards";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { IndustryGrid } from "@/components/industry-grid";
import { processSteps } from "@/lib/process";
import { pageMetadata } from "@/lib/seo";
import { navigation } from "@/lib/site";

export const metadata = pageMetadata("/");

type NavItem = (typeof navigation)[number];
const productCategories = navigation.filter(
  (item): item is Extract<NavItem, { children: unknown }> => "children" in item,
);

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-mist">
        <div className="page-shell grid min-h-[720px] grid-cols-[minmax(0,1fr)] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:py-20">
          <div className="relative z-10 min-w-0">
            <h1 className="display balance text-6xl font-extrabold leading-[1.02] text-navy-deep md:text-8xl">
              Business finance without the <span className="text-coral">runaround.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
              Business loans, working capital and asset finance for UK businesses. One conversation, a focused search, and a straight answer either way.
            </p>
            <div className="mt-9 grid gap-3 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap">
              <ButtonLink href="/apply">Start an enquiry</ButtonLink>
              <ButtonLink href="/calculator" secondary>Try calculator</ButtonLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
              <Check size={17} className="shrink-0 text-aqua" aria-hidden />
              <span>Enquiring will not affect your credit score</span>
            </p>
          </div>
          <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[590px]">
            <div className="absolute inset-8 right-0 overflow-hidden">
              <ImagePlaceholder slot="/images/home-hero.jpg" />
            </div>
            <div className="absolute left-0 top-0 h-52 w-40 bg-sky" />
            <div className="grid-lines absolute left-0 top-0 h-52 w-40" />
            <div className="absolute bottom-0 right-0 w-64 bg-navy p-7 text-white">
              <p className="display text-3xl font-extrabold">Real people. Plain English.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading title="Three routes. One honest conversation." copy="Smoothing a gap, funding the everyday or buying the kit that earns its keep. We start with the job the money has to do." />
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
            {[
              { icon: Banknote, copy: "Fund the next step, or bridge the gap between paying for work and getting paid for it.", href: "/business-loans", tone: "bg-sky" },
              { icon: Wallet, copy: "Keep stock, staff and suppliers covered while you plan the next move.", href: "/working-capital", tone: "bg-mist" },
              { icon: Factory, copy: "Put vehicles, machinery and equipment to work without draining cash.", href: "/asset-finance", tone: "bg-aqua" },
            ].map((product) => {
              const category = productCategories.find((item) => item.href === product.href)!;
              return (
                <div key={product.href} className={`${product.tone} group relative flex flex-col py-5 pl-5 pr-12 md:min-h-96 md:p-10`}>
                  <product.icon size={42} strokeWidth={1.5} className="hidden text-navy md:block" aria-hidden />
                  <h3 className="display text-2xl font-extrabold text-navy-deep md:mt-16 md:text-4xl">
                    <Link href={product.href} className="after:absolute after:inset-0">
                      {category.label}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-navy-deep/75 md:mt-5 md:text-base md:leading-7">{product.copy}</p>
                  <ul className="relative z-10 mt-3 flex flex-wrap gap-2 md:mt-6" aria-label={`${category.label} options`}>
                    {category.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block border border-navy/25 px-2 py-1 text-xs font-bold text-navy-deep transition hover:border-navy hover:bg-white/40 md:px-3 md:py-1.5">
                          {"shortLabel" in child ? child.shortLabel : child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-navy md:static md:mt-auto md:inline-flex md:translate-y-0 md:items-center md:gap-2 md:pt-8 md:text-sm md:font-extrabold" aria-hidden>
                    <span className="hidden md:inline">Explore this product</span>
                    <ArrowUpRight size={20} className="transition group-hover:translate-x-1 group-hover:-translate-y-1 md:size-[18px]" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden sm:min-h-[400px] lg:min-h-[520px]">
            <ImagePlaceholder slot="/images/home-calculator.jpg" />
            <div className="absolute bottom-0 left-0 bg-coral px-4 py-3 text-navy-deep">
              <p className="text-sm font-bold">An illustration, not a quote.</p>
            </div>
          </div>
          <div>
            <h2 className="display balance text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-6xl">See what finance could cost.</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">Enter an amount and term to see the monthly cost of a business loan, or your card takings to see what a merchant cash advance could cost. It takes seconds, and it will not touch your credit score.</p>
            <div className="mt-8"><ButtonLink href="/calculator">Try the calculator</ButtonLink></div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="Funding for every kind of business."
            copy="From the café on the corner to a regional haulier, here is how businesses like yours tend to use commercial finance."
          />
          <IndustryGrid />
          <p className="mt-6 text-sm leading-6 text-ink/60">
            Illustrative examples only. Whether finance is available, and on what terms, depends on each lender&apos;s assessment.
          </p>
        </div>
      </section>

      <section className="section-space bg-navy-deep">
        <div className="page-shell">
          <SectionHeading title="Backed by people, not a form." copy="Commercial finance gets complicated fast. Our job is to cut through it and tell you where you actually stand." light />
          <ol className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-16 xl:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.title} className="border border-white/15 bg-white/[0.03] p-7 md:p-8">
                <step.icon className="text-aqua" size={34} strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 text-xl font-extrabold text-white md:text-2xl">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{step.copy}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <ButtonLink href="/how-it-works" secondary>How it works</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-mist py-10 md:py-12">
        <div className="page-shell">
          <SectionHeading
            title="The questions we get asked most."
            copy="The practical stuff, answered straight. Select a question to reveal the answer."
            compact
          />
          <FaqCards />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
