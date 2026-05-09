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
        className="cinematic-fog fog-one"
        animate={prefersReducedMotion ? undefined : { x: ["-6%", "4%", "-6%"], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="cinematic-fog fog-two"
        animate={prefersReducedMotion ? undefined : { x: ["5%", "-4%", "5%"], opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 31, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-mesh absolute inset-0 opacity-60"
        animate={prefersReducedMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="cinematic-particles" />
      <div className="reflective-floor" />
      <div className="ambient-noise absolute inset-0 opacity-[0.05]" />
      <motion.div
        className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:84px_84px]"
        style={prefersReducedMotion ? undefined : { backgroundPositionX: springX, backgroundPositionY: springY }}
      />
    </div>
  );
}
