import React from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ui/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="space-y-5 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">PROJECTS</h2>
        <p className="text-neutral-700 dark:text-neutral-300 font-mono text-sm">
          These are my personal projects, both past and ongoing:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}