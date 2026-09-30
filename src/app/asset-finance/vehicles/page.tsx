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
      image="/images/vehicles-hero.jpg"
      detailImage="/images/vehicles-detail.jpg"
      uses={[
        { title: "Vans and light commercials", copy: "From a single replacement van to a growing fleet of light commercials." },
        { title: "Company cars", copy: "Cars for staff or directors, on a structure that suits how they are used." },
        { title: "HGVs and trucks", copy: "Tractor units, rigids and trailers for haulage and distribution." },
        { title: "Specialist vehicles", copy: "Refrigerated, tipper, recovery and converted vehicles built for the job." },
      ]}
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
