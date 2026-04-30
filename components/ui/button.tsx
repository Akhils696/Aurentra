import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, variant = "primary", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-ink",
    variant === "primary" && "bg-white text-ink shadow-glow hover:bg-frost",
    variant === "secondary" && "border border-white/15 bg-white/8 text-white hover:border-aurora/60 hover:bg-aurora/12",
    variant === "ghost" && "text-white/80 hover:bg-white/8 hover:text-white",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
