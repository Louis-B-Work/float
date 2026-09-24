import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name."),
  lastName: z.string().trim().min(1, "Enter your last name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  product: z.enum(["business-loan", "asset-finance", "general"]),
  message: z.string().trim().min(10, "Please add at least 10 characters."),
  privacy: z.literal(true, { error: "Confirm that you have read the privacy notice." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
