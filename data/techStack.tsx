import { TechStackItem } from '@/types';

const TechIcon = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-4 h-4 object-contain ${className}`} 
    loading="lazy"
  />
);

export const techStack: TechStackItem[] = [
  // --- Core Frontend & Languages ---
  { 
    name: "React", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> 
  },
  { 
    name: "Next.js", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="dark:invert" /> 
  },
  { 
    name: "TypeScript", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" /> 
  },

  { 
    name: "Tailwind", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" /> 
  },
  
  // --- Backend & API ---
  { 
    name: "Node.js", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /> 
  },
  { 
    name: "Express.js", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="dark:invert" /> 
  },
  
  // --- Databases ---
  { 
    name: "PostgreSQL", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /> 
  },
  { 
    name: "MongoDB", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /> 
  },
  { 
    name: "Redis", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" /> 
  },
  
  // --- DevOps & Tools ---
  { 
    name: "Docker", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" /> 
  },
  { 
    name: "Git", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> 
  },
  
  // --- State & BaaS ---
  { 
    name: "Redux", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" /> 
  },
  { 
    name: "Firebase", 
    icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" /> 
  },
  
  // --- Build & Foundations ---
  // { 
  //   name: "Vite", 
  //   icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" /> 
  // },
  // { 
  //   name: "HTML5", 
  //   icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" /> 
  // },
  // { 
  //   name: "CSS3", 
  //   icon: <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" /> 
  // }
];