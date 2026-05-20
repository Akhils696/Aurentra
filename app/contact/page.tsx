import type { Metadata } from "next";
import { AtSign, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
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
  { label: "Discovery Call", value: "Book a consultation after the initial project review", icon: Phone },
  { label: "Location", value: "Amrita University, Amritanagar, Ettimadai, Tamil Nadu 641112, India", icon: MapPin },
  { label: "Instagram", value: "@aurentratechnologies", icon: AtSign },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <AnimatedSection className="py-16 sm:py-20">
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

      <AnimatedSection className="pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <aside className="grid gap-5">
              <div className="rounded-lg border border-white/8 bg-white/[0.035] p-6">
                <SectionHeading
                  eyebrow="Company Details"
                  title="Start the conversation"
                  copy="Tell us what you want to improve. We typically respond within 1 business day with the clearest next step for your project."
                />
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
              <div className="rounded-lg border border-white/8 bg-white/[0.035] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Service Area</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">Based in Coimbatore, working wherever the right project is.</h2>
                <p className="mt-4 leading-7 text-white/62">
                  Serving startups and businesses across India, with remote collaboration available for clients globally.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Amrita%20University%20Amritanagar%20Ettimadai%20Tamil%20Nadu%20641112%20India"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/78 transition hover:text-aurora"
                >
                  View location <ExternalLink aria-hidden className="size-4" />
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </AnimatedSection>
    </div>
  );
}
