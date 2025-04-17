
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, Code, X } from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SocialItem = {
  icon: React.ReactNode;
  name: string;
  url: string;
  color: string;
};

type TechItem = {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
};

const FloatingSocials = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const technologies: TechItem[] = [
    {
      name: "MongoDB",
      icon: <span className="text-[#4DB33D] font-bold">M</span>,
      description: "NoSQL database for modern applications",
      color: "border-[#4DB33D] border-2",
    },
    {
      name: "Express",
      icon: <span className="text-gray-400 font-bold">E</span>,
      description: "Backend web application framework for Node.js",
      color: "border-gray-400 border-2",
    },
    {
      name: "React",
      icon: <span className="text-[#61DAFB] font-bold">R</span>,
      description: "JavaScript library for building user interfaces",
      color: "border-[#61DAFB] border-2",
    },
    {
      name: "Node.js",
      icon: <span className="text-[#68A063] font-bold">N</span>,
      description: "JavaScript runtime for server-side programming",
      color: "border-[#68A063] border-2",
    },
  ];

  return (
    <div className="fixed right-10 top-1/3 z-30">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Social Media Links */}
            {socials.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ delay: index * 0.1 }}
                className="mb-3"
              >
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
            
            {/* MERN Stack */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ delay: socials.length * 0.1 }}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-kunalpink to-kunalblue flex items-center justify-center text-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Code size={22} />
                  </motion.button>
                </PopoverTrigger>
                <PopoverContent side="left" className="w-80 bg-kunalblack border border-kunalblue text-white p-0 overflow-hidden">
                  <div className="p-4 border-b border-gray-700">
                    <h3 className="font-bold text-lg gradient-heading">MERN Stack</h3>
                    <p className="text-sm text-gray-300">Technologies I work with</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className={`p-3 rounded-lg ${tech.color} bg-opacity-10 hover:bg-opacity-20 transition-all`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${tech.color.replace('border-', 'bg-')} bg-opacity-20 flex items-center justify-center`}>
                            {tech.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{tech.name}</h4>
                            <p className="text-xs text-gray-400">{tech.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full ${
          isOpen ? "bg-gray-700" : "bg-gradient-to-r from-kunalpink to-kunalblue"
        } flex items-center justify-center text-white shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
      >
        {isOpen ? <X size={24} /> : <Code size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingSocials;
