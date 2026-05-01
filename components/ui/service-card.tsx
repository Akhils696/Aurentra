"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  summary: string;
  slug: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, summary, slug, icon: Icon }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/services#${slug}`}
        className="group relative block overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-px shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-[18px] transition duration-300 hover:shadow-[0_22px_80px_rgba(239,68,68,0.16)]"
      >
        <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(239,68,68,0.65),rgba(249,115,22,0.26),rgba(255,255,255,0.08))]" />
        <div className="relative h-full rounded-[7px] bg-graphite/80 p-6">
          <div className="mb-6 flex items-center justify-between">
            <motion.span
              className="flex size-12 items-center justify-center rounded-md bg-aurora/12 text-aurora"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: -4 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Icon aria-hidden className="size-6" />
            </motion.span>
            <ArrowUpRight aria-hidden className="size-5 text-white/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aurora" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 leading-7 text-white/64">{summary}</p>
        </div>
      </Link>
    </motion.div>
  );
}
