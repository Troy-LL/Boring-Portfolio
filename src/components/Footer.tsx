import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  {
    href: SITE.creative,
    label: "Creative portfolio",
    icon: Sparkles,
    solid: true,
    external: true,
  },
  { href: SITE.github, label: "GitHub", icon: Github, solid: false, external: true },
  { href: SITE.linkedin, label: "LinkedIn", icon: Linkedin, solid: false, external: true },
  { href: `mailto:${SITE.email}`, label: "Email", icon: Mail, solid: false, external: false },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 mt-24">
      <div className="mx-auto max-w-page px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-body text-ink/80">{SITE.motto}</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-2">
          {links.map(({ href, label, icon: Icon, external, solid }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={cn(
                "inline-flex items-center justify-center size-11 rounded-[10px] border",
                solid
                  ? "bg-ink text-paper border-ink hover:bg-warm-black"
                  : "bg-transparent text-ink border-charcoal/30 hover:border-ink"
              )}
            >
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
