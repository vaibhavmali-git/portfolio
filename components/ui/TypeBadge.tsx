import React from 'react';

interface TypeBadgeProps {
  type: 'Full-time' | 'Internship' | 'Contract';
}

export function TypeBadge({ type }: TypeBadgeProps) {
  const colors = {
    "Full-time": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    "Internship": "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800",
    "Contract": "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-[#db775b] dark:border-orange-800"
  };
  
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded border ${colors[type]}`}>
      {type}
    </span>
  );
}