"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatedIcon } from "@/components/ui/animated-icon";

export function ServiceCardMotion({
  href,
  title,
  summary,
  icon,
}: {
  href: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="group ui-card ui-card-hover relative block overflow-hidden p-6"
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/28 to-transparent" />
        <div className="relative h-full">
          <div className="mb-6 flex items-center justify-between">
            <AnimatedIcon className="flex size-12 items-center justify-center rounded-md bg-aurora/12 text-aurora">
              {icon}
            </AnimatedIcon>
            <ArrowUpRight aria-hidden className="size-5 text-white/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aurora" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 leading-7 text-white/64">{summary}</p>
        </div>
      </Link>
    </motion.div>
  );
}
