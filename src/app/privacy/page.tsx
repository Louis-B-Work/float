import type { Metadata } from "next";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Float Commercial Finance Limited collects, uses, shares and protects personal information, and the rights you have over it.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" intro="How Float collects, uses, shares and protects personal information, and the rights you have over it.">
      <LegalSection title="Who we are">
        <p>
          {company.legalName} (&ldquo;Float&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a commercial finance broker registered in England and Wales under company number {company.companyNumber}, at {company.address}. We are the controller of the personal information described in this policy and are registered with the Information Commissioner&rsquo;s Office under registration number {company.icoNumber}.
        </p>
        <p>This policy applies to information we collect through this website, by email, by phone and in the course of arranging an introduction to a lender.</p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>Depending on how you deal with us, we may collect:</p>
        <LegalList
          items={[
            "Identity and contact details, such as your name, job title, email address and phone number.",
            "Business details, such as the company name, trading history, turnover, what the funding is for and the amount needed.",
            "Financial information you choose to share, such as bank statements, accounts, management figures and details of existing finance.",
            "Information about directors, partners, owners or guarantors where a lender needs it to assess an application, including identification documents.",
            "The content of your enquiry and any correspondence with us.",
            "Technical information when you visit the website, such as your IP address, browser type and the pages you view, which our hosting provider processes to deliver the site securely.",
          ]}
        />
        <p>We do not ask for special category information, such as health data, and ask that you do not send it to us.</p>
      </LegalSection>

      <LegalSection title="Where it comes from">
        <p>
          Most information comes directly from you. We may also receive information from an introducer who refers you to us with your agreement, from lenders we introduce you to, and from publicly available sources such as Companies House.
        </p>
      </LegalSection>

      <LegalSection title="How we use it and our lawful basis">
        <LegalList
          items={[
            <><strong>To respond to your enquiry and explain your options</strong>, because it is necessary to take steps at your request before entering into an agreement, or in our legitimate interests in running a commercial finance brokerage.</>,
            <><strong>To introduce your business to lenders</strong> and pass them the information they need to assess an application, for the same reasons.</>,
            <><strong>To keep records, prevent fraud and meet our legal obligations</strong>, such as anti-money laundering and tax requirements, where the law requires it or where it is in our legitimate interests to protect our business and the lenders we work with.</>,
            <><strong>To keep the website secure and working properly</strong>, in our legitimate interests.</>,
            <><strong>To send you occasional updates</strong> about our services, only where you have agreed to receive them. You can opt out at any time.</>,
          ]}
        />
        <p>Where we rely on legitimate interests, we have considered that those interests are not overridden by your rights. You can ask us for more detail.</p>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <LegalList
          items={[
            "Lenders on our panel that we introduce you to, with your agreement. Each lender becomes a separate controller of the information it receives and will give you its own privacy notice. Lenders may carry out credit and fraud prevention checks as part of their assessment.",
            "An introducer who referred you to us, limited to progress updates, where you have agreed to this.",
            "Service providers who support our business, such as IT, email, website hosting and document storage providers. They act on our instructions and must keep your information secure.",
            "Professional advisers, regulators, law enforcement or other authorities where we are required or permitted by law.",
          ]}
        />
        <p>We do not sell personal information.</p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>
          Some of our service providers may store or process information outside the UK. Where they do, we make sure the transfer is protected, for example by relying on UK adequacy regulations or by using the International Data Transfer Agreement or an equivalent approved safeguard.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep personal information only for as long as we need it for the purposes above. If an enquiry does not proceed, we normally keep it for up to two years in case you come back to us. Where finance completes, we normally keep records for six years after our relationship ends, so we can meet legal and regulatory obligations and deal with any questions or claims. After that, information is securely deleted or anonymised.
        </p>
      </LegalSection>

      <LegalSection title="Keeping it secure">
        <p>
          We use appropriate technical and organisational measures to protect personal information, including access controls and encrypted connections. Only people who need the information to do their job can see it.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Under UK data protection law you have the right to:</p>
        <LegalList
          items={[
            "ask for a copy of the personal information we hold about you;",
            "ask us to correct information that is wrong or incomplete;",
            "ask us to delete information in certain circumstances;",
            "ask us to restrict or stop using your information in certain circumstances;",
            "object to our use of your information where we rely on legitimate interests, and to direct marketing at any time;",
            "ask us to transfer information you gave us to another organisation, in certain circumstances;",
            "withdraw your consent at any time, where we rely on consent.",
          ]}
        />
        <p>
          To use any of these rights, email <a href={`mailto:${company.email}`} className="font-bold text-navy underline">{company.email}</a>. We will respond within one month. There is normally no charge.
        </p>
      </LegalSection>

      <LegalSection title="Complaints to the ICO">
        <p>
          If you are unhappy with how we have handled your information, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner&rsquo;s Office at <a href="https://ico.org.uk/make-a-complaint/" className="font-bold text-navy underline">ico.org.uk</a> or on 0303 123 1113.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>We may update this policy from time to time. The current version will always be on this page.</p>
      </LegalSection>
    </LegalPage>
  );
}
