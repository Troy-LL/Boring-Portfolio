'use client';

import { useState, useEffect } from 'react';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Mail from 'lucide-react/dist/esm/icons/mail';
import Check from 'lucide-react/dist/esm/icons/check';
import Copy from 'lucide-react/dist/esm/icons/copy';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Terminal from 'lucide-react/dist/esm/icons/terminal';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
    label: "troylazaro09@gmail.com",
    isCopy: true
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [cooldown, setCooldown] = useState(0);

  const placeholders = [
    "Tell me about your project...",
    "Got any collab ideas?",
    "Thinking about research?",
    "Want to build something together?",
    "Just saying hi!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((current) => (current + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleCopy = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText("troylazaro09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Security check: Cooldown
    if (cooldown > 0) return;

    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Security check: Honeypot
    if (formData.get("_gotcha")) {
      setIsSubmitting(false);
      return; 
    }

    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/maqlqpby", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        setCooldown(60); // 60s security cooldown
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-8 w-full border-b border-muted/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-16">
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white-paper">
            Building with <span className="text-silver">Intention.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open for technical research, research-to-dev opportunities, or community leadership initiatives.
          </p>
        </div>

        <div className="w-full max-w-2xl flex flex-col items-center space-y-6">
          <div className="grid grid-cols-2 gap-3 md:gap-8 w-full">
            {SOCIAL_LINKS.map((link) => (
              <div
                key={link.name}
                onClick={link.isCopy ? () => handleCopy() : () => window.open(link.href, '_blank')}
                className={cn(
                  "group p-3 md:p-6 rounded-xl bg-muted/5 border border-muted/20 transition-all duration-300 flex flex-col items-center space-y-2 md:space-y-4 cursor-pointer overflow-hidden",
                  "hover:border-silver/40 hover:bg-muted/10"
                )}
              >
                <div className="p-2 md:p-3 rounded-full bg-foreground text-background group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <link.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="w-full flex flex-col items-center justify-center space-y-0.5 md:space-y-1">
                  <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{link.name}</p>
                  <div className="flex items-center justify-center gap-1 md:gap-2 w-full max-w-full">
                    <p className="text-[9px] sm:text-xs md:text-sm font-medium text-foreground truncate">
                      {link.label}
                    </p>
                    {link.isCopy && (
                      <div className="transition-all duration-300 text-silver/60 flex-shrink-0">
                        {copied ? <Check size={12} className="text-green-500" /> : <Copy size={10} className="md:w-3 md:h-3 opacity-0 group-hover:opacity-100" />}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-silver/20 text-xs font-bold tracking-widest uppercase text-silver hover:border-silver/50 hover:bg-muted/10 transition-all group shadow-sm hover:shadow-md"
            >
              See the Gallery 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Let's Connect Form */}
        <div className="w-full max-w-xl p-1 bg-gradient-to-b from-muted/30 to-transparent rounded-2xl">
          <div className="bg-background-soft p-8 rounded-2xl border border-muted/20 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 text-foreground">Let&apos;s Connect!</h3>
            
            {isSuccess ? (
              <div className="py-12 flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <Check size={32} />
                </div>
                <p className="text-lg font-bold text-foreground">Talk soon!</p>
                <p className="text-sm text-muted-foreground">I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Honeypot: Anti-Bot Field */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-muted/10 border border-muted/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-silver/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full bg-muted/10 border border-muted/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-silver/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4} 
                    placeholder={placeholders[placeholderIndex]} 
                    className="w-full bg-muted/10 border border-muted/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-silver/50 transition-colors resize-none duration-500 transition-all"
                  />
                </div>
                <button
                  disabled={isSubmitting || cooldown > 0}
                  className="w-full bg-foreground text-background font-bold tracking-[0.2em] uppercase text-xs py-4 rounded-lg hover:bg-silver transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : cooldown > 0 ? (
                    <span>Wait {cooldown}s</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Or take my email directly</p>
          <button
            onClick={() => handleCopy()}
            className={cn(
              "inline-flex items-center space-x-3 px-8 py-3 text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 border",
              copied 
                ? "bg-green-500/10 text-green-500 border-green-500/20" 
                : "border-muted/50 text-muted-foreground hover:border-silver hover:text-silver"
            )}
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Mail size={14} />
                <span>troylazaro09@gmail.com</span>
              </>
            )}
          </button>
        </div>

        <footer className="pt-24 text-muted-foreground text-[10px] uppercase tracking-[0.3em] flex flex-col space-y-2 items-center">
          <span>&copy; {new Date().getFullYear()} Troy Lauren T. Lazaro</span>
          <a 
            href="https://tlportfoliocreative.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-1 text-silver/60 hover:text-white transition-colors duration-300 cursor-pointer"
            title="Switch to Creative Portfolio"
          >
            <span>Life is too short to be boring.</span>
            <Terminal size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </footer>
      </div>
    </section>
  );
}
