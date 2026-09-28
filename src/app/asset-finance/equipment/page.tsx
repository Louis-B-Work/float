import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Equipment finance",
  description:
    "Equipment finance for UK businesses funding tools, technology, fit-out and specialist kit.",
};

export default function EquipmentFinancePage() {
  return (
    <ProductPage
      title="Fund the kit the business runs on."
      intro="IT, office fit-out, specialist tools and trade equipment. The everyday things you need to actually operate."
      image="/images/business-planning.jpg"
      uses={["IT and technology", "Catering equipment", "Medical and dental", "Office fit-out"]}
      detailTitle="Practical funding for practical purchases."
      detail="Not every asset is a lorry or a production line. Equipment finance covers the ordinary things a business needs to function and grow, and it often beats draining reserves on a one-off purchase. We will focus on what the equipment has to do and how the funding should sit alongside your cash flow."
      points={[
        "Covers a broad range of business equipment",
        "Helps avoid a large one-off capital outlay",
        "Terms reflect the asset type and expected use",
        "Suppliers and invoices are usually required",
      ]}
    />
  );
}
