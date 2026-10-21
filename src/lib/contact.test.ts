import { describe, expect, it } from "vitest";
import { amountBandFor, applySchema, contactSchema, isProductValue } from "./contact";

const details = {
  firstName: "Sam",
  lastName: "Jones",
  email: "sam@example.com",
  phone: "07700 900123",
  product: "unsecured-business-loan",
  amount: "50k-100k",
  privacy: true,
};

describe("contactSchema", () => {
  it("accepts a complete enquiry", () => {
    expect(contactSchema.safeParse({ ...details, message: "Looking to fund new stock." }).success).toBe(true);
  });

  it("requires an amount band", () => {
    const result = contactSchema.safeParse({ ...details, amount: "", message: "Looking to fund new stock." });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].path).toEqual(["amount"]);
  });

  it("rejects the retired cash flow product values", () => {
    expect(contactSchema.safeParse({ ...details, product: "cash-flow-finance", message: "Looking to fund new stock." }).success).toBe(false);
  });
});

describe("applySchema", () => {
  const application = {
    ...details,
    businessName: "Jones Bakery Ltd",
    businessType: "limited-company",
    purpose: "New oven",
    turnover: "250k-1m",
    tradingHistory: "2-5",
    timescale: "within-1-month",
    notes: "",
  };

  it("accepts a complete enquiry without notes", () => {
    expect(applySchema.safeParse(application).success).toBe(true);
  });

  it.each(["businessName", "businessType", "purpose", "turnover", "tradingHistory", "timescale"])(
    "requires %s",
    (field) => {
      const result = applySchema.safeParse({ ...application, [field]: "" });
      expect(result.success).toBe(false);
      expect(result.error?.issues.map((issue) => issue.path[0])).toContain(field);
    },
  );
});

describe("amountBandFor", () => {
  it.each([
    [10_000, "under-25k"],
    [24_999, "under-25k"],
    [25_000, "25k-50k"],
    [50_000, "25k-50k"],
    [50_001, "50k-100k"],
    [250_000, "100k-250k"],
    [2_000_000, "over-250k"],
  ])("puts %i in %s", (amount, band) => {
    expect(amountBandFor(amount)).toBe(band);
  });
});

describe("isProductValue", () => {
  it("recognises form products only", () => {
    expect(isProductValue("merchant-cash-advance")).toBe(true);
    expect(isProductValue("business-loan")).toBe(false);
    expect(isProductValue(null)).toBe(false);
  });
});
