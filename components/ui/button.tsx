"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  function createRipple(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setRipple({ x: event.clientX - rect.left, y: event.clientY - rect.top, id: Date.now() });
  }

  function moveMagnet(event: React.MouseEvent<HTMLElement>) {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function resetMagnet() {
    const element = ref.current;
    if (element) element.style.transform = "";
  }

  const classes = cn(
    "motion-button group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-md px-5 py-3 text-sm font-semibold transition duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-ink active:scale-[0.99]",
    variant === "primary" && "bg-white text-ink shadow-glow hover:bg-frost hover:shadow-[0_0_34px_rgba(255,255,255,0.18)]",
    variant === "secondary" && "border border-white/15 bg-white/8 text-white hover:border-aurora/60 hover:bg-aurora/12 hover:shadow-[0_0_28px_rgba(239,68,68,0.16)]",
    variant === "ghost" && "text-white/80 hover:bg-white/8 hover:text-white",
    className,
  );
  const content = (
    <>
      <span className="relative z-10 inline-flex items-center justify-center">{children}</span>
      {ripple ? (
        <span
          key={ripple.id}
          className="pointer-events-none absolute size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current/15 animate-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={createRipple}
        onMouseMove={moveMagnet}
        onMouseLeave={resetMagnet}
        ref={(node) => {
          ref.current = node;
        }}
        data-cursor="interactive"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={createRipple}
      onMouseMove={moveMagnet}
      onMouseLeave={resetMagnet}
      ref={(node) => {
        ref.current = node;
      }}
      data-cursor="interactive"
    >
      {content}
    </button>
  );
}
