"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex size-10 items-center justify-center rounded-md border border-white/12 text-white/70 transition hover:-translate-y-1 hover:border-aurora/60 hover:bg-aurora/10 hover:text-white"
    >
      <ArrowUp aria-hidden className="size-4" />
    </button>
  );
}
