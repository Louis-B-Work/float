import { assetPath } from "@/lib/assets";
import variants from "@/lib/image-variants.json";

const widthsByName: Record<string, number[]> = variants;

/**
 * Decorative photo that fills its positioned parent. `slot` is the JPG path, e.g. "/images/home-hero.jpg";
 * responsive WebP copies come from `npm run images`. Pass `priority` for above-the-fold images so they load
 * eagerly instead of lazily. Plain <img> because the static export cannot use Next's image optimiser.
 */
export function SiteImage({ slot, className = "", priority = false }: { slot: string; className?: string; priority?: boolean }) {
  const name = slot.replace(/^.*\//, "").replace(/\.jpg$/i, "");
  const widths = widthsByName[name] ?? [];
  const base = slot.replace(/\.jpg$/i, "");
  const srcSet = widths.map((w) => `${assetPath(`${base}-${w}.webp`)} ${w}w`).join(", ");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assetPath(slot)}
      srcSet={srcSet || undefined}
      sizes="(min-width: 1024px) 50vw, 100vw"
      alt=""
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`absolute inset-0 size-full object-cover ${className}`}
    />
  );
}
