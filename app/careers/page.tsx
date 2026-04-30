import type { Metadata } from "next";
import { Briefcase, HeartHandshake, Laptop, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { jobs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore career opportunities at Aurentra Technologies.",
};

const benefits = [
  { title: "Remote-friendly delivery", icon: Laptop },
  { title: "High-trust collaboration", icon: HeartHandshake },
  { title: "AI-first learning culture", icon: Sparkles },
];

export default function CareersPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-aurora">Careers</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Build meaningful digital systems with a sharp, modern team.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              We are building a culture for people who enjoy clear thinking, strong craft, and practical AI adoption.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading eyebrow="Open Roles" title="Current opportunities" />
          <div className="mt-8 grid gap-5">
            {jobs.map((job) => (
              <article key={job.title} className="rounded-lg border border-white/8 bg-white/[0.035] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
                <div className="flex gap-4">
                  <span className="flex size-12 flex-none items-center justify-center rounded-md bg-aurora/12 text-aurora">
                    <Briefcase aria-hidden className="size-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{job.title}</h2>
                    <p className="mt-2 text-sm text-white/55">{job.type} · {job.location}</p>
                    <p className="mt-3 text-white/68">{job.focus}</p>
                  </div>
                </div>
                <Button href="#apply" variant="secondary" className="mt-5 sm:mt-0">Apply</Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass rounded-lg p-6">
                <benefit.icon aria-hidden className="size-7 text-aurora" />
                <h2 className="mt-5 text-xl font-semibold text-white">{benefit.title}</h2>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="pb-24">
        <Container>
          <div className="grid gap-10 rounded-lg border border-white/8 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Apply"
              title="Tell us where you can make Aurentra stronger"
              copy="This application form is UI-ready and can be connected to an applicant tracking workflow when needed."
            />
            <form className="grid gap-4" aria-label="Career application form">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Full name" aria-label="Full name" />
                <input className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Email address" type="email" aria-label="Email address" />
              </div>
              <input className="rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Role you are applying for" aria-label="Role" />
              <textarea className="min-h-36 rounded-md border border-white/10 bg-black/22 px-4 py-3 text-white outline-none ring-aurora/40 placeholder:text-white/35 focus:ring-2" placeholder="Portfolio, resume link, and a short note" aria-label="Application message" />
              <Button type="submit">
                Submit Application <Send aria-hidden className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
