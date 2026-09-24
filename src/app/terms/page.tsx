import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms of use" };
export default function TermsPage() {
  return <LegalPage title="Terms of use" intro="The basis on which visitors may use the Float website.">
    <LegalSection title="Information only"><p>Website content and calculator results are general information, not financial, legal, tax or accounting advice, and are not an offer or guarantee of finance.</p></LegalSection>
    <LegalSection title="Broker role"><p>Float is a commercial finance broker, not a lender. Any finance is subject to a lender’s assessment, terms and documentation. Float may receive commission when finance completes.</p></LegalSection>
    <LegalSection title="Website availability"><p>Reasonable efforts may be made to keep information accurate and the website available, but no uninterrupted availability or suitability for a particular purpose is promised.</p></LegalSection>
    <LegalSection title="Intellectual property"><p>Website design, original copy and Float brand assets may not be reproduced without permission, except where law permits.</p></LegalSection>
  </LegalPage>;
}
