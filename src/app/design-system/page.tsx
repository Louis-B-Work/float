import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/design-system");

// Internal reference. Values are written out by hand from src/app/globals.css and the Tailwind classes
// in src/components/ui.tsx and src/app/page.tsx, so update this page whenever those tokens change.
// Breakpoints follow Tailwind: Mobile is below 768px, Tablet is 768px+ (md), Desktop is 1024px+ (lg).

const colours = [
  { name: "Navy", token: "--navy", hex: "#13375c", use: "Links, labels, secondary buttons, footer", className: "bg-navy text-white" },
  { name: "Navy deep", token: "--navy-deep", hex: "#0d223d", use: "Headings, dark sections, button text", className: "bg-navy-deep text-white" },
  { name: "Sky", token: "--sky", hex: "#73c3e6", use: "Hero image panel, card hover", className: "bg-sky text-navy-deep" },
  { name: "Aqua", token: "--aqua", hex: "#5ecec8", use: "Icons on dark, CTA band, button hover", className: "bg-aqua text-navy-deep" },
  { name: "Coral", token: "--coral", hex: "#ff7a7e", use: "Primary button, accent word, callout rules", className: "bg-coral text-navy-deep" },
  { name: "Ink", token: "--ink", hex: "#24272f", use: "Body text (at 65-70% opacity)", className: "bg-ink text-white" },
  { name: "Mist", token: "--mist", hex: "#f3f5f6", use: "Page and section backgrounds", className: "bg-mist text-navy-deep border border-line" },
  { name: "Line", token: "--line", hex: "#dfe5e7", use: "Borders and dividers", className: "bg-line text-navy-deep" },
  { name: "Surface", token: "--surface", hex: "#ffffff", use: "Cards, header", className: "bg-white text-navy-deep border border-line" },
];

// Seven styles in all; 14px is the smallest size on the site. Defined in src/app/globals.css (.type-*); body and small use
// Tailwind's text-base and text-sm. Tablet starts at 768px (md), and tablet and desktop share every size.
const typeScale: [string, string, string, string, string, string, string][] = [
  ["H1 (Manrope)", ".type-h1", "48px", "72px", "1.0", "800", "The one heading at the top of every page"],
  ["H2 (Manrope)", ".type-h2", "32px", "48px", "1.05", "800", "Section headings, calculator results"],
  ["H3 (Manrope / DM Sans)", ".type-h3", "20px", "24px", "1.5 (default)", "800", "Card titles, step titles, small headings"],
  ["Lead (DM Sans)", ".type-lead", "18px", "18px", "32px", "400", "Intro paragraph under a heading"],
  ["Body (DM Sans)", "text-base", "16px", "16px", "28px", "400", "Paragraphs and list text"],
  ["Small (DM Sans)", "text-sm", "14px", "14px", "24px", "400-800", "Card copy, buttons, nav, form text, uppercase labels, fine print"],
  ["Figure (Manrope)", ".type-figure", "32px", "32px", "1.1", "800", "Calculator input, hero panel statement"],
];

// [token, mobile, tablet, desktop]
const spacing: [string, string, string, string][] = [
  ["Page gutter (.page-shell)", "16px", "31px", "41-80px (4vw, max 80)"],
  ["Section padding (.section-space)", "72px", "72px", "72-128px (9vw)"],
  ["Home hero padding", "32px top and bottom", "32px", "80px"],
  ["Home hero minimum height", "none", "720px", "720px"],
  ["Card padding", "16-20px (compact), 28px (standard)", "32-40px", "32-40px"],
  ["Gap between cards", "12-16px", "20-24px", "20-24px"],
  ["Heading to copy", "20px", "32px", "32px"],
  ["Copy to buttons", "24px", "36px", "36px"],
  ["Minimum tap target", "44 x 44px", "44 x 44px", "44 x 44px"],
  ["Header height", "76px", "76px", "76px"],
];

