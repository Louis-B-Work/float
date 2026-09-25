"use client";

import { ArrowRight, Calculator as CalculatorIcon, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  calculateIndicativeRange,
  formatCurrency,
  type CalculatorInputs,
} from "@/lib/calculator";

const initialInputs: CalculatorInputs = {
  annualTurnover: 250_000,
  tradingHistory: "2-5",
  creditProfile: "fair",
  product: "business-loan",
};

export function Calculator() {
  const [inputs, setInputs] = useState(initialInputs);
  const [result, setResult] = useState(() => calculateIndicativeRange(initialInputs));
  const [error, setError] = useState("");

  function update<K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) {
    setInputs((current) => ({ ...current, [key]: value }));
  }

  function calculate() {
    try {
      setResult(calculateIndicativeRange(inputs));
      setError("");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Check the values and try again.");
    }
  }

  const contactParams = new URLSearchParams({
    product: inputs.product,
    range: `${formatCurrency(result.minimum)}–${formatCurrency(result.maximum)}`,
  });

  return (
    <div className="grid overflow-hidden border border-line bg-white shadow-[0_30px_80px_rgba(13,34,61,.1)] lg:grid-cols-[1.1fr_.9fr]">
      <div className="p-6 md:p-10">
        <div className="grid gap-7">
          <Field label="What are you looking to finance?">
            <select value={inputs.product} onChange={(event) => update("product", event.target.value as CalculatorInputs["product"])} className="w-full border border-line bg-white px-4 py-3.5 text-navy">
              <option value="business-loan">Business loan</option>
              <option value="asset-finance">Asset finance</option>
            </select>
          </Field>
          <Field label="Approximate annual turnover">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-navy">£</span>
              <input type="number" min="10000" step="10000" value={inputs.annualTurnover} onChange={(event) => update("annualTurnover", Number(event.target.value))} className="w-full border border-line py-3.5 pl-9 pr-4 text-navy" />
            </div>
          </Field>
          <Field label="How long has the business been trading?">
            <select value={inputs.tradingHistory} onChange={(event) => update("tradingHistory", event.target.value as CalculatorInputs["tradingHistory"])} className="w-full border border-line bg-white px-4 py-3.5 text-navy">
              <option value="under-1">Under 1 year</option>
              <option value="1-2">1–2 years</option>
              <option value="2-5">2–5 years</option>
              <option value="5-plus">5+ years</option>
            </select>
          </Field>
          <Field label="How would you describe the business credit profile?">
            <select value={inputs.creditProfile} onChange={(event) => update("creditProfile", event.target.value as CalculatorInputs["creditProfile"])} className="w-full border border-line bg-white px-4 py-3.5 text-navy">
              <option value="strong">Strong, commitments generally paid on time</option>
              <option value="fair">Fair, occasional issues or limited history</option>
              <option value="challenged">Challenged, recent credit difficulties</option>
            </select>
          </Field>
          {error && <p role="alert" className="text-sm font-bold text-red-700">{error}</p>}
          <button type="button" onClick={calculate} className="inline-flex items-center justify-center gap-2 bg-coral px-6 py-4 font-extrabold text-navy-deep hover:bg-aqua">
            Update my estimate <CalculatorIcon size={19} aria-hidden />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-navy p-7 text-white md:p-10" aria-live="polite">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-aqua">Indicative borrowing range</p>
          <p className="display mt-5 text-4xl font-extrabold md:text-5xl">{formatCurrency(result.minimum)}</p>
          <p className="my-2 text-white/60">to</p>
          <p className="display text-4xl font-extrabold md:text-5xl">{formatCurrency(result.maximum)}</p>
          <p className="mt-7 border-t border-white/15 pt-6 text-sm leading-7 text-white/65">
            Based on the information entered and broad market-style bands. A lender will assess affordability, financials, purpose and other factors.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex gap-3 bg-white/5 p-4 text-xs leading-5 text-white/60">
            <Info size={18} className="shrink-0 text-aqua" aria-hidden />
            This is not an offer, quote, approval or financial advice. Actual availability may be lower or higher.
          </div>
          <Link href={`/contact?${contactParams.toString()}`} className="secondary-button mt-4 flex items-center justify-between bg-white px-5 py-4 text-sm font-extrabold text-navy">
            Discuss this estimate <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-2 text-sm font-extrabold text-navy">{label}{children}</label>;
}
