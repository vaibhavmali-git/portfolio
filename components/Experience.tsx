import React from 'react';
import { experiences } from '@/data/experiences';
import { ExperienceCard } from './ui/ExperienceCard';

export function Experience() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">WORK EXPERIENCE</h2>
        <p className="text-neutral-700 dark:text-neutral-300   text-sm">
          My professional journey and key contributions:
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