import React from 'react';

interface TechPillProps {
  name: string;
  icon: string;
}

export function TechPill({ name, icon }: TechPillProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors">
      <span className="text-base">{icon}</span>
      <span className="font-medium">{name}</span>
    </div>
  );
}