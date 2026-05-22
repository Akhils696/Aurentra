"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BrandGeometry({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const prefersReducedMotion = useReducedMotion();

  if (variant === "hero") {
    return (
      <div aria-hidden className="brand-geometry brand-geometry-hero">
        {/* Shell drifts on a slow, signature triangular movement loop */}
        <motion.span 
          className="triangle-shell block absolute inset-0" 
          animate={prefersReducedMotion ? undefined : {
            x: [0, 12, -12, 0],
            y: [0, -20, -10, 0],
            rotate: [-8, -5, -11, -8],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Core pulses gently with atmospheric cinematic fade timing */}
        <motion.span 
          className="triangle-core block absolute" 
          style={{ inset: "18%" }}
          animate={prefersReducedMotion ? undefined : {
            opacity: [0.7, 0.88, 0.7],
            scale: [0.97, 1.03, 0.97],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <span className="triangle-shadow block absolute inset-0" />
      </div>
    );
  }

  // Section variant (smaller node divider)
  return (
    <div aria-hidden className="brand-geometry brand-geometry-section">
      <span className="triangle-shell block absolute inset-0" />
      <motion.span 
        className="triangle-core block absolute" 
        style={{ inset: "18%" }}
        animate={prefersReducedMotion ? undefined : {
          scale: [0.85, 1.15, 0.85],
          opacity: [0.65, 0.95, 0.65],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="triangle-shadow block absolute inset-0" />
    </div>
  );
}
