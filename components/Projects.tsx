"use client";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { shippedProjects, personalProjects } from "@/data/projects";
import { ProjectCard } from "./ui/ProjectCard";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="space-y-12 scroll-mt-20">
      {/* Section 1: Company Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
         
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
              Company Projects
            </h2>
            {shippedProjects.length > 2 && (
              <Link
                href="/projects"
                className="group flex items-center gap-1 text-xs sm:text-sm text-neutral-900 dark:text-neutral-300 hover:text-[#db775b] dark:hover:text-[#db775b] transition-colors"
              >
                view more
                <ArrowCircleRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </div>
          <p className="text-neutral-900 dark:text-neutral-300 text-[13px] sm:text-sm">
            Production applications I've built and maintained at{" "}
            <span className="font-medium text-neutral-900 dark:text-neutral-100 underline underline-offset-2 ">
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

     
     <div className="space-y-5">
        <div className="space-y-2">
          {/* FIXED: Changed items-baseline -> items-center */}
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
              PERSONAL PROJECTS
            </h2>
            {personalProjects.length > 2 && (
              <Link
                href="/projects"
                className="group flex items-center gap-1 text-xs sm:text-sm text-neutral-900 dark:text-neutral-300 hover:text-[#db775b] dark:hover:text-[#db775b] transition-colors"
              >
                view more
                <ArrowCircleRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            )}
          </div>
          <p className="text-neutral-900 dark:text-neutral-300 text-sm">
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