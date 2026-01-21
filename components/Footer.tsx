'use client';
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

// 1. TOP MASK SVG:
// This shape creates the "cut" for the top edge. 
// It fills the area BELOW the wave (from y=5 down to y=10).
const MASK_SVG_TOP = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5 V 10 H 0 Z" fill="black"/></svg>')`;

// 2. BORDER SVG: 
// The stroke line that sits on top of the cut.
const getBorderSVG = (color: string) => 
  `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5" stroke="${encodeURIComponent(color)}" stroke-width="1.5" fill="none"/></svg>')`;

export function Footer() {
  const [isDark, setIsDark] = useState(false);

  // Determine the wiggle color based on the theme
  const wiggleColor = isDark ? '#404040' : '#d4d4d4';

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <footer className="relative"> {/* Add padding top to account for the wave space */}
      
      {/* === 1. MAIN FOOTER CONTAINER WITH MASK === */}
      <div 
        className="bg-white dark:bg-neutral-900"
        style={{
          // MASK LOGIC:
          // 1. MASK_SVG_TOP: Handles the top 10px (the wavy cut)
          // 2. linear-gradient: Handles the rest of the footer body (solid block)
          maskImage: `${MASK_SVG_TOP}, linear-gradient(black, black)`,
          WebkitMaskImage: `${MASK_SVG_TOP}, linear-gradient(black, black)`,
          
          // SIZES:
          // Wave is 10px high. Gradient fills the rest (100% height - 10px).
          maskSize: `20px 10px, 100% calc(100% - 10px)`,
          WebkitMaskSize: `20px 10px, 100% calc(100% - 10px)`,
          
          // POSITIONS:
          // Wave sits at Top Left. Gradient sits at Bottom Left.
          maskPosition: `top left, bottom left`,
          WebkitMaskPosition: `top left, bottom left`,
          
          // REPEATS:
          // Wave repeats horizontally. Gradient does not repeat.
          maskRepeat: `repeat-x, no-repeat`,
          WebkitMaskRepeat: `repeat-x, no-repeat`,
        }}
      >
        <div className="max-w-204 mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <p className="flex items-center gap-1">
              Crafted with ❤️ by <span className='text-[#db775b] dark:text-[#db775b]'>Vaibhav Mali</span>
            </p>
          </div>
        </div>
      </div>

      {/* === 2. BORDER LINE === */}
      {/* Positioned at top:0 to perfectly trace the cut edge */}
      <div 
        className="absolute top-0 left-0 right-0 h-[10px] w-full pointer-events-none z-20"
        style={{ 
          backgroundImage: getBorderSVG(wiggleColor),
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'top left',
          backgroundSize: '20px 10px'
        }}
      />
    </footer>
  );
}