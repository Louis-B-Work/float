import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Tell Float what your business needs and start a commercial finance enquiry." };

export default function ContactPage() {
  return (
    <section className="section-space bg-mist">
      <div className="page-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <h1 className="display balance text-5xl font-extrabold leading-[1] text-navy-deep md:text-7xl">Ask us anything.</h1>
          <p className="mt-6 text-lg leading-8 text-ink/65">Tell us what you are planning, or just ask a question. No obligation, and no hard sell afterwards.</p>
          <div className="mt-10 space-y-5 border-t border-line pt-8 text-sm text-ink/65">
            <p className="flex gap-3"><Mail size={19} className="shrink-0 text-coral" aria-hidden /> <a href={`mailto:${company.email}`} className="font-semibold text-navy underline underline-offset-4">{company.email}</a></p>
            {company.phoneHref && <p className="flex gap-3"><Phone size={19} className="shrink-0 text-coral" aria-hidden /> <a href={company.phoneHref} className="font-semibold text-navy underline underline-offset-4">{company.phoneDisplay}</a></p>}
            <p className="flex gap-3"><MapPin size={19} className="shrink-0 text-coral" aria-hidden /> {company.address}</p>
          </div>
        </div>
        <div className="float-card p-6 md:p-10">
          <Suspense fallback={<p>Loading form…</p>}><ContactForm /></Suspense>
        </div>
      </div>
    </section>
  );
}
