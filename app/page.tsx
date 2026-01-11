import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { TechStack } from '@/components/TechStack';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { SocialLinks } from '@/components/SocialLinks';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#1f1f1f] transition-colors duration-300">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-20 text-justify">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
        <SocialLinks />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}