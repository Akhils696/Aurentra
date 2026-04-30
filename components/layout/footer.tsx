import Link from "next/link";
import { AtSign, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/25 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-semibold text-white">Aurentra Technologies</p>
            <p className="mt-4 max-w-md leading-7 text-white/58">
              AI automation, web platforms, mobile apps, and transformation systems for ambitious businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {[AtSign, MessageCircle, Mail].map((Icon, index) => (
                <Link
                  key={index}
                  href={index === 2 ? "mailto:hello@aurentra.com" : "#"}
                  aria-label="Aurentra social link"
                  className="flex size-10 items-center justify-center rounded-md border border-white/12 text-white/65 transition hover:border-aurora/60 hover:text-white"
                >
                  <Icon aria-hidden className="size-5" />
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
        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aurentra Technologies. All rights reserved.</p>
          <p>Built for secure, scalable digital growth.</p>
        </div>
      </Container>
    </footer>
  );
}
