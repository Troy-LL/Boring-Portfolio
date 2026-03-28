'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          href="#home" 
          className="text-xl font-bold tracking-tighter hover:text-silver transition-colors"
        >
          TL<span className="text-gray-cool">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-silver",
                activeSection === item.href.substring(1) 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button (Mobile Menu could be here, but let's keep it minimal for now) */}
        <div className="flex items-center space-x-4">
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded border border-muted hover:bg-muted/50 transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
