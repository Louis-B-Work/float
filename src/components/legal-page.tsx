import Link from "next/link";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="section-space">
      <div className="page-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <h1 className="display text-5xl font-extrabold text-navy-deep">{title}</h1>
          <p className="mt-5 leading-7 text-ink/60">{intro}</p>
          <div className="mt-7 border-l-4 border-coral bg-mist p-5 text-sm font-bold leading-6 text-navy">
            Draft placeholder. This page must be reviewed and completed by a qualified legal professional before launch.
          </div>
        </div>
        <article className="prose max-w-none space-y-9 leading-8 text-ink/70">
          {children}
          <p>Questions about this page can be sent through our <Link href="/contact" className="font-bold text-navy underline">contact form</Link>.</p>
        </article>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="display text-2xl font-extrabold text-navy">{title}</h2><div className="mt-3 space-y-3">{children}</div></section>;
}
