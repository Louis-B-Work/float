import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = {
  title: "Business cash flow loans",
  description:
    "Business cash flow loans for UK companies needing capital for working capital, stock, growth or a time-sensitive opportunity.",
};

export default function BusinessCashFlowLoansPage() {
  return (
    <ProductPage
      title="Capital to act on the next opportunity."
      intro="A set amount of funding with a repayment structure you agree upfront, so you can move on a plan instead of waiting for cash to build."
      image="/images/business-loans-hero.jpg"
      detailImage="/images/business-loans-detail.jpg"
      uses={[
        { title: "Working capital", copy: "Cover the gap between costs going out and customer payments coming in." },
        { title: "Stock purchases", copy: "Buy in bulk or ahead of a busy season without emptying the account." },
        { title: "Premises and fit-out", copy: "Refurbish, expand or kit out a site so it is ready to trade." },
        { title: "Growth projects", copy: "Fund a new hire, a new market or a contract that needs capital up front." },
      ]}
      detailTitle="One facility, plenty of uses."
      detail="Business loans can be secured or unsecured, and repayment profiles vary a lot between lenders. What is realistic depends on the amount, the purpose, your trading history, cash flow and how the application hangs together overall. We will tell you where you stand before anything gets submitted."
      points={[
        "Funding is for business purposes only",
        "Terms and pricing depend on lender assessment",
        "A personal guarantee or security may be requested",
        "Early repayment terms vary by lender",
      ]}
    />
  );
}
