import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name."),
  lastName: z.string().trim().min(1, "Enter your last name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  product: z.enum([
    "general",
    "cash-flow-finance",
    "business-loan",
    "merchant-cash-advance",
    "working-capital",
    "revolving-credit",
    "asset-finance",
  ]),
  message: z.string().trim().min(10, "Please add at least 10 characters."),
  privacy: z.literal(true, { error: "Confirm that you have read the privacy notice." }),
});

export const productOptions = [
  { value: "general", label: "Not sure / general enquiry" },
  { value: "cash-flow-finance", label: "Cash flow finance" },
  { value: "business-loan", label: "Business cash flow loan" },
  { value: "merchant-cash-advance", label: "Merchant cash advance" },
  { value: "working-capital", label: "Working capital loan" },
  { value: "revolving-credit", label: "Revolving credit facility" },
  { value: "asset-finance", label: "Asset finance" },
] as const;

export type ContactFormData = z.infer<typeof contactSchema>;
