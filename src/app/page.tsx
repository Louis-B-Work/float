import { ArrowUpRight, Banknote, Check, Factory, Handshake, MessagesSquare, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CtaBand, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";
import { FaqCards } from "@/components/faq-cards";
import { RevealCard } from "@/components/reveal-card";
import { assetPath } from "@/lib/assets";

const steps = [
  {
    icon: MessagesSquare,
    title: "Tell us the plan",
    copy: "What the money is for, how trading has been and when you need it by. Five minutes, no paperwork.",
    more: [
      "Roughly how much you need and what it is for",
      "Your turnover and how long you have been trading",
      "Online or over the phone, whichever suits you",
    ],
  },
  {
    icon: Handshake,
    title: "We do the legwork",
    copy: "We go to the lenders worth approaching for a business like yours, and skip the ones that are not.",
    more: [
      "Matched against lender criteria before anything is sent",
      "No lender sees your details without your say-so",
      "We chase the detail and keep things moving",
    ],
  },
  {
    icon: Banknote,
    title: "You choose",
    copy: "We lay out the options in plain English. You decide. Walking away costs you nothing.",
    more: [
      "Cost, term and security compared side by side",
      "Our commission disclosed before you commit",
      "No obligation to proceed, ever",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-mist">
        <div className="page-shell grid min-h-[720px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="relative z-10">
            <h1 className="display balance text-6xl font-extrabold leading-[1.02] text-navy-deep md:text-8xl">
              Business finance without the <span className="text-coral">runaround.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/65">
              Cash flow finance, working capital and asset finance for UK businesses. One conversation, a focused search, and a straight answer either way.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <ButtonLink href="/apply">Start an enquiry</ButtonLink>
              <ButtonLink href="/calculator" secondary>Try calculator</ButtonLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
              <Check size={17} className="text-aqua" aria-hidden />
              Enquiring will not affect your credit score
            </p>
          </div>
          <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[590px]">
            <div className="absolute inset-8 right-0 overflow-hidden">
              <Image src={assetPath("/images/home-hero.jpg")} alt="Two chefs at work in an independent restaurant kitchen" fill priority className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="absolute left-0 top-0 h-52 w-40 bg-sky" />
            <div className="grid-lines absolute left-0 top-0 h-52 w-40" />
            <div className="absolute bottom-0 right-0 w-64 bg-navy p-7 text-white">
              <p className="display text-3xl font-extrabold">Real people. Straight answers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading title="Three routes. One honest conversation." copy="Smoothing a gap, funding the everyday or buying the kit that earns its keep. We start with the job the money has to do." />
          <MobileCardRail label="Finance products" className="mt-10 md:grid-cols-3 md:gap-5 lg:mt-14">
            {[
              { icon: Banknote, title: "Cash flow finance", copy: "Bridge the gap between paying for work and getting paid for it.", href: "/cash-flow-finance", tone: "bg-sky" },
              { icon: Wallet, title: "Working capital", copy: "Keep stock, staff and suppliers covered while you plan the next move.", href: "/working-capital", tone: "bg-mist" },
              { icon: Factory, title: "Asset finance", copy: "Put vehicles, machinery and equipment to work without draining cash.", href: "/asset-finance", tone: "bg-aqua" },
            ].map((product) => (
              <Link key={product.href} href={product.href} className={`${product.tone} group min-h-80 p-8 md:min-h-96 md:p-10`}>
                <product.icon size={42} strokeWidth={1.5} className="text-navy" aria-hidden />
                <h3 className="display mt-24 text-3xl font-extrabold text-navy-deep md:text-4xl">{product.title}</h3>
                <p className="mt-5 max-w-lg leading-7 text-navy-deep/75">{product.copy}</p>
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
          <SectionHeading title="Backed by people, not a form." copy="Commercial finance gets complicated fast. Our job is to cut through it and tell you where you actually stand." light />
          <MobileCardRail label="How Float works" className="mt-12 md:grid-cols-3 md:gap-5 lg:mt-16">
            {steps.map((step, index) => (
              <RevealCard
                key={step.title}
                index={index}
                title={step.title}
                summary={step.copy}
                icon={step.icon}
                className="p-8 md:p-9 lg:min-h-[35.5rem] lg:p-10 xl:min-h-[32rem] 2xl:min-h-[29.5rem]"
              >
                <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                  {step.more.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-white/85">
                      <Check size={17} className="mt-1 shrink-0 text-aqua" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealCard>
            ))}
          </MobileCardRail>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden sm:min-h-[400px] lg:min-h-[520px]">
            <Image src={assetPath("/images/home-calculator.jpg")} alt="Business figures being worked through on a calculator" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute bottom-0 left-0 bg-coral px-4 py-3 text-navy-deep">
              <p className="text-sm font-bold">An estimate, not a promise.</p>
            </div>
          </div>
          <div>
            <h2 className="display balance text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-6xl">See roughly what you could raise.</h2>
            <p className="mt-6 text-lg leading-8 text-ink/65">Pop in your turnover, trading history and credit profile for a broad, non-binding range. Takes about a minute, and it will not touch your credit score.</p>
            <div className="mt-8"><ButtonLink href="/calculator">Estimate your range</ButtonLink></div>
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
