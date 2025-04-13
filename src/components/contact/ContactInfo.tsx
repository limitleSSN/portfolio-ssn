
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-kunalpink" size={20} />,
      label: "Email",
      value: "kunalvishwakarma208@gmail.com",
      link: "mailto:kunalvishwakarma208@gmail.com",
    },
    {
      icon: <Phone className="text-kunalblue" size={20} />,
      label: "Phone",
      value: "+91 7985177849",
      link: "tel:+917985177849",
    },
    {
      icon: <Github className="text-kunalpink" size={20} />,
      label: "GitHub",
      value: "github.com/dashboard",
      link: "https://github.com/dashboard",
    },
    {
      icon: <Linkedin className="text-kunalblue" size={20} />,
      label: "LinkedIn",
      value: "Kunal Vishwakarma",
      link: "https://www.linkedin.com/in/kunal-vishwakarma-975b26326",
    },
    {
      icon: <Instagram className="text-kunalpink" size={20} />,
      label: "Instagram",
      value: "kunal_vish_08",
      link: "https://www.instagram.com/kunal_vish_08?igsh=MXZ1eHF0Zjg4bGMwMA==",
    },
  ];

  return (
    <motion.div 
      className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 h-full relative overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Decorative glowing circles */}
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-kunalpink/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-kunalblue/20 rounded-full blur-xl"></div>
      
      <h3 className="text-2xl font-semibold mb-8 gradient-heading relative z-10">
        Contact Information
        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-kunalpink to-kunalblue"></span>
      </h3>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ContactCard 
              icon={item.icon}
              label={item.label}
              value={item.value}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>

      <SocialLinks />
    </motion.div>
  );
};

export default ContactInfo;
