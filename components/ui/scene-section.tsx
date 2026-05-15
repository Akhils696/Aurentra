"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motionTokens } from "@/lib/motion";

export function SceneSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, -18]);
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.86, 1], [0.72, 1, 1, 0.84]);

  return (
    <motion.section
      ref={ref}
      className={cn("scene-section", className)}
      initial={prefersReducedMotion ? false : { filter: "blur(10px)", scale: 0.985 }}
      whileInView={prefersReducedMotion ? undefined : { filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: motionTokens.duration.scene, ease: motionTokens.cinematic }}
      style={prefersReducedMotion ? undefined : { y, opacity }}
    >
      {children}
    </motion.section>
  );
}
