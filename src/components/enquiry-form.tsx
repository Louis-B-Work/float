"use client";

import { CheckCircle2, Info, Send } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  amountBandFor,
  amountBands,
  applySchema,
  businessTypes,
  contactSchema,
  isProductValue,
  productOptions,
  smallBorrowerRule,
  submitEnquiry,
  timescaleOptions,
  tradingHistoryOptions,
  turnoverBands,
} from "@/lib/contact";
import { formatCurrency } from "@/lib/format";
import { company } from "@/lib/site";

type Variant = "contact" | "apply";
type Errors = Partial<Record<string, string>>;
type Option = { readonly value: string; readonly label: string };

const contactFields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
] as const;

/** Reads calculator figures passed in the query string, e.g. `?product=…&amount=50000&term=36`. */
function useCalculatorHandoff() {
  const params = useSearchParams();
  const product = params.get("product");
  const amount = Number(params.get("amount"));
  const term = Number(params.get("term"));
  const validAmount = Number.isFinite(amount) && amount > 0 ? amount : null;
  const validTerm = Number.isFinite(term) && term > 0 ? term : null;

  let notes = "";
  if (validAmount && validTerm) notes = `From the loan calculator: ${formatCurrency(validAmount)} over ${validTerm} months.`;
  else if (validAmount) notes = `From the calculator: around ${formatCurrency(validAmount)}.`;

  return {
    product: isProductValue(product) ? product : "general",
    amountBand: validAmount ? amountBandFor(validAmount) : "",
    notes,
  };
}

