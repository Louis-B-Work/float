import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/cash-flow-finance",
    "/cash-flow-finance/business-loans",
    "/cash-flow-finance/merchant-cash-advance",
    "/working-capital",
    "/working-capital/loans",
    "/working-capital/revolving-credit",
    "/asset-finance",
    "/asset-finance/hire-purchase",
    "/asset-finance/leasing",
    "/asset-finance/refinance",
    "/asset-finance/vehicles",
    "/asset-finance/plant-machinery",
    "/asset-finance/equipment",
    "/how-it-works",
    "/about",
    "/faqs",
    "/calculator",
    "/introducers",
    "/apply",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    "/complaints",
    "/commission-disclosure",
  ];
  return routes.map((route) => ({ url: `${company.siteUrl}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
