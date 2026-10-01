import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  solid: "bg-ink text-paper hover:bg-warm-black border border-ink",
  outline: "bg-transparent text-ink border border-charcoal/30 hover:border-ink",
} as const;

export type ButtonVariant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center rounded-[10px] px-5 py-2.5 font-ui text-sm";

export function buttonClass(variant: ButtonVariant = "solid", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  external,
}: ButtonLinkProps) {
  const classes = buttonClass(variant, className);
  const isExternal =
    external ??
    (href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:"));

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
