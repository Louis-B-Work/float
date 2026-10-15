import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assets";

type Industry = {
  name: string;
  example: string;
  product: string;
  href: string;
  image: string;
  alt: string;
};

// Illustrative scenarios only. Each points at the product page that usually fits the job.
const industries: Industry[] = [
  {
    name: "Hospitality and restaurants",
    example: "Covering wages and suppliers through a quiet January.",
    product: "Working capital loans",
    href: "/working-capital/loans",
    image: "/images/industry-hospitality.jpg",
    alt: "Chef plating food on the pass of a busy restaurant kitchen",
  },
  {
    name: "Retail and e-commerce",
    example: "Christmas stock in early, repaid as a share of card sales.",
    product: "Merchant cash advance",
    href: "/cash-flow-finance/merchant-cash-advance",
    image: "/images/industry-retail.jpg",
    alt: "Shopkeeper behind the counter of a well-stocked independent shop",
  },
  {
    name: "Construction and trades",
    example: "An excavator of your own instead of hiring one by the week.",
    product: "Plant and machinery",
    href: "/asset-finance/plant-machinery",
    image: "/images/industry-construction.jpg",
    alt: "Excavator digging into a bank of earth on a building site",
  },
  {
    name: "Transport and logistics",
    example: "Two more vans to take on a new delivery contract.",
    product: "Commercial vehicles",
    href: "/asset-finance/vehicles",
    image: "/images/industry-transport.jpg",
    alt: "White panel van parked on a street outside a brick building",
  },
  {
    name: "Manufacturing",
    example: "Releasing cash tied up in machinery you already own.",
    product: "Asset refinance",
    href: "/asset-finance/refinance",
    image: "/images/industry-manufacturing.jpg",
    alt: "Metal bar being machined on a lathe",
  },
  {
    name: "Healthcare and dental",
    example: "Kitting out a second surgery with a new chair and scanner.",
    product: "Equipment finance",
    href: "/asset-finance/equipment",
    image: "/images/industry-dental.jpg",
    alt: "Dental treatment chair and equipment in a bright surgery",
  },
  {
    name: "Agriculture and farming",
    example: "A replacement tractor, yours outright once it is paid off.",
    product: "Hire purchase",
    href: "/asset-finance/hire-purchase",
    image: "/images/industry-farming.jpg",
    alt: "Green tractor in a field of freshly baled hay",
  },
  {
    name: "Professional services",
    example: "Paying the tax bill while client invoices are still out.",
    product: "Business cash flow loans",
    href: "/cash-flow-finance/business-loans",
    image: "/images/industry-professional.jpg",
    alt: "Professional reviewing figures at a desk beside a laptop",
  },
  {
    name: "Recruitment and staffing",
    example: "Weekly payroll for contractors while clients pay on 60 days.",
    product: "Revolving credit facility",
    href: "/working-capital/revolving-credit",
    image: "/images/industry-recruitment.jpg",
    alt: "Two people shaking hands across a table at an interview",
  },
  {
    name: "Beauty and wellness",
    example: "Salon basins and treatment kit you will want to upgrade in a few years.",
    product: "Leasing",
    href: "/asset-finance/leasing",
    image: "/images/industry-beauty.jpg",
    alt: "Stylist washing a client's hair at a salon basin",
  },
  {
    name: "Automotive and garages",
    example: "A vehicle lift and diagnostic kit for an extra service bay.",
    product: "Equipment finance",
    href: "/asset-finance/equipment",
    image: "/images/industry-automotive.jpg",
    alt: "Mechanic working at a bench in a vehicle repair garage",
  },
  {
    name: "Technology and IT",
    example: "Hiring developers before a new contract starts paying.",
    product: "Working capital loans",
    href: "/working-capital/loans",
    image: "/images/industry-technology.jpg",
    alt: "Software team working together on laptops around a shared table",
  },
];

export function IndustryGrid() {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 xl:grid-cols-6">
      {industries.map((industry) => (
        <li key={industry.name}>
          <Link
            href={industry.href}
            className="group relative flex h-full items-center gap-4 border border-line bg-white p-3 sm:block sm:aspect-[4/5] sm:overflow-hidden sm:border-0 sm:bg-navy-deep sm:p-0"
          >
            <div className="relative size-24 shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:size-auto">
              <Image
                src={assetPath(industry.image)}
                alt={industry.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1280px) 17vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 96px"
              />
            </div>
            <div className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgb(13_34_61/0.96)_0%,rgb(13_34_61/0.75)_42%,rgb(13_34_61/0)_72%)] sm:block" aria-hidden />
            <div className="min-w-0 sm:absolute sm:inset-x-0 sm:bottom-0 sm:p-5 xl:p-4">
              <h3 className="display text-lg font-extrabold leading-tight text-navy-deep sm:text-xl sm:text-white xl:text-lg">{industry.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-ink/70 sm:text-white/80 xl:text-[0.8125rem] xl:leading-5">{industry.example}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-[0.08em] text-navy sm:mt-3 sm:text-aqua">
                {industry.product}
                <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
