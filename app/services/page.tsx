import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";
import { customServiceIcons } from "@/components/ui/brand-icons";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Aurentra Technologies services across AI automation, websites, mobile apps, and business optimization.",
};

export default function ServicesPage() {
  return (
    <>
      <AnimatedSection className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Services</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Technical services built around measurable business momentum.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Choose one capability or combine them into a transformation roadmap. Every engagement is designed to be practical, scalable, and easy for your team to operate.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pb-24 sm:pb-28">
        <Container>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.04}>
                <article id={service.slug} className="depth-card scroll-mt-28 rounded-lg p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div>
                      <div className="mb-6 flex size-14 items-center justify-center rounded-md bg-aurora/12 text-aurora">
                        {(() => {
                          const Icon = customServiceIcons[service.slug as keyof typeof customServiceIcons] ?? service.icon;
                          return <Icon aria-hidden className="size-7" />;
                        })()}
                      </div>
                      <h2 className="text-3xl font-semibold text-white">{service.title}</h2>
                      <p className="mt-4 leading-8 text-white/66">{service.summary}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex gap-3 rounded-md border border-white/8 bg-black/18 p-4">
                          <Check aria-hidden className="mt-1 size-5 flex-none text-red-100/80" />
                          <p className="leading-7 text-white/72">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="pb-24 sm:pb-28">
        <Container>
          <div className="poster-cta p-8 sm:p-10 lg:p-14">
            <div className="relative max-w-4xl">
              <SectionHeading
                eyebrow="Engagement Model"
                title="Start with a clear audit, then build the highest-leverage system first"
                copy="We can begin with a discovery sprint, define the roadmap, and ship the first release while your team sees progress every week."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Discuss Your Requirements</Button>
                <Button href="/about" variant="secondary">Learn about our process</Button>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>
    </>
  );
}
