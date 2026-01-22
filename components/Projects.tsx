"use client";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { shippedProjects, personalProjects } from "@/data/projects";
import { ProjectCard } from "./ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="space-y-10 scroll-mt-20">
      {/* Section 1: Shipped Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
            PROJECTS I SHIPPED
          </h2>
          <p className="text-neutral-900 dark:text-neutral-300 text-[13px] sm:text-sm">
            Production applications I've built and maintained at{" "}
            <span className="font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-4 decoration-[#db775b]/30">
              QuadB Technologies
            </span>:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shippedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Section 2: Personal Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
            PERSONAL PROJECTS
          </h2>
          <p className="text-neutral-900 dark:text-neutral-300 text-sm">
            My personal projects:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href="https://github.com/vaibhavmali-git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline"
        >
          <span>View more on GitHub</span>
          <ArrowCircleUpRight size={17} weight="regular" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
        </a>
      </div>
    </section>
  );
}
