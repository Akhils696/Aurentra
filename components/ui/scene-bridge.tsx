"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function SceneBridge() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div aria-hidden className="scene-bridge">
      <motion.span className="scene-bridge-light" style={prefersReducedMotion ? undefined : { x }} />
    </div>
  );
}
