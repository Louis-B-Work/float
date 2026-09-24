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
    <section className="border-y border-line bg-white py-10">
      <div className="page-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
          <div className="shrink-0">
            <h2 className="text-sm font-extrabold text-navy">Lender panel</h2>
            <p className="mt-1 text-xs text-ink/55">Placeholder logos for layout only</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {lenders.map((lender) => (
              <div
                key={lender.name}
                className="flex min-h-20 items-center justify-center gap-2 bg-white px-4 text-navy"
                aria-label={`${lender.name}, placeholder lender`}
              >
                <span className="grid size-8 place-items-center rounded-full border border-current text-[10px] font-black">
                  {lender.mark}
                </span>
                <span className="text-sm font-extrabold">{lender.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
