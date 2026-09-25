import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";
import { assetPath } from "@/lib/assets";

export function ProductPage({
  title,
  intro,
  image,
  uses,
  detailTitle,
  detail,
  points,
}: {
  title: string;
  intro: string;
  image: string;
  uses: string[];
  detailTitle: string;
  detail: string;
  points: string[];
}) {
  return (
    <>
      <PageHero title={title} copy={intro} image={image} />
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading title="Built for real business plans." />
          <MobileCardRail label="Common finance uses" className="mt-10 md:grid-cols-2 md:gap-px md:bg-line lg:mt-12 lg:grid-cols-4">
            {uses.map((use) => (
              <div key={use} className="min-h-32 border border-line bg-white p-7 md:min-h-0 md:border-0">
                <p className="text-lg font-extrabold text-navy">{use}</p>
              </div>
            ))}
          </MobileCardRail>
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
            <Image src={assetPath(image)} alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <h2 className="display text-4xl font-extrabold leading-[1.05] text-navy-deep md:text-5xl">{detailTitle}</h2>
            <p className="mt-6 leading-8 text-ink/65">{detail}</p>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm font-semibold text-navy">
                  <CheckCircle2 size={20} className="shrink-0 text-coral" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <ButtonLink href="/contact">Discuss your plans</ButtonLink>
              <ButtonLink href="/calculator" secondary>Estimate a range</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <section className="page-shell py-12">
        <p className="border-l-4 border-coral bg-white p-6 text-sm leading-7 text-ink/65">
          All finance is subject to status, lender criteria and affordability. Security or a personal guarantee may be required. Late or missed payments may affect your credit profile and put business or personal assets at risk.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
