"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrandGeometry } from "@/components/layout/brand-geometry";

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.72]);

  return (
    <section ref={ref} className="cinematic-hero-scene relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div aria-hidden className="hero-scene-skyline" />
      <div aria-hidden className="hero-reflective-ground" />
      <BrandGeometry variant="section" />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-2/3 bg-[radial-gradient(circle_at_50%_20%,rgba(239,61,61,0.2),transparent_42%)]"
        style={prefersReducedMotion ? undefined : { y, opacity }}
      />
      {children}
    </section>
  );
}
