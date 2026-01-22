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

      <div className="space-y-5 -mt-4">
        {about.summary.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-neutral-900 dark:text-neutral-300 leading-relaxed text-sm"
          >
            {renderHighlightedText(paragraph)}
          </p>
        ))}

        <a
          href="https://www.instagram.com/vaibhavmali.ig/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-[#db775b] transition-colors underline"
        >
          See some of my photography on Instagram   <ArrowCircleUpRight size={17} weight="regular" className="mt-0.5"/>
        </a>
      </div>
    </section>
  );
}
