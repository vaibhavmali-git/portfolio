"use client";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { shippedProjects, personalProjects } from "@/data/projects";
import { ProjectCard } from "./ui/ProjectCard";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="space-y-12 scroll-mt-20 mb-11">
      {/* Section 1: Company Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase font-fraunces text-lg">
              Company Projects
            </h2>
            {shippedProjects.length > 2 && (
              <Link
                href="/projects"
                className="group flex items-center gap-1 text-[13px] sm:text-sm text-neutral-900 dark:text-neutral-200 hover:text-[#db775b] dark:hover:text-[#db775b] active:scale-95 duration-200 transition-all whitespace-nowrap -mt-1.5 sm:-mt-2 font-mono tracking-tight leading-none font-medium"
              >
                view more
                <ArrowCircleRight
                  size={14}
                  className="sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-mono tracking-tight leading-none font-medium">
            Projects I worked on at{" "}
            <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm font-mono tracking-tight leading-none">
              QuadB Technologies
            </span>
            :
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shippedProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Section 2: Personal Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase font-fraunces text-lg">
              Personal Projects
            </h2>
            {personalProjects.length > 2 && (
              <Link
                href="/projects#personal"
                className="group flex items-center gap-1 text-[13px] sm:text-sm text-neutral-900 dark:text-neutral-200 hover:text-[#db775b] dark:hover:text-[#db775b] active:scale-95 duration-200 transition-all whitespace-nowrap -mt-1.5 sm:-mt-2 font-mono tracking-tight leading-none font-medium"
              >
                view more
                <ArrowCircleRight
                  size={14}
                  className="sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm font-mono tracking-tight leading-none font-medium">
            My personal projects:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
