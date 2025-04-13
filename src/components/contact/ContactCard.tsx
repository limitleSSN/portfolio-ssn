
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  link: string;
}

const ContactCard = ({ icon, label, value, link }: ContactCardProps) => {
  return (
    <motion.div 
      className="flex items-start transition-all animate-fade-in group"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className="mr-4 bg-gray-800 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-kunalpink/10"
        whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="text-gray-400 mb-1">{label}</h4>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-kunalpink transition-colors relative inline-block"
          whileHover={{ scale: 1.03 }}
        >
          {value}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kunalpink to-kunalblue group-hover:w-full transition-all duration-300"></span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactCard;
