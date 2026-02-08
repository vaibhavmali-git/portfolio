"use client";

import { socialLinks } from "@/data/socialLinks";
import { personalInfo } from "@/data/personal";

export function Contacts() {
  return (
    <section className="space-y-3.5" id="contact">
      <div className="space-y-2">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-200 uppercase font-fraunces text-lg">
          Get in touch
        </h2>
      </div>

   <div className="space-y-4.5">
     
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {socialLinks
          .filter((link) => link.name !== "Email")
          .map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 h-8.5 sm:h-10 rounded-[0.55rem] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[13px] sm:text-sm text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-sm dark:hover:shadow-neutral-900/50 transition-all active:scale-95"
            >
              {typeof link.icon === "string" ? (
                <span className="text-sm sm:text-base">{link.icon}</span>
              ) : (
                <span className="shrink-0 scale-90 sm:scale-100">
                  {link.icon}
                </span>
              )}
              <span className="font-medium text-xs sm:text-sm">{link.name}</span>
            </a>
          ))}
      </div>

     
      <div className="space-y-2 text-[13px] sm:text-sm text-neutral-900 dark:text-neutral-300 leading-relaxed">
        <p>
          You can reach me anytime at{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#db775b] font-medium underline underline-offset-2 decoration-[#db775b] hover:decoration-[#db775b] transition-colors"
          >
            {personalInfo.email}
          </a>
        </p>
      </div>
    </div>
    </section>
  );
}
