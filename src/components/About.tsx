
import { User, MapPin, GraduationCap, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-kunalblack to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-heading">About</span> Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`col-span-1 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-kunalpink to-kunalblue rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-2xl flex flex-col items-center text-center h-full">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.3
                    }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-kunalpink via-purple-500 to-kunalblue opacity-75 blur-sm animate-spin-slow"></div>
                    <img
                      src="/lovable-uploads/969f0c63-7b81-463f-a603-0dcc3ea0de04.png"
                      alt="Kunal Vishwakarma"
                      className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-kunalblue relative z-10"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Kunal Vishwakarma</h3>
                    <p className="text-gray-400 mb-4">BTech CSE (AI) Student</p>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin size={16} className="mr-2 text-kunalpink" />
                      <span>Varanasi, Uttar Pradesh, 221103</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <GraduationCap size={16} className="mr-2 text-kunalpink" />
                      <span>Invertis University, Bareilly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`col-span-2 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/80 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-semibold mb-6 gradient-heading">
                  Who I Am
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a first-year BTech CSE student specializing in Artificial Intelligence. As an aspiring MERN stack developer, I'm focused on building modern, responsive websites with clean UI/UX.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Currently sharpening my skills in the MERN stack and Data Structures using C++, I'm constantly learning and growing as a developer. With a love for learning and a dream to work at FAANG, I'm on a mission to turn ideas into impactful projects.
                </p>

                <h3 className="text-2xl font-semibold mb-6 gradient-heading mt-8">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-kunalpink/20 p-3 rounded-lg">
                      <Code size={24} className="text-kunalpink" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Web Development</h4>
                      <p className="text-gray-400">
                        Creating responsive websites with modern technologies and clean UI/UX principles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 bg-kunalblue/20 p-3 rounded-lg">
                      <User size={24} className="text-kunalblue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Problem Solving</h4>
                      <p className="text-gray-400">
                        Developing efficient solutions using data structures and algorithms in C++.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
