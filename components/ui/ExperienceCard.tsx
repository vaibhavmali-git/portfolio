"use client";
import React from "react";
import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-10 sm:pb-12 last:pb-0 group">
      <div className="absolute left-0 sm:left-1 top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#db775b] rounded-full ring-4 ring-white dark:ring-neutral-700" />

      <div className="absolute left-[4px] sm:left-[8.5px] top-4 sm:top-5 bottom-0 w-px sm:w-0.5 bg-neutral-300 dark:bg-neutral-700 group-last:hidden"></div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
          <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-200 leading-snug">
            {experience.role}
          </h3>

          <span className="inline-flex items-center px-2 py-1 text-[10px] sm:text-[11px] font-medium rounded-[0.5rem] border uppercase bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700">
            {experience.period}
          </span>
        </div>

        <div className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-200">
          {experience.company}
        </div>

        <ul className="space-y-1 text-[13px] sm:text-sm text-neutral-700 dark:text-neutral-300 mt-2">
          {experience.highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-2 leading-relaxed">
              <span className="text-[#db775b] flex-shrink-0 -mt-[5px] sm:-mt-[2px] text-lg sm:text-base">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
