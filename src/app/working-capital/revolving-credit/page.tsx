import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Revolving credit facility",
  description:
    "Revolving credit facilities for UK businesses that need flexible access to working capital within an agreed limit.",
};

export default function RevolvingCreditPage() {
  return (
    <ProductPage
      title="A buffer you can draw on when you need it."
      intro="An agreed limit to dip into and repay as things change, rather than one lump sum sitting in the account."
      image="/images/revolving-credit-hero.jpg"
      detailImage="/images/revolving-credit-detail.jpg"
      uses={[
        { title: "Seasonal trading", copy: "Draw down ahead of the peak and repay as the season's income lands." },
        { title: "Uneven payment cycles", copy: "Bridge customers who pay on 60 or 90 days while your own costs are due now." },
        { title: "Short-term gaps", copy: "Cover a few tight weeks without arranging a new loan each time." },
        { title: "Unplanned costs", copy: "A repair, a tax bill or a late payer, handled from a limit already in place." },
      ]}
      detailTitle="Flexibility for costs that will not sit still."
      detail="Some businesses do not need a fixed loan so much as room to manoeuvre. A revolving facility lets you take funds when a gap opens up and repay when income lands, with the limit freed up again afterwards. Charges usually relate to what you actually draw, which suits a requirement that shifts month to month."
      points={[
        "Draw and repay within an agreed limit",
        "Suited to fluctuating rather than fixed requirements",
        "Costs generally relate to the amount drawn",
        "Limits and availability are subject to lender review",
      ]}
    />
  );
}
