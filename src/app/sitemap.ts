import type { MetadataRoute } from "next";
import { absoluteUrl, listedPaths, pages } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return listedPaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: pages[path].changeFrequency,
    priority: pages[path].priority,
  }));
}
