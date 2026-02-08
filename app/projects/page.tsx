"use client";

import { shippedProjects, personalProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Divider from "@/components/ui/Divider";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="max-w-204 mx-auto px-6 pb-20">
      <div className="mb-13">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-neutral-200 hover:text-[#db775b] dark:hover:text-[#db775b] active:scale-95 duration-200 transition-all group cursor-pointer"
          >
            <ArrowCircleLeft
              size={20}
              weight="regular"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span className="font-mono tracking-tight leading-none font-medium">Back</span>
          </button>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-neutral-100 font-serif tracking-tight">
            All Projects
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-xl font-mono tracking-tight leading-none font-medium">
            A complete archive of the production applications and personal
            experiments I've built.
          </p>
        </div>
      </div>

      <div>
        {/* Company Projects */}

        <section className="space-y-3 mb-13 scroll-mt-24">
          <h2 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider pb-3 inline-block">
            Company Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <Divider />

        {/* Personal Projects */}

        <section id="personal" className="space-y-3 mt-10 scroll-mt-22">
          <h2 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider pb-3 inline-block">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
