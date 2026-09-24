import type { Metadata } from "next";
import { Compass, Eye, MessagesSquare } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Float helps UK businesses navigate commercial finance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="A more straightforward way to find business finance." copy="Float helps business owners understand their funding options, make an informed choice and keep their plans moving." image="/images/team-meeting.jpg" />
      <section className="section-space">
        <div className="page-shell">
          <div className="max-w-5xl">
            <h2 className="display balance text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-6xl">Personal guidance from first conversation to funding.</h2>
            <div className="mt-8 grid gap-6 text-lg leading-8 text-ink/65 md:grid-cols-2">
              <p>Float was built on a simple belief: finding commercial finance should feel clear, dependable and centred on the needs of the business. We learn what the funding needs to achieve before looking at possible routes.</p>
              <p>As a broker, we understand the information lenders need and approach relevant options from our panel. You have a consistent point of contact to guide the enquiry, explain the choices and keep the process moving.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="page-shell">
          <SectionHeading title="Clear, useful, human." />
          <MobileCardRail className="mt-10 md:mt-14 md:grid-cols-3 md:gap-5">
            {[
              { icon: MessagesSquare, title: "Speak plainly", copy: "No unnecessary jargon. We explain the practical differences and important trade-offs." },
              { icon: Compass, title: "Stay focused", copy: "We use your goals and circumstances to keep the lender search relevant." },
              { icon: Eye, title: "Be transparent", copy: "We are clear that we broker finance, may earn commission and cannot guarantee approval." },
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
