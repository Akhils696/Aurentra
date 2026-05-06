"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-white/10 bg-ink/78 shadow-[0_12px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl" : "border-white/6 bg-ink/56 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3" aria-label="Aurentra Technologies home">
          <Image src="/images/aurentra-logo.jpeg" alt="" width={44} height={44} className="size-11 rounded-md object-cover" priority />
          <div className="leading-tight">
            <span className="block text-base font-semibold text-white">Aurentra</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-white/45">Technologies</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-lg border border-white/8 bg-white/[0.025] p-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover-link relative rounded-md px-3 py-2 text-sm font-medium text-white/68 transition hover:text-white",
                pathname === item.href && "text-white",
              )}
            >
              {pathname === item.href ? (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-md bg-white/10"
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
              {pathname === item.href ? (
                <motion.span
                  layoutId="nav-active-underline"
                  className="absolute inset-x-3 -bottom-1 h-px rounded-full bg-white/32"
                  transition={{ duration: 0.32, ease: "easeInOut" }}
                />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="secondary">Talk to us</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/12 text-white lg:hidden"
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/8 bg-ink px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn("rounded-md px-3 py-3 text-sm font-medium text-white/72", pathname === item.href && "bg-white/10 text-white")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
