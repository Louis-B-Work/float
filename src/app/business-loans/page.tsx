import { CategoryPage } from "@/components/category-page";
import { amountRanges, formatAmountRange } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/business-loans");

export default function BusinessLoansPage() {
  return (
    <CategoryPage
      title="Keep trading while the money catches up."
      intro="Business loans and cash flow finance for when the plan is ready but the bank balance is not. Bridge a gap, fund growth or borrow against what the business already owns."
      image="/images/cash-flow-hero.jpg"
      detailImage="/images/cash-flow-detail.jpg"
      calculatorHref="/calculator"
      detailTitle="A timing problem is not a money problem."
      detail="Long payment terms, a seasonal peak, an unexpected bill or an order bigger than usual. Any of them can squeeze cash long before the income lands. A business loan or cash flow facility smooths that timing, and the structure that suits you depends on how the business actually trades and what it can offer as security."
      points={[
        "Covering costs while you wait to be paid",
        "Funding stock, materials or wages through a busy period",
        "Taking on a larger order without straining reserves",
        "Borrowing larger amounts against property or business assets",
      ]}
      childPages={[
        {
          title: "Unsecured business loans",
          copy: "A set amount of capital with an agreed repayment structure, without putting a specific asset up as security.",
          href: "/business-loans/unsecured",
          amount: formatAmountRange(amountRanges.businessLoan),
        },
        {
          title: "Secured business loans",
          copy: "Borrowing secured against property or other business assets, generally for larger amounts than an unsecured loan.",
          href: "/business-loans/secured",
          amount: formatAmountRange(amountRanges.businessLoan),
        },
        {
          title: "Merchant cash advance",
          copy: "Funding assessed around future card takings, with repayments that flex in line with what the business turns over.",
          href: "/business-loans/merchant-cash-advance",
          amount: formatAmountRange(amountRanges.merchantCashAdvance),
        },
      ]}
    />
  );
}
