import React, { ReactNode } from "react";

interface TechPillProps {
  name: string;
  icon: ReactNode;
}

export function TechPill({ name, icon }: TechPillProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 px-2.5 py-1.5 sm:px-3 sm:py-2 h-8 sm:h-9.5 bg-white dark:bg-neutral-700/50 border-neutral-200 dark:border-neutral-700 rounded-[0.55rem] cursor-default group">
      <span className="flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-4 sm:[&>svg]:h-4 [&>svg]:transition-transform group-hover:[&>svg]:scale-110">
        {icon}
      </span>
      <span className="font-medium text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-mono tracking-tight leading-none
">
        {name}
      </span>
    </div>
  );
}
