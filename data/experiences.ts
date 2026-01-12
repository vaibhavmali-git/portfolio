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
      "Worked across frontend and backend on production applications including DFinance (Web3), Clans (mobile + backend), and BlockseBlock (LMS), contributing to UI, integrations, and platform stability.",
      "Added Redis caching and implemented request rate-limiting strategies that reduced redundant DB calls by 3–4×.",
      "Built and maintained React and React Native (Expo) interfaces using Redux Toolkit, focusing on reliable async flows, loading/error states, and clean UX.",
      "Clans App: Led frontend development of campaign flows, wallet onboarding, leaderboards, and profile screens using React Native + TypeScript, and fixed a critical Twitter/X OAuth issue by adding server-side token refresh.",
      "DFinance: Integrated React frontend with Rust canisters on the Internet Computer using DFX/IC agent, handling async blockchain calls and optimistic UI updates.",
      "Refactored UI into modular components and reusable hooks, and collaborated closely with backend engineers to align API contracts and resolve integration issues."
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
      "Worked extensively with ReactJS, Redux Toolkit, Tailwind CSS, and SCSS to build accessible features for a DeFi platform",
      "Built a responsive dark mode using Redux Toolkit, improving accessibility and overall user experience",
      "Optimized UI components to ensure seamless interaction and strong performance across devices",
      "Participated in code reviews and team discussions, contributing to best practices and reducing code issues"
    ]

  }
];