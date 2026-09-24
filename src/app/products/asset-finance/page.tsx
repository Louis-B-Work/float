import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = { title: "Asset finance", description: "Explore commercial asset finance options with Float." };

export default function AssetFinancePage() {
  return <ProductPage title="Put essential assets to work sooner." intro="Spread the cost of vehicles, machinery and equipment over time, without tying up the cash the business needs elsewhere." image="/images/asset-finance.jpg" uses={["Commercial vehicles", "Plant and machinery", "Technology", "Specialist equipment"]} detailTitle="Match the funding to the working life of the asset." detail="Asset finance can include hire purchase and lease-based structures. The asset and agreement type influence ownership, deposits, VAT treatment and end-of-term options, so these should be reviewed carefully." points={["The funded asset commonly supports the facility", "A deposit may be required", "Ownership and end-of-term options vary", "Tax treatment should be discussed with your adviser"]} />;
}
