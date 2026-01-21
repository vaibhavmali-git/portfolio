import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { Contacts } from '@/components/Contacts';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import Divider from "@/components/ui/Divider"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fbfaf4] dark:bg-[#1F1F1F] transition-colors duration-300">

      {/* NOISE OVERLAY */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          z-0
          bg-repeat
          opacity-[0.7]
          invert
          dark:invert-1
          contrast-125
          dark:opacity-[0.4]
        "
        style={{
          backgroundImage: "url('/images/textures/noise-light.png')",
          backgroundSize: "140px 140px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-204 mx-auto px-6 pt-20 pb-14 space-y-10">
          <Hero />
          <Divider />

          <About />
          <Divider />

          <TechStack />
          <Divider />

          <Experience />
          <Divider />

          <Projects />
          <Divider />

          <Contacts />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
