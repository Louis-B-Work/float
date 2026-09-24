import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = { title: "Cookie policy" };
export default function CookiePage() {
  return <LegalPage title="Cookie policy" intro="Information about cookies and similar technologies on this website.">
    <LegalSection title="Current use"><p>The initial website is designed without analytics, advertising or non-essential cookies. Essential platform cookies may be used only where necessary for security and core operation.</p></LegalSection>
    <LegalSection title="Future changes"><p>If analytics, embedded media, advertising or other non-essential technologies are added, this policy and the consent experience must be updated before those technologies are enabled.</p></LegalSection>
    <LegalSection title="Browser controls"><p>Most browsers let users inspect, block and delete cookies. Blocking essential storage may affect how some website features work.</p></LegalSection>
  </LegalPage>;
}
