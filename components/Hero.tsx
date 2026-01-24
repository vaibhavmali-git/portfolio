"use client";
import React from "react";
import { MapPinLine, ArrowCircleDownRight } from "@phosphor-icons/react";
import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

export function Hero() {
  const heroSocials = socialLinks.filter((link) =>
    ["GitHub", "LinkedIn", "Email"].includes(link.name),
  );

  const renderTagline = (text: string) => {
    const parts = text.split("*");
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-[#db775b] font-bold underline">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="home" className="space-y-6 scroll-mt-20 pt-2.5">
      <div className="w-16 h-16 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
        <Image
          src="https://res.cloudinary.com/dbkkmdery/image/upload/v1768062121/IMG_20260110_214814_axjlpe.jpg"
          alt={`${personalInfo.name} profile photo`}
          width={64}
          height={64}
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 font-serif tracking-[-1.5px]">
          Hey, I'm <span className="font-serif">{personalInfo.name}.</span>
          <span className="inline-block ml-2 animate-wave cursor-default origin-[70%_70%]">👋</span>
        </h1>

        <div className="space-y-3 text-neutral-700 dark:text-neutral-300 font-geistMono">
          <p className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            <MapPinLine size={17} weight="regular" className="-mt-0.5" />
            <span>{personalInfo.location}</span>
          </p>

          <p className="text-sm sm:text-lg leading-relaxed font-medium text-neutral-900 dark:text-neutral-200">
            {renderTagline(personalInfo.tagline)}
          </p>

          <p className="text-sm sm:text-base leading-relaxed opacity-90 text-neutral-900 dark:text-neutral-300">
            {personalInfo.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
          {heroSocials.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8.5 h-8.5 sm:w-10 sm:h-10 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-[0.55rem] text-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all shrink-0"
              aria-label={link.name}
            >
              <span className="shrink-0 scale-90 sm:scale-100">
                {link.icon}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleScroll}
            className="flex items-center justify-center gap-2 px-3 sm:px-4 h-8.5 sm:h-10 rounded-[0.55rem] bg-[#262626] dark:bg-[#fafafa] border border-[#262626] dark:border-[#fafafa] text-white dark:text-neutral-900 hover:opacity-90 transition-all shadow-sm cursor-pointer shrink-0"
          >
            <span className="font-medium text-xs sm:text-sm">Let’s talk</span>
            <ArrowCircleDownRight size={18} weight="regular" />
          </a>
        </div>
      </div>
    </section>
  );
}