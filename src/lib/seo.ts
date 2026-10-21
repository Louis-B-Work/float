import type { Metadata, MetadataRoute } from "next";
import { company } from "./site";

type PageSeo = {
  /** Short name used in breadcrumbs. */
  label: string;
  /** Page title before the " | Float" suffix. Aim for 60 characters or fewer in total. */
  title: string;
  description: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  /** Kept out of search engines and the sitemap until it launches. */
  unlisted?: boolean;
};

// Single source of truth for page metadata, the sitemap and breadcrumb structured data.
export const pages = {
  "/": {
    label: "Home",
    title: "Float | Commercial finance broker for UK businesses",
    description:
      "Business loans, working capital and asset finance for UK businesses. One conversation, a focused lender search and a straight answer either way.",
    priority: 1,
    changeFrequency: "weekly",
  },
  "/business-loans": {
    label: "Business loans",
    title: "Business loans and cash flow finance",
    description:
      "Business loans and cash flow finance for UK businesses: unsecured and secured business loans and merchant cash advance, compared through Float.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "/business-loans/unsecured": {
    label: "Unsecured business loans",
    title: "Unsecured business loans and cash flow loans",
    description:
      "Unsecured business loans and cash flow loans for UK companies needing capital for stock, growth, seasonal gaps or an opportunity. Enquire with Float.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/business-loans/secured": {
    label: "Secured business loans",
    title: "Secured business loans for UK businesses",
    description:
      "Secured business loans for UK companies borrowing larger amounts against property or other business assets. Find out what lenders could offer with Float.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/business-loans/merchant-cash-advance": {
    label: "Merchant cash advance",
    title: "Merchant cash advance for UK businesses",
    description:
      "Merchant cash advance for UK businesses with regular card takings, where repayments flex in line with sales. Compare options through Float.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/working-capital": {
    label: "Working capital",
    title: "Working capital finance for UK businesses",
    description:
      "Working capital finance for UK businesses, including working capital loans and revolving credit facilities to keep stock, staff and suppliers covered.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "/working-capital/loans": {
    label: "Working capital loans",
    title: "Working capital loans for UK businesses",
    description:
      "Working capital loans for UK businesses funding stock, staff, suppliers and the day-to-day costs of trading. Find out what is available with Float.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/working-capital/revolving-credit": {
    label: "Revolving credit facility",
    title: "Revolving credit facility for businesses",
    description:
      "Revolving credit facilities give UK businesses flexible access to working capital within an agreed limit. Draw, repay and draw again as you trade.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/asset-finance": {
    label: "Asset finance",
    title: "Asset finance for UK businesses",
    description:
      "Asset finance for UK businesses: hire purchase, leasing, refinance, commercial vehicles, plant and machinery, and equipment finance.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "/asset-finance/hire-purchase": {
    label: "Hire purchase",
    title: "Business hire purchase finance",
    description:
      "Business hire purchase for UK companies acquiring vehicles, machinery and equipment, spreading the cost with ownership at the end of the term.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/asset-finance/leasing": {
    label: "Leasing",
    title: "Business equipment and vehicle leasing",
    description:
      "Equipment and vehicle leasing for UK businesses that want to use assets without buying them outright. Fixed terms, with capital kept free.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/asset-finance/refinance": {
    label: "Asset refinance",
    title: "Asset refinance: release cash from assets",
    description:
      "Asset refinance for UK businesses looking to release cash from equipment, machinery and vehicles they already own. Enquire with Float.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/asset-finance/vehicles": {
    label: "Commercial vehicles",
    title: "Commercial vehicle finance",
    description:
      "Commercial vehicle finance for UK businesses funding vans, cars, trucks and specialist vehicles through hire purchase or leasing.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/asset-finance/plant-machinery": {
    label: "Plant and machinery",
    title: "Plant and machinery finance",
    description:
      "Plant and machinery finance for UK businesses investing in construction, production, agricultural and engineering equipment.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/asset-finance/equipment": {
    label: "Equipment",
    title: "Business equipment finance",
    description:
      "Equipment finance for UK businesses funding tools, technology, fit-out and specialist kit without a large upfront payment.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/calculator": {
    label: "Calculator",
    title: "Business loan and merchant cash advance calculator",
    description:
      "Free business loan repayment and merchant cash advance cost calculator. See illustrative monthly costs and totals in seconds, with no credit check.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "/how-it-works": {
    label: "How it works",
    title: "How Float works",
    description:
      "How Float works: a useful conversation, a focused search of our lender panel and a plain-English comparison of the options before you decide.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  "/about": {
    label: "About",
    title: "About Float, a commercial finance broker",
    description:
      "Float is a Manchester-based commercial finance broker helping UK businesses find funding that fits. Plain answers, a focused search, no pressure.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  "/faqs": {
    label: "FAQs",
    title: "Business finance FAQs",
    description:
      "Answers to common questions about commercial finance: eligibility, credit checks, documents, timescales and how Float is paid as a broker.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  "/introducers": {
    label: "Introducers",
    title: "Introducer partnerships for accountants and advisers",
    description:
      "Refer commercial finance clients to Float. A straightforward introducer relationship for accountants, brokers, advisers and suppliers.",
    priority: 0.6,
    changeFrequency: "monthly",
    unlisted: true,
  },
  "/apply": {
    label: "Start an enquiry",
    title: "Start a business finance enquiry",
    description:
      "Start a commercial finance enquiry with Float. Tell us what your business is planning and we will explain the options. No effect on your credit score.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  "/contact": {
    label: "Contact",
    title: "Contact Float",
    description:
      "Contact Float about business loans, working capital or asset finance for your business. Email us or send a message and we will get back to you.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  "/privacy": {
    label: "Privacy policy",
    title: "Privacy policy",
    description:
      "How Float Commercial Finance Limited collects, uses, shares and protects personal information, and the rights you have over it.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  "/cookies": {
    label: "Cookie policy",
    title: "Cookie policy",
    description: "How the Float website uses cookies and similar technologies, and how you can control them.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  "/terms": {
    label: "Terms of use",
    title: "Terms of use",
    description: "The terms on which you may use the Float website, including the business finance calculator and enquiry form.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  "/complaints": {
    label: "Complaints procedure",
    title: "Complaints procedure",
    description: "How to make a complaint to Float, what to include, and how and when we will respond.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  "/commission-disclosure": {
    label: "Commission disclosure",
    title: "Commission disclosure",
    description: "How Float is paid when a commercial finance introduction completes, and what that means for you.",
    priority: 0.3,
    changeFrequency: "yearly",
  },
} satisfies Record<string, PageSeo>;

export type PagePath = keyof typeof pages;

export const listedPaths = (Object.keys(pages) as PagePath[]).filter(
  (path) => !(pages[path] as PageSeo).unlisted,
);

/** Absolute URL on the canonical domain, with the trailing slash the static export serves. */
export function absoluteUrl(path: string) {
  return `${company.siteUrl}${path === "/" ? "/" : `${path}/`}`;
}

export const shareImage = {
  url: `${company.siteUrl}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: "Float logo on a sky blue background",
};

export function pageMetadata(path: PagePath): Metadata {
  const page: PageSeo = pages[path];
  const isHome = path === "/";
  const fullTitle = isHome ? page.title : `${page.title} | ${company.name}`;

  return {
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    ...(page.unlisted ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: absoluteUrl(path),
      siteName: company.name,
      locale: "en_GB",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [shareImage],
    },
  };
}

/** Breadcrumb trail from the homepage to `path`, skipping any segment without a registered page. */
export function breadcrumbTrail(path: string) {
  const segments = path.split("/").filter(Boolean);
  const trail: { name: string; url: string }[] = [{ name: pages["/"].label, url: absoluteUrl("/") }];
  segments.forEach((_, index) => {
    const partial = `/${segments.slice(0, index + 1).join("/")}`;
    const page = (pages as Record<string, PageSeo>)[partial];
    if (page) trail.push({ name: page.label, url: absoluteUrl(partial) });
  });
  return trail;
}

export function breadcrumbJsonLd(path: string) {
  const trail = breadcrumbTrail(path);
  if (trail.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

const organizationId = `${company.siteUrl}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": organizationId,
    name: company.name,
    legalName: company.legalName,
    url: absoluteUrl("/"),
    logo: `${company.siteUrl}/apple-icon.png`,
    image: shareImage.url,
    description: pages["/"].description,
    email: company.email,
    ...(company.phoneHref ? { telephone: company.phoneDisplay } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.postalAddress.street,
      addressLocality: company.postalAddress.locality,
      postalCode: company.postalAddress.postcode,
      addressCountry: "GB",
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    identifier: { "@type": "PropertyValue", propertyID: "Companies House number", value: company.companyNumber },
    knowsAbout: ["Business loans", "Cash flow finance", "Merchant cash advance", "Working capital finance", "Asset finance", "Commercial finance"],
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function calculatorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Float business finance calculator",
    url: absoluteUrl("/calculator"),
    description: pages["/calculator"].description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    provider: { "@id": organizationId },
  };
}
