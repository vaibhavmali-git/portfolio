import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-md dark:hover:shadow-neutral-900/50 transition-all flex flex-col h-full">

      {/* <div className="relative aspect-video w-full overflow-hidden border-b border-neutral-100 dark:border-neutral-700">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover object-top"
        />
      </div> */}

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100">
            {project.name}
          </h3>

          <div className="flex gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-[#f0eee6] dark:bg-[#1f1e1d] border border-neutral-200 dark:border-neutral-700 rounded-md text-sm text-neutral-500 dark:text-neutral-300 hover:text-[#d97757]"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-[#f0eee6] dark:bg-[#1f1e1d] border border-neutral-200 dark:border-neutral-700 rounded-md text-sm text-neutral-500 dark:text-neutral-300 hover:text-[#d97757]"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed ">
          {project.description}
        </p>

        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700/50">
          <p className="text-xs font-mono text-neutral-500 dark:text-neutral-500">
            {project.tech}
          </p>
        </div>
      </div>
    </div>
  );
}