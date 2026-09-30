import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "How the Float website uses cookies and similar technologies, and how you can control them.",
};

export default function CookiePage() {
  return (
    <LegalPage title="Cookie policy" intro="How this website uses cookies and similar technologies, and how you can control them.">
      <LegalSection title="What cookies are">
        <p>
          Cookies are small text files that a website places on your device. Similar technologies, such as local storage and tracking pixels, work in much the same way. They can be used to make a site work, to remember choices or to measure how people use it.
        </p>
      </LegalSection>

      <LegalSection title="How we use them">
        <p>
          This website does not use analytics, advertising, social media or other non-essential cookies, and we do not track you across other websites. The enquiry form and calculator work in your browser without setting cookies.
        </p>
        <p>
          Our hosting provider may use strictly necessary technologies to deliver the site securely, for example to protect against malicious traffic. These do not require consent because the website cannot work safely without them.
        </p>
      </LegalSection>

      <LegalSection title="If this changes">
        <p>If we add analytics, embedded media or any other non-essential technology in future, we will:</p>
        <LegalList
          items={[
            "update this policy to explain what is used and why;",
            "ask for your consent before any non-essential cookie is set;",
            "make it as easy to withdraw consent as it was to give it.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Controlling cookies">
        <p>
          Most browsers let you see, block and delete cookies through their settings. Guidance for common browsers is available at{" "}
          <a href="https://ico.org.uk/for-the-public/online/cookies/" className="font-bold text-navy underline">ico.org.uk</a>. Blocking strictly necessary technologies may stop parts of this website working properly.
        </p>
      </LegalSection>

      <LegalSection title="More information">
        <p>
          Our <Link href="/privacy" className="font-bold text-navy underline">privacy policy</Link> explains how we handle personal information more generally.
        </p>
      </LegalSection>
    </LegalPage>
  );
}