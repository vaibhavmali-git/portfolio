import React from 'react';

interface TypeBadgeProps {
  type: 'Full-time' | 'Internship' | 'Contract';
}

export function TypeBadge({ type }: TypeBadgeProps) {
  const styles = {
    'Full-time':
      'bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700',
    Internship:
      'bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700',
    Contract:
      'bg-neutral-50 text-neutral-700 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700'
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-[0.4rem] border mt-1 ${styles[type]}`}
    >
      {type}
    </span>
  );
}
