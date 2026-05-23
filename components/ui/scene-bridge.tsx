"use client";

import { motion } from "framer-motion";

export function SceneBridge() {
  return (
    <div aria-hidden className="scene-bridge relative h-24 w-full overflow-hidden pointer-events-none select-none">
      {/* Central horizontal line */}
      <span className="scene-bridge-light absolute left-[15%] right-[15%] top-1/2 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/22 to-transparent opacity-85" />
      
      {/* Blended color gradients for depth continuity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03050b] via-[#050917]/30 to-[#03050b] opacity-90" />
      
      {/* Soft moving ambient highlight to feel alive */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(48rem,75vw)] h-[30px] rounded-full bg-gradient-to-r from-transparent via-red-500/8 to-transparent blur-[25px]"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scaleX: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Deep atmospheric backdrop blur fog */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#03050b] to-transparent backdrop-blur-[6px]" />
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#03050b] to-transparent backdrop-blur-[6px]" />
    </div>
  );
}
