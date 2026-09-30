import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
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

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Float | Commercial finance for UK businesses",
    template: "%s | Float",
  },
  description:
    "Straight-talking cash flow finance, working capital and asset finance for UK businesses, arranged by a commercial finance broker.",
  openGraph: {
    title: "Float | Commercial finance for UK businesses",
    description:
      "Cash flow finance, working capital and asset finance for UK businesses, matched to your plans by real people.",
    type: "website",
    locale: "en_GB",
  },
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
