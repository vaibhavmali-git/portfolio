"use client";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techStack = project.tech.split(",").map((tech) => tech.trim());

  // Automatically split the description into sentences for a cleaner list view
  const descriptionPoints = project.description
    .split(". ")
    .filter((point) => point.trim().length > 0)
    .map((point) => (point.endsWith(".") ? point : `${point}.`));

  return (
    <div className="group bg-white dark:bg-[#1f1f1f] border border-neutral-200 dark:border-[rgb(48,48,48)] rounded-2xl overflow-hidden hover:shadow-lg dark:hover:shadow-neutral-900/30 transition-all duration-300 flex flex-col h-full">
      
      {/* Increased padding for better breathing room */}
      <div className="px-4.5 py-5 pt-4 sm:px-5 sm:py-6 sm:pt-4.5 flex flex-col flex-grow">
        
        {/* Header Section */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-bold text-lg leading-tight text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>

            {/* Action Buttons */}
            <div className="flex gap-2 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all"
                  aria-label="View on GitHub"
                >
                  <GithubLogo size={15} weight="bold" />
                  <span className="hidden sm:inline">Code</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all"
                  aria-label="View live demo"
                >
                  <ArrowSquareOut size={15} weight="bold" />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Description: Rendered as a clean list instead of a block */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-2.5">
            {descriptionPoints.map((point, index) => (
              <li key={index} className="flex gap-2.5 text-[13px] sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700/50">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-[11px] font-medium rounded-md text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}