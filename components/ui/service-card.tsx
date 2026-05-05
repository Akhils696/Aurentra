import type { LucideIcon } from "lucide-react";
import { ServiceCardMotion } from "@/components/ui/service-card-motion";
import { customServiceIcons } from "@/components/ui/brand-icons";

type ServiceCardProps = {
  title: string;
  summary: string;
  slug: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, summary, slug, icon: Icon }: ServiceCardProps) {
  const CustomIcon = customServiceIcons[slug as keyof typeof customServiceIcons] ?? Icon;

  return (
    <ServiceCardMotion href={`/services#${slug}`} title={title} summary={summary} icon={<CustomIcon aria-hidden className="size-6" />} />
  );
}
