"use client";

import { Children, type ReactNode, useRef, useState } from "react";

export function MobileCardRail({
  children,
  className = "",
  label = "Scrollable cards",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = Children.count(children);

  function updateActiveCard() {
    const rail = railRef.current;
    const firstCard = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !firstCard) return;

    const step = firstCard.offsetWidth + 16;
    setActiveIndex(Math.min(count - 1, Math.max(0, Math.round(rail.scrollLeft / step))));
  }

  function goToCard(index: number) {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;

    rail.scrollTo({ left: card.offsetLeft - rail.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }

  return (
    <div className="mobile-card-carousel">
      <div
        ref={railRef}
        onScroll={updateActiveCard}
        role="region"
        aria-label={label}
        className={`mobile-card-rail ${className}`}
      >
        {children}
      </div>
      <div className="mobile-card-dots" aria-label="Choose a card">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToCard(index)}
            className={index === activeIndex ? "is-active" : ""}
            aria-label={`Show card ${index + 1} of ${count}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
