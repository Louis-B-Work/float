import { describe, expect, it } from "vitest";
import { absoluteUrl, breadcrumbTrail, listedPaths, pageMetadata, pages, type PagePath } from "./seo";

describe("page SEO registry", () => {
  const entries = Object.entries(pages) as [PagePath, (typeof pages)[PagePath]][];

  it.each(entries)("%s has a search-friendly title and description", (path, page) => {
    const fullTitle = path === "/" ? page.title : `${page.title} | Float`;
    expect(fullTitle.length).toBeLessThanOrEqual(60);
    expect(page.description.length).toBeGreaterThanOrEqual(70);
    expect(page.description.length).toBeLessThanOrEqual(160);
  });

  it("uses unique titles and descriptions", () => {
    const titles = entries.map(([, page]) => page.title);
    const descriptions = entries.map(([, page]) => page.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it("builds trailing-slash canonical URLs on the canonical domain", () => {
    expect(absoluteUrl("/")).toBe("https://www.float.co.uk/");
    expect(pageMetadata("/asset-finance/leasing").alternates?.canonical).toBe(
      "https://www.float.co.uk/asset-finance/leasing/",
    );
  });

  it("keeps unlisted pages out of search and the sitemap", () => {
    expect(pageMetadata("/introducers").robots).toEqual({ index: false, follow: false });
    expect(pageMetadata("/about").robots).toBeUndefined();
    expect(listedPaths).not.toContain("/introducers");
    expect(listedPaths).toContain("/calculator");
  });

  it("builds a breadcrumb trail through registered parents", () => {
    expect(breadcrumbTrail("/asset-finance/leasing/")).toEqual([
      { name: "Home", url: "https://www.float.co.uk/" },
      { name: "Asset finance", url: "https://www.float.co.uk/asset-finance/" },
      { name: "Leasing", url: "https://www.float.co.uk/asset-finance/leasing/" },
    ]);
  });
});
