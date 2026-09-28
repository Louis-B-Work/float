import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = { title: "Commission disclosure" };

export default function CommissionDisclosurePage() {
  return (
    <LegalPage title="Commission disclosure" intro="How Float is paid when a commercial finance introduction completes.">
      <LegalSection title="Our role"><p>Float is a commercial finance broker, not a lender. We introduce businesses to a panel of lenders for non-regulated commercial finance.</p></LegalSection>
      <LegalSection title="How we may be paid"><p>We may receive commission from a lender if finance completes. The amount and basis of any commission will be disclosed during your journey before you decide whether to proceed.</p></LegalSection>
      <LegalSection title="Your choice"><p>You are not obliged to proceed with any option introduced by Float. Finance remains subject to the relevant lender’s assessment, terms and documentation.</p></LegalSection>
    </LegalPage>
  );
}
