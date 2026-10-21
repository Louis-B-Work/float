import { ImageIcon } from "lucide-react";

/**
 * Grey wireframe stand-in for a photo until the final image set is supplied. Fills its
 * positioned parent like `<Image fill />`. `slot` is the intended image path, e.g.
 * "/images/home-hero.jpg"; swap this back to `<Image src={assetPath(slot)} … />` once it exists.
 */
export function ImagePlaceholder({ slot, className = "" }: { slot: string; className?: string }) {
  const label = slot.replace(/^.*\//, "").replace(/\.[a-z]+$/i, "");

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#d5dbe0] ${className}`} data-image-slot={slot} aria-hidden>
      <svg className="absolute inset-0 size-full text-[#bcc5cc]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="absolute inset-0 grid place-items-center p-3">
        <div className="flex max-w-full flex-col items-center gap-1.5 bg-[#d5dbe0] px-3 py-2 text-[#6f7b85]">
          <ImageIcon size={26} strokeWidth={1.5} />
          <span className="max-w-full truncate text-[11px] font-bold uppercase tracking-[0.12em]">{label}</span>
        </div>
      </div>
    </div>
  );
}
