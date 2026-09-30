import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";
import { assetPath } from "@/lib/assets";

export type CategoryChild = {
  title: string;
  copy: string;
  href: string;
};

const tones = ["bg-sky", "bg-aqua", "bg-mist"];

export function CategoryPage({
  title,
  intro,
  image,
  detailImage,
  childPages,
  detailTitle,
  detail,
  points,
  childrenLabel = "Finance options",
}: {
  title: string;
  intro: string;
  image: string;
  detailImage: string;
  childPages: CategoryChild[];
  detailTitle: string;
  detail: string;
  points: string[];
  childrenLabel?: string;
}) {
  return (
    <>
      <PageHero title={title} copy={intro} image={image} />

      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            title="Pick the option that fits the job."
            copy="Each route behaves differently in practice. We start with what the money has to do, then explain where they differ."
          />
          <MobileCardRail label={childrenLabel} className="mt-10 md:grid-cols-2 md:gap-5 lg:mt-14">
            {childPages.map((child, index) => (
              <Link
                key={child.href}
                href={child.href}
                className={`${tones[index % tones.length]} group min-h-64 p-8 md:min-h-72 md:p-10`}
              >
                <h2 className="display text-3xl font-extrabold text-navy-deep md:text-4xl">{child.title}</h2>
                <p className="mt-4 max-w-lg leading-7 text-navy-deep/75">{child.copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-navy">
                  Explore this option
                  <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </span>
              </Link>
            ))}
          </MobileCardRail>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
            <Image src={assetPath(detailImage)} alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
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
              <ButtonLink href="/apply">Start an enquiry</ButtonLink>
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
