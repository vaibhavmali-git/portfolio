import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    name: "InvoAIce",
    status: "Active",
    description: "AI-driven invoice management platform with automated insights and PDF generation.",
    tech: "MERN, Tailwind CSS, Google Gemini AI",
    githubUrl: "https://github.com/yourusername/invoaice",
    liveUrl: "https://invoaice.demo.com"
  },
  {
    id: 2,
    name: "FinanceFlow",
    status: "Active",
    description: "Personal finance tracker with Firebase authentication and real-time transaction sync.",
    tech: "React, Firebase, Ant Design",
    githubUrl: "https://github.com/yourusername/financeflow",
    liveUrl: "https://financeflow.demo.com"
  },
  {
    id: 3,
    name: "DFinance Integration",
    status: "Production",
    description: "Web3 platform integration with Rust canisters on Internet Computer.",
    tech: "React, TypeScript, IC Agent",
    githubUrl: "#",
    liveUrl: "#"
  }
];