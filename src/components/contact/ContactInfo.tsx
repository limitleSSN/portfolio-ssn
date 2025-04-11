
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";

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
    <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 h-full">
      <h3 className="text-2xl font-semibold mb-8 gradient-heading">
        Contact Information
      </h3>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <ContactCard 
            key={item.label}
            icon={item.icon}
            label={item.label}
            value={item.value}
            link={item.link}
          />
        ))}
      </div>

      <SocialLinks />
    </div>
  );
};

export default ContactInfo;
