
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

  // Typing animation implementation
  const words = ["MERN stack developer.", "problem solver.", "tech enthusiast."];
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
        setTypingSpeed(50); // faster when deleting
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        setTypingSpeed(150); // slower when typing
      }

      if (!shouldDelete && currentText === currentWord) {
        // Pause at the end of word
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

  // Floating elements animation
  const floatingElements = [
    { id: 1, icon: "⚛️", delay: "0s", size: "text-2xl", position: "top-20 left-[15%]" },
    { id: 2, icon: "🔥", delay: "1.5s", size: "text-3xl", position: "top-40 right-[20%]" },
    { id: 3, icon: "💻", delay: "2.5s", size: "text-xl", position: "bottom-32 left-[25%]" },
    { id: 4, icon: "🚀", delay: "3.5s", size: "text-2xl", position: "bottom-24 right-[25%]" },
    { id: 5, icon: "⚙️", delay: "4s", size: "text-xl", position: "top-1/2 left-[10%]" },
    { id: 6, icon: "📱", delay: "1s", size: "text-2xl", position: "top-1/3 right-[10%]" },
  ];

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-kunalblack/90" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-kunalpink/20 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-kunalblue/20 rounded-full filter blur-3xl animate-pulse-slow" />
          
          {/* Additional animated gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-cyan-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Floating elements */}
        {floatingElements.map((element) => (
          <div 
            key={element.id}
            className={`absolute ${element.position} ${element.size} opacity-0 animate-float`}
            style={{ 
              animationDelay: element.delay,
              animation: "float 6s ease-in-out infinite, fade-in 1s ease-out forwards"
            }}
          >
            {element.icon}
          </div>
        ))}

        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm{" "}
              <span className="gradient-heading kunalpink-glow relative inline-block">
                Kunal Vishwakarma
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-kunalpink to-kunalblue transform scale-x-0 transition-transform duration-700 origin-left" 
                  style={{ animation: "scale-in-line 1.5s forwards 1s" }}></span>
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 h-12">
              <span>A passionate </span>
              <span className="gradient-heading" ref={typingRef}>{currentText}</span>
              <span className="inline-block w-1 h-8 ml-1 bg-kunalpink animate-pulse"></span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-left opacity-0" style={{ animationDelay: "300ms" }}>
              Passionate about building modern, responsive websites with clean UI/UX.
              I'm currently sharpening my skills in the MERN stack and Data Structures using C++.
              With a love for learning and a dream to work at FAANG, I'm on a mission to turn ideas into impactful projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-right opacity-0" style={{ animationDelay: "600ms" }}>
              <a
                href="#about"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-kunalpink to-kunalblue text-white font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(245,66,152,0.5)] group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-kunalpink to-kunalblue opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <User size={18} />
                  About Me
                </span>
              </a>
              <a
                href="#skills"
                className="px-8 py-3 rounded-full bg-transparent border border-kunalblue text-white font-medium transition-all hover:bg-kunalblue/10 hover:border-kunalpink group relative overflow-hidden"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <Code size={18} />
                  My Skills
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-kunalblue to-kunalpink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white relative group">
          <ArrowDown size={24} className="group-hover:animate-pulse" />
          <span className="absolute w-8 h-8 bg-kunalpink/20 rounded-full -inset-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
