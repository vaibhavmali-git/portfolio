import React from 'react';
import { socialLinks } from '@/data/socialLinks';

export function SocialLinks() {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">FIND ME ON</h2>
        <p className="text-neutral-700 dark:text-neutral-300 font-mono text-sm">
          You can find me on the following social platforms:
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
            <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all"
          >
            {typeof link.icon === 'string' ? (
              <span className="text-base">{link.icon}</span>
            ) : (
              link.icon
            )}
            <span className="font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}