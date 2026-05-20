import type { Metadata } from "next";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Aurentra Technologies to discuss AI automation, website development, mobile apps, or digital transformation.",
};

const details = [
  { label: "Email", value: "aurentratechnologies@gmail.com", icon: Mail },
  { label: "Phone", value: "Available on request", icon: Phone },
  { label: "Location", value: "Amrita University, Amritanagar, Ettimadai, Tamil Nadu 641112, India", icon: MapPin },
  { label: "Instagram", value: "@aurentratechnologies", icon: AtSign },
];

export default function ContactPage() {
  return (
    <>
      <AnimatedSection className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Let&rsquo;s map the fastest path from idea to working system.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Share what you are trying to automate, launch, or improve. We will respond with a practical next step.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pb-24 sm:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <aside className="grid gap-5">
              <div className="rounded-lg border border-white/8 bg-white/[0.035] p-6">
                <SectionHeading eyebrow="Company Details" title="Start the conversation" copy="Email integration is prepared through the contact API route. Add your provider credentials in environment variables when ready." />
              </div>
              {details.map((detail) => (
                <div key={detail.label} className="flex gap-4 rounded-lg border border-white/8 bg-black/18 p-5">
                  <AnimatedIcon className="flex size-11 flex-none items-center justify-center rounded-md bg-aurora/12 text-aurora">
                    <detail.icon aria-hidden className="size-5" />
                  </AnimatedIcon>
                  <div>
                    <p className="font-semibold text-white">{detail.label}</p>
                    <p className="mt-1 text-white/58">{detail.value}</p>
                  </div>
                </div>
              ))}
              <div className="min-h-56 rounded-lg border border-white/8 bg-[linear-gradient(135deg,rgba(239,68,68,0.14),rgba(255,255,255,0.04)),repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_16px)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Location</p>
                <p className="mt-4 max-w-sm leading-7 text-white/62">Amrita University, Amritanagar, Ettimadai, Tamil Nadu 641112, India</p>
              </div>
            </aside>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
