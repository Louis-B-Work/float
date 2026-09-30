import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Asset finance",
  description:
    "Asset finance for UK businesses, including hire purchase, leasing, refinance, commercial vehicles, plant and machinery and equipment.",
};

export default function AssetFinancePage() {
  return (
    <CategoryPage
      title="Put essential assets to work sooner."
      intro="Vehicles, machinery, equipment. Spread the cost over the working life of the asset instead of taking the hit in one go."
      image="/images/asset-finance-hero.jpg"
      detailImage="/images/asset-finance-detail.jpg"
      childrenLabel="Asset finance options"
      detailTitle="Let the asset pay for itself as it works."
      detail="Buying outright takes a serious chunk of cash out of the business at exactly the moment you are trying to grow it. Asset finance lets the cost sit alongside the value the asset produces. Just be clear on the structure first, because it changes ownership, deposits, VAT treatment and what happens at the end of the term."
      points={[
        "Acquiring equipment without a large upfront payment",
        "Replacing ageing vehicles or machinery",
        "Adding capacity to take on more work",
        "Releasing value tied up in assets you already own",
      ]}
      childPages={[
        {
          title: "Hire purchase",
          copy: "Structured payments towards an asset you intend to own outright at the end of the agreement.",
          href: "/asset-finance/hire-purchase",
        },
        {
          title: "Leasing",
          copy: "Use an asset through an agreed rental structure, where access matters more than ownership.",
          href: "/asset-finance/leasing",
        },
        {
          title: "Asset refinance",
          copy: "Explore whether assets the business already owns could support additional funding.",
          href: "/asset-finance/refinance",
        },
        {
          title: "Commercial vehicles",
          copy: "Finance for vans, cars, trucks and specialist vehicles that keep the business moving.",
          href: "/asset-finance/vehicles",
        },
        {
          title: "Plant and machinery",
          copy: "Funding for production, construction and engineering equipment, new or used.",
          href: "/asset-finance/plant-machinery",
        },
        {
          title: "Equipment finance",
          copy: "Spread the cost of the tools, technology and fit-out the business runs on.",
          href: "/asset-finance/equipment",
        },
      ]}
    />
  );
}
