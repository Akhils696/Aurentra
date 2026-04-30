"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary">
        <Link href="/" className="flex items-center gap-3" aria-label="Aurentra Technologies home">
          <Image src="/images/aurentra-logo.jpeg" alt="" width={44} height={44} className="size-11 rounded-md object-cover" priority />
          <div className="leading-tight">
            <span className="block text-base font-semibold text-white">Aurentra</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-white/45">Technologies</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white",
                pathname === item.href && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" variant="secondary">Start a Project</Button>
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
