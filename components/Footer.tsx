import React from 'react';
import { ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 ">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="flex items-center gap-1">
            © 2025 Built with <span className="text-red-500">❤️</span> by {personalInfo.name.split(' ')[0]}
          </p>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            This website is <span className="font-semibold">open-source</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}