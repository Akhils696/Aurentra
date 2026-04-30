import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Aurentra Technologies to discuss AI automation, website development, mobile apps, or digital transformation.",
};

const details = [
  { label: "Email", value: "hello@aurentra.com", icon: Mail },
  { label: "Phone", value: "+91 98765 43210", icon: Phone },
  { label: "Location", value: "India · Serving global clients", icon: MapPin },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Let’s map the fastest path from idea to working system.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Share what you are trying to automate, launch, or improve. We will respond with a practical next step.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form action="/api/contact" method="post" className="glass grid gap-5 rounded-lg p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white/72">
                  Name
                  <input name="name" required className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white/72">
                  Email
                  <input name="email" type="email" required className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="you@company.com" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-medium text-white/72">
                Message
                <textarea name="message" required className="min-h-44 rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Tell us what you want to build" />
              </label>
              <Button type="submit">
                Send Message <Send aria-hidden className="ml-2 size-4" />
              </Button>
            </form>

            <aside className="grid gap-5">
              <div className="rounded-lg border border-white/8 bg-white/[0.035] p-6">
                <SectionHeading eyebrow="Company Details" title="Start the conversation" copy="Email integration is prepared through the contact API route. Add your provider credentials in environment variables when ready." />
              </div>
              {details.map((detail) => (
                <div key={detail.label} className="flex gap-4 rounded-lg border border-white/8 bg-black/18 p-5">
                  <span className="flex size-11 flex-none items-center justify-center rounded-md bg-aurora/12 text-aurora">
                    <detail.icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{detail.label}</p>
                    <p className="mt-1 text-white/58">{detail.value}</p>
                  </div>
                </div>
              ))}
              <div className="min-h-56 rounded-lg border border-white/8 bg-[linear-gradient(135deg,rgba(239,68,68,0.14),rgba(255,255,255,0.04)),repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Map Placeholder</p>
                <p className="mt-4 max-w-sm leading-7 text-white/62">Embed Google Maps or another provider here when the final office location is confirmed.</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
