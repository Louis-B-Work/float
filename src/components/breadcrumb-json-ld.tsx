"use client";

import { usePathname } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export function BreadcrumbJsonLd() {
  const data = breadcrumbJsonLd(usePathname());
  return data ? <JsonLd data={data} /> : null;
}
