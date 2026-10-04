import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

const linkClass =
  "underline underline-offset-4 decoration-ink/30 hover:decoration-ink text-ink";

export default function TextLink({
  href,
  children,
  className,
  external,
}: TextLinkProps) {
  const classes = cn(linkClass, className);
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
