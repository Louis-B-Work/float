"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import { SiteImage } from "@/components/site-image";

type Industry = {
  name: string;
  example: string;
  product: string;
  href: string;
  /** Image slot, plus the alt text to use once the real image is in. */
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
    href: "/business-loans/merchant-cash-advance",
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
    product: "Unsecured business loans",
    href: "/business-loans/unsecured",
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
];

export function IndustryGrid() {
  const rowId = useId();
  const rowRef = useRef<HTMLUListElement>(null);
  const drag = useRef<{ pointerId: number; startX: number; scrollLeft: number; moved: boolean } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    function updateControls() {
      if (!row) return;
      setCanPrevious(row.scrollLeft > 1);
      setCanNext(row.scrollLeft + row.clientWidth < row.scrollWidth - 1);
    }
    const observer = new ResizeObserver(updateControls);
    observer.observe(row);
    row.addEventListener("scroll", updateControls, { passive: true });
    updateControls();
    return () => {
      observer.disconnect();
      row.removeEventListener("scroll", updateControls);
    };
  }, []);

  function scrollCards(direction: number) {
    const row = rowRef.current;
    const card = row?.firstElementChild;
    if (!row || !card) return;
    const distance = card.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap);
    row.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  function startDrag(event: PointerEvent<HTMLUListElement>) {
    drag.current = null;
    if (event.pointerType === "touch" || event.button !== 0 || window.matchMedia("(min-width: 768px)").matches) return;
    drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft, moved: false };
  }

  function moveDrag(event: PointerEvent<HTMLUListElement>) {
    const current = drag.current;
    if (!current || current.pointerId !== event.pointerId || event.buttons === 0) return;
    const distance = event.clientX - current.startX;
    if (!current.moved && Math.abs(distance) < 8) return;
    if (!current.moved) {
      current.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    event.preventDefault();
    event.currentTarget.scrollLeft = current.scrollLeft - distance;
  }

  function endDrag(event: PointerEvent<HTMLUListElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
  }

  return (
    <>
      <p className="mt-6 text-sm font-semibold text-ink/65 md:hidden">Swipe or drag to explore industries.</p>
      <ul
        id={rowId}
        ref={rowRef}
        aria-label="Industry funding examples"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={() => { drag.current = null; setDragging(false); }}
        onClickCapture={(event) => {
          if (drag.current?.moved && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
            drag.current = null;
          }
        }}
        className={`industry-scroll-row mt-4 flex gap-3 overflow-x-auto md:mt-10 md:grid md:grid-cols-2 md:overflow-visible lg:mt-14 lg:grid-cols-4 ${dragging ? "cursor-grabbing select-none snap-none" : "cursor-grab snap-x snap-mandatory md:cursor-auto"}`}
      >
        {industries.map((industry) => (
          <li key={industry.name} className="w-[85%] max-w-80 shrink-0 snap-start md:w-auto md:max-w-none">
            <Link
              href={industry.href}
              draggable={false}
              className="group relative block h-full border border-line bg-white md:aspect-[4/5] md:overflow-hidden md:border-0 md:bg-navy-deep lg:aspect-square"
            >
              <div className="relative h-36 overflow-hidden md:absolute md:inset-0 md:h-auto">
                <SiteImage slot={industry.image} className="transition duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgb(13_34_61/0.96)_0%,rgb(13_34_61/0.75)_42%,rgb(13_34_61/0)_72%)] md:block" aria-hidden />
              <div className="min-w-0 p-4 md:absolute md:inset-x-0 md:bottom-0 md:p-5">
                <h3 className="display text-lg font-extrabold leading-tight text-navy-deep md:text-xl md:text-white">{industry.name}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink/70 md:text-white/80">{industry.example}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-[0.08em] text-navy md:mt-3 md:text-aqua">
                  {industry.product}
                  <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between gap-3 md:hidden" role="group" aria-label="Industry carousel controls">
        <button
          type="button"
          aria-label="Previous industry"
          aria-controls={rowId}
          disabled={!canPrevious}
          onClick={() => scrollCards(-1)}
          className="grid size-12 place-items-center rounded-full border border-navy/25 bg-white text-navy transition hover:border-navy hover:bg-sky disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ArrowLeft size={21} strokeWidth={1.75} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next industry"
          aria-controls={rowId}
          disabled={!canNext}
          onClick={() => scrollCards(1)}
          className="grid size-12 place-items-center rounded-full border border-navy/25 bg-white text-navy transition hover:border-navy hover:bg-sky disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ArrowRight size={21} strokeWidth={1.75} aria-hidden />
        </button>
      </div>
    </>
  );
}
