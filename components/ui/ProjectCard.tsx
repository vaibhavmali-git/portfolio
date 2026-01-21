import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // 1. Split the string into an array
  const techStack = project.tech.split(',').map((tech) => tech.trim());

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
                className="p-1.5 bg-[#262626] dark:bg-[#fafafa] border border-[#262626] dark:border-[#fafafa] rounded-md text-sm text-white dark:text-neutral-900 hover:opacity-90 transition-all shadow-sm cursor-pointer"
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
                className="p-1.5 bg-[#262626] dark:bg-[#fafafa] border border-[#262626] dark:border-[#fafafa] rounded-md text-sm text-white dark:text-neutral-900 hover:opacity-90 transition-all shadow-sm cursor-pointer"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* 2. Changed container to flex-wrap */}
        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700/50">
          <div className="flex flex-wrap gap-2">
           
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-1.5 py-0.5 text-[12px] font-medium rounded-md text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/50 border border-neutral-200 dark:border-neutral-700"
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