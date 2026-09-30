import type { Metadata } from "next";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints procedure",
  description: "How to make a complaint to Float, what to include, and how and when we will respond.",
};

export default function ComplaintsPage() {
  return (
    <LegalPage title="Complaints procedure" intro="If something has not met your expectations, we want to hear about it and put it right.">
      <LegalSection title="How to complain">
        <p>You can raise a complaint in whichever way suits you:</p>
        <LegalList
          items={[
            <>by email to <a href={`mailto:${company.email}`} className="font-bold text-navy underline">{company.email}</a>, with &ldquo;Complaint&rdquo; in the subject line;</>,
            <>by post to Complaints, {company.legalName}, {company.address}.</>,
          ]}
        />
      </LegalSection>

      <LegalSection title="What to include">
        <LegalList
          items={[
            "your name, your business name and the best way to contact you;",
            "what went wrong and when it happened;",
            "any relevant emails, letters or documents;",
            "what you would like us to do to put things right.",
          ]}
        />
      </LegalSection>

      <LegalSection title="What happens next">
        <LegalList
          items={[
            "We will acknowledge your complaint within five working days and tell you who is handling it.",
            "The person handling it will look at the facts, including our records and anything you send us, and may contact you for more detail.",
            "We aim to send you a full written response within four weeks. If we need longer, we will tell you why and when to expect it, and we will respond in full within eight weeks.",
            "Our response will explain what we found, whether we uphold your complaint and what we will do to put things right.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Complaints about a lender">
        <p>
          Float is a broker, not a lender. If your concern is about a lender&rsquo;s decision, its product or how it has handled your application, the lender&rsquo;s own complaints procedure will apply. Tell us anyway and we will help you raise it with the right people.
        </p>
      </LegalSection>

      <LegalSection title="If you are still unhappy">
        <p>
          If you are not satisfied with our final response, you can ask for it to be reviewed by a director who was not involved in the original complaint. Include the reason you disagree with our response. You may also be able to take independent legal advice about the options open to you.
        </p>
      </LegalSection>
    </LegalPage>
  );
}