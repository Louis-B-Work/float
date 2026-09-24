export const company = {
  name: "Float",
  legalName: "[Float legal company name]",
  email: "hello@floatfinance.co.uk",
  phoneDisplay: "[Phone number]",
  phoneHref: "",
  address: "[Registered office address]",
  companyNumber: "[Company number]",
  icoNumber: "[ICO registration number]",
  siteUrl: "https://www.floatfinance.co.uk",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Business loans", href: "/products/business-loans" },
      { label: "Asset finance", href: "/products/asset-finance" },
    ],
  },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
] as const;

export const brokerDisclosure =
  "Float is a commercial finance broker, not a lender. We introduce businesses to a panel of lenders for non-regulated commercial finance. Float is not authorised or regulated by the Financial Conduct Authority. We may receive commission from a lender if finance completes; the amount and basis will be disclosed during your journey.";
