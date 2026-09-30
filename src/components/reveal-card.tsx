import { Plus, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// Title and summary are always visible; `children` is revealed on hover or keyboard focus
// on wide, hover-capable screens and always shown elsewhere (see .reveal-card in globals.css).
export function RevealCard({
  index,
  title,
  summary,
  icon: Icon,
  tone = "dark",
  className = "",
  children,
}: {
  index: number;
  title: string;
  summary?: string;
  icon?: LucideIcon;
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
}) {
  const dark = tone === "dark";
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      tabIndex={0}
      aria-label={`${number}: ${title}`}
      className={`reveal-card flex flex-col border ${dark ? "border-white/15 bg-white/[0.03]" : "reveal-card--light border-line bg-white"} ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <Icon className={dark ? "text-aqua" : "text-coral"} size={36} strokeWidth={1.5} aria-hidden />
        ) : (
          <span className={`display text-4xl font-extrabold tracking-normal ${dark ? "text-white/20" : "text-navy/15"}`} aria-hidden>
            {number}
          </span>
        )}
        <div className="flex items-center gap-3">
          {Icon && (
            <span className={`display text-sm font-extrabold tracking-normal ${dark ? "text-white/40" : "text-navy/40"}`} aria-hidden>
              {number}
            </span>
          )}
          <span
            className={`reveal-card-toggle size-8 place-items-center rounded-full border ${dark ? "border-white/25 text-white" : "border-navy/20 text-navy"}`}
            aria-hidden
          >
            <Plus size={15} />
          </span>
        </div>
      </div>
      <div className="mt-auto pt-10">
        <h3 className={`text-xl font-extrabold md:text-2xl ${dark ? "text-white" : "text-navy-deep"}`}>{title}</h3>
        {summary && <p className={`mt-4 leading-7 lg:min-h-[5.25rem] ${dark ? "text-white/65" : "text-ink/65"}`}>{summary}</p>}
        <div className="reveal-card-more">
          <div>{children}</div>
        </div>
      </div>
    </article>
  );
}
