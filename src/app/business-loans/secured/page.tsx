import { ProductPage } from "@/components/product-page";
import { amountRanges, formatAmountRange } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/business-loans/secured");

export default function SecuredBusinessLoansPage() {
  return (
    <ProductPage
      title="Put what the business owns to work."
      intro="A secured business loan is borrowing secured against property or other business assets. It is generally used for larger amounts, where the security lets a lender go further than an unsecured loan would."
      image="/images/business-loans-hero.jpg"
      detailImage="/images/business-loans-detail.jpg"
      amount={formatAmountRange(amountRanges.businessLoan)}
      calculatorHref="/calculator?security=secured"
      uses={[
        { title: "Larger projects", copy: "Fund an expansion, acquisition or major investment that needs more than an unsecured loan would cover." },
        { title: "Premises", copy: "Buy, extend or refurbish a site, with the property itself often forming part of the security." },
        { title: "Refinancing", copy: "Consolidate existing borrowing into a single facility with a structure that suits the business." },
        { title: "Longer terms", copy: "Spread repayments over a longer period where the security and the plan support it." },
      ]}
      detailTitle="Security can open up more options."
      detail="Offering security gives a lender more comfort, which can mean a larger amount or a longer term than an unsecured loan. Exactly what can be used as security, how it is valued and the legal steps involved all vary by lender. We will explain what a lender is likely to ask for before anything goes ahead."
      points={[
        "Funding is for business purposes only",
        "Security is usually property or other business assets",
        "Valuation and legal costs may apply, depending on the lender",
        "Your assets may be at risk if repayments are not kept up",
      ]}
    />
  );
}
