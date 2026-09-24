import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Float home">
      <Image
        src="/brand/float-logo-dark.png"
        alt="Float"
        width={220}
        height={80}
        priority
        className={`theme-logo h-10 w-auto object-contain ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
