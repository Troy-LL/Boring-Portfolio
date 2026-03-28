'use client';

import { useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data';
import Github from 'lucide-react/dist/esm/icons/github';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import Folder from 'lucide-react/dist/esm/icons/folder';
import LayoutGrid from 'lucide-react/dist/esm/icons/layout-grid';
import List from 'lucide-react/dist/esm/icons/list';
import { cn } from '@/lib/utils';
import AOS from 'aos';

const ProjectCard = ({ project, index, view }: { project: typeof PROJECTS[0], index: number, view: 'grid' | 'list' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (view === 'list') {
    return (
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "group relative flex flex-col p-6 bg-muted/5 border-b border-muted/20 hover:bg-muted/10 transition-all duration-300 cursor-pointer",
          isExpanded && "bg-muted/10 border-silver/20"
        )}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
          <div className="flex-grow space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold text-white-paper group-hover:text-silver transition-colors">
                {project.title}
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-silver/40 px-2 py-0.5 border border-silver/20 rounded">
                {project.category}
              </span>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-1 max-w-2xl">
              {project.summary}
            </p>
          </div>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => e.stopPropagation()}
                className="p-2 -m-2 hover:text-silver transition-colors"
                title="View Source"
              >
                <Github className="w-5 h-5" />
              </a>
              {project.website && (
                <a 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 -m-2 hover:text-silver transition-colors"
                  title="View Site"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-muted/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-3xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {project.tech.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-silver/30" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-silver/60">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
      className="group bg-muted/10 border border-muted/30 p-8 rounded-lg hover:-translate-y-2 transition-all duration-300 hover:border-silver/30 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <Folder className="w-10 h-10 text-silver/50" />
        <div className="flex gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-silver transition-colors">
            <Github className="w-5 h-5" />
          </a>
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="hover:text-silver transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-cool mb-2">
        {project.category}
      </p>

      <h3 className="text-xl font-bold text-white-paper mb-3 group-hover:text-silver transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-muted/20">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[10px] uppercase tracking-widest font-mono text-silver/60">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    AOS.refresh();
  }, [view]);

  return (
    <section id="projects" className="w-full max-w-4xl mx-auto py-24 px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
        <h2 
          className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4 flex-grow"
        >
          <span className="text-silver font-mono text-lg">02.</span>
          Things I've Built
          <div className="h-[1px] flex-grow bg-muted" />
        </h2>

        <div className="flex items-center gap-1 p-1 bg-muted/20 border border-muted/30 rounded-lg self-start">
          <button 
            onClick={() => setView('grid')}
            className={cn(
              "p-2 rounded transition-all duration-200",
              view === 'grid' ? "bg-muted text-silver shadow-lg" : "text-muted-foreground hover:text-foreground"
            )}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setView('list')}
            className={cn(
              "p-2 rounded transition-all duration-200",
              view === 'grid' ? "text-muted-foreground hover:text-foreground" : "bg-muted text-silver shadow-lg"
            )}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={cn(
        "transition-all duration-500",
        view === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "flex flex-col border border-muted/20 rounded-xl overflow-hidden"
      )}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} view={view} />
        ))}
      </div>
    </section>
  );
}
