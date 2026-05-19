"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      <motion.main
        key={pathname}
        className="min-h-svh"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
