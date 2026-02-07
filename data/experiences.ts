import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "QuadB Technologies",
    location: "Remote",
    period: "Nov 2024 - Present",
    type: "Full-time",
    highlights: [
      "Worked across frontend and backend on live applications including DFinance (Web3), Clans (mobile + backend), and BlockseBlock (LMS), contributing to feature development, integrations, and platform stability.",
      "Led frontend development for the Clans mobile app, building campaign flows, wallet onboarding, leaderboards, and profile screens in React Native + TypeScript, and resolved a critical Twitter/X OAuth issue by implementing server-side token refresh.",
      "Built and maintained React and React Native (Expo) interfaces using Redux Toolkit, focusing on reliable async flows, loading/error states, and clean UX.",
      "Improved backend performance by adding Redis caching and request rate limiting, reducing redundant database calls by roughly 3–4×.",
      "Integrated a React frontend with Rust canisters on the Internet Computer for DFinance, handling async blockchain calls, optimistic UI updates, and close coordination with backend engineers to align APIs."
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
  "Worked on a DeFi web platform, building and refining user-facing features using React, Redux Toolkit, Tailwind CSS, and SCSS.",
  "Implemented and maintained a global dark mode using Redux Toolkit, improving accessibility and visual consistency across the application while refactoring components for better responsiveness.",
  "Participated in code reviews and team discussions, contributing UI fixes and learning team standards that reduced recurring interface issues."
]

  }
];