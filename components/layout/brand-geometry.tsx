export function BrandGeometry({ variant = "hero" }: { variant?: "hero" | "section" }) {
  return (
    <div aria-hidden className={`brand-geometry brand-geometry-${variant}`}>
      <span className="triangle-shell" />
      <span className="triangle-core" />
      <span className="triangle-shadow" />
    </div>
  );
}
