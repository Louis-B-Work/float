import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };
export default function PrivacyPage() {
  return <LegalPage title="Privacy policy" intro="How Float expects to collect, use and protect personal information.">
    <LegalSection title="Who is responsible"><p>{company.legalName}, at {company.address}, would act as the controller for information submitted through this website.</p></LegalSection>
    <LegalSection title="Information we may collect"><p>Contact details, business information, the content of an enquiry, website diagnostics and information later needed to assess or introduce a commercial finance request.</p></LegalSection>
    <LegalSection title="How information may be used"><p>To respond to enquiries, understand finance requirements, make requested lender introductions, meet legal obligations, prevent fraud and improve the service. A lawful basis must be confirmed for each use before launch.</p></LegalSection>
    <LegalSection title="Sharing and retention"><p>Information may be shared with relevant lenders and professional service providers when necessary. Final retention periods, supplier details and international transfer safeguards must be completed before launch.</p></LegalSection>
    <LegalSection title="Your rights"><p>Depending on the circumstances, individuals may have rights of access, correction, deletion, restriction, objection and portability, and may complain to the Information Commissioner’s Office.</p></LegalSection>
  </LegalPage>;
}
