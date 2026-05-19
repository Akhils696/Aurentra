"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowCoreDevice = navigator.hardwareConcurrency <= 4;

    if (reduceMotion || coarsePointer || lowCoreDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.78,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.72,
      touchMultiplier: 1,
    });

    let frame = 0;
    let active = true;
    const raf = (time: number) => {
      if (active) {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      }
    };

    const onVisibilityChange = () => {
      active = !document.hidden;
      if (active) {
        frame = requestAnimationFrame(raf);
      } else {
        cancelAnimationFrame(frame);
      }
    };

    frame = requestAnimationFrame(raf);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      active = false;
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
