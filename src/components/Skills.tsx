
import { useEffect, useRef, useState } from "react";
import {
  Code,
  LayoutGrid,
  FileCode,
  Workflow,
  CheckCircle,
  MonitorSmartphone,
  Server,
  Database,
  Laptop,
  Github,
  TerminalSquare,
  Bot,
  SplineIcon,
  LucideSpline,
  LucideActivity,
  SnowflakeIcon,
  VibrateIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";
import { Sankey } from "recharts";

// Skill type definition
interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  description: string;
  category: "Development" | "ML/AI" | "VLSI" | "tool";
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Define all skills with categories and descriptions
  const skills: Skill[] = [
    // Development Skills
    {
      name: "HTML5",
      icon: <Code size={28} />,
      color: "text-orange-500",
      description: "Semantic markup and structure for web pages",
      category: "Development",
    },
    {
      name: "Tailwind CSS",
      icon: <LayoutGrid size={28} />,
      color: "text-blue-500",
      description: "Styling and responsive design",
      category: "Development",
    },
     {
      name: "Vite",
      icon: <VibrateIcon size={28} />,
      color: "text-teal-400",
      description: "3D CAD Design",
      category: "tool",
    },
    {
      name: "JavaScript",
      icon: <FileCode size={28} />,
      color: "text-yellow-400",
      description: "Dynamic client-side scripting",
      category: "Development",
    },
    {
      name: "React.js",
      icon: <Workflow size={28} />,
      color: "text-sky-500",
      description: "Component-based UI library",
      category: "Development",
    },
    {
      name: "Next.js",
      icon: <CheckCircle size={28} />,
      color: "text-white",
      description: "React framework with SSR and more",
      category: "Development",
    },
    
    // ML/AI Skills
    {
      name: "Express.js",
      icon: <Server size={28} />,
      color: "text-gray-300",
      description: "Node.js web application framework",
      category: "ML/AI",
    },
    {
      name: "MongoDB",
      icon: <Database size={28} />,
      color: "text-green-500",
      description: "NoSQL document database",
      category: "ML/AI",
    },
    
    // Programming VLSIs
    {
      name: "Verilog",
      icon: <FileCode size={28} />,
      color: "text-blue-400",
      description: "Procedural programming VLSI",
      category: "VLSI",
    },
    {
      name: "Multisim",
      icon: <FileCode size={28} />,
      color: "text-blue-600",
      description: "Object-oriented programming VLSI",
      category: "VLSI",
    },
     {
      name: "python",
      icon: <SnowflakeIcon size={28} />,
      color: "text-teal-400",
      description: "3D CAD Design",
      category: "tool",
    },
    
    // Tools
    {
      name: "VS Code",
      icon: <Laptop size={28} />,
      color: "text-blue-500",
      description: "Code editor with powerful extensions",
      category: "tool",
    },
    {
      name: "GitHub",
      icon: <Github size={28} />,
      color: "text-gray-300",
      description: "Version control & collaboration",
      category: "tool",
    },
    {
      name: "ChatGPT",
      icon: <Bot size={28} />,
      color: "text-teal-400",
      description: "AI assistant for programming tasks",
      category: "tool",
    },
    {
      name: "Solidworks",
      icon: <SplineIcon size={28} />,
      color: "text-teal-400",
      description: "3D CAD Design",
      category: "tool",
    },
     {
      name: "Xilinx Vivado",
      icon: <LucideActivity size={28} />,
      color: "text-teal-400",
      description: "Synthesis and Simulation",
      category: "tool",
    },
  ];

  // Filter skills based on active category
  const filteredSkills = activeFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  // Observer for scroll animations
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

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Skills" },
    { id: "Development", label: "Development" },
    { id: "ML/AI", label: "ML/AI" },
    { id: "VLSI", label: "VLSIs" },
    { id: "tool", label: "Tools" }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-ssnblack to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="gradient-heading">Skills</span>
          </h2>
          
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Technical proficiencies and tools I use to build modern web applications
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300",
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-ssnpink to-ssnblue text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="flex flex-col items-center justify-center h-32 bg-gray-900/80 border border-gray-800 hover:border-ssnblue rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-ssnblue/10 hover:-translate-y-1 cursor-pointer">
                      <div className={cn("mb-3", skill.color)}>{skill.icon}</div>
                      <h3 className="text-sm font-medium text-gray-200">{skill.name}</h3>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-gray-900/95 border border-gray-800 text-white">
                    <div className="flex justify-between space-x-4">
                      <div className={cn("mt-1", skill.color)}>{skill.icon}</div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                        <p className="text-sm text-gray-300">{skill.description}</p>
                        <div className="flex items-center pt-2">
                          <span className="bg-gray-800 text-xs px-2 py-1 rounded-full text-gray-300">
                            {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
