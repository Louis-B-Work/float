import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";

export const metadata: Metadata = { title: "Business loans", description: "Explore commercial business loan options with Float." };

export default function BusinessLoansPage() {
  return <ProductPage title="Capital to act on the next opportunity." intro="Explore commercial loans for cash flow, stock, growth or investment, with a broker helping you navigate the options." image="/images/business-planning.jpg" uses={["Working capital", "Stock purchases", "Premises and fit-out", "Growth projects"]} detailTitle="One facility, many possible uses." detail="Business loans can be secured or unsecured, and repayment profiles vary. The right route depends on the amount, purpose, trading history, cash flow and the strength of the overall application." points={["Funding is for business purposes only", "Terms and pricing depend on lender assessment", "A personal guarantee or security may be requested", "Early repayment terms vary by lender"]} />;
}
