import React from "react";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="space-y-6 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
          EDUCATION
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          My educational background and qualifications:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="p-4 sm:p-5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-600 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <div className="flex-1">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100 text-sm sm:text-base">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5 sm:mt-1">
                  {edu.institution}
                </p>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500">
                  - {edu.period}
                </p>

                {edu.cgpa && (
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/30 text-[10px] sm:text-xs font-medium rounded-md">
                    CGPA: {edu.cgpa}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
