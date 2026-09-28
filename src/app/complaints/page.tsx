import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = { title: "Complaints procedure" };

export default function ComplaintsPage() {
  return (
    <LegalPage title="Complaints procedure" intro="How to let Float know if something has not met your expectations.">
      <LegalSection title="Tell us first"><p>Please contact Float with the details of your concern so we can understand what happened and work towards a fair response.</p></LegalSection>
      <LegalSection title="Our response"><p>We will acknowledge your complaint, investigate the relevant facts and explain our response. We will use the contact details provided to keep you updated.</p></LegalSection>
      <LegalSection title="Further information"><p>Float is a commercial finance broker and not a lender. The lender’s own complaints process may also apply where your concern relates to a lender’s product or decision.</p></LegalSection>
    </LegalPage>
  );
}
