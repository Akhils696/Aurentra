"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { revealTransition } from "@/lib/motion";

function MotionRevealComponent({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export const MotionReveal = memo(MotionRevealComponent);
