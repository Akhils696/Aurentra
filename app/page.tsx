import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
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
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal>
            <div>
              <p className="mb-5 inline-flex rounded-md border border-aurora/30 bg-aurora/10 px-3 py-2 text-sm font-medium text-red-100">
                AI-first technology partner for modern businesses
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Transforming Businesses with <span className="gradient-text">AI & Digital Solutions</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Aurentra Technologies builds intelligent automations, high-performance websites, mobile apps, and digital operating systems that help teams grow faster with less friction.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">
                  Get Started <ArrowRight aria-hidden className="ml-2 size-4" />
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="glass relative rounded-lg p-5">
              <div className="rounded-md border border-white/8 bg-black/28 p-5">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div>
                    <p className="text-sm text-white/45">Aurentra Growth OS</p>
                    <p className="text-lg font-semibold text-white">Automation Pipeline</p>
                  </div>
                  <span className="rounded-md bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-200">Live</span>
                </div>
                <div className="mt-6 grid gap-4">
                  {["Lead capture", "AI qualification", "Proposal workflow", "Performance dashboard"].map((item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-md border border-white/8 bg-white/[0.03] p-4">
                      <span className="flex size-9 items-center justify-center rounded-md bg-aurora/15 text-sm font-semibold text-aurora">0{index + 1}</span>
                      <div className="flex-1">
                        <p className="font-medium text-white">{item}</p>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 rounded-full bg-gradient-to-r from-aurora to-ember" style={{ width: `${58 + index * 10}%` }} />
                        </div>
                      </div>
                      <CheckCircle2 aria-hidden className="size-5 text-emerald-300" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-md bg-white/6 p-4">
                  <PlayCircle aria-hidden className="size-8 text-aurora" />
                  <p className="text-sm leading-6 text-white/64">Connected workflows, product-grade UX, and measurable growth in one delivery track.</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid gap-4 rounded-lg border border-white/8 bg-white/[0.03] p-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Focused capabilities for AI-led growth"
              copy="From first strategy call to production launch, we bring the design, engineering, and automation expertise needed to make digital transformation practical."
            />
            <Button href="/services" variant="secondary">View Services</Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.05}>
                <ServiceCard {...service} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Representative project outcomes"
            copy="A snapshot of the kind of systems Aurentra builds: practical, polished, and tied to business results."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="glass rounded-lg p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora">{project.category}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-6 rounded-md bg-white/6 p-4 text-sm font-medium text-white/72">{project.result}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="Trusted by teams building their next chapter" align="center" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-lg border border-white/8 bg-white/[0.035] p-6">
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

      <section className="pb-24 pt-10">
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
