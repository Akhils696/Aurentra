"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CursorSystem() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const visibleRef = useRef(false);

  // Fast inner dot coordinates (instant physical tracking)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Soft outer ring spring coordinates (cinematic fluid latency)
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const springX = useSpring(ringX, { stiffness: 280, damping: 28, mass: 0.55 });
  const springY = useSpring(ringY, { stiffness: 280, damping: 28, mass: 0.55 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const move = (event: PointerEvent) => {
      dotX.set(event.clientX);
      dotY.set(event.clientY);
      ringX.set(event.clientX);
      ringY.set(event.clientY);
      
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a,button,[role='button'],[data-cursor='interactive']");
      const textInput = target.closest("input,textarea,select");
      
      setActive(Boolean(interactive || textInput));
      setIsInput(Boolean(textInput));
    };

    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [dotX, dotY, ringX, ringY]);

  if (!visible) return null;

  return (
    <>
      {/* Outer elegant fluid halo ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden rounded-full border border-white/18 bg-white/[0.005] md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isInput ? 0.35 : active ? 1.55 : 1,
          borderColor: active ? "rgba(239, 61, 61, 0.44)" : "rgba(255, 255, 255, 0.18)",
          backgroundColor: active ? "rgba(239, 61, 61, 0.03)" : "rgba(255, 255, 255, 0.005)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Inner precision tracking pointer dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[81] hidden rounded-full bg-white md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
        }}
        animate={{
          scale: isInput ? 0.5 : active ? 1.35 : 1,
          backgroundColor: active ? "#ef3d3d" : "#ffffff",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.16, ease: "easeOut" }}
      />
    </>
  );
}
