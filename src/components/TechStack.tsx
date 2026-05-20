'use client';

import { useState } from 'react';
import { TECH_STACK } from '@/lib/data';
import { cn } from '@/lib/utils';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ChevronUp from 'lucide-react/dist/esm/icons/chevron-up';

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  // Core dev categories to show by default
  const primaryCategories = TECH_STACK.filter(c => 
    c.category === "Front-End" || c.category === "Back-End"
  );
  
  return (
    <section id="tech-stack" className="py-24 px-8 w-full border-b border-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4 flex-grow">
            <span className="text-silver font-mono text-lg">02.</span>
            Tech Arsenal
            <div className="h-[1px] flex-grow bg-muted" />
          </h2>
          
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-silver hover:text-white-paper transition-all group lg:min-w-[140px] justify-end"
          >
            <span>{showAll ? "Focus Core" : "Show All Stack"}</span>
            <div className="transition-transform duration-300 group-hover:translate-y-0.5">
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {(showAll ? TECH_STACK : primaryCategories).map((category, idx) => (
            <div 
              key={idx} 
              className={cn(
                "space-y-8",
                showAll && (category.category === "AI/ML Research" || category.category === "Infrastructure") ? "md:min-h-[200px]" : ""
              )}
            >
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-silver border-b border-muted pb-4 w-fit">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-8">
                {category.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-silver/20 group-hover:bg-silver transition-all duration-300" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors cursor-default">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
