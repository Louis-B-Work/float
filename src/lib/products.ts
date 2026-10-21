import { formatCurrency } from "./format";

export type AmountRange = {
  min: number;
  max: number;
  /** Extra qualifier shown after the range. */
  note?: string;
};

// One range per product, used on every page, card, calculator and form that mentions an amount.
export const amountRanges = {
  businessLoan: { min: 10_000, max: 2_000_000 },
  merchantCashAdvance: {
    min: 10_000,
    max: 1_000_000,
    note: "typically between 100% and 140% of one month's card takings",
  },
} satisfies Record<string, AmountRange>;

export function formatAmountRange(range: AmountRange) {
  const base = `${formatCurrency(range.min)} to ${formatCurrency(range.max)}`;
  return range.note ? `${base}, ${range.note}` : base;
}
