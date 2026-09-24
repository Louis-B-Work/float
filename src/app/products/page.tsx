import type { Metadata } from "next";
import { Banknote, Factory } from "lucide-react";
import { ButtonLink, CtaBand, PageHero } from "@/components/ui";
import { MobileCardRail } from "@/components/mobile-card-rail";

export const metadata: Metadata = { title: "Products", description: "Explore business loans and asset finance through Float." };

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Finance shaped around what comes next." copy="Two practical routes for businesses investing, adapting or managing the gap between money going out and coming in." />
      <section className="section-space">
        <MobileCardRail className="page-shell md:grid-cols-2 md:gap-6">
          {[
            { icon: Banknote, title: "Business loans", copy: "A flexible injection of capital that can support cash flow, growth, stock, premises or a time-sensitive opportunity.", list: ["Working capital", "Growth and expansion", "Stock and refurbishment"], href: "/products/business-loans", colour: "bg-sky" },
            { icon: Factory, title: "Asset finance", copy: "Finance vehicles, machinery or equipment over time, helping the business preserve capital for other priorities.", list: ["Vehicles and fleets", "Plant and machinery", "Technology and equipment"], href: "/products/asset-finance", colour: "bg-aqua" },
          ].map((product) => (
            <article key={product.title} className={`${product.colour} p-8 md:p-12`}>
              <product.icon size={42} strokeWidth={1.5} className="text-navy" />
              <h2 className="display mt-16 text-4xl font-extrabold text-navy-deep md:text-5xl">{product.title}</h2>
              <p className="mt-5 leading-7 text-navy-deep/70">{product.copy}</p>
              <ul className="my-8 space-y-3 border-y border-navy/15 py-6 text-sm font-bold text-navy">
                {product.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <ButtonLink href={product.href} secondary>Explore {product.title.toLowerCase()}</ButtonLink>
            </article>
          ))}
        </MobileCardRail>
      </section>
      <CtaBand />
    </>
  );
}
