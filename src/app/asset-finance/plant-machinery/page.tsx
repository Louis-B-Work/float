import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Plant and machinery finance",
  description:
    "Plant and machinery finance for UK businesses investing in production, construction and engineering equipment.",
};

export default function PlantMachineryPage() {
  return (
    <ProductPage
      title="Add the capacity to take on more work."
      intro="Heavy equipment for production, construction, engineering and agriculture, funded over the life it will actually work for."
      image="/images/asset-finance.jpg"
      uses={["Construction plant", "Manufacturing lines", "Agricultural machinery", "Engineering equipment"]}
      detailTitle="Machinery that pays for itself as it works."
      detail="Serious machinery carries a serious price tag, and paying it in one go takes capacity out of the business exactly when you are trying to add it. Spreading the cost lets the equipment start earning while it is being paid for. Well-maintained used machinery is often fundable too, which makes a replacement cycle far more manageable."
      points={[
        "New and used machinery may be considered",
        "Terms often reflect the expected working life",
        "Service history and condition are assessed",
        "The equipment usually supports the agreement",
      ]}
    />
  );
}
