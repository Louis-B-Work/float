import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commission disclosure",
  description: "How Float is paid when a commercial finance introduction completes, and what that means for you.",
};

export default function CommissionDisclosurePage() {
  return (
    <LegalPage title="Commission disclosure" intro="How Float is paid, and what that means for you.">
      <LegalSection title="Our role">
        <p>
          Float is a commercial finance broker, not a lender. We introduce businesses to a panel of lenders for non-regulated commercial finance. Our panel is made up of lenders we have agreements with. It does not cover every lender or product available in the market.
        </p>
      </LegalSection>

      <LegalSection title="How we are paid">
        <p>
          We do not charge businesses a fee for making an enquiry or for us looking at their options. If finance completes, we are normally paid a commission by the lender. Depending on the lender and product, this may be:
        </p>
        <LegalList
          items={[
            "a fixed amount;",
            "a percentage of the amount financed; or",
            "an amount linked to the interest rate or total charges under the agreement.",
          ]}
        />
        <p>
          If we ever ask you to pay a fee directly, we will tell you the amount and what it is for, and agree it with you in writing before you are committed to paying it.
        </p>
      </LegalSection>

      <LegalSection title="What this means for you">
        <LegalList
          items={[
            "Commission rates can differ between lenders and products.",
            "Where commission is linked to the rate or charges, a higher commission can mean you pay more for the finance.",
            "We will tell you the amount and basis of any commission before you decide whether to go ahead.",
            "You can ask us at any time how much we will receive and how it has been worked out.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Your choice">
        <p>
          You are never obliged to proceed with any option we introduce. Any finance is provided by the lender, not by Float, and is subject to the lender&rsquo;s own assessment, terms and documentation. You can read more in our{" "}
          <Link href="/terms" className="font-bold text-navy underline">terms of use</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Asking about commission">
        <p>
          To ask about commission on a specific enquiry, email <a href={`mailto:${company.email}`} className="font-bold text-navy underline">{company.email}</a> and we will confirm the details in writing.
        </p>
      </LegalSection>
    </LegalPage>
  );
}