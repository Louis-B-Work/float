import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Leasing",
  description:
    "Equipment and vehicle leasing for UK businesses that want access to assets without buying them outright.",
};

export default function LeasingPage() {
  return (
    <ProductPage
      title="Use the asset without buying it outright."
      intro="An agreed rental structure for vehicles or equipment, for when using the thing matters more than owning it."
      image="/images/asset-finance.jpg"
      uses={["Technology and IT", "Fleet vehicles", "Specialist equipment", "Assets that date quickly"]}
      detailTitle="Useful when the kit will need replacing."
      detail="Plenty of equipment is obsolete long before it wears out. Leasing fits those cases, because the agreement is built around a defined period of use rather than long-term ownership. End-of-term options differ between lenders and agreement types, so nail down what happens when the term finishes before you sign."
      points={[
        "Access to assets without an outright purchase",
        "Helps preserve capital for other priorities",
        "End-of-term options vary by agreement type",
        "Tax treatment should be discussed with your adviser",
      ]}
    />
  );
}
