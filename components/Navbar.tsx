'use client';

import { useState, useEffect } from 'react';
import { Menu, X, AlignRight } from 'lucide-react';

const MASK_SVG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 0 H20 V5 Q15 9 10 5 T0 5 V0 Z" fill="black"/></svg>')`;

const getBorderSVG = (color: string) => 
  `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5" stroke="${encodeURIComponent(color)}" stroke-width="1.5" fill="none"/></svg>')`;

const navItems = [
  { label: "home", href: "#home" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" }
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const wiggleColor = isDark ? '#404040' : '#5d5c5c';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      
      {/* === MAIN CONTAINER WITH WAVE CUTOUT === */}
      <div 
        className={`relative w-full ${
          isScrolled 
            ? 'bg-[#faf9f5]/95 dark:bg-[#1f1f1f]/95 backdrop-blur-sm' 
            : 'bg-[#faf9f5] dark:bg-[#1f1f1f]'
        }`}
        style={{
          maskImage: `linear-gradient(black, black), ${MASK_SVG}`,
          WebkitMaskImage: `linear-gradient(black, black), ${MASK_SVG}`,
          maskSize: `100% calc(100% - 10px), 20px 10px`,
          WebkitMaskSize: `100% calc(100% - 10px), 20px 10px`,
          maskPosition: `top, bottom left`,
          WebkitMaskPosition: `top, bottom left`,
          maskRepeat: `no-repeat, repeat-x`,
          WebkitMaskRepeat: `no-repeat, repeat-x`,
        }}
      >
        <div className="relative z-10 max-w-204 mx-auto px-4 py-3 pb-5">
          <div className="flex items-center gap-7 justify-between">
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-[#db775b] dark:text-[#db775b] font-bold text-lg">//</span>
              <span className="font-bold text-neutral-900 dark:text-neutral-100">VM</span>
            </button>

            <div className="hidden md:flex items-center">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 text-base font-medium transition-all ${
                    activeSection === item.href.slice(1)
                      ? ' text-[#db775b] dark:text-[#db775b]'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-[#db775b] dark:hover:text-[#db775b] cursor-pointer'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                ) : (
                  <AlignRight className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? 'text-neutral-900 dark:text-neutral-100 bg-white/50 dark:bg-neutral-800/50'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-[10px] w-full z-20 pointer-events-none"
        style={{ 
          backgroundImage: getBorderSVG(wiggleColor),
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom left',
          backgroundSize: '20px 10px'
        }}
      />
    </nav>
  );
}