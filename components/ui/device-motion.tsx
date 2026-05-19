"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { memo } from "react";
import { hoverSpring } from "@/lib/motion";

function DeviceMotionComponent({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, hoverSpring);
  const springY = useSpring(y, hoverSpring);
  const rotateX = useTransform(springY, [-120, 120], [3, -3]);
  const rotateY = useTransform(springX, [-120, 120], [-4, 4]);

  return (
    <motion.div
      className="device-motion-wrap"
      style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export const DeviceMotion = memo(DeviceMotionComponent);
