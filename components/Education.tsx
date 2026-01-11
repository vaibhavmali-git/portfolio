import React from 'react';
import { education } from '@/data/education';
import { GraduationCap } from 'lucide-react';

export function Education() {
    return (
        <section id="education" className="space-y-6 scroll-mt-20">
            <div className="space-y-2">
                <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">EDUCATION</h2>
                <p className="text-neutral-700 dark:text-neutral-300 font-mono text-sm">
                    My educational background and qualifications:
                </p>
            </div>

            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id} className="p-5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all">
                        <div className="flex items-start gap-3 mb-3">
                            <GraduationCap className="w-5 h-5 text-[#db775b] dark:text-[#db775b] flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{edu.degree}</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{edu.institution}</p>
                            </div>
                        </div>

                        <div className="ml-8 space-y-3">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-neutral-500 dark:text-neutral-500 font-mono">{edu.period}</p>
                                {edu.cgpa && (
                                    <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-full">
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
