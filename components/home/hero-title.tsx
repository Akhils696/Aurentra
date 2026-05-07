"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = ["Digital", "Solutions"];

export function HeroTitle() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <h1 className="premium-heading max-w-5xl text-[4rem] font-black uppercase leading-[0.86] text-white sm:text-7xl lg:text-8xl">
      <span className="inline-flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-5">
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
          That Drive Real Growth
        </motion.span>
      </span>
    </h1>
  );
}
