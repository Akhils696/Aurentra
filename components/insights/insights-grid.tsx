"use client";

import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Post = {
  title: string;
  tag: string;
  read: string;
};

function InsightCard({ post, index }: { post: Post; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [4, -4]);
  const rotateY = useTransform(x, [-80, 80], [-4, 4]);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-lg border border-white/8 bg-white/[0.035] p-6 transition-colors hover:border-aurora/50"
      style={prefersReducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
      <motion.span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_56%)] opacity-70"
        initial={false}
        whileHover={prefersReducedMotion ? undefined : { x: 10, y: -8, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora">{post.tag}</p>
          <ArrowUpRight aria-hidden className="size-5 text-white/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aurora" />
        </div>
        <h2 className="mt-8 text-2xl font-semibold leading-tight text-white">{post.title}</h2>
        <p className="mt-5 text-sm text-white/45">{post.read}</p>
      </div>
    </motion.article>
  );
}

export function InsightsGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {posts.map((post, index) => (
        <InsightCard key={post.title} post={post} index={index} />
      ))}
    </div>
  );
}
