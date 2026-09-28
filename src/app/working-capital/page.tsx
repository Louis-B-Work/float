import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = {
  title: "Working capital",
  description:
    "Working capital finance for UK businesses, including working capital loans and revolving credit facilities, arranged through Float.",
};

export default function WorkingCapitalPage() {
  return (
    <CategoryPage
      title="Fund the everyday engine of the business."
      intro="Stock, staff, suppliers and the hundred other costs of simply operating. Working capital finance keeps them covered while you get on with the plan."
      image="/images/team-meeting.jpg"
      childrenLabel="Working capital options"
      detailTitle="Room to operate, not just react."
      detail="When working capital is tight, decisions start getting made around the bank balance instead of the business plan. A facility sized to how you actually trade gives you that room back, so you can say yes to the right things and not be forced into the wrong ones."
      points={[
        "Paying suppliers and staff on schedule",
        "Buying stock or materials ahead of demand",
        "Absorbing an unexpected cost without disruption",
        "Holding steady through a slower trading period",
      ]}
      childPages={[
        {
          title: "Working capital loans",
          copy: "A set amount of funding with a planned repayment profile, suited to a clear and specific business need.",
          href: "/working-capital/loans",
        },
        {
          title: "Revolving credit facility",
          copy: "An agreed limit you can draw from and repay as needed, suited to costs that rise and fall through the year.",
          href: "/working-capital/revolving-credit",
        },
      ]}
    />
  );
}
