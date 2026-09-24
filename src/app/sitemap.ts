import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/products", "/products/business-loans", "/products/asset-finance", "/calculator", "/contact", "/privacy-policy", "/cookie-policy", "/terms"];
  return routes.map((route) => ({ url: `${company.siteUrl}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
