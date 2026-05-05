import { ArrowRight } from "lucide-react";
import { AutomationPipeline } from "@/components/home/automation-pipeline";
import { HeroParallax } from "@/components/home/hero-parallax";
import { HeroTitle } from "@/components/home/hero-title";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { MotionScaleIn } from "@/components/ui/motion-scale-in";
import { SectionDivider } from "@/components/ui/section-divider";
import { ParallaxCard } from "@/components/ui/parallax-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { projects, services, testimonials } from "@/lib/site-data";

const stats = [
  { value: "35+", label: "automation and product systems shipped" },
  { value: "4.9/5", label: "average partner satisfaction" },
  { value: "8 wks", label: "typical MVP delivery window" },
];

export default function Home() {
  return (
    <>
      <HeroParallax>
        <Container className="grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr]">
          <MotionReveal>
            <div>
              <p className="mb-5 inline-flex rounded-md border border-aurora/30 bg-aurora/10 px-3 py-2 text-sm font-medium text-red-100">
                AI-first technology partner for modern businesses
              </p>
              <HeroTitle />
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Aurentra Technologies builds intelligent automations, high-performance websites, mobile apps, and digital operating systems that help teams grow faster with less friction.
              </p>
              <MotionScaleIn delay={0.45}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Get Started <ArrowRight aria-hidden className="ml-2 size-4" />
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact Us
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

      <section className="py-14 sm:py-16">
        <Container>
          <div className="ml-auto grid max-w-5xl gap-4 rounded-lg border border-white/8 bg-white/[0.03] p-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="section-depth py-20 sm:py-24">
        <Container>
          <div className="mb-12 grid gap-8 md:grid-cols-[0.72fr_0.28fr] md:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Focused capabilities for AI-led growth"
              copy="From first strategy call to production launch, we bring the design, engineering, and automation expertise needed to make digital transformation practical."
            />
            <Button href="/services" variant="secondary">View Services</Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.1fr_0.95fr_1.05fr_0.9fr]">
            {services.map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.05}>
                <ServiceCard {...service} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="section-depth py-20 sm:py-24">
        <Container>
          <div className="ml-auto max-w-4xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Representative project outcomes"
            copy="A snapshot of the kind of systems Aurentra builds: practical, polished, and tied to business results."
          />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <ParallaxCard key={project.title} offset={10}>
                <div className={`glass rounded-lg p-6 ${index === 1 ? "md:mt-10" : ""} ${index === 2 ? "md:-mt-4" : ""}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora">{project.category}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-6 rounded-md bg-white/6 p-4 text-sm font-medium text-white/72">{project.result}</p>
                </div>
              </ParallaxCard>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="Trusted by teams building their next chapter" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr_0.88fr]">
            {testimonials.map((testimonial, index) => (
              <figure key={testimonial.name} className={`depth-card rounded-lg p-6 ${index === 0 ? "lg:mt-8" : ""} ${index === 2 ? "lg:mt-14" : ""}`}>
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
          <div className="overflow-hidden rounded-lg border border-aurora/30 bg-gradient-to-br from-aurora/22 via-white/[0.06] to-ember/18 p-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-100">Ready when you are</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Build the systems your business should already have.</h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                Tell us where growth is getting stuck. We will help turn it into a roadmap, a product, and an automation layer your team can actually use.
              </p>
              <div className="mt-8">
                <Button href="/contact">Start Your Transformation</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
