
import { useEffect, useRef, useState } from "react";
import { Linkedin, Users, Award, BookOpen, Instagram } from "lucide-react";

const Social = () => {
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

  const linkedinStats = [
    {
      title: "Connections",
      value: "1500+",
      icon: <Users size={24} className="text-kunalpink" />,
    },
    {
      title: "Followers",
      value: "1500+",
      icon: <Users size={24} className="text-kunalblue" />,
    },
    {
      title: "Certifications",
      value: "10+",
      icon: <Award size={24} className="text-kunalpink" />,
    },
    {
      title: "Skills Endorsed",
      value: "10+",
      icon: <BookOpen size={24} className="text-kunalblue" />,
    },
  ];

  return (
    <section
      id="social"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-kunalblack to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="gradient-heading">Social Media</span> Presence
          </h2>

          <div className="grid grid-cols-1 gap-10">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 hover:border-kunalpink transition-all duration-300">
                <div className="flex items-center mb-8">
                  <Linkedin size={32} className="text-[#0A66C2] mr-4" />
                  <h3 className="text-2xl font-semibold gradient-heading">
                    LinkedIn Presence
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {linkedinStats.map((stat, index) => (
                    <div
                      key={stat.title}
                      className={`bg-gray-800 rounded-lg p-6 text-center transition-all hover:scale-105 hover:shadow-lg duration-300 hover:shadow-kunalpink/20 ${
                        isVisible ? "animate-fade-in" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="flex justify-center mb-4">
                        {stat.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-1 text-white">
                        {stat.value}
                      </h4>
                      <p className="text-gray-400">{stat.title}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/kunal-vishwakarma-975b26326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full bg-[#0A66C2] text-white font-medium transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(10,102,194,0.5)] inline-flex items-center"
                  >
                    <Linkedin size={20} className="mr-2" />
                    Connect on LinkedIn
                  </a>
                  
                  <a
                    href="https://www.instagram.com/kunal_vish_08?igsh=MXZ1eHF0Zjg4bGMwMA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white font-medium transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(225,48,108,0.5)] inline-flex items-center"
                  >
                    <Instagram size={20} className="mr-2" />
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
