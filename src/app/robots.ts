import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export const dynamic = "force-static";

// Indexing is blocked until the float.co.uk domain decision is made. Every canonical
// and sitemap URL points at www.float.co.uk while the site is served from GitHub Pages,
// so allowing crawlers now would index a duplicate on a URL we intend to retire.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" }, sitemap: `${company.siteUrl}/sitemap.xml` };
}
