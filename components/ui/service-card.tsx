import type { LucideIcon } from "lucide-react";
import { ServiceCardMotion } from "@/components/ui/service-card-motion";

type ServiceCardProps = {
  title: string;
  summary: string;
  slug: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, summary, slug, icon: Icon }: ServiceCardProps) {
  return (
    <ServiceCardMotion href={`/services#${slug}`} title={title} summary={summary} icon={<Icon aria-hidden className="size-6" />} />
  );
}
