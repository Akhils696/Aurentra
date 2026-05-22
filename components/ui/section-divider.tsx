"use client";

import { BrandGeometry } from "@/components/layout/brand-geometry";

export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-px w-full overflow-visible opacity-80 pointer-events-none select-none my-12 sm:my-16">
      {/* Primary horizontal divider line with gradient fade */}
      <div
        className="absolute left-1/2 top-0 h-px w-[min(76rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.2px]"
      />
      {/* Wider subtle white glow */}
      <div
        className="absolute left-1/2 top-0 h-px w-[min(54rem,76vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />
      
      {/* Cinematic ambient highlights (Left blue / Right red) to blend section transitions */}
      <div
        className="absolute left-[30%] top-[-26px] h-12 w-[min(30rem,45vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#13203b]/45 to-transparent blur-3xl opacity-60"
      />
      <div
        className="absolute left-[70%] top-[-26px] h-12 w-[min(30rem,45vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-950/40 to-transparent blur-3xl opacity-60"
      />
      
      {/* Soft center lighting beam */}
      <div
        className="absolute left-1/2 top-[-22px] h-11 w-[min(48rem,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent blur-2xl"
      />
      
      {/* Premium brand icon node */}
      <BrandGeometry variant="section" />
    </div>
  );
}
