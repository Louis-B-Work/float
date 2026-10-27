import Image from "next/image";
import { assetPath } from "@/lib/assets";

/** Decorative photo that fills its positioned parent. `slot` is the image path, e.g. "/images/home-hero.jpg". */
export function SiteImage({ slot, className = "" }: { slot: string; className?: string }) {
  return <Image src={assetPath(slot)} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${className}`} />;
}
