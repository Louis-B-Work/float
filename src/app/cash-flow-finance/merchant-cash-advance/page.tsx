import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Merchant cash advance",
  description:
    "Merchant cash advance for UK businesses with regular card takings, with repayments that flex in line with trading.",
};

export default function MerchantCashAdvancePage() {
  return (
    <ProductPage
      title="Funding that moves with your takings."
      intro="Repayments come out as a share of your card sales rather than a fixed monthly figure, so quiet weeks cost you less."
      image="/images/mca-hero.jpg"
      detailImage="/images/mca-detail.jpg"
      uses={[
        { title: "Retail and hospitality", copy: "Shops, cafés, bars and restaurants taking most of their revenue by card." },
        { title: "Salons and clinics", copy: "Appointment-led businesses with steady card takings week to week." },
        { title: "Seasonal traders", copy: "Repayments ease off in quieter months and pick up when trade does." },
        { title: "Fit-out and refurbishment", copy: "Refresh the premises, with repayments linked to future card sales." },
      ]}
      detailTitle="Built around how card businesses actually trade."
      detail="If most of your income arrives by card, a fixed repayment can bite hard in a slow week. A merchant cash advance flexes with takings instead, so busier periods clear the balance faster. Lenders lean on card turnover history here, which means a steady trading record counts for more than a long balance sheet."
      points={[
        "Suited to businesses with regular card revenue",
        "Repayments move in line with card takings",
        "The total cost is agreed upfront rather than as an interest rate",
        "Card processing history is usually required",
      ]}
    />
  );
}
