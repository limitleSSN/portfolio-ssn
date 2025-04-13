
import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Github className="text-white" size={20} />,
      url: "https://github.com/dashboard",
      label: "GitHub",
      bgClass: "bg-gray-800 hover:bg-gray-700",
      hoverColor: "#f54298"
    },
    {
      icon: <Linkedin className="text-white" size={20} />,
      url: "https://www.linkedin.com/in/kunal-vishwakarma-975b26326",
      label: "LinkedIn",
      bgClass: "bg-[#0A66C2] hover:bg-[#0A66C2]/80",
      hoverColor: "#0A66C2"
    },
    {
      icon: <Instagram className="text-white" size={20} />,
      url: "https://www.instagram.com/kunal_vish_08?igsh=MXZ1eHF0Zjg4bGMwMA==",
      label: "Instagram",
      bgClass: "bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80]",
      hoverColor: "#E1306C"
    }
  ];

  return (
    <motion.div 
      className="mt-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-6 gradient-heading relative">
        Follow Me
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-kunalpink to-kunalblue"></span>
      </h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.bgClass} w-12 h-12 rounded-full flex items-center justify-center transition-all`}
            whileHover={{ 
              scale: 1.2,
              boxShadow: `0 0 20px ${social.hoverColor}40`
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7 + (index * 0.1),
              duration: 0.3,
              type: "spring",
              stiffness: 200
            }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
