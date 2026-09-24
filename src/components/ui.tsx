import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assets";

export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-3.5 text-center text-sm font-extrabold transition sm:px-6 ${
        secondary
          ? "border border-navy/20 bg-white text-navy hover:border-navy"
          : "bg-coral text-navy-deep hover:bg-aqua"
      }`}
    >
      {children}
      <ArrowRight size={17} aria-hidden />
    </Link>
  );
}

export function SectionHeading({
  title,
  copy,
  light = false,
}: {
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className={`display balance text-4xl font-extrabold leading-[1.05] md:text-6xl ${light ? "text-white" : "text-navy-deep"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-6 max-w-2xl text-lg leading-8 ${light ? "text-white/70" : "text-ink/65"}`}>{copy}</p>}
    </div>
  );
}

export function PageHero({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="overflow-hidden bg-mist">
      <div className="page-shell grid min-h-[560px] items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center py-20 pr-0 lg:pr-16">
          <h1 className="display balance text-5xl font-extrabold leading-[0.98] text-navy-deep md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">{copy}</p>
        </div>
        <div className="relative min-h-80 overflow-hidden bg-sky lg:min-h-full">
          {image ? (
            <Image src={assetPath(image)} alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          ) : (
            <div className="grid-lines absolute inset-0" />
          )}
          <div className="absolute bottom-0 left-0 size-32 bg-coral md:size-44" />
          <div className="absolute bottom-8 left-8 size-16 rounded-full border-[14px] border-navy md:bottom-12 md:left-12 md:size-24" />
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to find a finance route that fits?",
  copy = "Tell us what you are planning. We will use the detail to understand your needs and discuss suitable next steps.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-aqua py-16">
      <div className="page-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <h2 className="display balance text-3xl font-extrabold text-navy-deep md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-navy-deep/70">{copy}</p>
        </div>
        <ButtonLink href="/contact">Start an enquiry</ButtonLink>
      </div>
    </section>
  );
}
