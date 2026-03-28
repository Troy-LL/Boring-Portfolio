'use client';

import { PROJECTS } from '@/lib/data';
import Github from 'lucide-react/dist/esm/icons/github';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import Folder from 'lucide-react/dist/esm/icons/folder';

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
      className="group bg-muted/30 border border-muted p-8 rounded-lg hover:-translate-y-2 transition-all duration-300 hover:border-silver/30"
    >
      <div className="flex justify-between items-start mb-6">
        <Folder className="w-10 h-10 text-silver" />
        <div className="flex gap-4">
          <a href={project.link} className="hover:text-silver transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={project.link} className="hover:text-silver transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white-paper mb-2 group-hover:text-silver transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs font-mono text-gray-cool">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto py-24 px-8">
      <h2 
        data-aos="fade-right" 
        className="text-3xl font-bold tracking-tight text-foreground mb-16 flex items-center gap-4"
      >
        <span className="text-silver font-mono text-lg">02.</span>
        Things I've Built
        <div className="h-[1px] flex-grow bg-muted" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
