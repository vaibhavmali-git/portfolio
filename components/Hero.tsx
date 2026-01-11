import React from 'react';
import { MapPin, Calendar, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { Button } from './ui/Button';
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="space-y-6 scroll-mt-20">

      <div className="w-16 h-16 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
        <Image
          src="https://res.cloudinary.com/dbkkmdery/image/upload/v1768062121/IMG_20260110_214814_axjlpe.jpg"
          alt="Vaibhav profile photo"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>


      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          Hey, I'm <span className="text-[#db775b] dark:text-[#db775b] underline">{personalInfo.name}</span>!
        </h1>

        <div className="space-y-2 text-neutral-700 dark:text-neutral-300 font-geistMono">
          <p className="flex items-start gap-2">
            <span>{personalInfo.title} based in {personalInfo.location}</span>
          </p>
          <p>
            {personalInfo.tagline}
          </p>
          <p>
            {personalInfo.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="primary" icon={<Calendar className="w-4 h-4" />} href="https://cal.com/yourusername">
            Book a call
          </Button>
          <Button variant="secondary" icon={<Mail className="w-4 h-4" />} href={`mailto:${personalInfo.email}`}>
            Send an email
          </Button>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">{personalInfo.availability}</span>
        </div>
      </div>
    </section>
  );
}