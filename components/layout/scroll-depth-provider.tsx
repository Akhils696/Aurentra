"use client";

import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

export function ScrollDepthProvider() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yNear = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yFar = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.3, 0.5, 0.24]);

  if (prefersReducedMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div className="scroll-depth-layer scroll-depth-far" style={{ y: yFar, opacity }} />
      <motion.div className="scroll-depth-layer scroll-depth-near" style={{ y: yNear }} />
    </div>
  );
}
