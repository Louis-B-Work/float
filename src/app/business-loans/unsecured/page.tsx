import { ProductPage } from "@/components/product-page";
import { amountRanges, formatAmountRange } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/business-loans/unsecured");

export default function UnsecuredBusinessLoansPage() {
  return (
    <ProductPage
      title="Capital to act on the next opportunity."
      intro="An unsecured business loan, often called a cash flow loan, gives you a set amount of funding with a repayment structure you agree upfront, so you can move on a plan instead of waiting for cash to build."
      image="/images/business-loans-hero.jpg"
      detailImage="/images/business-loans-detail.jpg"
      amount={formatAmountRange(amountRanges.businessLoan)}
      calculatorHref="/calculator"
      uses={[
        { title: "Working capital", copy: "Cover the gap between costs going out and customer payments coming in." },
        { title: "Stock purchases", copy: "Buy in bulk or ahead of a busy season without emptying the account." },
        { title: "Premises and fit-out", copy: "Refurbish, expand or kit out a site so it is ready to trade." },
        { title: "Growth projects", copy: "Fund a new hire, a new market or a contract that needs capital up front." },
      ]}
      detailTitle="One facility, plenty of uses."
      detail="An unsecured loan is not tied to a specific asset, and repayment profiles vary a lot between lenders. What is realistic depends on the amount, the purpose, your trading history, cash flow and how the application hangs together overall. We will tell you where you stand before anything gets submitted."
      points={[
        "Funding is for business purposes only",
        "Terms and pricing depend on lender assessment",
        "A personal guarantee may be requested",
        "Early repayment terms vary by lender",
      ]}
    />
  );
}
