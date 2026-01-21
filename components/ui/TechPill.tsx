import React, { ReactNode } from 'react';

interface TechPillProps {
  name: string;
  icon: ReactNode;
}

export function TechPill({ name, icon }: TechPillProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-neutral-700/50 border-neutral-200 dark:border-neutral-700 rounded-lg cursor-default group">
      <span className="flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:transition-transform group-hover:[&>svg]:scale-110">
        {icon}
      </span>
      <span className="font-medium text-xs sm:text-sm text-neutral-700 dark:text-neutral-300  ">
        {name}
      </span>
    </div>
  );
}