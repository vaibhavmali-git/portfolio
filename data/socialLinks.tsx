import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/vaibhavmali-git",
    icon: <Github className="w-4 h-4" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vaibhavmali-li/",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    name: "Email",
    url: "mailto:vaibhavmali.dev@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vaibhavmali.ig/",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    name: "X/Twitter",
    url: "https://twitter.com/vaibhavmali_01",
    icon: "𝕏",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917620795110",
    icon: <MessageCircle className="w-4 h-4" />,
  },
];
