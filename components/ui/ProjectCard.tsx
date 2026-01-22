"use client";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const techStack = project.tech.split(",").map((tech) => tech.trim());

  return (
    <div className="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-[rgb(50,50,50)] rounded-[1rem] overflow-hidden hover:shadow-md dark:hover:shadow-neutral-900/50 transition-all flex flex-col h-full">
      <div className="px-4 py-5 pt-3 sm:px-5 sm:py-6 sm:pt-4 flex flex-col flex-grow">
        <div className="flex flex-col gap-3 sm:gap-4 mb-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <h3 className="font-semibold text-base sm:text-lg text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>

            <div className="flex gap-2 shrink-0 sm:-mr-1">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-lg text-[10px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                  aria-label="View on GitHub"
                >
                  <GithubLogo
                    size={14}
                    weight="regular"
                    className="sm:w-[15px] sm:h-[15px]"
                  />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-lg text-[10px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                  aria-label="View live demo"
                >
                  <ArrowSquareOut
                    size={14}
                    weight="regular"
                    className="sm:w-[15px] sm:h-[15px]"
                  />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="text-[13px] sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          {project.description}
        </p>

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
