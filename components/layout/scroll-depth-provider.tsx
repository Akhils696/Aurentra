"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export function ScrollDepthProvider() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const lowCoreDevice = navigator.hardwareConcurrency <= 4;
    return !coarse && !lowCoreDevice;
  });

  if (prefersReducedMotion || !enabled) return null;

  return <ScrollDepthLayers />;
}

function ScrollDepthLayers() {
  const { scrollYProgress } = useScroll();
  const yNear = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yFar = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.3, 0.5, 0.24]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div className="scroll-depth-layer scroll-depth-far" style={{ y: yFar, opacity }} />
      <motion.div className="scroll-depth-layer scroll-depth-near" style={{ y: yNear }} />
    </div>
  );
}
