"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";

const steps = [
  { label: "Lead capture", width: 58 },
  { label: "AI qualification", width: 68 },
  { label: "Proposal workflow", width: 78 },
  { label: "Performance dashboard", width: 88 },
];

export function AutomationPipeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="ui-card relative p-5">
      <div className="rounded-md bg-black/20 p-5">
        <div className="flex items-center justify-between pb-4">
          <div>
            <p className="text-sm text-white/45">Aurentra Growth OS</p>
            <p className="text-lg font-semibold text-white">Automation Pipeline</p>
          </div>
          <motion.span
            className="rounded-md bg-white/8 px-3 py-1 text-xs font-semibold text-white/72"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.46, delay: 0.42, ease: "easeInOut" }}
          >
            Live
          </motion.span>
        </div>
        <div className="mt-6 grid gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="flex items-center gap-4 rounded-md bg-white/[0.028] p-4"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.56, delay: 0.18 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex size-9 items-center justify-center rounded-md bg-white/7 text-sm font-semibold text-white/72">0{index + 1}</span>
              <div className="flex-1">
                <p className="font-medium text-white">{step.label}</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-aurora to-ember"
                    initial={prefersReducedMotion ? false : { width: 0 }}
                    animate={prefersReducedMotion ? undefined : { width: `${step.width}%` }}
                    transition={{ duration: 0.96, delay: 0.36 + index * 0.15, ease: [0.45, 0, 0.2, 1] }}
                    style={prefersReducedMotion ? { width: `${step.width}%` } : undefined}
                  />
                </div>
              </div>
              <motion.span
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.5 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.38, delay: 0.88 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <CheckCircle2 aria-hidden className="size-5 text-red-100/80" />
              </motion.span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-5 flex items-center gap-3 rounded-md bg-white/6 p-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.9, ease: "easeInOut" }}
        >
          <PlayCircle aria-hidden className="size-8 text-aurora" />
          <p className="text-sm leading-6 text-white/64">Connected workflows, product-grade UX, and measurable growth in one delivery track.</p>
        </motion.div>
      </div>
    </div>
  );
}
