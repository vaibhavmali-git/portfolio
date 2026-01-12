import React from 'react';
import { ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 ">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p className="flex items-center gap-1">
            Crafted with ❤️ by <span className='text-[#db775b] dark:text-[#db775b]'>Vaibhav Mali</span>
          </p>
        </div>
      </div>
    </footer>
  );
}