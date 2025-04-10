
import { useEffect, useRef, useState } from "react";
import { 
  Code, Database, Server, Layout, 
  Braces, Network, FolderTree, Terminal 
} from "lucide-react";

const Skills = () => {
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

  const programmingSkills = [
    { name: "C Programming", level: 80, icon: <Terminal size={20} /> },
    { name: "HTML/CSS", level: 30, icon: <Layout size={20} /> },
    { name: "JavaScript", level: 25, icon: <Braces size={20} /> },
    { name: "React", level: 20, icon: <Code size={20} /> },
  ];

  const webSkills = [
    { name: "MongoDB", level: 20, icon: <Database size={20} /> },
    { name: "Express.js", level: 20, icon: <Server size={20} /> },
    { name: "Node.js", level: 20, icon: <Network size={20} /> },
    { name: "Data Structures", level: 30, icon: <FolderTree size={20} /> },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-kunalblack to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="gradient-heading">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 hover:border-kunalpink transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-8 gradient-heading">
                  Programming Languages
                </h3>

                <div className="space-y-8">
                  {programmingSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="mr-3 text-kunalpink">{skill.icon}</div>
                          <h4 className="text-gray-300">{skill.name}</h4>
                        </div>
                        <span className="text-kunalblue">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transition: `width 1s ease-in-out ${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 hover:border-kunalblue transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-8 gradient-heading">
                  Web Development
                </h3>

                <div className="space-y-8">
                  {webSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="mr-3 text-kunalblue">{skill.icon}</div>
                          <h4 className="text-gray-300">{skill.name}</h4>
                        </div>
                        <span className="text-kunalpink">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transition: `width 1s ease-in-out ${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
