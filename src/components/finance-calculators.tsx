"use client";

import { ArrowRight, Info, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useEffectEvent, useId, useRef, useState, type ReactNode } from "react";
import {
  clamp,
  factorRatePresets,
  loanRatePresets,
  loanRepayment,
  loanSliders,
  mcaSliders,
  merchantCashAdvanceCost,
  suggestedAdvance,
  type Preset,
  type Security,
  type Slider,
} from "@/lib/calculator";
import { formatCurrency } from "@/lib/format";

export type CalculatorTab = "loan" | "merchant-cash-advance";

const tabs: { id: CalculatorTab; label: string }[] = [
  { id: "loan", label: "Business loan" },
  { id: "merchant-cash-advance", label: "Merchant cash advance" },
];

/** Picks the opening tab and security from `?type=merchant-cash-advance` or `?security=secured`. */
export function FinanceCalculatorsFromQuery() {
  const params = useSearchParams();
  return (
    <FinanceCalculators
      initialTab={params.get("type") === "merchant-cash-advance" ? "merchant-cash-advance" : "loan"}
      initialSecurity={params.get("security") === "secured" ? "secured" : "unsecured"}
    />
  );
}

export function FinanceCalculators({
  initialTab = "loan",
  initialSecurity = "unsecured",
}: {
  initialTab?: CalculatorTab;
  initialSecurity?: Security;
}) {
  const [tab, setTab] = useState(initialTab);
  const id = useId();

  return (
    <div>
      <div role="tablist" aria-label="Calculator" className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`${id}-${item.id}-tab`}
            aria-selected={tab === item.id}
            aria-controls={`${id}-${item.id}-panel`}
            onClick={() => setTab(item.id)}
            className={`px-5 py-3.5 text-sm font-extrabold transition ${tab === item.id ? "bg-navy text-white" : "border border-line bg-white text-navy hover:border-navy"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`${id}-loan-panel`} aria-labelledby={`${id}-loan-tab`} hidden={tab !== "loan"} className="mt-4">
        <LoanCalculator initialSecurity={initialSecurity} />
      </div>
      <div
        role="tabpanel"
        id={`${id}-merchant-cash-advance-panel`}
        aria-labelledby={`${id}-merchant-cash-advance-tab`}
        hidden={tab !== "merchant-cash-advance"}
        className="mt-4"
      >
        <MerchantCashAdvanceCalculator />
      </div>
    </div>
  );
}

function LoanCalculator({ initialSecurity }: { initialSecurity: Security }) {
  const [security, setSecurity] = useState(initialSecurity);
  const [amount, setAmount] = useState(loanSliders.amount.initial);
  const [term, setTerm] = useState(loanSliders.term.initial);
  const [rate, setRate] = useState<PresetChoice>({ preset: "typical", own: "" });

  const presets = loanRatePresets[security];
  const annualRatePercent = chosenValue(rate, presets);
  const rateValid = Number.isFinite(annualRatePercent) && annualRatePercent >= 0 && annualRatePercent <= 100;
  const result = rateValid ? loanRepayment({ amount, annualRatePercent, months: term }) : null;
  const product = security === "secured" ? "secured-business-loan" : "unsecured-business-loan";

  return (
    <CalculatorShell
      inputs={
        <>
          <Segmented
            legend="Security"
            name="security"
            value={security}
            onChange={(value) => setSecurity(value as Security)}
            options={[
              { value: "unsecured", label: "Unsecured" },
              { value: "secured", label: "Secured" },
            ]}
          />
          <SliderField label="Loan amount" slider={loanSliders.amount} value={amount} onChange={setAmount} format={(value) => formatCurrency(value)} />
          <SliderField label="Term" slider={loanSliders.term} value={term} onChange={setTerm} format={months} />
          <PresetField
            legend="Annual interest rate"
            name="loan-rate"
            presets={presets}
            format={(value) => `${value}%`}
            choice={rate}
            onChange={setRate}
            ownLabel="Enter my own rate"
            ownSuffix="%"
            ownInput={{ min: 0, max: 100, step: 0.1 }}
            ownError={rate.preset === "own" && !rateValid ? "Enter a rate between 0% and 100%." : undefined}
          />
          <p className="text-sm text-ink/65">Interest calculated on a reducing balance.</p>
        </>
      }
      rows={
        result
          ? [
              { label: "Monthly cost", value: formatCurrency(result.monthly), primary: true },
              { label: "Total interest", value: formatCurrency(result.totalInterest) },
              { label: `Total repayable over ${months(term)}`, value: formatCurrency(result.totalRepayable) },
            ]
          : null
      }
      disclaimer="Calculations are illustrative only. Actual rates, terms and fees depend on the lender, the business and any security. This is not a quote or an offer."
      enquiryHref={`/apply?${new URLSearchParams({ product, amount: String(amount), term: String(term) })}`}
    />
  );
}

function MerchantCashAdvanceCalculator() {
  const [monthlyTakings, setMonthlyTakings] = useState(mcaSliders.monthlyTakings.initial);
  const [advance, setAdvance] = useState(suggestedAdvance(mcaSliders.monthlyTakings.initial));
  const [advanceMoved, setAdvanceMoved] = useState(false);
  const [factor, setFactor] = useState<PresetChoice>({ preset: "typical", own: "" });
  const [sharePercent, setSharePercent] = useState(mcaSliders.sharePercent.initial);

  const factorRate = chosenValue(factor, factorRatePresets);
  const factorValid = Number.isFinite(factorRate) && factorRate >= 1 && factorRate <= 3;
  const result = factorValid ? merchantCashAdvanceCost({ advance, factorRate, monthlyTakings, sharePercent }) : null;

  function changeTakings(value: number) {
    setMonthlyTakings(value);
    if (!advanceMoved) setAdvance(suggestedAdvance(value));
  }

  return (
    <CalculatorShell
      inputs={
        <>
          <SliderField label="Average monthly card takings" slider={mcaSliders.monthlyTakings} value={monthlyTakings} onChange={changeTakings} format={(value) => formatCurrency(value)} />
          <SliderField
            label="Advance amount"
            slider={mcaSliders.advance}
            value={advance}
            onChange={(value) => {
              setAdvanceMoved(true);
              setAdvance(value);
            }}
            format={(value) => formatCurrency(value)}
            hint="Advances are usually between 100% and 140% of one month's card takings."
          />
          <PresetField
            legend="Factor rate"
            name="factor-rate"
            presets={factorRatePresets}
            format={(value) => value.toFixed(2)}
            choice={factor}
            onChange={setFactor}
            ownLabel="Enter my own"
            ownInput={{ min: 1, max: 3, step: 0.01 }}
            ownError={factor.preset === "own" && !factorValid ? "Enter a factor rate between 1.00 and 3.00." : undefined}
          />
          <SliderField label="Share of card takings repaid" slider={mcaSliders.sharePercent} value={sharePercent} onChange={setSharePercent} format={(value) => `${value}%`} />
        </>
      }
      rows={
        result
          ? [
              { label: "Total repayable", value: formatCurrency(result.totalRepayable), primary: true },
              { label: "Cost of the advance", value: formatCurrency(result.cost) },
              { label: "Estimated monthly repayment", value: formatCurrency(result.monthlyRepayment) },
              { label: "Estimated time to repay", value: months(result.monthsToRepay), summary: true },
            ]
          : null
      }
      disclaimer="A merchant cash advance has a fixed total cost rather than an interest rate. Repayments are taken as a share of your card takings, so the time to repay moves with your trade. Figures are illustrative only and are not a quote or an offer."
      enquiryHref={`/apply?${new URLSearchParams({ product: "merchant-cash-advance", amount: String(advance) })}`}
    />
  );
}

function months(count: number) {
  return `${count} month${count === 1 ? "" : "s"}`;
}

type PresetChoice = { preset: Preset["id"] | "own"; own: string };

function chosenValue(choice: PresetChoice, presets: Preset[]) {
  if (choice.preset === "own") return choice.own.trim() === "" ? Number.NaN : Number(choice.own);
  return presets.find((preset) => preset.id === choice.preset)!.value;
}

function CalculatorShell({
  inputs,
  rows,
  disclaimer,
  enquiryHref,
}: {
  inputs: ReactNode;
  rows: { label: string; value: string; primary?: boolean; summary?: boolean }[] | null;
  disclaimer: string;
  enquiryHref: string;
}) {
  const breakdownId = useId();
  const breakdownRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative border border-line bg-white shadow-[0_30px_80px_rgba(13,34,61,.1)]">
      <div ref={summaryRef} className="sticky top-[76px] z-20 border-b border-white/15 bg-navy px-5 py-3 text-white lg:hidden">
        {rows ? (
          <dl className="flex flex-wrap gap-x-6 gap-y-2">
            {rows.filter((row) => row.primary || row.summary).map((row) => (
              <div key={row.label}>
                <dt className="text-xs text-white/75">{row.label}</dt>
                <dd className="display text-2xl font-extrabold">{row.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-sm">Enter a valid figure to see the breakdown.</p>
        )}
        <a href={`#${breakdownId}`} onClick={() => {
          if (breakdownRef.current && summaryRef.current) {
            breakdownRef.current.style.scrollMarginTop = `${summaryRef.current.offsetHeight + 92}px`;
            breakdownRef.current.focus({ preventScroll: true });
          }
        }} className="mt-1 inline-flex min-h-11 items-center text-sm font-bold text-aqua underline underline-offset-4">
          View breakdown <ArrowRight size={16} className="ml-2" aria-hidden />
        </a>
      </div>
      <div className="grid lg:grid-cols-[1.1fr_.9fr]">
        <div className="grid min-w-0 content-start gap-8 p-6 md:p-10">{inputs}</div>
        <div ref={breakdownRef} id={breakdownId} tabIndex={-1} aria-label="Full cost breakdown" className="min-w-0 scroll-mt-56 bg-navy p-7 text-white md:p-10 lg:scroll-mt-28">
          <div className="flex flex-col lg:sticky lg:top-28">
            <h2 className="text-xs font-extrabold uppercase tracking-[.16em] text-aqua">Cost breakdown</h2>
            {rows ? (
              <dl className="mt-6 divide-y divide-white/15" aria-live="polite">
                {rows.map((row) => (
                  <div key={row.label} className={row.primary ? "pb-6" : "flex items-baseline justify-between gap-4 py-4"}>
                    <dt className="text-sm text-white/65">{row.label}</dt>
                    <dd className={row.primary ? "display mt-2 text-5xl font-extrabold md:text-6xl" : "text-lg font-extrabold"}>{row.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 text-white/65">Enter a valid figure to see the breakdown.</p>
            )}
            <div className="pt-10">
              <p className="flex gap-3 bg-white/5 p-4 text-xs leading-5 text-white/65">
                <Info size={18} className="shrink-0 text-aqua" aria-hidden />
                {disclaimer}
              </p>
              <Link href={enquiryHref} className="secondary-button mt-4 flex items-center justify-between bg-coral px-5 py-4 text-sm font-extrabold text-navy-deep hover:bg-aqua">
                Start an enquiry <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderField({
  label,
  slider,
  value,
  onChange,
  format,
  hint,
}: {
  label: string;
  slider: Slider;
  value: number;
  onChange: (value: number) => void;
  format: (value: number) => string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div className="grid gap-3">
      <label htmlFor={id} className="text-sm font-extrabold text-navy">{label}</label>
      <output htmlFor={id} className="display text-4xl font-extrabold text-navy-deep">{format(value)}</output>
      <div className="flex items-center gap-3">
        <SliderStepButton
          aria-label={`Decrease ${label.toLowerCase()}`}
          aria-controls={id}
          disabled={value <= slider.min}
          onStep={() => onChange(clamp(value - slider.step, slider))}
        >
          <Minus size={22} aria-hidden />
        </SliderStepButton>
        <input
          id={id}
          type="range"
          min={slider.min}
          max={slider.max}
          step={slider.step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          aria-valuetext={format(value)}
          className="h-12 min-w-0 flex-1 accent-[var(--coral)]"
        />
        <SliderStepButton
          aria-label={`Increase ${label.toLowerCase()}`}
          aria-controls={id}
          disabled={value >= slider.max}
          onStep={() => onChange(clamp(value + slider.step, slider))}
        >
          <Plus size={22} aria-hidden />
        </SliderStepButton>
      </div>
      <div className="flex justify-between text-xs text-ink/55" aria-hidden>
        <span>{format(slider.min)}</span>
        <span>{format(slider.max)}</span>
      </div>
      {hint && <p className="text-sm leading-6 text-ink/65">{hint}</p>}
    </div>
  );
}

function SliderStepButton({
  onStep,
  disabled,
  children,
  ...aria
}: {
  onStep: () => void;
  disabled: boolean;
  children: ReactNode;
  "aria-label": string;
  "aria-controls": string;
}) {
  const [holding, setHolding] = useState(false);
  const repeated = useRef(false);
  const repeatStep = useEffectEvent(() => {
    if (disabled) return;
    repeated.current = true;
    onStep();
  });

  useEffect(() => {
    if (!holding || disabled) return;
    let repetitions = 0;
    let timer: ReturnType<typeof setTimeout>;
    function repeat() {
      repeatStep();
      repetitions += 1;
      timer = setTimeout(repeat, Math.max(50, 150 - repetitions * 10));
    }
    function stop() {
      setHolding(false);
    }
    timer = setTimeout(repeat, 400);
    window.addEventListener("blur", stop);
    document.addEventListener("visibilitychange", stop);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("blur", stop);
      document.removeEventListener("visibilitychange", stop);
    };
  }, [holding, disabled]);

  return (
    <button
      {...aria}
      type="button"
      disabled={disabled}
      onPointerDown={(event) => {
        if (event.button !== 0 || !event.isPrimary) return;
        repeated.current = false;
        event.currentTarget.setPointerCapture(event.pointerId);
        setHolding(true);
      }}
      onPointerUp={() => setHolding(false)}
      onPointerCancel={() => setHolding(false)}
      onPointerLeave={() => setHolding(false)}
      onLostPointerCapture={() => setHolding(false)}
      onBlur={() => setHolding(false)}
      onContextMenu={(event) => event.preventDefault()}
      onClick={(event) => {
        if (event.detail === 0 || !repeated.current) onStep();
      }}
      className="grid size-12 shrink-0 touch-none select-none place-items-center rounded-full border border-navy/25 bg-white text-navy transition hover:border-navy hover:bg-sky disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  );
}

function Segmented({
  legend,
  name,
  value,
  onChange,
  options,
}: {
  legend: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-extrabold text-navy">{legend}</legend>
      <div className="grid grid-cols-2 border border-line p-1">
        {options.map((option) => (
          <label key={option.value} className={`cursor-pointer px-4 py-3 text-center text-sm font-extrabold transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-coral ${value === option.value ? "bg-navy text-white" : "text-navy hover:bg-mist"}`}>
            <input type="radio" name={name} value={option.value} checked={value === option.value} onChange={() => onChange(option.value)} className="sr-only" />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function PresetField({
  legend,
  name,
  presets,
  format,
  choice,
  onChange,
  ownLabel,
  ownSuffix,
  ownInput,
  ownError,
}: {
  legend: string;
  name: string;
  presets: Preset[];
  format: (value: number) => string;
  choice: PresetChoice;
  onChange: (choice: PresetChoice) => void;
  ownLabel: string;
  ownSuffix?: string;
  ownInput: { min: number; max: number; step: number };
  ownError?: string;
}) {
  const ownId = useId();
  const optionClass = (selected: boolean) =>
    `cursor-pointer border p-4 transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-coral ${selected ? "border-navy bg-navy text-white" : "border-line text-navy hover:border-navy"}`;

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-extrabold text-navy">{legend}</legend>
      <div className="grid gap-2 sm:grid-cols-3">
        {presets.map((preset) => {
          const selected = choice.preset === preset.id;
          return (
            <label key={preset.id} className={optionClass(selected)}>
              <input type="radio" name={name} checked={selected} onChange={() => onChange({ ...choice, preset: preset.id })} className="sr-only" />
              <span className="block text-sm font-extrabold">{preset.label}</span>
              <span className="display mt-1 block text-2xl font-extrabold">{format(preset.value)}</span>
              <span className={`mt-1 block text-xs ${selected ? "text-white/70" : "text-ink/60"}`}>{preset.description}</span>
            </label>
          );
        })}
      </div>
      <label className={`mt-2 flex items-center gap-3 ${optionClass(choice.preset === "own")}`}>
        <input
          type="radio"
          name={name}
          checked={choice.preset === "own"}
          onChange={() => {
            const current = presets.find((preset) => preset.id === choice.preset)?.value;
            onChange({ preset: "own", own: choice.own || (current === undefined ? "" : String(current)) });
          }}
          className="sr-only"
        />
        <span className="text-sm font-extrabold">{ownLabel}</span>
      </label>
      {choice.preset === "own" && (
        <div className="mt-3 grid gap-2">
          <label htmlFor={ownId} className="sr-only">{ownLabel}</label>
          <div className="relative max-w-48">
            <input
              id={ownId}
              type="number"
              inputMode="decimal"
              min={ownInput.min}
              max={ownInput.max}
              step={ownInput.step}
              value={choice.own}
              onChange={(event) => onChange({ ...choice, own: event.target.value })}
              aria-invalid={Boolean(ownError)}
              aria-describedby={`${ownId}-error`}
              className="w-full border border-line py-3 pl-4 pr-9 text-navy"
            />
            {ownSuffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-navy" aria-hidden>{ownSuffix}</span>}
          </div>
          <span id={`${ownId}-error`} className="min-h-5 text-xs font-bold text-red-700">{ownError}</span>
        </div>
      )}
    </fieldset>
  );
}
