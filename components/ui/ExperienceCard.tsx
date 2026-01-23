"use client";
import React from 'react';
import { Experience } from '@/types';
import { TypeBadge } from './TypeBadge';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-10 sm:pb-12 last:pb-0">
      <div className="absolute left-0 sm:left-1 top-0.5 sm:top-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#db775b] rounded-full"></div>
      
      <div className="absolute left-[4px] sm:left-[8.5px] top-3.5 sm:top-4 bottom-0 w-px sm:w-0.5 bg-neutral-200 dark:bg-neutral-700 last:hidden"></div>
      
      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3">
          <div>
            <h3 className="text-base sm:text-base font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
              {experience.role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-neutral-600 dark:text-neutral-400 mt-1">
              <span className="text-sm sm:text-base font-medium">{experience.company}</span>
              <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600">•</span>
              <span className="text-xs sm:text-sm">{experience.location}</span>
            </div>
          </div>
          
          <div className="w-fit">
            <TypeBadge type={experience.type} />
          </div>
        </div>
        
        <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-500">
          {experience.period}
        </p>
        
        <ul className="space-y-1 text-[13px] sm:text-sm text-neutral-700 dark:text-neutral-300">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-2 leading-relaxed">
              <span className="text-[#db775b] flex-shrink-0 -mt-[5px] sm:-mt-[2px] text-lg sm:text-base">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}