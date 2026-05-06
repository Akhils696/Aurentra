"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), prefersReducedMotion ? 160 : 820);
    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.52, ease: [0.45, 0, 0.2, 1] }}
        >
          <div className="grid place-items-center gap-6">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-glow"
            >
              <Image src="/images/aurentra-logo.jpeg" alt="Aurentra Technologies" width={72} height={72} className="size-16 rounded-md object-cover" priority />
            </motion.div>
            <div className="h-1 w-44 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-aurora to-ember"
                initial={prefersReducedMotion ? false : { width: "0%" }}
                animate={prefersReducedMotion ? undefined : { width: "100%" }}
                transition={{ duration: 0.72, delay: 0.16, ease: [0.45, 0, 0.2, 1] }}
                style={prefersReducedMotion ? { width: "100%" } : undefined}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
