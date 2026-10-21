import { amountRanges } from "./products";

export type Security = "unsecured" | "secured";

export type Preset = {
  id: "best" | "typical" | "higher";
  label: string;
  description: string;
  value: number;
};

export type Slider = { min: number; max: number; step: number; initial: number };

export const loanSliders = {
  amount: { min: amountRanges.businessLoan.min, max: amountRanges.businessLoan.max, step: 5_000, initial: 50_000 },
  term: { min: 6, max: 72, step: 1, initial: 36 },
} satisfies Record<string, Slider>;

const startingRates: Preset[] = [
  { id: "best", label: "Best", description: "Strongest profile", value: 6.9 },
  { id: "typical", label: "Typical", description: "Standard profile", value: 19.9 },
  { id: "higher", label: "Higher", description: "Newer or higher risk", value: 29.9 },
];

// Starting presets match Funding Flow's. Float's own figures are TBC, as is whether Secured gets its own set.
export const loanRatePresets: Record<Security, Preset[]> = {
  unsecured: startingRates,
  secured: startingRates,
};

export const mcaSliders = {
  monthlyTakings: { min: 5_000, max: 500_000, step: 1_000, initial: 30_000 },
  advance: { min: amountRanges.merchantCashAdvance.min, max: amountRanges.merchantCashAdvance.max, step: 1_000, initial: 36_000 },
  sharePercent: { min: 5, max: 25, step: 1, initial: 12 },
} satisfies Record<string, Slider>;

// Factor rate presets are TBC.
export const factorRatePresets: Preset[] = [
  { id: "best", label: "Best", description: "Strongest profile", value: 1.15 },
  { id: "typical", label: "Typical", description: "Standard profile", value: 1.25 },
  { id: "higher", label: "Higher", description: "Newer or higher risk", value: 1.35 },
];

/** Advances are usually 100% to 140% of one month's card takings; the calculator suggests the midpoint. */
export const suggestedAdvanceRatio = 1.2;

export function clamp(value: number, { min, max }: { min: number; max: number }) {
  return Math.min(max, Math.max(min, value));
}

export function suggestedAdvance(monthlyTakings: number) {
  const { step } = mcaSliders.advance;
  return clamp(Math.round((monthlyTakings * suggestedAdvanceRatio) / step) * step, mcaSliders.advance);
}

/** Standard reducing-balance repayment. */
export function loanRepayment({
  amount,
  annualRatePercent,
  months,
}: {
  amount: number;
  annualRatePercent: number;
  months: number;
}) {
  if (!(amount > 0) || !(months > 0) || !(annualRatePercent >= 0)) {
    throw new Error("Enter a positive amount and term, and a rate of 0% or more.");
  }

  const monthlyRate = annualRatePercent / 100 / 12;
  const monthly = monthlyRate === 0 ? amount / months : (amount * monthlyRate) / (1 - (1 + monthlyRate) ** -months);
  const totalRepayable = monthly * months;

  return { monthly, totalInterest: totalRepayable - amount, totalRepayable };
}

export function merchantCashAdvanceCost({
  advance,
  factorRate,
  monthlyTakings,
  sharePercent,
}: {
  advance: number;
  factorRate: number;
  monthlyTakings: number;
  sharePercent: number;
}) {
  if (!(advance > 0) || !(factorRate >= 1) || !(monthlyTakings > 0) || !(sharePercent > 0)) {
    throw new Error("Enter a positive advance, takings and share, and a factor rate of at least 1.");
  }

  const totalRepayable = advance * factorRate;
  const monthlyRepayment = monthlyTakings * (sharePercent / 100);
  // Rounded before ceil so floating-point noise (e.g. 10.0000000001) does not add a month.
  const monthsToRepay = Math.ceil(Number((totalRepayable / monthlyRepayment).toFixed(6)));

  return {
    totalRepayable,
    cost: totalRepayable - advance,
    monthlyRepayment,
    monthsToRepay,
  };
}
