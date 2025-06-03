
import { useEffect, useRef, useState } from "react";
import { ArrowDown, User, Code } from "lucide-react";

const Hero = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const words = ["Digital Designer", "App Developer", "Problem Solver"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[currentWordIndex];
      const shouldDelete = isDeleting;

      if (shouldDelete) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!shouldDelete && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (shouldDelete && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words]);

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className={`transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ssnblack/90" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-ssnpink/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-ssnblue/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "0.75s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-cyan-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1.25s" }} />
        </div>

        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              I am {" "}
              <span className="gradient-heading ssnpink-glow relative inline-block">
                Soumya Sourav
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-ssnpink to-ssnblue transform scale-x-0 transition-transform duration-700 origin-left" 
                  style={{ animation: "scale-in-line 0.75s forwards 1.25s" }}></span>
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 h-12">
              <span>A </span>
              <span className="gradient-heading" ref={typingRef}>{currentText}</span>
              <span className="inline-block w-1 h-8 ml-1 bg-ssnpink animate-pulse"></span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto animate-fade-in-left opacity-0" style={{ animationDelay: "300ms" }}>
              Digital Design--Machine Learning--App Development--Cryptography
          
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-right opacity-0" style={{ animationDelay: "600ms" }}>
              <a
                href="#about"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-ssnpink to-ssnblue text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,66,152,0.5)] group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ssnpink to-ssnblue opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <User size={18} />
                  About Me
                </span>
              </a>
              <a
                href="#skills"
                className="px-8 py-3 rounded-full bg-transparent border border-ssnblue text-white font-medium transition-all hover:bg-ssnblue/10 hover:border-ssnpink group relative overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <Code size={18} />
                  My Skills
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-ssnblue to-ssnpink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 z-10">
        <a href="#about" className="text-gray-400 hover:text-white relative group">
          <ArrowDown size={24} className="group-hover:animate-pulse" />
          <span className="absolute w-8 h-8 bg-ssnpink/20 rounded-full -inset-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
