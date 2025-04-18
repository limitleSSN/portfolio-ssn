
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github } from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type SocialItem = {
  icon: React.ReactNode;
  name: string;
  url: string;
  color: string;
};

const FloatingSocials = () => {
  const socials: SocialItem[] = [
    {
      icon: <Instagram size={22} />,
      name: "Instagram",
      url: "https://www.instagram.com/kunal_vish_08?igsh=MXZ1eHF0Zjg4bGMwMA==",
      color: "bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80]",
    },
    {
      icon: <Linkedin size={22} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kunal-vishwakarma-975b26326",
      color: "bg-[#0A66C2]",
    },
    {
      icon: <Github size={22} />,
      name: "GitHub",
      url: "https://github.com/dashboard",
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="fixed right-10 top-1/3 z-30 flex flex-col space-y-3">
      {socials.map((social) => (
        <motion.div key={social.name} className="mb-3">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            </HoverCardTrigger>
            <HoverCardContent side="left" className="bg-kunalblack border border-kunalblue text-white">
              <div className="flex items-center gap-2">
                {social.icon}
                <span>{social.name}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSocials;

