import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Start an enquiry",
  description:
    "Start a commercial finance enquiry with Float. Tell us what your business is planning and we will explain the options.",
};

const assurances = [
  "Enquiring will not affect your credit score",
  "No obligation to proceed, ever",
  "We tell you how we are paid before you commit",
];

const needed = [
  "What the funding is for",
  "Roughly how much you need",
  "How the business has been trading",
  "The timescale you are working to",
];

export default function ApplyPage() {
  return (
    <section className="section-space bg-mist">
      <div className="page-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <h1 className="display balance text-5xl font-extrabold leading-[1] text-navy-deep md:text-7xl">
            Start with the business, not the paperwork.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink/65">
            Tell us what you are planning and we will come back to you. If we can help, we will show you the options. If we cannot, we will say so and tell you why.
          </p>

          <ul className="mt-9 space-y-3">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Check size={17} className="shrink-0 text-aqua" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Useful to have ready</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/65">
              {needed.map((item) => (
                <li key={item} className="border-b border-line pb-3 last:border-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="float-card p-6 md:p-10">
          <Suspense fallback={<p>Loading form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
