"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Instagram, Linkedin, Globe, Phone } from "lucide-react";
import { BackToTop } from "@/components/layout/back-to-top";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { navItems, services } from "@/lib/site-data";
import { BrandGeometry } from "@/components/layout/brand-geometry";

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const socialLinks = [
    { href: "https://www.instagram.com/aurentratechnologies", label: "Instagram", icon: Instagram },
    { href: "https://linkedin.com/company/aurentra", label: "LinkedIn", icon: Linkedin },
    { href: "mailto:aurentratechnologies@gmail.com", label: "Email Support", icon: Mail },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-gradient-to-b from-[#03050b] via-[#050813] to-[#010206] py-20 sm:py-24">
      {/* Top light transition bar */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      
      {/* Cinematic corner glow */}
      <div aria-hidden className="absolute -bottom-24 -right-24 size-80 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />

      <Container>
        <MotionReveal>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.1fr]">
            {/* Brand column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-6 relative border border-white/20 rounded rotate-45 flex items-center justify-center bg-red-500/10">
                  <div className="size-2 bg-red-500 rounded-sm" />
                </div>
                <span className="text-xl font-black uppercase tracking-wider text-white">Aurentra</span>
              </div>
              <p className="body-copy max-w-sm text-sm leading-relaxed text-white/54">
                We engineer AI automation pipelines, elite Next.js websites, mobile tools, and modern operating structures that enable businesses to scale predictably.
              </p>
              
              {/* Elegant Social Interactions */}
              <div className="flex gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={`Aurentra ${label}`}
                    className="group relative flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-red-500/10 hover:text-white"
                  >
                    <Icon className="size-4" />
                    {/* Glow effect on hover */}
                    <span className="absolute inset-0 rounded-md border border-red-500/0 group-hover:border-red-500/30 blur-[2px] transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-white/72 mb-5">Company</p>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-white/52 hover:text-red-400 flex items-center gap-1 group transition-colors duration-200"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <p className="text-xs uppercase tracking-widest font-black text-white/72 mb-5">Services</p>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      href={`/services#${service.slug}`} 
                      className="text-sm text-white/52 hover:text-red-400 flex items-center gap-1 group transition-colors duration-200"
                    >
                      <span>{service.title}</span>
                      <ArrowRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Center & active support */}
            <div className="ui-card p-5 border-white/8 bg-[#090d18]/40 metal-edge space-y-4">
              <p className="text-xs uppercase tracking-widest font-black text-white/82 flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Active Support Center
              </p>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-white/40 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white/40">Technical Queries</span>
                    <a href="mailto:aurentratechnologies@gmail.com" className="font-bold text-white hover:text-red-400 transition-colors">
                      aurentratechnologies@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-white/40 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white/40">Office Headquarters</span>
                    <span className="text-white font-medium">
                      Ettimadai, Coimbatore, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-white/5">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                >
                  Schedule a Systems Workshop <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Footer Bottom credits and back to top */}
        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-xs text-white/40">
          <div>
            <p>Copyright © {new Date().getFullYear()} Aurentra Technologies. All rights reserved.</p>
            <p className="mt-1 text-white/28">Enterprise AI development & high-end systems engineering.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="text-white/34">secure. scalable. premium.</span>
            <BackToTop />
          </div>
        </div>
      </Container>
    </footer>
  );
}
