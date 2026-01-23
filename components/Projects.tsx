"use client";
import { useState, useEffect } from "react";
import { ArrowCircleUpRight, ArrowRight, XCircle } from "@phosphor-icons/react";
import { shippedProjects, personalProjects } from "@/data/projects";
import { ProjectCard } from "./ui/ProjectCard";
import { Project } from "@/types";
import Divider from "./ui/Divider";

export function Projects() {
  const [activeModal, setActiveModal] = useState<"shipped" | "personal" | null>(
    null,
  );

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  const ProjectModal = ({
    title,
    projects,
    onClose,
  }: {
    title: string;
    projects: Project[];
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-lg transition-opacity border border-neutral-200 dark:border-neutral-800"
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#fafaf4] dark:bg-[#1f1f1f] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-5 sm:py-5 px-6  shrink-0">
          <h2 className="text-lg font-serif font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wide">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <XCircle size={20} weight="light" />
          </button>
        </div>
     

        <div className="p-4 sm:p-6 -mt-7 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="space-y-12 scroll-mt-20">
      {/* Section 1: Company Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
              Company Projects
            </h2>
            {shippedProjects.length > 2 && (
              <button
                onClick={() => setActiveModal("shipped")}
                className="group flex items-center gap-1 text-xs sm:text-sm text-neutral-900 dark:text-neutral-300 hover:text-[#db775b] dark:hover:text-[#db775b] transition-colors"
              >
                view more
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
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

      {/* Section 2: Personal Projects */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
              PERSONAL PROJECTS
            </h2>
            {personalProjects.length > 2 && (
              <button
                onClick={() => setActiveModal("personal")}
                className="group flex items-center gap-1 text-xs sm:text-sm text-neutral-900 dark:text-neutral-300 hover:text-[#db775b] dark:hover:text-[#db775b] transition-colors"
              >
                view more
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
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

      {/* <div className="flex justify-center pt-4">
        <a
          href="https://github.com/vaibhavmali-git"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
        >
          <span>View more on GitHub</span>
          <ArrowCircleUpRight
            size={17}
            weight="regular"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div> */}

      {/* Modals */}
      {activeModal === "shipped" && (
        <ProjectModal
          title="Company Projects"
          projects={shippedProjects}
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === "personal" && (
        <ProjectModal
          title="Personal Projects"
          projects={personalProjects}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
}
