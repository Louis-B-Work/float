import { Plus, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// Title and summary are always visible; `children` is revealed on hover or keyboard focus
// on wide, hover-capable screens and always shown elsewhere (see .reveal-card in globals.css).
export function RevealCard({
  title,
  summary,
  icon: Icon,
  tone = "dark",
  className = "",
  children,
}: {
  title: string;
  summary?: string;
  icon?: LucideIcon;
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
}) {
  const dark = tone === "dark";

  return (
    <article
      tabIndex={0}
      aria-label={title}
      className={`reveal-card flex flex-col border ${dark ? "border-white/15 bg-white/[0.03]" : "reveal-card--light border-line bg-white"} ${className}`}
    >
      <div className="flex items-start gap-4">
        {Icon && (
          <Icon className={dark ? "text-aqua" : "text-coral"} size={36} strokeWidth={1.5} aria-hidden />
        )}
          <span
            className={`reveal-card-toggle ml-auto size-8 place-items-center rounded-full border ${dark ? "border-white/25 text-white" : "border-navy/20 text-navy"}`}
            aria-hidden
          >
            <Plus size={15} />
          </span>
      </div>
      <div className="mt-auto pt-6 md:pt-10">
        <h3 className={`text-xl font-extrabold md:text-2xl ${dark ? "text-white" : "text-navy-deep"}`}>{title}</h3>
        {summary && <p className={`mt-4 leading-7 lg:min-h-[5.25rem] ${dark ? "text-white/65" : "text-ink/65"}`}>{summary}</p>}
        <div className="reveal-card-more">
          <div>{children}</div>
        </div>
      </div>
    </article>
  );
}
