"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { List, XCircle, SunHorizon, MoonStars } from "@phosphor-icons/react";

const MASK_NAV_BODY = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 0 H20 V5 Q15 9 10 5 T0 5 V0 Z" fill="black"/></svg>')`;

const MASK_WIGGLE_LINE = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10"><path d="M0 5 Q 5 1 10 5 T 20 5" stroke="black" stroke-width="2" fill="none"/></svg>')`;

const navItems = [
  { label: "home", href: "#home" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`absolute inset-0 z-0 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#FBFAF4]/95 dark:bg-[#1F1F1F]/95 backdrop-blur-md"
            : "bg-[#FBFAF4] dark:bg-[#1F1F1F]"
        }`}
        style={{
          maskImage: `linear-gradient(black, black), ${MASK_NAV_BODY}`,
          WebkitMaskImage: `linear-gradient(black, black), ${MASK_NAV_BODY}`,
          maskSize: `100% calc(100% - 10px), 20px 10px`,
          WebkitMaskSize: `100% calc(100% - 10px), 20px 10px`,
          maskPosition: `top, bottom left`,
          WebkitMaskPosition: `top, bottom left`,
          maskRepeat: `no-repeat, repeat-x`,
          WebkitMaskRepeat: `no-repeat, repeat-x`,
        }}
      />

      <div className="relative z-10 max-w-201 mx-auto px-4 py-3 pb-5">
        <div className="flex items-center gap-7 justify-between">
          {/* LOGO */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="font-bold text-lg font-mono">
              <span className="text-[#db775b]">// </span>
              <span className="text-neutral-900 dark:text-neutral-100">
                VM{" "}
              </span>
            </span>
          </button>

          <div className="flex items-center gap-0 sm:gap-1 ">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 border border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle theme"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <SunHorizon
                    size={23}
                    weight="regular"
                    className="text-[#db775b]"
                  />
                ) : (
                  <MoonStars
                    size={22}
                    weight="regular"
                    className="text-[#6366f1]"
                  />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors border border-transparent
                 ${
                   isMenuOpen
                     ? "bg-white dark:bg-neutral-800"
                     : "hover:bg-white dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                 }
              `}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <XCircle size={21} weight="regular" />
              ) : (
                <List size={21} weight="regular" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="pt-4 pb-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? "text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {activeSection === item.href.slice(1) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#db775b]" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-2.5 w-full z-20 pointer-events-none bg-neutral-400/70 dark:bg-neutral-700 transition-colors duration-300"
        style={{
          maskImage: MASK_WIGGLE_LINE,
          WebkitMaskImage: MASK_WIGGLE_LINE,
          maskRepeat: "repeat-x",
          WebkitMaskRepeat: "repeat-x",
          maskPosition: "bottom left",
          WebkitMaskPosition: "bottom left",
          maskSize: "20px 10px",
          WebkitMaskSize: "20px 10px",
        }}
      />
    </nav>
  );
}
