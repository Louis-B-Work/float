import { ArrowUpRight, Banknote, Check, Factory, Handshake, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CtaBand, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";
import { FaqCards } from "@/components/faq-cards";
import { LenderStrip } from "@/components/lender-strip";
import { assetPath } from "@/lib/assets";

const steps = [
  { icon: MessagesSquare, title: "Tell us the plan", copy: "Share what you need, how the business is performing and the timescale you are working to." },
  { icon: Handshake, title: "We shape the search", copy: "We use that detail to approach relevant lenders and explain the options in plain English." },
  { icon: Banknote, title: "Choose with clarity", copy: "You decide whether an option works for your business. There is no obligation to proceed." },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-mist">
        <div className="page-shell grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="relative z-10">
            <h1 className="display balance text-6xl font-extrabold leading-[0.93] text-navy-deep md:text-8xl">
              Funding that keeps your business <span className="text-coral">moving.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
              Float helps UK businesses explore business loans and asset finance through a focused panel of commercial lenders.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <ButtonLink href="/contact">Talk to Float</ButtonLink>
              <ButtonLink href="/calculator" secondary>Try calculator</ButtonLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
              <Check size={17} className="text-aqua" aria-hidden />
              Enquiring will not affect your credit score
            </p>
          </div>
          <div className="relative min-h-[480px] lg:min-h-[590px]">
            <div className="absolute inset-8 right-0 overflow-hidden">
              <Image src={assetPath("/images/team-meeting.jpg")} alt="Business owners discussing plans around a table" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="absolute left-0 top-0 h-52 w-40 bg-sky" />
            <div className="grid-lines absolute left-0 top-0 h-52 w-40" />
            <div className="absolute bottom-0 right-0 w-64 bg-navy p-7 text-white">
              <p className="display text-3xl font-extrabold">Business loans + asset finance</p>
            </div>
          </div>
        </div>
      </section>

      <LenderStrip />

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading title="Choose the route that fits the job." copy="Whether you are smoothing cash flow or investing in equipment, we start with what the funding needs to achieve." />
          <MobileCardRail className="mt-10 md:grid-cols-2 md:gap-5 lg:mt-14">
            {[
              { icon: Banknote, title: "Business loans", copy: "Flexible commercial funding for working capital, growth plans, stock, refurbishment and more.", href: "/products/business-loans", tone: "bg-sky" },
              { icon: Factory, title: "Asset finance", copy: "Spread the cost of vehicles, machinery and equipment while preserving cash for day-to-day operations.", href: "/products/asset-finance", tone: "bg-aqua" },
            ].map((product) => (
              <Link key={product.href} href={product.href} className={`${product.tone} group min-h-80 p-8 md:min-h-96 md:p-12`}>
                <product.icon size={42} strokeWidth={1.5} className="text-navy" aria-hidden />
                <h3 className="display mt-24 text-4xl font-extrabold text-navy-deep md:text-5xl">{product.title}</h3>
                <p className="mt-5 max-w-lg leading-7 text-navy-deep/70">{product.copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-navy">
                  Explore this product <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </MobileCardRail>
        </div>
      </section>

      <section className="section-space bg-navy-deep">
        <div className="page-shell">
          <SectionHeading title="A useful conversation, then a focused search." copy="Commercial finance can be complex. Our role is to make the route through it feel straightforward." light />
          <MobileCardRail className="process-rail mt-12 md:grid-cols-3 md:bg-white/10 lg:mt-16">
            {steps.map((step) => (
              <div key={step.title} className="min-h-72 border border-white/15 bg-navy-deep p-8 md:min-h-0 md:border-0 md:p-10">
                <div>
                  <step.icon className="text-aqua" size={36} strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="mt-16 text-xl font-extrabold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{step.copy}</p>
              </div>
            ))}
          </MobileCardRail>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden">
            <Image src={assetPath("/images/business-planning.jpg")} alt="A team reviewing business figures" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute bottom-0 left-0 bg-coral px-4 py-3 text-navy-deep">
              <p className="text-sm font-bold">An estimate, not a promise.</p>
            </div>
          </div>
          <div>
            <h2 className="display balance text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-6xl">Get a feel for the funding range.</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">Use turnover, trading history and credit profile to see a broad, non-binding range. It takes about a minute and does not affect your credit score.</p>
            <div className="mt-8"><ButtonLink href="/calculator">Estimate your range</ButtonLink></div>
          </div>
        </div>
      </section>
      <section className="bg-mist py-10 md:py-12">
        <div className="page-shell">
          <SectionHeading
            title="Questions business owners often ask."
            copy="The useful basics before you start an enquiry. Select a question to reveal the answer."
            compact
          />
          <FaqCards />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
