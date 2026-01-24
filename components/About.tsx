"use client";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { about } from "@/data/about";

export function About() {
  const renderHighlightedText = (text: string) => {
    const parts = text.split("*");

    return parts.map((part, index) => {
      if (index % 2 === 1 && part.toLowerCase() === "instagram") {
        return (
          <a
            key={index}
            href="https://www.instagram.com/vaibhavmali.ig/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#db775b] underline underline-offset-2 decoration-[#db775b] hover:opacity-80 transition"
          >
            {part}
          </a>
        );
      }

      if (index % 2 === 1) {
        return (
          <span key={index} className="text-[#db775b]">
            {part}
          </span>
        );
      }

      return part;
    });
  };

  return (
    <section id="about" className="space-y-2 scroll-mt-20">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
          ABOUT ME
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-3">
        {about.summary.split("\n\n").map((paragraph: string, index: number) => (
          <p
            key={index}
            className="text-neutral-900 dark:text-neutral-300 leading-relaxed text-[13px] sm:text-sm"
          >
            {renderHighlightedText(paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
}
