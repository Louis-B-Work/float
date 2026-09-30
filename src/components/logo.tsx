import Link from "next/link";

// Outlined from concept 1 (raised-O wordmark) in assets/WJ02462 Float branding PF1.pdf.
const wordmarkPaths = [
  "M35.37 164.61L35.37 121.17L79.28 121.17L79.28 89.83L35.37 89.83L35.37 68.11L86.57 68.11L86.57 36.77L0 36.77L0 164.61Z",
  "M197.04 164.61L197.04 133.27L154.22 133.27L154.22 36.77L118.85 36.77L118.85 164.61Z",
  "M292.15 135.6C330.16 135.6 360.26 106.12 360.26 67.8C360.26 29.48 330.16 0 292.15 0C254.14 0 224.04 29.48 224.04 67.8C224.04 106.12 254.14 135.6 292.15 135.6M292.15 103.95C274.46 103.95 260.03 90.61 260.03 67.8C260.03 44.99 274.46 31.65 292.15 31.65C309.84 31.65 324.26 44.99 324.26 67.8C324.26 90.61 309.84 103.95 292.15 103.95Z",
  "M511.84 164.61L455.99 36.77L434.58 36.77L378.41 164.61L416.89 164.61L422.16 150.34L467.31 150.34L472.59 164.61M444.82 88.44L456.92 121.48L432.71 121.48Z",
  "M589.11 164.61L589.11 68.11L619.98 68.11L619.98 36.77L522.86 36.77L522.86 68.11L553.73 68.11L553.73 164.61Z",
];

export function FloatWordmark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 619.98 164.61"
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {wordmarkPaths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`inline-flex items-center py-2 ${light ? "text-white" : "text-ink"}`} aria-label="Float home">
      <FloatWordmark className="h-7 w-auto md:h-8" />
    </Link>
  );
}