"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Shield, Activity, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { hoverSpring, motionTokens } from "@/lib/motion";
import { ParallaxCard } from "@/components/ui/parallax-card";

const caseStudies = [
  {
    title: "Neurahealth",
    category: "AI Automation",
    subtitle: "Medical Dispatch & Queuing Engine",
    outcome: "Redesigned practitioner-patient dispatch system, integrating a custom human-in-the-loop AI scheduler.",
    metrics: [
      { label: "Completion Rate", value: "3.8x" },
      { label: "Admin Overhead", value: "-72%" },
      { label: "Match Accuracy", value: "99.9%" },
    ],
    visualType: "scheduler",
    accent: "from-emerald-500/20 to-teal-500/4",
    borderGlow: "group-hover:border-emerald-500/30",
  },
  {
    title: "Apex Logistics",
    category: "Custom Platform",
    subtitle: "Real-time Operations Engine",
    outcome: "Replaced scattered legacy middleware with a high-performance Next.js and WebSocket supply chain dashboard.",
    metrics: [
      { label: "Hours Saved Weekly", value: "18 hrs" },
      { label: "Sync Latency", value: "<200ms" },
      { label: "Throughput", value: "+46%" },
    ],
    visualType: "chart",
    accent: "from-blue-500/20 to-indigo-500/4",
    borderGlow: "group-hover:border-blue-500/30",
  },
  {
    title: "Quantum Logix",
    category: "Enterprise AI",
    subtitle: "AI Sales Copilot & CRM Sync",
    outcome: "Designed an in-call speech pipeline matching transcript insights to standard compliance protocols in real-time.",
    metrics: [
      { label: "Sales Cycle Speed", value: "42%" },
      { label: "Compliance Score", value: "100%" },
      { label: "Match Lift", value: "+34%" },
    ],
    visualType: "pipeline",
    accent: "from-red-500/20 to-orange-500/4",
    borderGlow: "group-hover:border-red-500/30",
  },
];

export function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {caseStudies.map((study, index) => (
        <ParallaxCard key={study.title} offset={8}>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.cinematic, delay: index * 0.09 }}
            className={cn(
              "group ui-card ui-card-hover p-6 metal-edge h-full flex flex-col justify-between overflow-hidden",
              "border-white/10 hover:border-white/20 bg-gradient-to-b from-[#0b0f19] to-[#04060c]"
            )}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/6 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-black text-red-500/90">{study.category}</span>
                  <h3 className="mt-1 text-2xl font-black uppercase text-white tracking-tight">{study.title}</h3>
                </div>
                <div className="flex size-9 items-center justify-center rounded-full bg-white/6 text-white/60 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="size-4" />
                </div>
              </div>

              {/* Subtitle & Outcome */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-white/80">{study.subtitle}</p>
                <p className="body-copy mt-2 text-sm leading-relaxed text-white/54">{study.outcome}</p>
              </div>

              {/* Visual Mockup inside card */}
              <div className={cn(
                "mt-6 rounded-lg border border-white/8 p-3 bg-gradient-to-br min-h-[140px] flex flex-col justify-center relative",
                study.accent
              )}>
                {study.visualType === "scheduler" && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/6">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
                        <Activity className="size-3" /> Live Dispatcher
                      </span>
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-[#050710] p-1.5 rounded border border-white/5">
                        <span className="block text-white/40">Next Patient</span>
                        <span className="font-bold text-white">#810-AR</span>
                      </div>
                      <div className="bg-[#050710] p-1.5 rounded border border-white/5">
                        <span className="block text-white/40">Queue Status</span>
                        <span className="font-bold text-white">0% Wait</span>
                      </div>
                    </div>
                  </div>
                )}

                {study.visualType === "chart" && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/6">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 flex items-center gap-1">
                        <RefreshCw className="size-3 animate-spin-slow" /> Real-time Sync
                      </span>
                      <span className="text-[10px] text-white/40">24h History</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-12 justify-center pt-2">
                      {[30, 45, 25, 60, 75, 50, 90, 85].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-full bg-blue-500/20 group-hover:bg-blue-500/40 rounded-t transition-all duration-300"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {study.visualType === "pipeline" && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/6">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-red-400 flex items-center gap-1">
                        <Shield className="size-3" /> Compliance Check
                      </span>
                      <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-mono">STRICT</span>
                    </div>
                    <div className="space-y-1.5 text-[9px] font-mono bg-[#050710] p-2 rounded border border-white/5">
                      <div className="flex justify-between">
                        <span className="text-white/40">Speech Token:</span>
                        <span className="text-white">VERIFIED</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Intent Match:</span>
                        <span className="text-green-400">100% SECURE</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Metrics Display */}
            <div className="mt-8 pt-4 border-t border-white/6">
              <div className="grid grid-cols-3 gap-2">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="text-center bg-white/[0.03] rounded p-2 border border-white/5">
                    <span className="block text-lg font-black text-white group-hover:text-red-400 transition-colors duration-300">{metric.value}</span>
                    <span className="block text-[9px] uppercase tracking-wider text-white/38 font-bold mt-1 leading-tight">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </ParallaxCard>
      ))}
    </div>
  );
}
