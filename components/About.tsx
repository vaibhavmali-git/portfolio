"use client";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { about } from "@/data/about";

export function About() {
  const renderHighlightedText = (text: string) => {
    const parts = text.split("*");
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <span key={index} className="text-[#db775b]">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <section id="about" className="space-y-6 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
          ABOUT ME
        </h2>
      </div>

    <div className="space-y-4 sm:space-y-5 -mt-2 sm:-mt-4">
      {about.summary.split("\n\n").map((paragraph: string, index: number) => (
        <p
          key={index}
          className="text-neutral-900 dark:text-neutral-300 leading-relaxed text-[13px] sm:text-sm"
        >
          {renderHighlightedText(paragraph)}
        </p>
      ))}

      <a
        href="https://www.instagram.com/vaibhavmali.ig/"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-[13px] sm:text-sm text-[#db775b] transition-all hover:opacity-80 underline underline-offset-4 decoration-[#db775b]/30 hover:decoration-[#db775b]"
      >
        <span>See my photography on Instagram</span>
        <ArrowCircleUpRight 
          size={16} 
          weight="regular" 
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
        />
      </a>
    </div>
    </section>
  );
}
