import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { InsightsGrid } from "@/components/insights/insights-grid";

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
        <InsightsGrid posts={posts} />
      </Container>
    </AnimatedSection>
  );
}
