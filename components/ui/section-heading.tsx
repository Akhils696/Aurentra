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
      {eyebrow ? <p className="quiet-label mb-3 font-semibold">{eyebrow}</p> : null}
      <h2 className="premium-heading text-4xl font-black uppercase text-white sm:text-5xl">{title}</h2>
      {copy ? <p className="body-copy mt-5 max-w-2xl text-base sm:text-lg">{copy}</p> : null}
    </div>
  );
}
