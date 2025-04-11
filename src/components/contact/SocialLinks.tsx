
import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-6 gradient-heading">
        Follow Me
      </h3>
      <div className="flex space-x-4">
        <a
          href="https://github.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="GitHub"
        >
          <Github className="text-white" size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/kunal-vishwakarma-975b26326"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A66C2] hover:bg-[#0A66C2]/80 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin className="text-white" size={20} />
        </a>
        <a
          href="https://www.instagram.com/kunal_vish_08?igsh=MXZ1eHF0Zjg4bGMwMA=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="text-white" size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
