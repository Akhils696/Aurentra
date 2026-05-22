"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Compass, Layers, Cpu, Globe, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motionTokens, revealTransition } from "@/lib/motion";

const steps = [
  {
    phase: "01",
    title: "Discovery",
    icon: Search,
    subtitle: "Understanding goals & constraints",
    copy: "We begin with deep technical audits and stakeholder interviews to uncover your exact bottlenecks, workflows, and growth barriers.",
    deliverables: ["Technical audit report", "System constraint map", "ROI alignment matrix"],
    duration: "Week 1",
  },
  {
    phase: "02",
    title: "Strategy",
    icon: Compass,
    subtitle: "Architecture & integration mapping",
    copy: "Our architects map the flow of data, API integrations, LLM models, and team touchpoints into a unified, secure systems blueprint.",
    deliverables: ["Data architecture map", "Integration schema", "Milestone timeline"],
    duration: "Week 2",
  },
  {
    phase: "03",
    title: "Design",
    icon: Layers,
    subtitle: "Cinematic high-fidelity prototypes",
    copy: "We design premium, ultra-responsive user interfaces and handoff points that feel alive, intuitive, and perfectly matching your positioning.",
    deliverables: ["Interactive prototypes", "Enterprise design system", "User flow validation"],
    duration: "Weeks 3-4",
  },
  {
    phase: "04",
    title: "Development",
    icon: Cpu,
    subtitle: "Production-grade engineering",
    copy: "Our team implements the blueprint using Next.js, Framer Motion, and robust APIs, adhering to elite performance and security standards.",
    deliverables: ["Clean, modular code", "Rigorous automated tests", "API endpoints & integrations"],
    duration: "Weeks 5-8",
  },
  {
    phase: "05",
    title: "Deployment",
    icon: Globe,
    subtitle: "Rigorous staging & cloud rollout",
    copy: "We carry out comprehensive sandbox staging, user acceptance testing, and seamless zero-downtime deployment to your hosting environment.",
    deliverables: ["Zero-downtime migration", "Standard operating procedures", "30-day post-launch support"],
    duration: "Week 9",
  },
];

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mt-12 sm:mt-16">
      {/* Timeline central track */}
      <div 
        aria-hidden 
        className="absolute left-4 top-8 bottom-8 w-px bg-white/8 md:left-1/2 md:-translate-x-1/2"
      >
        <motion.div
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-red-500 via-red-600 to-transparent w-full"
          initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
          whileInView={prefersReducedMotion ? undefined : { height: "100%", opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      <div className="space-y-12 md:space-y-20">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={step.phase}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: motionTokens.duration.reveal, ease: motionTokens.cinematic, delay: index * 0.08 }}
              className={cn(
                "relative grid md:grid-cols-2 gap-8 md:gap-16 items-start",
                isEven ? "md:text-right" : "md:text-left"
              )}
            >
              {/* Central node connector */}
              <div 
                aria-hidden
                className={cn(
                  "absolute left-4 top-6 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/12 bg-[#050712] z-10 transition-colors duration-300 hover:border-red-500/50 group md:left-1/2",
                )}
              >
                <div className="size-2 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-red-500 group-hover:scale-125" />
              </div>

              {/* Step info block */}
              <div className={cn(
                "pl-12 md:pl-0",
                isEven ? "md:col-start-1" : "md:col-start-2"
              )}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/54">
                  <span>{step.duration}</span>
                </span>
                
                <h3 className="mt-4 text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3 md:justify-start justify-start md:inline-flex">
                  <span className="text-red-500/80 font-mono text-xl">{step.phase}.</span>
                  {step.title}
                </h3>
                
                <p className="mt-2 text-sm font-medium text-white/45">{step.subtitle}</p>
                <p className={cn("body-copy mt-4 max-w-xl text-base text-white/72", isEven && "md:ml-auto")}>{step.copy}</p>
              </div>

              {/* Step card deliverables */}
              <div className={cn(
                "pl-12 md:pl-0",
                isEven ? "md:col-start-2" : "md:col-start-1"
              )}>
                <div className={cn(
                  "ui-card ui-card-hover p-6 metal-edge bg-[#080c16]/50 max-w-md",
                  isEven ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <div className="flex items-center gap-3 border-b border-white/6 pb-3 mb-4">
                    <div className="flex size-9 items-center justify-center rounded bg-white/8 text-white">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white/48 font-bold">Tangible Deliverables</span>
                  </div>
                  <ul className="space-y-3">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/68">
                        <CheckCircle2 className="size-4 text-red-500/60 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
