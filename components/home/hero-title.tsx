"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = ["Transforming", "Businesses", "with"];

export function HeroTitle() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
      <span className="inline-flex flex-wrap gap-x-4 gap-y-2">
        {words.map((word, index) => (
          <motion.span
            key={word}
            className="inline-block"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          className="shimmer-text inline-block"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: words.length * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
          AI & Digital Solutions
        </motion.span>
      </span>
    </h1>
  );
}
