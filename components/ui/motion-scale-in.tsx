"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { motionTokens } from "@/lib/motion";

function MotionScaleInComponent({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: motionTokens.duration.base, delay, ease: motionTokens.ease }}
    >
      {children}
    </motion.div>
  );
}

export const MotionScaleIn = memo(MotionScaleInComponent);
