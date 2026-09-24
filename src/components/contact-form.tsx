"use client";

import { CheckCircle2, Send } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/contact";

type Errors = Partial<Record<keyof ContactFormData, string>>;

export function ContactForm() {
  const params = useSearchParams();
  const product = params.get("product");
  const range = params.get("range");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      phone: form.get("phone"),
      product: form.get("product"),
      message: form.get("message"),
      privacy: form.get("privacy") === "on",
    });

    if (!result.success) {
      const nextErrors: Errors = {};
      for (const issue of result.error.issues) {
        nextErrors[issue.path[0] as keyof ContactFormData] = issue.message;
      }
      setErrors(nextErrors);
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      requestAnimationFrame(() => firstInvalid?.focus());
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-aqua bg-white p-8 md:p-12" role="status">
        <CheckCircle2 size={42} className="text-aqua" aria-hidden />
        <h2 className="display mt-6 text-3xl font-extrabold text-navy">Demo enquiry complete</h2>
        <p className="mt-4 leading-7 text-ink/65">
          The form is working, but this first version does not send or store your details. Connect the form to an email or CRM service before launch.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-sm font-extrabold text-navy underline underline-offset-4">
          Return to the form
        </button>
      </div>
    );
  }

  const fields = [
    { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
    { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  ] as const;

  return (
    <form onSubmit={submit} noValidate className="grid gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-extrabold text-navy">
            {field.label} <span className="sr-only">(required)</span>
            <input name={field.name} type={field.type} autoComplete={field.autoComplete} aria-invalid={Boolean(errors[field.name])} aria-describedby={`${field.name}-error`} className="border border-line px-4 py-3.5 font-normal text-ink" />
            <ErrorText id={`${field.name}-error`}>{errors[field.name]}</ErrorText>
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-extrabold text-navy">
        What can we help with?
        <select name="product" defaultValue={product === "business-loan" || product === "asset-finance" ? product : "general"} className="border border-line bg-white px-4 py-3.5 font-normal text-ink">
          <option value="general">Not sure / general enquiry</option>
          <option value="business-loan">Business loan</option>
          <option value="asset-finance">Asset finance</option>
        </select>
      </label>
      {range && <p className="bg-mist px-4 py-3 text-sm text-ink/70"><strong className="text-navy">Calculator estimate:</strong> {range}</p>}
      <label className="grid gap-2 text-sm font-extrabold text-navy">
        Tell us a little about what you need
        <textarea name="message" rows={6} defaultValue={range ? `I used the Float calculator and saw an indicative range of ${range}. ` : ""} aria-invalid={Boolean(errors.message)} aria-describedby="message-error" className="resize-y border border-line px-4 py-3.5 font-normal text-ink" />
        <ErrorText id="message-error">{errors.message}</ErrorText>
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-ink/70">
        <input name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} aria-describedby="privacy-error" className="mt-1 size-4 accent-[var(--navy)]" />
        <span>I have read the <Link href="/privacy-policy" className="font-bold text-navy underline">privacy notice</Link> and understand how my details would be used.</span>
      </label>
      <ErrorText id="privacy-error">{errors.privacy}</ErrorText>
      <button type="submit" className="inline-flex items-center justify-center gap-2 bg-coral px-6 py-4 font-extrabold text-navy-deep hover:bg-aqua">
        Submit demo enquiry <Send size={18} aria-hidden />
      </button>
      <p className="text-xs leading-5 text-ink/50">Demo only: this form currently validates locally and does not send or store information.</p>
    </form>
  );
}

function ErrorText({ id, children }: { id: string; children?: string }) {
  return <span id={id} className="min-h-5 text-xs font-bold text-red-700">{children}</span>;
}
