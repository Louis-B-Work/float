const lenders = [
  { name: "Northline", mark: "N" },
  { name: "Forge", mark: "F" },
  { name: "Oak Capital", mark: "O" },
  { name: "Kinship", mark: "K" },
  { name: "Harbour", mark: "H" },
  { name: "Foundry", mark: "FO" },
];

export function LenderStrip() {
  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="page-shell">
        <h2 className="text-sm font-extrabold text-navy">Lender panel</h2>
        <p className="mt-1 text-xs text-ink/55">Placeholder logos for layout only</p>
      </div>
      <div className="lender-marquee mt-7" aria-label="Placeholder lender panel">
        <div className="lender-track">
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className="lender-group"
              aria-hidden={duplicate || undefined}
            >
              {lenders.map((lender) => (
              <div
                key={lender.name}
                className="flex shrink-0 items-center gap-3 text-navy"
                aria-label={`${lender.name}, placeholder lender`}
              >
                <span className="grid size-9 place-items-center rounded-full border border-current text-[10px] font-black">
                  {lender.mark}
                </span>
                <span className="whitespace-nowrap text-sm font-extrabold">
                  {lender.name}
                </span>
              </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
