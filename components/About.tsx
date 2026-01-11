import React from 'react';
import { about } from '@/data/about';

export function About() {
  return (
    <section id="about" className="space-y-6 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">ABOUT ME</h2>
        <p className="text-neutral-700 dark:text-neutral-300 font-mono text-sm">
          Who I am and what I'm passionate about:
        </p>
      </div>
      
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {about.summary}
        </p>
        
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Key Focus Areas</h3>
          <ul className="space-y-2">
            {about.keyPoints.map((point, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                <span className="text-[#db775b] dark:text-[#db775b] font-bold flex-shrink-0 mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
