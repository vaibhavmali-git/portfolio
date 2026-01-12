import { Github, Linkedin, Phone, MessageCircle } from 'lucide-react';
import { SocialLink } from '@/types'; 

export const socialLinks: SocialLink[] = [
  
  { 
    name: "GitHub", 
    url: "https://github.com/vaibhavmali-git", 
    icon: <Github className="w-4 h-4" /> 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/vaibhavmali-li/", 
    icon: <Linkedin className="w-4 h-4" /> 
  },
  { 
    name: "X/Twitter", 
    url: "https://twitter.com/vaibhavmali_01", 
    icon: "𝕏" 
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917620795110",
    icon: <MessageCircle className="w-4 h-4" />
  },
];