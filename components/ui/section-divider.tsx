"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionDivider() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden className="relative h-px overflow-visible">
      <motion.div
        className="absolute left-1/2 top-0 h-px w-[min(72rem,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-[0.2px]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.28, 0.72, 0.28], x: ["-50%", "-48%", "-50%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-[-22px] h-11 w-[min(48rem,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent blur-2xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
