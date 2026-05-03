'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

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

  const pathname = usePathname();

  useEffect(() => {
    // If we're on a separate page like /gallery, don't run hash-based scroll tracking for the home page sections
    if (pathname !== '/') {
      setActiveSection(pathname.substring(1)); // e.g. 'gallery'
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'experience', 'projects', 'contact'];
      let foundSection = 'home'; // default
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

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-center",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-muted/50 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl w-full flex items-center justify-between">
        {/* Logo / Name */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tighter hover:text-silver transition-colors"
        >
          TL<span className="text-gray-cool">.</span>
        </Link>

        {/* Desktop Navigation */}
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
                  "text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-silver",
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

        {/* Action Button (Mobile Menu could be here, but let's keep it minimal for now) */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/resume"
            className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border border-muted hover:bg-muted/50 transition-all"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
