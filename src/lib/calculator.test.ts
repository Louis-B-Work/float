import { describe, expect, it } from "vitest";
import { calculateIndicativeRange } from "./calculator";

describe("calculateIndicativeRange", () => {
  it("returns an ordered positive range", () => {
    const result = calculateIndicativeRange({
      annualTurnover: 500_000,
      tradingHistory: "2-5",
      creditProfile: "fair",
      product: "business-loan",
    });
    expect(result.minimum).toBeGreaterThan(0);
    expect(result.maximum).toBeGreaterThanOrEqual(result.minimum);
  });

  it("caps business loan ranges", () => {
    const result = calculateIndicativeRange({
      annualTurnover: 20_000_000,
      tradingHistory: "5-plus",
      creditProfile: "strong",
      product: "business-loan",
    });
    expect(result.maximum).toBe(500_000);
  });

  it("rejects invalid turnover", () => {
    expect(() =>
      calculateIndicativeRange({
        annualTurnover: 9_999,
        tradingHistory: "1-2",
        creditProfile: "fair",
        product: "asset-finance",
      }),
    ).toThrow();
  });

  it("reduces the range for a shorter trading history", () => {
    const stable = calculateIndicativeRange({
      annualTurnover: 500_000,
      tradingHistory: "5-plus",
      creditProfile: "strong",
      product: "business-loan",
    });
    const newBusiness = calculateIndicativeRange({
      annualTurnover: 500_000,
      tradingHistory: "under-1",
      creditProfile: "strong",
      product: "business-loan",
    });
    expect(newBusiness.maximum).toBeLessThan(stable.maximum);
  });
});
