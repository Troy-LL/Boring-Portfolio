'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useDoor } from './DoorProvider';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { open } = useDoor();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname.substring(1));
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'experience', 'projects', 'contact'];
      let foundSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(foundSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (open) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-center font-sans",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-muted/20 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Link
          href="/"
          className="font-display italic text-xl text-foreground hover:text-ink transition-colors"
        >
          Troy Lazaro
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive =
              (item.href === '/' && activeSection === 'home') ||
              (item.href === `/#${activeSection}`) ||
              (item.href === `/${activeSection}`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-normal tracking-wide transition-all duration-300 hover:text-foreground",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/resume"
            className="text-xs tracking-wide px-4 py-2 rounded border border-muted/40 hover:bg-muted/10 transition-all"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
