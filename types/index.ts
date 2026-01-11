export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  tagline: string;
  description: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  highlights: string[];
}

export interface Project {
  id: number;
  name: string;
  status: 'Active' | 'Production' | 'Sold';
  description: string;
  tech: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string | React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface About {
  summary: string;
  keyPoints: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  highlights?: string[];
}