import { Github, Linkedin, Phone, MessageCircle } from 'lucide-react';
// If you are using a type file, import it here, otherwise you can remove the type annotation
import { SocialLink } from '@/types'; 

export const socialLinks: SocialLink[] = [
  { 
    name: "X/Twitter", 
    url: "https://twitter.com/vaibhavmali_01", 
    icon: "𝕏" 
  },
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
    name: "WhatsApp",
    // Uses the wa.me format for direct messaging
    url: "https://wa.me/917620795110",
    icon: <MessageCircle className="w-4 h-4" />
  },
  {
    name: "Call",
    // Uses the tel: protocol to trigger the phone dialer
    url: "tel:+917620795110",
    icon: <Phone className="w-4 h-4" />
  }
];