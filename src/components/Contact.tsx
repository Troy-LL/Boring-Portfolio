'use client';

import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Send from 'lucide-react/dist/esm/icons/send';
import Instagram from 'lucide-react/dist/esm/icons/instagram';

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Troy-LL",
    icon: Github,
    label: "Troy-LL"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/isametroy_/",
    icon: Instagram,
    label: "@isametroy_"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/troylazaro",
    icon: Linkedin,
    label: "in/troylazaro"
  },
  {
    name: "Email",
    href: "mailto:troylazaro09@gmail.com",
    icon: Mail,
    label: "troylazaro09@gmail.com"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-background border-t border-muted/30">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Let's build with <span className="text-silver">intention.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            I'm always open to discussing new projects, research opportunities, or community initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-muted/10 border border-muted/20 hover:border-silver/50 hover:bg-muted/20 transition-all duration-300 flex flex-col items-center space-y-4"
            >
              <div className="p-3 rounded-full bg-foreground text-background group-hover:scale-110 transition-transform duration-300">
                <link.icon size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{link.name}</p>
                <p className="text-sm font-medium text-foreground">{link.label}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-12">
          <a
            href="mailto:troylazaro09@gmail.com"
            className="inline-flex items-center space-x-3 px-10 py-4 bg-foreground text-background font-bold tracking-widest uppercase text-sm rounded-full hover:bg-silver transition-all duration-300"
          >
            <Send size={18} />
            <span>Send Message</span>
          </a>
        </div>

        <footer className="pt-24 text-muted-foreground text-xs uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Troy Lauren T. Lazaro. Built with purpose.
        </footer>
      </div>
    </section>
  );
}
