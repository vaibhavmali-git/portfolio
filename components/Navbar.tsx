'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, AlignRight } from 'lucide-react';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
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

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#faf9f5]/95 dark:bg-[#1f1f1f]/95 backdrop-blur-sm dark:shadow-neutral-800/50' : 'bg-[#faf9f5] dark:dark:bg-[#1f1f1f]'
    } border-b border-neutral-200 dark:border-neutral-800`}>
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="flex items-center gap-7 justify-between md:justify-start">
          <button 
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-[#db775b] dark:text-[#db775b] font-bold text-lg">//</span>
            <span className="font-bold text-neutral-900 dark:text-neutral-100">vaibhav.dev</span>
          </button>

          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.slice(1)
                    ? ' text-[#db775b] dark:text-[#db775b] underline'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-[#db775b] dark:hover:text-[#db775b] '
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-neutral-700 dark:text-neutral-300" /> : <Moon className="w-5 h-5 text-neutral-700" />}
            </button> */}
            
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
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.slice(1)
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded '
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}