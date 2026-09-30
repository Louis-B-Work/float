import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms on which you may use the Float website, including the calculator and enquiry form.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" intro="The terms on which you may use this website. By using the site, you accept them.">
      <LegalSection title="Who we are">
        <p>
          This website is operated by {company.legalName}, a company registered in England and Wales under company number {company.companyNumber}, whose registered office is at {company.address}. You can contact us at{" "}
          <a href={`mailto:${company.email}`} className="font-bold text-navy underline">{company.email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Our role as a broker">
        <p>
          Float is a commercial finance broker, not a lender. We introduce businesses to a panel of lenders for non-regulated commercial finance. We do not lend money, make lending decisions or set the terms of any finance. Our panel does not cover every lender in the market.
        </p>
        <p>
          We may receive commission from a lender if finance completes. How this works is explained in our{" "}
          <Link href="/commission-disclosure" className="font-bold text-navy underline">commission disclosure</Link>, and the amount and basis will be confirmed to you before you commit.
        </p>
      </LegalSection>

      <LegalSection title="Information, not advice">
        <p>
          Content on this website is general information about commercial finance. It is not financial, legal, tax or accounting advice and does not take your circumstances into account. You should take independent professional advice before making decisions, particularly on tax treatment.
        </p>
      </LegalSection>

      <LegalSection title="Calculator estimates">
        <p>
          The calculator gives a broad, indicative range based on a few details you enter and general assumptions. It is not an offer, quote, approval or promise of finance. The amount a lender offers, if any, may be higher or lower, and will depend on its own assessment.
        </p>
      </LegalSection>

      <LegalSection title="No guarantee of finance">
        <p>
          Making an enquiry does not guarantee that we will find finance for your business or that a lender will approve an application. All finance is subject to status, lender criteria, affordability and documentation. Security or a personal guarantee may be required.
        </p>
      </LegalSection>

      <LegalSection title="Information you give us">
        <p>
          You agree that information you provide to us is accurate and not misleading, and that you are authorised to share it on behalf of the business. We rely on it when introducing you to lenders. How we handle personal information is explained in our{" "}
          <Link href="/privacy" className="font-bold text-navy underline">privacy policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Using this website">
        <p>You must not:</p>
        <LegalList
          items={[
            "use the website for any unlawful or fraudulent purpose;",
            "try to gain unauthorised access to the website or the systems it runs on;",
            "introduce viruses or other harmful material;",
            "submit false information or enquiries on behalf of a business without its authority.",
          ]}
        />
        <p>
          We aim to keep the website available and its content accurate and up to date, but we do not promise that it will always be available, uninterrupted or error-free. We may change or remove content at any time.
        </p>
      </LegalSection>

      <LegalSection title="Links to other websites">
        <p>Where we link to other websites, we do so for information only. We are not responsible for their content or how they handle your information.</p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The Float name and logo, the design of this website and its original content belong to us or our licensors. You may view and print pages for your own business use, but you may not copy, reproduce or republish them without our permission, except where the law allows. Photography is used under licence from third parties.
        </p>
      </LegalSection>

      <LegalSection title="Our liability">
        <p>
          We are not liable for any loss arising from your reliance on general information on this website, or from a lender&rsquo;s decision or the terms it offers. Nothing in these terms limits or excludes liability that cannot be limited or excluded by law, including liability for death or personal injury caused by negligence, or for fraud.
        </p>
      </LegalSection>

      <LegalSection title="Changes and governing law">
        <p>
          We may update these terms from time to time. The version on this page applies when you use the site. These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction over any dispute.
        </p>
      </LegalSection>
    </LegalPage>
  );
}