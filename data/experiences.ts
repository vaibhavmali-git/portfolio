import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "QuadB Technologies",
    location: "Remote",
    period: "Nov 2024 – Present",
    type: "Full-time",
    highlights: [
      "Led frontend development for Clans App (React Native + TypeScript) including campaign flows, wallet onboarding, and leaderboards",
      "Integrated React frontend with Rust canisters on Internet Computer using DFX/IC agent for DFinance Web3 platform",
      "Implemented Redis caching and rate-limiting strategies that reduced redundant DB calls by 3–4×",
      "Built and maintained React and React Native (Expo) interfaces using Redux Toolkit with reliable async flows",
      "Fixed critical Twitter/X OAuth issue by implementing server-side token refresh mechanism"
    ]
  },
  {
    id: 2,
    role: "React JS Intern",
    company: "QuadB Technologies",
    location: "Remote",
    period: "May 2024 – Nov 2024",
    type: "Internship",
    highlights: [
      "Developed accessible features for DeFi platform using ReactJS, Redux Toolkit, Tailwind CSS, and SCSS",
      "Built responsive dark mode with Redux Toolkit, improving accessibility and user experience",
      "Participated in code reviews and contributed to team discussions on best practices",
      "Optimized UI components for seamless interaction and performance"
    ]
  }
];