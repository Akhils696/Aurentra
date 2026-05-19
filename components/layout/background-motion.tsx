"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";
import { BrandGeometry } from "@/components/layout/brand-geometry";

export function BackgroundMotion() {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(22);
  const springX = useSpring(x, { stiffness: 60, damping: 24 });
  const springY = useSpring(y, { stiffness: 60, damping: 24 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const move = (event: PointerEvent) => {
      x.set((event.clientX / window.innerWidth) * 100);
      y.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="cinematic-skyline" />
      <BrandGeometry variant="hero" />
      <motion.div
        className="dynamic-red-light light-a motion-ambient"
        animate={prefersReducedMotion ? undefined : { x: ["-4%", "4%", "-4%"], opacity: [0.24, 0.36, 0.24] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="cinematic-fog fog-one motion-ambient"
        animate={prefersReducedMotion ? undefined : { x: ["-4%", "3%", "-4%"], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ambient-mesh motion-ambient absolute inset-0 opacity-45" />
      <div className="cinematic-particles" />
      <div className="reflective-floor" />
      <div className="ambient-noise absolute inset-0 opacity-[0.035]" />
      <motion.div
        className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:84px_84px]"
        style={prefersReducedMotion ? undefined : { backgroundPositionX: springX, backgroundPositionY: springY }}
      />
    </div>
  );
}
