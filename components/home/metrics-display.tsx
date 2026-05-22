"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, Calendar, CheckCircle, Cpu, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { motionTokens } from "@/lib/motion";

const metrics = [
  {
    icon: Clock,
    value: "< 2 Hours",
    label: "Enterprise SLA Response",
    description: "Average turnaround for critical production and API support tickets.",
    visual: "sla",
  },
  {
    icon: Calendar,
    value: "6 - 8 Weeks",
    label: "Production Delivery",
    description: "Average timeframe from kickoff, scoping workshops, to deployment.",
    visual: "timeline",
  },
  {
    icon: CheckCircle,
    value: "99.99%",
    label: "Systems Uptime Guarantee",
    description: "High-availability automated health checks and redundant hosting setup.",
    visual: "uptime",
  },
];

const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/Data" },
  { name: "Tailwind CSS", category: "Styles" },
  { name: "Framer Motion", category: "Animation" },
  { name: "OpenAI / LLMs", category: "AI Integration" },
  { name: "Vercel / AWS", category: "Cloud" },
];

export function MetricsDisplay() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-12 mt-12">
      {/* 3-column primary metrics grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <motion.div
              key={metric.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.cinematic, delay: index * 0.08 }}
              className="ui-card ui-card-hover p-6 metal-edge bg-gradient-to-b from-[#090d16] to-[#04060c] border-white/8 hover:border-white/18"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded bg-white/6 text-red-500/95">
                  <Icon className="size-5" />
                </div>
                {metric.visual === "uptime" && (
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/12 px-2 py-0.5 rounded flex items-center gap-1.5">
                    <Activity className="size-3 animate-pulse" /> ACTIVE SLA
                  </span>
                )}
              </div>

              <h3 className="mt-6 text-3xl font-black uppercase tracking-tight text-white font-mono">
                {metric.value}
              </h3>
              
              <p className="mt-2 text-sm font-semibold text-white/82">{metric.label}</p>
              <p className="body-copy mt-2 text-xs leading-relaxed text-white/52">{metric.description}</p>

              {/* Restrained animated visual feedback at bottom of card */}
              <div className="mt-6 h-1 w-full bg-white/6 rounded-full overflow-hidden relative">
                {metric.visual === "sla" && (
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-red-500" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                )}
                {metric.visual === "timeline" && (
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-500 to-blue-500" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "84%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                )}
                {metric.visual === "uptime" && (
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-emerald-500" 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technologies Credibility Display */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.cinematic }}
        className="ui-card p-6 metal-edge bg-gradient-to-r from-[#070b14]/80 to-[#04060b]/40 border-white/6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-[10px] uppercase font-bold tracking-widest text-red-500/90 flex items-center gap-1.5">
              <Cpu className="size-4" /> Production-ready Tech Stack
            </span>
            <h3 className="mt-2 text-xl font-bold text-white uppercase tracking-tight">Vetted Architecture</h3>
            <p className="body-copy mt-1 text-xs text-white/52">
              We leverage standard, reliable frameworks and infrastructure to build blazing fast, maintainable applications that scale automatically.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end max-w-xl">
            {technologies.map((tech) => (
              <span 
                key={tech.name} 
                className="text-[11px] font-semibold text-white/78 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/8 hover:border-white/18 px-3 py-1.5 rounded transition-all duration-200 cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
