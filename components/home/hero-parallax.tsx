"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.72]);

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-[radial-gradient(circle_at_50%_20%,rgba(239,68,68,0.13),transparent_42%)]"
        style={prefersReducedMotion ? undefined : { y, opacity }}
      />
      {children}
    </section>
  );
}
