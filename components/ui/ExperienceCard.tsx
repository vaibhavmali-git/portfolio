import React from 'react';
import { Experience } from '@/types';
import { TypeBadge } from './TypeBadge';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-1 w-5 h-5 bg-[#db775b] dark:bg-[#db775b] rounded-full "></div>
      <div className="absolute left-[8.5px] top-6 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700 last:hidden"></div>
      
      <div className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{experience.role}</h3>
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mt-1">
        
              <span className="font-medium">{experience.company}</span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="text-sm">{experience.location}</span>
            </div>
          </div>
          <TypeBadge type={experience.type} />
        </div>
        
        <p className="text-sm text-neutral-500 dark:text-neutral-500  ">{experience.period}</p>
        
        <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-[#db775b] dark:text-[#db775b] flex-shrink-0 -mt-[2px]">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}