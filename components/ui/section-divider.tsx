"use client";

import { BrandGeometry } from "@/components/layout/brand-geometry";

export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-px overflow-visible opacity-70">
      <div
        className="absolute left-1/2 top-0 h-px w-[min(72rem,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-[0.2px]"
      />
      <div
        className="absolute left-1/2 top-[-22px] h-11 w-[min(48rem,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent blur-2xl"
      />
      <BrandGeometry variant="section" />
    </div>
  );
}
