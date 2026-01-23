import { Project } from "@/types";

export const shippedProjects: Project[] = [
  {
    id: 1,
    name: "DFinance",
    description:
      "A decentralized lending and borrowing platform built on the Internet Computer Protocol (ICP). I owned the frontend development, handled Web3 integrations, token flows, and built the DEX UI to display liquidity and farming data in real time.",
    tech: "React, Internet Computer (ICP), Rust, Web3.js, Tailwind CSS",
    liveUrl: "https://bn2g3-lqaaa-aaaaj-azykq-cai.icp0.io",
    thumbnail: "/images/projects/dfinance.png",
  },

  {
    id: 2,
    name: "BlockseBlock",
    description:
      "A Web3 hackathon platform used by developers worldwide. I contributed to the frontend by building event management flows, project submissions, and the judging dashboard.",
    tech: "React, TypeScript, Node.js, MongoDB",
    liveUrl: "https://learn.blockseblock.com/",
    thumbnail: "/images/projects/blockseblock.png",
  },
  {
    id: 3,
    name: "Clans App",
    description:
      "A mobile-first community app for campaign management and user onboarding. I worked mainly on the React Native frontend and also helped on the backend to fix OAuth token refresh issues and improve leaderboard API performance.",
    tech: "React Native, Expo, TypeScript, Node.js, PostgreSQL, Redux Toolkit",
    thumbnail:
      "",
  },
];

export const personalProjects: Project[] = [
  {
    id: 4,
    name: "Invoaice",
    description:
      "AI-powered full-stack invoice management platform with secure authentication, automated invoice creation, PDF generation, and intelligent summaries using Google Gemini AI. Built modular REST APIs and end-to-end flows for reliable invoice processing.",
    tech: "MERN Stack, Tailwind CSS, Google Gemini AI",
    githubUrl: "https://github.com/vaibhavmali-git/Invoaice",
    liveUrl: "https://invoaice.vercel.app/",
    thumbnail: "/images/projects/invoaice.png",
  },
  {
    id: 5,
    name: "CryptoInsight",
    description:
      "Real-time crypto tracker with interactive components and market analytics dashboard. Integrated CoinGecko with caching logic and visualized data using Chart.js.",
    tech: "React, Redux, Material UI, Framer Motion, Chart.js",
    githubUrl: "https://github.com/vaibhavmali-git/CryptoInsight",
    liveUrl: "https://crypto-insight-vaibhavmali.netlify.app/",
    thumbnail: "/images/projects/crypto-insight.png",
  },
  {
    id: 6,
    name: "FinanceFlow",
    description:
      "Personal finance tracker focused on usability and secure authentication. Implemented Firebase Auth with email and Google sign-in, real-time transaction sync using Firestore, and optimistic UI updates with advanced filtering and categorization.",
    tech: "React, Firebase, Ant Design, React Toastify",
    githubUrl: "https://github.com/vaibhavmali-git/finance-flow",
    liveUrl: "https://financeflow-vaibhavmali.netlify.app/",
    thumbnail: "/images/projects/finance-flow.png",
  },

  {
    id: 7,
    name: "Podcast App",
    description:
      "A podcast platform with secure authentication, seamless podcast creation, and audio streaming. Features component-based architecture and efficient Redux state management.",
    tech: "React, Firebase, Redux Toolkit",
    githubUrl: "https://github.com/vaibhavmali-git/podcasts-react-app",
    liveUrl: "https://podcast-react-vaibhav.netlify.app/",
    thumbnail: "/images/projects/podcast-app.png",
  },
];