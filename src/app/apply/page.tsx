import { Check } from "lucide-react";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/apply");

const assurances = [
  "Enquiring will not affect your credit score",
  "No obligation to proceed, ever",
  "We tell you how we are paid before you commit",
];

export default function ApplyPage() {
  return (
    <section className="hero-space bg-mist">
      <div className="page-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <h1 className="display type-h1 balance font-extrabold text-navy-deep">
            Start with the business, not the paperwork.
          </h1>
          <p className="type-lead mt-6 leading-8 text-ink/65">
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
            <p className="mt-5 text-sm leading-6 text-ink/70">
              Your business details, what the funding is for, roughly how much, and how trading has been. Takes about 3 minutes.
            </p>
          </div>
        </div>

        <div className="float-card p-6 md:p-10">
          <Suspense fallback={<p>Loading form…</p>}>
            <EnquiryForm variant="apply" />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
