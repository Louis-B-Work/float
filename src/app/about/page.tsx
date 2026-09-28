import type { Metadata } from "next";
import { Compass, Eye, MessagesSquare } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";

export const metadata: Metadata = {
  title: "About",
  description: "Float is a commercial finance broker helping UK businesses find funding that actually fits.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="Commercial finance, minus the mystery." copy="Float exists because finding business funding should not feel like a guessing game. We work out what you need, then go and find out what is genuinely available." image="/images/team-meeting.jpg" />
      <section className="section-space">
        <div className="page-shell">
          <div className="max-w-5xl">
            <h2 className="display balance text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-6xl">One point of contact, start to finish.</h2>
            <div className="mt-8 grid gap-6 text-lg leading-8 text-ink/65 md:grid-cols-2">
              <p>Too much of this industry runs on vague answers and forms that go nowhere. We built Float around the opposite: understand the business first, be clear about what is realistic, and say so early when something is not going to fly.</p>
              <p>As a broker we know what lenders want to see and which ones are worth approaching for a business like yours. You get one person guiding the enquiry who explains the choices, chases the detail and keeps things moving.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="page-shell">
          <SectionHeading title="How we go about it." />
          <MobileCardRail label="Float values" className="mt-10 md:mt-14 md:grid-cols-3 md:gap-5">
            {[
              { icon: MessagesSquare, title: "Speak plainly", copy: "No jargon for the sake of it. We explain the practical differences and the trade-offs that actually matter." },
              { icon: Compass, title: "Stay focused", copy: "We use your goals and circumstances to keep the search relevant, rather than firing it at the whole market." },
              { icon: Eye, title: "Be straight with you", copy: "We broker finance, we may earn commission, and we cannot guarantee approval. You will hear all of that upfront." },
            ].map((value) => (
              <div key={value.title} className="float-card min-h-64 p-7 md:min-h-0 md:p-8">
                <value.icon size={34} className="text-coral" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-10 text-xl font-extrabold text-navy">{value.title}</h3>
                <p className="mt-4 leading-7 text-ink/65">{value.copy}</p>
              </div>
            ))}
          </MobileCardRail>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
