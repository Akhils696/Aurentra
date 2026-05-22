"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/lib/motion";

export function LazyRender({
  children,
  className,
  minHeight = 280,
  rootMargin = "520px",
}: {
  children: React.ReactNode;
  className?: string;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className} style={visible ? undefined : { minHeight }}>
      {visible ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={revealTransition}
        >
          {children}
        </motion.div>
      ) : (
        <div aria-hidden className="performance-skeleton h-full min-h-[inherit] rounded-lg" />
      )}
    </div>
  );
}

