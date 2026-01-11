import { Github, Linkedin } from 'lucide-react';
import { SocialLink } from '@/types';

export const socialLinks: SocialLink[] = [
  { 
    name: "X/Twitter", 
    url: "https://twitter.com/yourusername", 
    icon: "𝕏" 
  },
  { 
    name: "GitHub", 
    url: "https://github.com/yourusername", 
    icon: <Github className="w-4 h-4" /> 
  },
  { 
    name: "LinkedIn", 
    url: "https://linkedin.com/in/yourprofile", 
    icon: <Linkedin className="w-4 h-4" /> 
  }
];