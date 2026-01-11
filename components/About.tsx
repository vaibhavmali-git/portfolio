import React from 'react';
import { about } from '@/data/about';

export function About() {
  return (
    <section id="about" className="space-y-6 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          ABOUT ME
        </h2>
      </div>

      <div className="space-y-5 -mt-5">
        {about.summary.split('\n\n').map((paragraph, index) => (
          <p 
            key={index} 
            className="text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}