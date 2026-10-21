import { describe, expect, it } from "vitest";
import { loanRepayment, merchantCashAdvanceCost, suggestedAdvance } from "./calculator";

describe("loanRepayment", () => {
  it("matches the standard reducing-balance formula", () => {
    const result = loanRepayment({ amount: 50_000, annualRatePercent: 19.9, months: 36 });
    expect(result.monthly).toBeCloseTo(1855.63, 2);
    expect(result.totalRepayable).toBeCloseTo(result.monthly * 36, 6);
    expect(result.totalInterest).toBeCloseTo(result.totalRepayable - 50_000, 6);
  });

  it("splits the amount evenly at 0%", () => {
    const result = loanRepayment({ amount: 12_000, annualRatePercent: 0, months: 12 });
    expect(result.monthly).toBe(1_000);
    expect(result.totalInterest).toBe(0);
  });

  it("costs more at a higher rate", () => {
    const best = loanRepayment({ amount: 100_000, annualRatePercent: 6.9, months: 60 });
    const higher = loanRepayment({ amount: 100_000, annualRatePercent: 29.9, months: 60 });
    expect(higher.totalInterest).toBeGreaterThan(best.totalInterest);
  });

  it.each([
    { amount: 0, annualRatePercent: 10, months: 12 },
    { amount: 10_000, annualRatePercent: -1, months: 12 },
    { amount: 10_000, annualRatePercent: Number.NaN, months: 12 },
    { amount: 10_000, annualRatePercent: 10, months: 0 },
  ])("rejects invalid input %o", (input) => {
    expect(() => loanRepayment(input)).toThrow();
  });
});

describe("merchantCashAdvanceCost", () => {
  it("works out cost, repayment and time to repay", () => {
    const result = merchantCashAdvanceCost({ advance: 36_000, factorRate: 1.25, monthlyTakings: 30_000, sharePercent: 12 });
    expect(result.totalRepayable).toBe(45_000);
    expect(result.cost).toBe(9_000);
    expect(result.monthlyRepayment).toBe(3_600);
    expect(result.monthsToRepay).toBe(13);
  });

  it("does not add a month for floating-point noise on an exact fit", () => {
    const result = merchantCashAdvanceCost({ advance: 30_000, factorRate: 1.2, monthlyTakings: 30_000, sharePercent: 12 });
    expect(result.monthsToRepay).toBe(10);
  });

  it("rejects a factor rate below 1", () => {
    expect(() => merchantCashAdvanceCost({ advance: 30_000, factorRate: 0.9, monthlyTakings: 30_000, sharePercent: 12 })).toThrow();
  });
});

describe("suggestedAdvance", () => {
  it("is 1.2 times monthly takings, kept within the advance range", () => {
    expect(suggestedAdvance(30_000)).toBe(36_000);
    expect(suggestedAdvance(5_000)).toBe(10_000);
    expect(suggestedAdvance(500_000)).toBe(600_000);
    expect(suggestedAdvance(900_000)).toBe(1_000_000);
  });
});
