import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  summary: string;
  slug: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, summary, slug, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={`/services#${slug}`}
      className="group glass block rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-aurora/50"
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-md bg-aurora/12 text-aurora">
          <Icon aria-hidden className="size-6" />
        </span>
        <ArrowUpRight aria-hidden className="size-5 text-white/35 transition group-hover:text-aurora" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-white/64">{summary}</p>
    </Link>
  );
}
