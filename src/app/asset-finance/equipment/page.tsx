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
      image="/images/equipment-hero.jpg"
      detailImage="/images/equipment-detail.jpg"
      uses={[
        { title: "IT and technology", copy: "Hardware, telephony and systems the whole team relies on." },
        { title: "Catering equipment", copy: "Ovens, refrigeration, extraction and front-of-house kit." },
        { title: "Medical and dental", copy: "Treatment chairs, imaging and clinical equipment for private practices." },
        { title: "Office fit-out", copy: "Furniture, partitioning and AV that make a workspace work." },
      ]}
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
