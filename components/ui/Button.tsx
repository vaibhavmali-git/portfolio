import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  icon, 
  onClick, 
  href,
  className = "" 
}: ButtonProps) {
  const styles = variant === "primary" 
    ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200" 
    : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600";
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${styles} ${className}`}
    >
      {icon}
      {children}
    </Component>
  );
}