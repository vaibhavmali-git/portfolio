"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "./ui/ExperienceCard";
import { Education } from "./Education";

export function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ] as const;

  return (
    <section id="experience" className="space-y-8 scroll-mt-20">
      <div className="w-full">
        <div className="flex w-full p-1.5 bg-[#FBFAF4] dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex-1 py-2 text-xs sm:text-[12.5px] font-medium rounded-lg transition-colors duration-200 z-10 outline-none cursor-pointer text-center uppercase
                ${
                  activeTab === tab.id
                    ? "text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                }
              `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab-bg"
                  className="absolute inset-0 bg-white dark:bg-neutral-700/40 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-600/40"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === "experience" ? (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-2 mb-6">
              <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
                WORK EXPERIENCE
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Recent positions and professional growth:
              </p>
            </div>

            <div>
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Education />
          </motion.div>
        )}
      </div>
    </section>
  );
}
