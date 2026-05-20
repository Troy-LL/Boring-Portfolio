'use client';

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { EXPERIENCE } from '@/lib/data';

const ExperienceCard = ({ exp }: { exp: typeof EXPERIENCE[0] }) => {
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const start = DateTime.fromISO(exp.startDate);
    const now = DateTime.now();
    const diff = now.diff(start, ['years', 'months']).toObject();
    
    let durStr = '';
    if (diff.years && diff.years > 0) durStr += `${Math.floor(diff.years)} yr${diff.years > 1 ? 's' : ''} `;
    if (diff.months && diff.months > 0) durStr += `${Math.ceil(diff.months)} mo${diff.months > 1 ? 's' : ''}`;
    
    setDuration(durStr || 'Just started');
  }, [exp.startDate]);

  return (
    <div className="group relative pl-8 pb-12 border-l border-muted last:pb-0">
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-muted border border-background transition-colors group-hover:bg-silver" />
      
      <div className="flex flex-col space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
          <span className="text-sm font-mono text-gray-cool">{exp.period}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-silver font-medium lowercase italic">
          <span>{exp.company}</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground not-italic">{duration}</span>
        </div>

        <p className="text-muted-foreground leading-relaxed pt-2">
          {exp.description}
        </p>
      </div>
    </div>
  );
};

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visibleExperience = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 3);

  return (
    <section id="experience" className="py-24 px-8 w-full border-b border-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4 flex-grow">
            <span className="text-silver font-mono text-lg">01.</span>
            Experience
            <div className="h-[1px] flex-grow bg-muted" />
          </h2>
        </div>

        <div className="flex flex-col relative">
          {visibleExperience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}

          {!showAll && EXPERIENCE.length > 3 && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          )}
        </div>

        {EXPERIENCE.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-md border border-muted text-foreground font-medium tracking-wide hover:bg-muted/50 transition-all duration-300"
            >
              {showAll ? 'See Less' : 'See More Positions'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
