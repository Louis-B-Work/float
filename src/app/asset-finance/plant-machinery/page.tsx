import { ProductPage } from "@/components/product-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/asset-finance/plant-machinery");

export default function PlantMachineryPage() {
  return (
    <ProductPage
      title="Add the capacity to take on more work."
      intro="Heavy equipment for production, construction, engineering and agriculture, funded over the life it will actually work for."
      image="/images/plant-hero.jpg"
      detailImage="/images/plant-detail.jpg"
      uses={[
        { title: "Construction plant", copy: "Excavators, dumpers, telehandlers and loaders, new or used." },
        { title: "Manufacturing lines", copy: "Production equipment that adds capacity or lowers the cost per unit." },
        { title: "Agricultural machinery", copy: "Tractors, harvesters and implements, timed around the farming year." },
        { title: "Engineering equipment", copy: "CNC machines, presses, lathes and fabrication kit." },
      ]}
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
