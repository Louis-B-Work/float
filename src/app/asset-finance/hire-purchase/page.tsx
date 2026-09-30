import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Hire purchase",
  description:
    "Hire purchase agreements for UK businesses acquiring vehicles, machinery and equipment with ownership at the end of the term.",
};

export default function HirePurchasePage() {
  return (
    <ProductPage
      title="Own the asset, spread the cost."
      intro="Use the asset from day one, pay for it over an agreed term, and own it outright once the agreement finishes."
      image="/images/hire-purchase-hero.jpg"
      detailImage="/images/hire-purchase-detail.jpg"
      uses={[
        { title: "Commercial vehicles", copy: "Vans and trucks you plan to run for years and keep on the books." },
        { title: "Production machinery", copy: "Core kit the business depends on and wants to own at the end." },
        { title: "Workshop equipment", copy: "Lifts, compressors, benches and tools with a long working life." },
        { title: "Long-life assets", copy: "Anything that keeps earning well beyond the length of the agreement." },
      ]}
      detailTitle="Sensible when you are keeping the asset."
      detail="Hire purchase suits assets with a long working life that you intend to hold onto. Payments are usually fixed, which keeps budgeting simple, and a deposit is normally required at the start. Watch for a final fee before title transfers, so check the full structure rather than just the monthly figure."
      points={[
        "Ownership transfers at the end of the agreement",
        "Payments are typically fixed across the term",
        "A deposit is commonly required upfront",
        "The funded asset usually supports the facility",
      ]}
    />
  );
}
