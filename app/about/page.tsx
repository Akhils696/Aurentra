import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators, team } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aurentra Technologies, our mission, vision, story, and team.",
};

const milestones = [
  "Started with a belief that AI should remove operational drag, not add complexity.",
  "Built cross-functional delivery across strategy, design, engineering, and automation.",
  "Focused on helping founders and teams ship practical digital systems with measurable outcomes.",
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <MotionReveal>
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-aurora">About Aurentra</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                We design and build the digital backbone for ambitious businesses.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Aurentra Technologies is a service company focused on AI automation, product-grade websites, mobile applications, and business transformation. We help teams turn complex operations into clean, scalable systems.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { title: "Mission", copy: "Make advanced digital capability accessible, useful, and measurable for growing companies." },
              { title: "Vision", copy: "A business world where intelligent systems free teams to focus on creativity, relationships, and strategy." },
              { title: "Story", copy: "Aurentra was shaped around a simple observation: most companies do not need more tools. They need better connected decisions, workflows, and experiences." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-lg p-7">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-4 leading-8 text-white/64">{item.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A partner that understands both business pressure and technical detail"
              copy="We are built for founders, operators, and teams who need clarity, speed, and systems that can grow after launch."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/8 bg-white/[0.035] p-6">
                  <item.icon aria-hidden className="size-7 text-aurora" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="How We Work" title="Calm process, sharp execution" align="center" />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {milestones.map((milestone, index) => (
              <div key={milestone} className="rounded-lg border border-white/8 bg-black/18 p-6">
                <p className="text-sm font-semibold text-aurora">0{index + 1}</p>
                <p className="mt-4 leading-8 text-white/68">{milestone}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-12">
        <Container>
          <SectionHeading eyebrow="Team" title="A compact senior team model" copy="Placeholder leadership profiles show the type of cross-functional expertise behind Aurentra delivery." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-lg p-6">
                <div className="flex size-14 items-center justify-center rounded-md bg-aurora/12 text-aurora">
                  <member.icon aria-hidden className="size-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-white/55">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
