import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Asset refinance",
  description:
    "Asset refinance for UK businesses looking to release value from equipment, machinery and vehicles they already own.",
};

export default function AssetRefinancePage() {
  return (
    <ProductPage
      title="Release value from what you already own."
      intro="Equipment, machinery and vehicles already on your balance sheet can support new funding, while staying exactly where they are."
      image="/images/refinance-hero.jpg"
      detailImage="/images/refinance-detail.jpg"
      uses={[
        { title: "Raising working capital", copy: "Turn equity in machinery or vehicles back into cash for the business." },
        { title: "Funding a new project", copy: "Use assets you already own to back the next investment." },
        { title: "Restructuring existing finance", copy: "Reshape agreements so repayments sit better with current trading." },
        { title: "Consolidating costs", copy: "Bring several agreements together into one simpler repayment." },
      ]}
      detailTitle="Capital that is already in the business."
      detail="If you own valuable assets outright, that value is sitting still. Refinance brings some of it back into play as working capital without disrupting a thing, because the assets stay in use. Lenders will look at type, age, condition and value alongside the wider financial picture."
      points={[
        "Assets generally remain in day-to-day use",
        "Value is assessed by the lender, not assumed",
        "Asset age and condition affect what is possible",
        "The refinanced asset supports the agreement",
      ]}
    />
  );
}
