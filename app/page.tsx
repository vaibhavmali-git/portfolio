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
    <div className="min-h-screen bg-[#faf9f5] dark:bg-[#1f1f1f] transition-colors duration-300">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-14 space-y-10">
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

        <Education />
        <Divider />

        <Contacts />

        <Contact />
      </main>


      <Footer />
    </div>
  );
}