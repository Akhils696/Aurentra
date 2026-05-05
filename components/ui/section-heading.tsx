import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-aurora">{eyebrow}</p> : null}
      <h2 className="premium-heading text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-8 text-white/64 sm:text-lg sm:leading-9">{copy}</p> : null}
    </div>
  );
}
