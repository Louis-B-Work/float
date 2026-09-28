export const company = {
  name: "Float",
  legalName: "Float Commercial Finance Limited",
  email: "hello@float.co.uk",
  phoneDisplay: "TBC",
  phoneHref: "",
  address: "Universal Square, 6th Floor, Devonshire Street North, Manchester, M12 6JH",
  companyNumber: "17307077",
  icoNumber: "ZC191325",
  siteUrl: "https://www.float.co.uk",
} as const;

export const navigation = [
  {
    label: "Cash flow finance",
    href: "/cash-flow-finance",
    children: [
      { label: "Business cash flow loans", href: "/cash-flow-finance/business-loans" },
      { label: "Merchant cash advance", href: "/cash-flow-finance/merchant-cash-advance" },
    ],
  },
  {
    label: "Working capital",
    href: "/working-capital",
    children: [
      { label: "Working capital loans", href: "/working-capital/loans" },
      { label: "Revolving credit facility", href: "/working-capital/revolving-credit" },
    ],
  },
  {
    label: "Asset finance",
    href: "/asset-finance",
    children: [
      { label: "Hire purchase", href: "/asset-finance/hire-purchase" },
      { label: "Leasing", href: "/asset-finance/leasing" },
      { label: "Asset refinance", href: "/asset-finance/refinance" },
      { label: "Commercial vehicles", href: "/asset-finance/vehicles" },
      { label: "Plant and machinery", href: "/asset-finance/plant-machinery" },
      { label: "Equipment", href: "/asset-finance/equipment" },
    ],
  },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const secondaryNavigation = [
  { label: "Calculator", href: "/calculator" },
  { label: "Apply", href: "/apply" },
  { label: "Introducers", href: "/introducers" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Cash flow finance", href: "/cash-flow-finance" },
  { label: "Working capital", href: "/working-capital" },
  { label: "Asset finance", href: "/asset-finance" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About Float", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Calculator", href: "/calculator" },
  { label: "Apply", href: "/apply" },
  { label: "Introducers", href: "/introducers" },
  { label: "Contact", href: "/contact" },
] as const;

export const brokerDisclosure =
  "Float is a commercial finance broker, not a lender. We introduce businesses to a panel of lenders for non-regulated commercial finance. Float is not authorised or regulated by the Financial Conduct Authority. We may receive commission from a lender if finance completes; the amount and basis will be disclosed during your journey.";
