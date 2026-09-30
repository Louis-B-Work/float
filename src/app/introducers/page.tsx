import type { Metadata } from "next";
import { ClipboardList, Handshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Introducers",
  description:
    "Work with Float as an introducer. A straightforward referral relationship for accountants, brokers and advisers with commercial finance clients.",
  robots: { index: false, follow: false },
};

const audiences = [
  {
    icon: ClipboardList,
    title: "Accountants and bookkeepers",
    copy: "You usually spot a funding need before anyone else does. Pass the conversation on instead of trying to place it yourself.",
  },
  {
    icon: Handshake,
    title: "Brokers and advisers",
    copy: "When an enquiry falls outside what you cover, a referral keeps the client looked after without stretching your remit.",
  },
  {
    icon: MessagesSquare,
    title: "Suppliers and consultants",
    copy: "If customers keep asking how they might fund a purchase, we can pick that conversation up properly.",
  },
];

const principles = [
  {
    title: "Your client stays your client",
    copy: "We handle the finance enquiry and nothing else. We are not angling to take over the relationship you have spent years building.",
  },
  {
    title: "You are never the last to know",
    copy: "We keep you updated on progress at whatever level of detail suits you, so you are never caught out by your own referral.",
  },
  {
    title: "Terms agreed upfront",
    copy: "Any commercial arrangement is agreed in writing before referrals start, so there are no awkward conversations down the line.",
  },
  {
    title: "Honest about the outcome",
    copy: "If an enquiry is not going to work, we say so early rather than letting it drift and reflect badly on you.",
  },
];

export default function IntroducersPage() {
  return (
    <>
      <PageHero
        title="Refer the finance. Keep the relationship."
        copy="If your clients regularly need commercial finance, Float can take that side of the conversation while you carry on doing what you do best."
        image="/images/introducers-hero.jpg"
      />

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="Who tends to work with us."
            copy="Most introducers come to us because a client asked a funding question they were not set up to answer."
          />
          <MobileCardRail label="Introducer types" className="mt-10 md:grid-cols-3 md:gap-5 lg:mt-14">
            {audiences.map((audience) => (
              <div key={audience.title} className="float-card min-h-64 p-7 md:min-h-0 md:p-8">
                <audience.icon size={34} strokeWidth={1.5} className="text-coral" aria-hidden />
                <h2 className="mt-10 text-xl font-extrabold text-navy">{audience.title}</h2>
                <p className="mt-4 leading-7 text-ink/65">{audience.copy}</p>
              </div>
            ))}
          </MobileCardRail>
        </div>
      </section>

      <section className="section-space bg-navy-deep">
        <div className="page-shell">
          <SectionHeading
            title="How we work with introducers."
            copy="A referral puts your name behind us. We treat it that way."
            light
          />
          <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-2 lg:mt-14">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-navy-deep p-8 md:p-10">
                <ShieldCheck size={30} strokeWidth={1.5} className="text-aqua" aria-hidden />
                <h3 className="mt-8 text-xl font-extrabold text-white">{principle.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{principle.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell max-w-3xl">
          <h2 className="display balance text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-6xl">
            Start a conversation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/65">
            Tell us about your business and the kind of clients you work with, and we will set out how a referral arrangement could work in practice. Email {company.email} or send an enquiry mentioning that you are an introducer.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href="/contact">Talk to Float</ButtonLink>
            <ButtonLink href="/how-it-works" secondary>See how we work</ButtonLink>
          </div>
        </div>
      </section>

      <section className="page-shell pb-12">
        <p className="border-l-4 border-coral bg-mist p-6 text-sm leading-7 text-ink/65">
          Float is a commercial finance broker, not a lender. Introducer arrangements relate to non-regulated commercial finance only, and any commercial terms are agreed in writing in advance.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
