"use client";

import { socialLinks } from "@/data/socialLinks";
import { personalInfo } from "@/data/personal";

export function Contacts() {
  return (
    <section className="space-y-5" id="contact">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider font-serif text-lg">
          GET IN TOUCH
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks

          .filter((link) => link.name !== "Email")
          .map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all"
            >
              {typeof link.icon === "string" ? (
                <span className="text-base">{link.icon}</span>
              ) : (
                link.icon
              )}
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
      </div>

      <div className="space-y-1   text-sm text-neutral-900 dark:text-neutral-300">
        <p>
          You can reach me anytime at{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#db775b] dark:text-[#db775b]"
          >
            {personalInfo.email}
          </a>
        </p>
      </div>
    </section>
  );
}
