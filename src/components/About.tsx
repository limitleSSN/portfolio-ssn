
import { User, MapPin, GraduationCap, Code, CircuitBoard } from "lucide-react";
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
      className="py-20 bg-gradient-to-b from-ssnblack to-gray-900"
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-ssnpink to-ssnblue rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-gray-900 p-6 rounded-2xl flex flex-col items-center text-center h-full">
                  <div className="relative">
                    <img
                      src="public/lovable-uploads/WhatsApp Image 2025-06-03 at 12.28.52_b1852ee6.png"
                      alt="Soumya Sourav"
                      className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-ssnblue relative z-10"
                    />
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isVisible ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">Soumya Sourav</h3>
                    <p className="text-gray-400 mb-4">Final Year EE Student</p>
                    <div className="flex items-center text-gray-400 mb-2">
                      <MapPin size={16} className="mr-2 text-ssnpink" />
                      <span>Bhubaneswar, Odisha</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <GraduationCap size={16} className="mr-2 text-ssnpink" />
                      <span>NITR, Rourkela</span>
                    </div>
                  </motion.div>
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
                  My Summary
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate engineering student diving deep into VLSI, app development, and ML/AI.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
I love building cool projects like I2C protocols, disaster preparedness apps, and smart AI solutions using Verilog, MATLAB, Python, and Flutter. My work blends with real-world impact, creating innovative apps and machine learning models that make a difference.                </p>

                <h3 className="text-2xl font-semibold mb-6 gradient-heading mt-8">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div 
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="mr-4 bg-ssnpink/20 p-3 rounded-lg">
                      <Code size={24} className="text-ssnpink" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Software</h4>
                      <p className="text-gray-400">
                        Programming for applications, AI agents, and little bit of web development.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    initial={{ x: 20, opacity: 0 }}
                    animate={isVisible ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="mr-4 bg-ssnblue/20 p-3 rounded-lg">
                      <CircuitBoard size={24} className="text-ssnblue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">VLSI</h4>
                      <p className="text-gray-400">
                        Develop digital circuits using Verilog, simulate them with Multisim, and implement them on FPGA boards.
                      </p>
                    </div>
                  </motion.div>
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
