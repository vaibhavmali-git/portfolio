import React, { ReactNode } from 'react';

interface TechPillProps {
  name: string;
  // Update type to accept React Components
  icon: ReactNode;
}

export function TechPill({ name, icon }: TechPillProps) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-[3rem] cursor-default group">
      {/* We wrap the icon in a span to control its size nicely.
         The [&>svg]:w-3.5 styling forces any SVG inside to be the perfect small size.
      */}
      <span className="flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:transition-transform group-hover:[&>svg]:scale-110">
        {icon}
      </span>
      <span className="font-medium text-sm text-neutral-700 dark:text-neutral-300  ">
        {name}
      </span>
    </div>
  );
}