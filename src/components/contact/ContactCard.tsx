
import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  link: string;
}

const ContactCard = ({ icon, label, value, link }: ContactCardProps) => {
  return (
    <div className="flex items-start transition-all animate-fade-in">
      <div className="mr-4 bg-gray-800 p-3 rounded-lg">{icon}</div>
      <div>
        <h4 className="text-gray-400 mb-1">{label}</h4>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-kunalpink transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
