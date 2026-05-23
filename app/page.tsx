import { ArrowRight } from "lucide-react";
import { HeroDeviceVisual } from "@/components/home/hero-device-visual";
import { HeroParallax } from "@/components/home/hero-parallax";
import { HeroTitle } from "@/components/home/hero-title";
import { ProductVisuals } from "@/components/home/product-visuals";
import { PremiumServices } from "@/components/home/premium-services";
import { TrustSignals } from "@/components/home/trust-signals";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { MotionScaleIn } from "@/components/ui/motion-scale-in";
import { SectionDivider } from "@/components/ui/section-divider";
import { ParallaxCard } from "@/components/ui/parallax-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { LaptopMockup, MobileMockup } from "@/components/ui/device-mockups";
import { LazyRender } from "@/components/ui/lazy-render";
import { SceneSection } from "@/components/ui/scene-section";
import { SceneBridge } from "@/components/ui/scene-bridge";
import { ProcessSection } from "@/components/home/process-section";
import { CaseStudies } from "@/components/home/case-studies";
import { MetricsDisplay } from "@/components/home/metrics-display";
import { projects, testimonials } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <HeroParallax>
        <Container className="grid items-center gap-12 sm:gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <MotionReveal delay={0.10}>
              <p className="mb-5 inline-flex rounded-md border border-white/8 bg-white/[0.035] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/54">
                Small team, practical systems, sharper growth
              </p>
            </MotionReveal>
            
            <HeroTitle />
            
            <MotionReveal delay={0.46}>
              <p className="body-copy mt-6 max-w-2xl text-base sm:mt-7 sm:text-xl text-white/64 leading-relaxed">
                We design AI-ready websites, apps, and automation systems that make your business look sharper, move faster, and convert more of the right opportunities.
              </p>
            </MotionReveal>
            
            <MotionReveal delay={0.58}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button href="/contact">
                  Let&apos;s build something that works <ArrowRight aria-hidden className="ml-2 size-4" />
                </Button>
                <Button href="/services" variant="secondary">
                  Explore capabilities
                </Button>
              </div>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.72}>
            <div className="lg:translate-y-8">
              <HeroDeviceVisual />
            </div>
          </MotionReveal>
        </Container>
      </HeroParallax>

      <SectionDivider />
      <SceneBridge />

      <SceneSection className="ambient-section py-24 sm:py-32">
        <Container>
          <p className="max-w-3xl text-xl font-medium leading-9 text-white/78 sm:text-2xl sm:leading-10">
            The work usually starts with one frustrating bottleneck: leads getting missed, teams copying data by hand, or a website that no longer reflects the business.
          </p>
        </Container>
      </SceneSection>

      <SectionDivider />
      <SceneBridge />

      <SceneSection className="py-16 sm:py-24">
        <Container>
          <div className="poster-panel metal-edge">
            <TrustSignals />
          </div>
        </Container>
      </SceneSection>

      <SectionDivider />
      <SceneBridge />

      <section className="ambient-section section-depth py-24 sm:py-36" data-light="right">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Credibility"
              title="Built for operational excellence"
              copy="We design systems that run smoothly under pressure, backed by industry-standard SLAs and transparent engineering principles."
              align="center"
            />
          </div>
          <LazyRender minHeight={400}>
            <MetricsDisplay />
          </LazyRender>
        </Container>
      </section>

      <SectionDivider />
      <SceneBridge />

      <SceneSection className="ambient-section cinematic-red-glow py-28 sm:py-36" data-light="right">
        <Container>
          <div className="poster-panel metal-edge grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <SectionHeading
              eyebrow="Use Case"
              title="A real workflow your team can point at"
              copy="Instead of presenting AI as magic, we design the screens, handoffs, and review points that make automation usable day to day."
            />
            <LazyRender minHeight={420}>
              <ProductVisuals />
            </LazyRender>
          </div>
        </Container>
      </SceneSection>

      <SectionDivider />

      <section className="ambient-section cinematic-red-glow section-depth py-28 sm:py-40">
        <Container>
          <div className="poster-panel metal-edge">
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
            <LazyRender minHeight={520}>
              <PremiumServices />
            </LazyRender>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="ambient-section section-depth py-28 sm:py-40" data-light="left">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading
              eyebrow="Workflow"
              title="A predictable path to high-end systems"
              copy="We don't believe in chaotic development loops. Our process is structured, rigorous, and designed to minimize risk while maximizing business momentum."
              align="center"
            />
          </div>
          <LazyRender minHeight={600}>
            <ProcessSection />
          </LazyRender>
        </Container>
      </section>

      <SectionDivider />

      <section className="ambient-section section-depth py-28 sm:py-40" data-light="right">
        <Container>
          <p className="quiet-label mb-8 ml-auto max-w-xl font-semibold">The result is not just a launch, but a calmer operating rhythm</p>
          <div className="ml-auto max-w-4xl">
            <SectionHeading
              eyebrow="Portfolio"
              title="What the work tends to look like"
              copy="The best projects are not the loudest ones. They are the systems that quietly make a team faster every week."
            />
          </div>
          <LazyRender className="mt-12" minHeight={560}>
            <CaseStudies />
          </LazyRender>
          <div className="mt-12 flex justify-center">
            <Button href="/about" variant="ghost">See our full process</Button>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <section className="py-32 sm:py-44">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="Trusted by teams building their next chapter" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr_0.88fr]">
            {testimonials.map((testimonial, index) => (
              <figure key={testimonial.name} className={`ui-card ${index === 1 ? "p-8" : "p-6"} ${index === 0 ? "lg:mt-8" : ""} ${index === 2 ? "lg:mt-14" : ""}`}>
                <blockquote className="leading-8 text-white/72">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/45">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="cinematic-red-glow pb-36 pt-16 sm:pb-44">
        <Container>
          <div className="poster-cta p-8 sm:p-10 lg:p-14">
            <div className="relative max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/48">Ready when you are</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">Let&apos;s Build Something Extraordinary Together.</h2>
              <p className="body-copy mt-6 max-w-2xl text-lg">
                Bring the workflow, brand, or product idea that deserves a sharper digital system. We will help shape it into something you can launch with confidence.
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


