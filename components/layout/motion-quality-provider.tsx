"use client";

import { useEffect } from "react";

export function MotionQualityProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const updateQuality = () => {
      const nav = navigator as Navigator & { deviceMemory?: number };
      const prefersReduced = reducedMotionQuery.matches;
      const coarse = coarsePointerQuery.matches;
      const limitedMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
      const limitedCpu = navigator.hardwareConcurrency <= 4;
      const quality = prefersReduced ? "reduced" : coarse || limitedMemory || limitedCpu ? "balanced" : "full";

      root.dataset.motion = quality;
      root.dataset.performance = limitedMemory || limitedCpu ? "constrained" : "standard";
    };

    updateQuality();
    reducedMotionQuery.addEventListener("change", updateQuality);
    coarsePointerQuery.addEventListener("change", updateQuality);

    return () => {
      reducedMotionQuery.removeEventListener("change", updateQuality);
      coarsePointerQuery.removeEventListener("change", updateQuality);
    };
  }, []);

  return null;
}
