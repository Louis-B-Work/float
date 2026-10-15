import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, pages, shareImage } from "@/lib/seo";
import { company } from "@/lib/site";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

// Defaults for routes without their own entry (such as the 404 page). Every page in
// `pages` (src/lib/seo.ts) overrides these through pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: pages["/"].title,
    template: `%s | ${company.name}`,
  },
  description: pages["/"].description,
  applicationName: company.name,
  openGraph: {
    title: pages["/"].title,
    description: pages["/"].description,
    siteName: company.name,
    type: "website",
    locale: "en_GB",
    images: [shareImage],
  },
  twitter: { card: "summary_large_image", images: [shareImage] },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08182b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd()} />
        <BreadcrumbJsonLd />
        <a
          href="#main"
          className="fixed left-3 top-3 z-[100] -translate-y-24 bg-navy px-4 py-3 font-bold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
