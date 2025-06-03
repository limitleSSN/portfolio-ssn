
import { BookHeart, Heart, HeartOff, LucideMove3D } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900/80 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-xl font-bold gradient-heading">
               SSN<span className="text-white">.</span>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
             
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
            
            <div className="flex items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Made with 
                <BookHeart size={14} className="inline-block mx-1 text-ssnpink" />
                 by Soumya Sourav
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
