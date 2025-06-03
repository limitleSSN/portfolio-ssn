import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Projects = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 3,
      title: "Dual Axis Solar Tracker",
      description:
        "Developed a dual-axis solar tracker using the 8051 microcontroller to optimize solar panel positioning for maximum sunlight exposure",
      tags: ["8051 microcontroller", "IoT", "Solidworks", "3d printing"],
      images: [
        "lovable-uploads/WhatsApp Image 2025-01-31 at 22.23.09_8dd2afbd.jpg",
      ],
      githubLink: "https://github.com/limitleSSN/dual-axis-solar-tracker",
      liveLink: "#",
      features: [
        "3d printed custom design",
        "Light-sensitive switching (LDR)",
        "Precise servo control",
        "Calibrated delay",
        "Real-time data monitoring",
      ],
      technologies: [
        "8051 Microcontroller",
        "Servo motors + LDR (Light Sensor)",
        "3D printed polycarbonate design",
        "Op-amp for better sensitivity",
      ],
    },
    {
      id: 1,
      title: "Two Key Lock System",
      description:
        "Built a secure dual-password lock system requiring sequential password entry using over 30 logic gates. Utilized combinational logic and circuit design techniques to simulate reliable locking behavior",
      tags: ["Multisim"],
      image: "lovable-uploads/blackbg.png",
      liveLink: "#",
      githubLink: "https://github.com/limitleSSN/2tpassword",
    },
    {
      id: 2,
      title: "SPI Master Controller",
      description:
        "Designed and implemented an 8-bit SPI Master Controller in Verilog, deployed on a Zynq-7000 FPGA (xc7z010clg225-1L), enabling seamless interfacing with SPI-enabled devices like the ADS1258 ADC.",
      tags: ["Verilog", "Xilinx Vivado"],
      image: "lovable-uploads/blackbg.png",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const FeatureList = ({ items, title }: { items: string[]; title: string }) => (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">{title}:</h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center"
          >
            <span className="text-ssnpink mr-2">•</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-gray-900 to-ssnblack"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            My <span className="gradient-heading">Projects</span>
          </h2>

          {/* Featured Project */}
          <div
            className={`transition-all duration-700 mb-16 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 p-5 min-h-[600px] flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-3 gradient-heading">
                {projects[0].title}
              </h3>
              <p className="text-gray-300 mb-4 max-w-3xl">
                {projects[0].description}
              </p>

              <div className="flex flex-col md:flex-row gap-6 flex-grow">
                <div className="md:w-1/2">
                  <Carousel className="w-full h-64">
                    <CarouselContent>
                      {projects[0].images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="p-1">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="h-64 flex items-center justify-center overflow-hidden rounded-lg"
                            >
                              <img
                                src={image}
                                alt={`Project image ${i + 1}`}
                                className="object-contain h-full w-full rounded-lg"
                              />
                            </motion.div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {projects[0].tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2 flex flex-col justify-center">
                  <FeatureList items={projects[0].features} title="Key Features" />
                  <FeatureList items={projects[0].technologies} title="Built With" />
                </div>
              </div>

              <div className="flex space-x-4 mt-4">
                <a
                  href={projects[0].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-ssnblue hover:text-white transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex flex-col justify-between h-[600px] border border-gray-800 bg-gray-900/80 rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="flex flex-col justify-between flex-grow p-5">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-ssnpink hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-ssnblue hover:text-white transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
