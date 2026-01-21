'use client';
import { useState, useEffect } from 'react';

// The same wiggle stroke used in your other components
const getWiggleSVG = (color: string) => 
  `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5" stroke="${encodeURIComponent(color)}" stroke-width="1.5" fill="none"/></svg>')`;

export default function Divider() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for dark mode preference/setting
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    }
  }, []);

  // Match the colors to your original straight line:
  // neutral-200 (~#e5e5e5) for light mode
  // neutral-700 (~#404040) for dark mode
  const wiggleColor = isDark ? '#404040' : '#E5E5E5';

  return (
    <div className="flex justify-center w-full my-8">
      <div 
        className="w-full max-w-4xl h-2.5"
        style={{ 
          backgroundImage: getWiggleSVG(wiggleColor),
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'center',
          backgroundSize: '20px 10px'
        }} 
      />
    </div>
  );
}