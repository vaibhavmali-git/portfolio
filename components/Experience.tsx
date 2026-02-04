import React from 'react';
import { experiences } from '@/data/experiences';
import { ExperienceCard } from './ui/ExperienceCard';

export function Experience() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">WORK EXPERIENCE</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Recent positions:
        </p>
      </div>
      
      <div className="mt-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}