'use client';

import React, { useState } from 'react';
import { socialLinks } from '@/data/socialLinks';
import { personalInfo } from '@/data/personal'; // Importing email from your personal data
import { Copy, Check } from 'lucide-react';

export function Contacts() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      // Uses the email from your personalInfo file
      await navigator.clipboard.writeText(personalInfo.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="space-y-5"  id="contact" >
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">FIND ME ON</h2>
        <p className="text-neutral-700 dark:text-neutral-300   text-sm">
          You can find me on the following social platforms:
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {/* Render Social Links (including WhatsApp & Call) */}
        {socialLinks.map((link) => (
            <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all"
          >
            {typeof link.icon === 'string' ? (
              <span className="text-base">{link.icon}</span>
            ) : (
              link.icon
            )}
            <span className="font-medium">{link.name}</span>
          </a>
        ))}

        {/* Copy Email Button */}
        <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all cursor-pointer"
            aria-label="Copy email address"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="font-medium">
              {isCopied ? 'Copied!' : 'Copy Email'}
            </span>
          </button>
          
      </div>
    </section>
  );
}