"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { motionTokens } from "@/lib/motion";

function SceneSectionComponent({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={cn("scene-section", className)}
      initial={prefersReducedMotion ? false : { opacity: 0.78, scale: 0.992, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: motionTokens.duration.scene, ease: motionTokens.cinematic }}
    >
      {children}
    </motion.section>
  );
}

export const SceneSection = memo(SceneSectionComponent);
