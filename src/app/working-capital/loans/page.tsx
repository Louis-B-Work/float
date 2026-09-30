import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Working capital loans",
  description:
    "Working capital loans for UK businesses funding stock, staff, suppliers and the day-to-day costs of trading.",
};

export default function WorkingCapitalLoansPage() {
  return (
    <ProductPage
      title="Steady funding for the day-to-day."
      intro="A defined amount behind the ordinary running of the business, with a repayment profile you can actually budget around."
      image="/images/wc-loans-hero.jpg"
      detailImage="/images/wc-loans-detail.jpg"
      uses={[
        { title: "Supplier payments", copy: "Pay suppliers on time, or early where it earns a better price." },
        { title: "Payroll and staffing", copy: "Keep wages covered through a lumpy month or while you take on new staff." },
        { title: "Stock and materials", copy: "Buy what upcoming orders need before the income from them arrives." },
        { title: "Operating costs", copy: "Rent, utilities, insurance and the other bills that come round regardless." },
      ]}
      detailTitle="A clear amount, on terms you can plan around."
      detail="These suit a specific, identifiable need rather than an open-ended one. Because the amount and the schedule are locked in at the start, you know exactly what is leaving the account each month. Lenders will want to understand what the money is for and how the business will service it."
      points={[
        "Best suited to a defined funding requirement",
        "Repayment schedule agreed before drawdown",
        "Affordability is assessed against trading performance",
        "Security or a personal guarantee may be requested",
      ]}
    />
  );
}