function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-10 md:py-14">
      <h2 className="display type-h2 font-extrabold text-navy-deep">{title}</h2>
      {note && <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/65">{note}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        <thead className="bg-mist text-sm uppercase tracking-[0.14em] text-navy">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-extrabold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-line align-top">
              {row.map((cell, i) => (
                <td key={i} className={`px-4 py-3 leading-6 ${i === 0 ? "font-bold text-navy-deep" : "text-ink/70"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="page-shell py-10 md:py-16">
      <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-coral">Internal reference</p>
      <h1 className="display type-h1 mt-3 font-extrabold text-navy-deep">Design system</h1>
      <p className="type-lead mt-6 max-w-2xl leading-8 text-ink/65">
        The colours, type, spacing and shapes used across the Float site, with how they change by device size. Mobile is below 768px, tablet is 768px and up, desktop is 1024px and up.
      </p>

      <Section title="Colour" note="Defined once as CSS variables in globals.css and exposed to Tailwind as bg-navy, text-coral and so on.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colours.map((c) => (
            <div key={c.token} className={`p-5 ${c.className}`}>
              <p className="type-lead font-extrabold">{c.name}</p>
              <p className="mt-1 text-sm font-semibold opacity-80">{c.hex} &middot; {c.token}</p>
              <p className="mt-3 text-sm leading-6 opacity-80">{c.use}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography" note="Manrope (display, tight -0.045em tracking) for headings, DM Sans for everything else. Both load through next/font.">
        <Table head={["Style", "Class", "Mobile", "Tablet and desktop", "Line height", "Weight", "Used for"]} rows={typeScale} />
        <div className="mt-8 grid gap-6">
          <p className="display type-h1 font-extrabold text-navy-deep">Business finance without the <span className="text-coral">runaround.</span></p>
          <p className="display type-h2 font-extrabold text-navy-deep">Section heading for a page</p>
          <p className="display type-h3 font-extrabold text-navy-deep">Card or step title</p>
          <p className="type-lead max-w-xl leading-8 text-ink/65">Lead paragraph: a focused search and a straight answer either way.</p>
          <p className="max-w-xl leading-7 text-ink/65">Body: plain English on how the options differ, including the trade-offs.</p>
          <p className="max-w-xl text-sm leading-6 text-ink/65">Small: card copy, buttons and form text.</p>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Eyebrow label</p>
        </div>
      </Section>

      <Section title="Spacing and layout" note="Padding and gaps tighten on phones so more of the page shows above the fold.">
        <Table head={["Token", "Mobile", "Tablet", "Desktop"]} rows={spacing} />
      </Section>

      <Section title="Shape, borders and depth" note="The brand is square: there are no rounded corners on cards, buttons, inputs or images.">
        <Table
          head={["Element", "Value", "Used for"]}
          rows={[
            ["Corner radius", "0px", "Everything, including buttons, cards, inputs and images"],
            ["Exception", "Fully round", "Calculator slider step buttons only"],
            ["Border", "1px solid --line (#dfe5e7)", "Cards, tables, form fields"],
            ["Border on dark", "1px, white at 15%", "Cards on the navy section"],
            ["Accent rule", "4px coral, left side", "Callouts and notes"],
            ["Card shadow (.float-card)", "0 22px 60px rgba(13,34,61,0.08)", "Elevated cards"],
            ["Dropdown shadow", "Tailwind shadow-xl", "Desktop nav dropdowns, mobile menu"],
            ["Grid lines (.grid-lines)", "1px lines every 46px at 7% navy", "Decorative panels"],
          ]}
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="float-card w-48 p-5 text-sm font-bold text-navy-deep">Float card</div>
          <div className="w-48 border border-line bg-white p-5 text-sm font-bold text-navy-deep">Bordered card</div>
          <div className="w-48 border-l-4 border-coral bg-mist p-5 text-sm font-bold text-navy-deep">Callout</div>
          <div className="grid-lines h-20 w-48 border border-line" />
        </div>
      </Section>

      <Section title="Components">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Buttons</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/apply">Primary</ButtonLink>
              <ButtonLink href="/calculator" secondary>Secondary</ButtonLink>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink/65">14px, 800 weight, 14px vertical and 16px (24px from 640px) horizontal padding, 17px arrow icon.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Navigation</p>
            <p className="text-sm leading-6 text-ink/65">
              Below 1200px: logo plus a 44px menu button opening a full-screen menu with accordion groups. At 1200px and up: five items (Business loans, Working capital, Asset finance, About, Calculator) with dropdowns, and a coral Start an enquiry button.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Process cards (home)</p>
            <p className="text-sm leading-6 text-ink/65">Mobile: one column, icon left, 16px padding, 20px title. Tablet: two columns. 1280px and up: four columns, 32px padding, 24px title.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-navy">Images</p>
            <p className="text-sm leading-6 text-ink/65">Fill their frame with object-cover. Responsive WebP at 480, 960 and 1600px, with a JPG fallback. Hero images load eagerly; others lazily.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
