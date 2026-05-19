"use client";

import { useEffect } from "react";

export function MotionQualityProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const limitedMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
    const limitedCpu = navigator.hardwareConcurrency <= 4;
    const quality = prefersReduced ? "reduced" : coarse || limitedMemory || limitedCpu ? "balanced" : "full";

    root.dataset.motion = quality;
  }, []);

  return null;
}
