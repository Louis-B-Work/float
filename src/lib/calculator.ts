export type CreditProfile = "strong" | "fair" | "challenged";
export type TradingHistory = "under-1" | "1-2" | "2-5" | "5-plus";
export type ProductType = "business-loan" | "asset-finance";

export interface CalculatorInputs {
  annualTurnover: number;
  tradingHistory: TradingHistory;
  creditProfile: CreditProfile;
  product: ProductType;
}

const historyFactors: Record<TradingHistory, number> = {
  "under-1": 0.35,
  "1-2": 0.65,
  "2-5": 0.9,
  "5-plus": 1,
};

const creditFactors: Record<CreditProfile, number> = {
  strong: 1,
  fair: 0.72,
  challenged: 0.42,
};

export function calculateIndicativeRange(inputs: CalculatorInputs) {
  if (!Number.isFinite(inputs.annualTurnover) || inputs.annualTurnover < 10000) {
    throw new Error("Annual turnover must be at least £10,000.");
  }

  const baseRatio = inputs.product === "asset-finance" ? 0.28 : 0.2;
  const cap = inputs.product === "asset-finance" ? 1_000_000 : 500_000;
  const midpoint =
    inputs.annualTurnover *
    baseRatio *
    historyFactors[inputs.tradingHistory] *
    creditFactors[inputs.creditProfile];
  const roundTo = midpoint >= 100_000 ? 5_000 : 1_000;
  const round = (value: number) =>
    Math.max(roundTo, Math.round(value / roundTo) * roundTo);
  const maximum = Math.min(cap, round(midpoint * 1.2));
  const minimum = Math.min(maximum, round(midpoint * 0.7));

  return { minimum, maximum };
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}
