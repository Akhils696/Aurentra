"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BackgroundMotion() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="ambient-mesh absolute inset-0 opacity-60"
        animate={prefersReducedMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ambient-noise absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
