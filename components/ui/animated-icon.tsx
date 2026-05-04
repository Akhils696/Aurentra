"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: -4, y: -1 }}
      transition={{ duration: 0.24, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}
