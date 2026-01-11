import React from 'react';
import { personalInfo } from '@/data/personal';

export function Contact() {
    return (
        <section className="space-y-5 scroll-mt-20">
            <div className="space-y-2">
                <h2 className="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">GET IN TOUCH</h2>
                <div className="space-y-1 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                    <p>
                        You can reach me anytime at{' '}
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-[#db775b] dark:text-[#db775b] hover:underline"
                        >
                            {personalInfo.email}
                        </a>

                    </p>
                </div>
            </div>
        </section>
    );
}