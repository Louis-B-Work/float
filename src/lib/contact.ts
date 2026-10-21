import { z } from "zod";

type Option = { readonly value: string; readonly label: string };

function values<const T extends readonly Option[]>(options: T) {
  return options.map((option) => option.value) as unknown as [T[number]["value"], ...T[number]["value"][]];
}

export const productOptions = [
  { value: "general", label: "Not sure" },
  { value: "unsecured-business-loan", label: "Unsecured business loan" },
  { value: "secured-business-loan", label: "Secured business loan" },
  { value: "merchant-cash-advance", label: "Merchant cash advance" },
  { value: "working-capital", label: "Working capital loan" },
  { value: "revolving-credit", label: "Revolving credit facility" },
  { value: "asset-finance", label: "Asset finance" },
] as const;

export const amountBands = [
  { value: "under-25k", label: "Under £25,000" },
  { value: "25k-50k", label: "£25,000 to £50,000" },
  { value: "50k-100k", label: "£50,000 to £100,000" },
  { value: "100k-250k", label: "£100,000 to £250,000" },
  { value: "over-250k", label: "Over £250,000" },
] as const;

export const businessTypes = [
  { value: "limited-company", label: "Limited company" },
  { value: "llp", label: "LLP" },
  { value: "partnership", label: "Partnership" },
  { value: "sole-trader", label: "Sole trader" },
] as const;

export const turnoverBands = [
  { value: "under-100k", label: "Under £100,000" },
  { value: "100k-250k", label: "£100,000 to £250,000" },
  { value: "250k-1m", label: "£250,000 to £1,000,000" },
  { value: "1m-5m", label: "£1,000,000 to £5,000,000" },
  { value: "over-5m", label: "Over £5,000,000" },
] as const;

export const tradingHistoryOptions = [
  { value: "under-1", label: "Under 1 year" },
  { value: "1-2", label: "1 to 2 years" },
  { value: "2-5", label: "2 to 5 years" },
  { value: "5-plus", label: "5 years or more" },
] as const;

export const timescaleOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "within-1-month", label: "Within a month" },
  { value: "1-3-months", label: "In 1 to 3 months" },
  { value: "3-plus-months", label: "In more than 3 months" },
  { value: "exploring", label: "Just exploring for now" },
] as const;

export const smallBorrowerRule =
  "Sole traders and partnerships of fewer than four partners can only be helped where the amount needed is over £25,000.";

const contactDetails = {
  firstName: z.string().trim().min(1, "Enter your first name."),
  lastName: z.string().trim().min(1, "Enter your last name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  product: z.enum(values(productOptions), { error: "Choose what we can help with." }),
  amount: z.enum(values(amountBands), { error: "Choose roughly how much you need." }),
  privacy: z.literal(true, { error: "Confirm that you have read the privacy notice." }),
};

export const contactSchema = z.object({
  ...contactDetails,
  message: z.string().trim().min(10, "Please add at least 10 characters."),
});

export const applySchema = z.object({
  ...contactDetails,
  businessName: z.string().trim().min(1, "Enter the business name."),
  businessType: z.enum(values(businessTypes), { error: "Choose the business type." }),
  purpose: z.string().trim().min(3, "Tell us briefly what the funding is for."),
  turnover: z.enum(values(turnoverBands), { error: "Choose the approximate annual turnover." }),
  tradingHistory: z.enum(values(tradingHistoryOptions), { error: "Choose how long the business has been trading." }),
  timescale: z.enum(values(timescaleOptions), { error: "Choose when you need the funding." }),
  notes: z.string().trim().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ApplyFormData = z.infer<typeof applySchema>;
export type EnquiryData = ContactFormData | ApplyFormData;
export type ProductValue = (typeof productOptions)[number]["value"];
export type AmountBand = (typeof amountBands)[number]["value"];

export function isProductValue(value: string | null): value is ProductValue {
  return productOptions.some((option) => option.value === value);
}

/** The form band a calculator amount falls into. Band edges belong to the lower band. */
export function amountBandFor(amount: number): AmountBand {
  if (amount < 25_000) return "under-25k";
  if (amount <= 50_000) return "25k-50k";
  if (amount <= 100_000) return "50k-100k";
  if (amount <= 250_000) return "100k-250k";
  return "over-250k";
}

// Destination is TBC (CRM, or Google Sheets as a fallback). Until it is wired in,
// enquiries are validated in the browser and not sent anywhere.
export async function submitEnquiry(data: EnquiryData): Promise<void> {
  void data;
}
