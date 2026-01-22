import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
  InstagramLogo,
  XLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/vaibhavmali-git",
    icon: <GithubLogo size={18} weight="regular" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vaibhavmali-li/",
    icon: <LinkedinLogo size={18} weight="regular" />,
  },
  {
    name: "Email",
    url: "mailto:vaibhavmali.dev@gmail.com",
    icon: <Envelope size={18} weight="regular" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vaibhavmali.ig/",
    icon: <InstagramLogo size={18} weight="regular" />,
  },
  {
    name: "X/Twitter",
    url: "https://twitter.com/vaibhavmali_01",
    icon: <XLogo size={18} weight="regular" />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/917618795110",
    icon: <WhatsappLogo size={18} weight="regular" />,
  },
];