export function EnquiryForm({ variant }: { variant: Variant }) {
  const handoff = useCalculatorHandoff();
  const [amount, setAmount] = useState<string>(handoff.amountBand);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const input = { ...Object.fromEntries(form), privacy: form.get("privacy") === "on" };
    const result = (variant === "apply" ? applySchema : contactSchema).safeParse(input);

    if (!result.success) {
      const nextErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        nextErrors[key] ??= issue.message;
      }
      setErrors(nextErrors);
      requestAnimationFrame(() => {
        const firstInvalid = Array.from(formElement.elements).find(
          (element) => element instanceof HTMLElement && "name" in element && String(element.name) in nextErrors,
        );
        if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      });
      return;
    }

    setErrors({});
    setSending(true);
    try {
      await submitEnquiry(result.data);
      setSubmitted(true);
    } catch {
      setErrors({ form: "Something went wrong sending your enquiry. Please try again." });
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-aqua bg-white p-8 md:p-12" role="status">
        <CheckCircle2 size={42} className="text-aqua" aria-hidden />
        <h2 className="display mt-6 text-3xl font-extrabold text-navy">Thanks for your enquiry.</h2>
        <p className="mt-4 leading-7 text-ink/65">
          We will be in touch soon to talk it through. There is no obligation to go any further.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="mt-7 text-sm font-extrabold text-navy underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  const contactDetails = (
    <div className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
      {contactFields.map((field) => (
        <TextField key={field.name} {...field} error={errors[field.name]} />
      ))}
    </div>
  );

  const productAndAmount = (
    <>
      <SelectField name="product" label="What can we help with?" options={productOptions} defaultValue={handoff.product} error={errors.product} />
      <SelectField
        name="amount"
        label="Roughly how much do you need?"
        options={amountBands}
        placeholder="Choose an amount"
        value={amount}
        onChange={setAmount}
        error={errors.amount}
      />
      {amount === "under-25k" && (
        <p className="mb-4 flex gap-3 bg-mist px-4 py-3 text-sm leading-6 text-ink/70">
          <Info size={18} className="mt-0.5 shrink-0 text-coral" aria-hidden />
          {smallBorrowerRule}
        </p>
      )}
    </>
  );

  return (
    <form onSubmit={submit} noValidate className="grid gap-6">
      {/* TODO: remove this notice once submitEnquiry is wired to the CRM. */}
      <p className="flex gap-3 border border-coral bg-mist px-4 py-3 text-sm leading-6 text-ink/80" role="note">
        <Info size={18} className="mt-0.5 shrink-0 text-coral" aria-hidden />
        <span>
          Our online enquiry form is being connected and is not sending messages yet. Please email us at{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-navy underline underline-offset-4">{company.email}</a>{" "}
          and we will get straight back to you.
        </span>
      </p>
      {variant === "apply" ? (
        <>
          <Section title="About the business">
            <TextField name="businessName" label="Business name" autoComplete="organization" error={errors.businessName} />
            <div className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
              <SelectField name="businessType" label="Business type" options={businessTypes} placeholder="Choose a type" error={errors.businessType} />
              <SelectField name="tradingHistory" label="Time trading" options={tradingHistoryOptions} placeholder="Choose a period" error={errors.tradingHistory} />
            </div>
            <SelectField name="turnover" label="Approximate annual turnover" options={turnoverBands} placeholder="Choose a range" error={errors.turnover} />
          </Section>
          <Section title="What you need">
            {productAndAmount}
            <TextField name="purpose" label="What is the funding for?" error={errors.purpose} />
            <SelectField name="timescale" label="When do you need it by?" options={timescaleOptions} placeholder="Choose a timescale" error={errors.timescale} />
            <label className="grid gap-2 text-sm font-extrabold text-navy">
              <span>Anything else we should know? <span className="font-semibold text-ink/50">(optional)</span></span>
              <textarea name="notes" rows={4} defaultValue={handoff.notes} className="resize-y border border-line px-4 py-3.5 text-base font-normal text-ink md:text-sm" />
            </label>
          </Section>
          <Section title="Your details">{contactDetails}</Section>
        </>
      ) : (
        <>
          {contactDetails}
          <div className="grid">{productAndAmount}</div>
          <label className="grid gap-2 text-sm font-extrabold text-navy">
            Tell us a little about what you need
            <textarea name="message" rows={6} aria-invalid={Boolean(errors.message)} aria-describedby="message-error" className="resize-y border border-line px-4 py-3.5 text-base font-normal text-ink md:text-sm" />
            <ErrorText id="message-error">{errors.message}</ErrorText>
          </label>
        </>
      )}
      <div className="grid gap-2">
        <label className="flex items-start gap-3 text-sm leading-6 text-ink/70">
          <input name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} aria-describedby="privacy-error" className="mt-1 size-4 accent-[var(--navy)]" />
          <span>I have read the <Link href="/privacy" className="font-bold text-navy underline">privacy notice</Link> and understand how my details will be used.</span>
        </label>
        <ErrorText id="privacy-error">{errors.privacy}</ErrorText>
      </div>
      {errors.form && <p role="alert" className="text-sm font-bold text-red-700">{errors.form}</p>}
      <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 bg-coral px-6 py-4 font-extrabold text-navy-deep hover:bg-aqua disabled:opacity-60">
        Send enquiry <Send size={18} aria-hidden />
      </button>
    </form>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="grid border-t border-line pt-6 first:border-0 first:pt-0">
      <legend className="float-left mb-5 w-full text-sm font-extrabold uppercase tracking-[0.14em] text-navy">{title}</legend>
      {children}
    </fieldset>
  );
}

function TextField({
  name,
  label,
  type = "text",
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-extrabold text-navy">
      <span>{label} <span className="sr-only">(required)</span></span>
      <input name={name} type={type} autoComplete={autoComplete} aria-invalid={Boolean(error)} aria-describedby={`${name}-error`} className="border border-line px-4 py-3.5 text-base font-normal text-ink md:text-sm" />
      <ErrorText id={`${name}-error`}>{error}</ErrorText>
    </label>
  );
}

function SelectField({
  name,
  label,
  options,
  placeholder,
  defaultValue,
  value,
  onChange,
  error,
}: {
  name: string;
  label: string;
  options: readonly Option[];
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}) {
  const valueProps =
    value !== undefined
      ? { value, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => onChange?.(event.target.value) }
      : { defaultValue: defaultValue ?? "" };

  return (
    <label className="grid gap-2 text-sm font-extrabold text-navy">
      <span>{label} <span className="sr-only">(required)</span></span>
      <select name={name} {...valueProps} aria-invalid={Boolean(error)} aria-describedby={`${name}-error`} className="border border-line bg-white px-4 py-3.5 text-base font-normal text-ink md:text-sm">
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <ErrorText id={`${name}-error`}>{error}</ErrorText>
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children?: string }) {
  return <span id={id} className="min-h-5 text-xs font-bold text-red-700">{children}</span>;
}
