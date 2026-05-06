import { ArrowRight } from "lucide-react";
import { AutomationPipeline } from "@/components/home/automation-pipeline";
import { HeroParallax } from "@/components/home/hero-parallax";
import { HeroTitle } from "@/components/home/hero-title";
import { ProductVisuals } from "@/components/home/product-visuals";
import { TrustSignals } from "@/components/home/trust-signals";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { MotionScaleIn } from "@/components/ui/motion-scale-in";
import { SectionDivider } from "@/components/ui/section-divider";
import { ParallaxCard } from "@/components/ui/parallax-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { projects, services, testimonials } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <HeroParallax>
        <Container className="grid items-center gap-10 sm:gap-16 lg:grid-cols-[1.12fr_0.88fr]">
          <MotionReveal>
            <div>
              <p className="mb-5 inline-flex rounded-md border border-white/12 bg-white/[0.045] px-3 py-2 text-sm font-medium text-white/72">
                Small team, practical systems, sharper growth
              </p>
              <HeroTitle />
              <p className="body-copy mt-6 max-w-xl text-base sm:mt-7 sm:text-lg">
                We help teams replace slow manual work with clear digital systems: practical automations, sharper websites, and mobile workflows people can actually use.
              </p>
              <MotionScaleIn delay={0.45}>
                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Button href="/contact">
                    Let&apos;s build something that works <ArrowRight aria-hidden className="ml-2 size-4" />
                  </Button>
                  <Button href="/services" variant="secondary">
                    Explore capabilities
                  </Button>
                </div>
              </MotionScaleIn>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="lg:translate-y-8">
            <AutomationPipeline />
            </div>
          </MotionReveal>
        </Container>
      </HeroParallax>

      <SectionDivider />

      <section className="ambient-section py-12 sm:py-16">
        <Container>
          <p className="max-w-3xl text-xl font-medium leading-9 text-white/78 sm:text-2xl sm:leading-10">
            The work usually starts with one frustrating bottleneck: leads getting missed, teams copying data by hand, or a website that no longer reflects the business.
          </p>
        </Container>
      </section>

      <SectionDivider />

      <section className="py-14 sm:py-16">
        <Container>
          <TrustSignals />
        </Container>
      </section>

      <SectionDivider />

      <section className="ambient-section py-16 sm:py-24" data-light="right">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <SectionHeading
              eyebrow="Use Case"
              title="A real workflow your team can point at"
              copy="Instead of presenting AI as magic, we design the screens, handoffs, and review points that make automation usable day to day."
            />
            <ProductVisuals />
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="ambient-section section-depth py-20 sm:py-28">
        <Container>
          <p className="quiet-label mb-8 max-w-xl font-semibold">How we turn that into momentum</p>
          <div className="mb-12 grid gap-8 md:grid-cols-[0.72fr_0.28fr] md:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Focused work, not a menu of buzzwords"
              copy="Most teams do not need more software. They need the right few systems connected well enough to save time, create clarity, and support growth."
            />
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button href="/services" variant="secondary">Explore capabilities</Button>
            </div>
          </div>
          <div className="grid gap-x-5 gap-y-7 md:grid-cols-2 lg:grid-cols-[1.1fr_0.95fr_1.05fr_0.9fr]">
            {services.map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.05}>
                <ServiceCard {...service} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="ambient-section section-depth py-24 sm:py-28" data-light="right">
        <Container>
          <p className="quiet-label mb-8 ml-auto max-w-xl font-semibold">The result is not just a launch, but a calmer operating rhythm</p>
          <div className="ml-auto max-w-4xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="What the work tends to look like"
            copy="The best projects are not the loudest ones. They are the systems that quietly make a team faster every week."
          />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <ParallaxCard key={project.title} offset={10}>
                <div className={`ui-card ui-card-hover ${index === 0 ? "p-7" : "p-6"} ${index === 1 ? "md:mt-10" : ""} ${index === 2 ? "md:-mt-4 p-8" : ""}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/42">{project.category}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-6 rounded-md bg-white/6 p-4 text-sm font-medium text-white/72">{project.result}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/about" variant="ghost">See our process</Button>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="Trusted by teams building their next chapter" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr_0.88fr]">
            {testimonials.map((testimonial, index) => (
              <figure key={testimonial.name} className={`ui-card ${index === 1 ? "p-8" : "p-6"} ${index === 0 ? "lg:mt-8" : ""} ${index === 2 ? "lg:mt-14" : ""}`}>
                <blockquote className="leading-8 text-white/72">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/45">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-12 sm:pb-28">
        <Container>
          <div className="overflow-hidden rounded-lg bg-white/[0.045] p-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/48">Ready when you are</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">Let&apos;s build the part of your business that keeps getting postponed.</h2>
              <p className="body-copy mt-6 max-w-2xl text-lg">
                Bring the messy workflow, half-built idea, or growth bottleneck. We will help turn it into a useful first version.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Let&apos;s talk through the workflow</Button>
                <Button href="/services" variant="secondary">See what we can build</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

