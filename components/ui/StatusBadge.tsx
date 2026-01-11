import React from 'react';

interface StatusBadgeProps {
  status: 'Active' | 'Production' | 'Sold';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    Active: "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    Production: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    Sold: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-[#db775b] dark:border-orange-800"
  };
  
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded border ${colors[status]}`}>
      {status}
    </span>
  );
}