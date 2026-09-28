import type { Metadata } from "next";
import { Calculator } from "@/components/calculator";

export const metadata: Metadata = { title: "Business finance calculator", description: "Get a broad, non-binding indication of a potential commercial finance range." };

export default function CalculatorPage() {
  return (
    <section className="section-space grid-lines bg-mist">
      <div className="page-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="display balance text-5xl font-extrabold leading-[1] text-navy-deep md:text-7xl">What could your business raise?</h1>
          <p className="mt-6 text-lg leading-8 text-ink/65">A broad borrowing range from a few quick details. Takes about a minute and will not touch your credit score.</p>
        </div>
        <Calculator />
      </div>
    </section>
  );
}
