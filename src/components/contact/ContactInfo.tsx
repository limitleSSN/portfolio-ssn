
import { Mail, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-ssnpink" size={20} />,
      label: "Email",
      value: "soumyasouravssn@gmail.com",
      link: "mailto:soumyasouravssn@gmail.com",
    },
    {
      icon: <Phone className="text-ssnblue" size={20} />,
      label: "Phone",
      value: "+91 7077949669",
      link: "tel:+917077949669",
    },
    {
      icon: <Github className="text-ssnpink" size={20} />,
      label: "GitHub",
      value: "https://github.com/limitleSSN",
      link: "https://github.com/limitleSSN",
    },
    {
      icon: <Linkedin className="text-ssnblue" size={20} />,
      label: "LinkedIn",
      value: "Soumya Sourav",
      link: "https://www.linkedin.com/in/soumya-sourav-80abb8252",
    },
    {
      icon: <Instagram className="text-ssnpink" size={20} />,
      label: "Instagram",
      value: "ssn12_11",
      link: "https://www.instagram.com/ssn12_11?igsh=MTJrNjdtbjZwYWcxZA==",
    },
    {
      icon: <Twitter className="text-ssnblue" size={20} />,
      label: "Twitter",
      value: "Socially_SSN",
      link: "https://x.com/Socially_SSN?t=PHbhp7KIjOyb_Hxmv3a0Vw&s=09",
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
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-ssnpink/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-ssnblue/20 rounded-full blur-xl"></div>
      
      <h3 className="text-2xl font-semibold mb-8 gradient-heading relative z-10">
        Contact Information
        <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-ssnpink to-ssnblue"></span>
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
    </motion.div>
  );
};

export default ContactInfo;
