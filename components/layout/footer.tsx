import Link from "next/link";
import { AtSign, Mail, MapPin } from "lucide-react";
import { BackToTop } from "@/components/layout/back-to-top";
import { Container } from "@/components/ui/container";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { navItems, services } from "@/lib/site-data";

export function Footer() {
  const socialLinks = [
    { href: "https://www.instagram.com/aurentratechnologies", label: "Instagram", icon: AtSign },
    { href: "mailto:aurentratechnologies@gmail.com", label: "Email", icon: Mail },
    { href: "/contact", label: "Location", icon: MapPin },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,rgba(239,68,68,0.055),rgba(0,0,0,0.34)_38%,rgba(0,0,0,0.48))] py-14">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurora/45 to-transparent" />
      <Container>
        <MotionReveal>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-semibold text-white">Aurentra Technologies</p>
            <p className="mt-4 max-w-md leading-7 text-white/58">
              AI automation, web platforms, mobile apps, and transformation systems for ambitious businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={`Aurentra ${label}`}
                  className="flex size-10 items-center justify-center rounded-md border border-white/12 text-white/65 transition hover:-translate-y-1 hover:border-aurora/60 hover:bg-aurora/10 hover:text-white"
                >
                  <AnimatedIcon><Icon aria-hidden className="size-5" /></AnimatedIcon>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Company</p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/58 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Services</p>
            <div className="mt-4 grid gap-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/services#${service.slug}`} className="text-sm text-white/58 transition hover:text-white">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        </MotionReveal>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aurentra Technologies. All rights reserved.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p>Amritanagar, Ettimadai, Tamil Nadu · Built for secure, scalable digital growth.</p>
            <BackToTop />
          </div>
        </div>
      </Container>
    </footer>
  );
}
