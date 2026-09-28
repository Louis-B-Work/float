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
      image="/images/asset-finance.jpg"
      uses={["Raising working capital", "Funding a new project", "Restructuring existing finance", "Consolidating costs"]}
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
