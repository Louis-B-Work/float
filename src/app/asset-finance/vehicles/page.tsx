import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Commercial vehicle finance",
  description:
    "Commercial vehicle finance for UK businesses funding vans, cars, trucks and specialist vehicles.",
};

export default function CommercialVehiclesPage() {
  return (
    <ProductPage
      title="Keep the fleet on the road."
      intro="Vans, cars, trucks and specialist vehicles. Replace one or build out the whole fleet without the upfront hit."
      image="/images/asset-finance.jpg"
      uses={["Vans and light commercials", "Company cars", "HGVs and trucks", "Specialist vehicles"]}
      detailTitle="From one replacement to a growing fleet."
      detail="Vehicles are often the hardest-working asset you own, and downtime costs real money. Finance lets you replace or add on a timetable that suits operations rather than one dictated by the bank balance. New and used can usually both be considered, though age and mileage will shape the terms."
      points={[
        "New and used vehicles may be considered",
        "Vehicle age and mileage can affect terms",
        "Structures include hire purchase and leasing",
        "Multiple vehicles can often be funded together",
      ]}
    />
  );
}
