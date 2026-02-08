import React from 'react';
import { techStack } from '@/data/techStack';
import { TechPill } from './ui/TechPill';

export function TechStack() {
  return (
    <section className="space-y-5 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase font-fraunces text-lg">TECH STACK</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-mono tracking-tight leading-none font-medium">
          Here are the tools and technologies I work with.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <TechPill key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </section>
  );
}