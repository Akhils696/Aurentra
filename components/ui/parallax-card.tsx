"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";

function ParallaxCardComponent({ children, offset = 16 }: { children: React.ReactNode; offset?: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="motion-reduce:transform-none"
      initial={prefersReducedMotion ? false : { y: offset * 0.45 }}
      whileInView={prefersReducedMotion ? undefined : { y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const ParallaxCard = memo(ParallaxCardComponent);
