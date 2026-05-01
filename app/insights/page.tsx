import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Insights",
  description: "Aurentra Technologies insights on AI automation, digital transformation, websites, and mobile product development.",
};

const posts = [
  { title: "How AI automation changes service operations", tag: "AI Automation", read: "6 min read" },
  { title: "What an investor-ready product website needs", tag: "Web Strategy", read: "5 min read" },
  { title: "Choosing the right first mobile app feature set", tag: "Mobile Apps", read: "7 min read" },
];

export default function InsightsPage() {
  return (
    <AnimatedSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Practical thinking for AI-led digital growth"
          copy="A placeholder editorial hub for future articles, playbooks, launch notes, and transformation guides."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-lg border border-white/8 bg-white/[0.035] p-6 transition hover:border-aurora/50">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora">{post.tag}</p>
                <ArrowUpRight aria-hidden className="size-5 text-white/35 transition group-hover:text-aurora" />
              </div>
              <h2 className="mt-8 text-2xl font-semibold leading-tight text-white">{post.title}</h2>
              <p className="mt-5 text-sm text-white/45">{post.read}</p>
            </article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
