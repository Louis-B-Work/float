import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Cash flow finance",
  description:
    "Cash flow finance options for UK businesses, including business cash flow loans and merchant cash advance, arranged through Float.",
};

export default function CashFlowFinancePage() {
  return (
    <CategoryPage
      title="Keep trading while the money catches up."
      intro="Profitable on paper but tight in the bank? Cash flow finance bridges the gap between paying for work and getting paid for it."
      image="/images/business-planning.jpg"
      childrenLabel="Cash flow finance options"
      detailTitle="A timing problem is not a money problem."
      detail="Long payment terms, a seasonal peak, an unexpected bill or an order bigger than usual. Any of them can squeeze cash long before the income lands. Cash flow finance smooths that timing, and the structure that suits you depends on how the business actually trades."
      points={[
        "Covering costs while you wait to be paid",
        "Funding stock, materials or wages through a busy period",
        "Taking on a larger order without straining reserves",
        "Managing seasonal peaks and quieter months",
      ]}
      childPages={[
        {
          title: "Business cash flow loans",
          copy: "A defined amount of capital with an agreed repayment structure, useful when you need funding for a specific purpose.",
          href: "/cash-flow-finance/business-loans",
        },
        {
          title: "Merchant cash advance",
          copy: "Funding assessed around future card takings, with repayments that flex in line with what the business turns over.",
          href: "/cash-flow-finance/merchant-cash-advance",
        },
      ]}
    />
  );
}
