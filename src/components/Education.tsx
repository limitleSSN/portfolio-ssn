
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, School, Library, Code } from "lucide-react";

const EducationTimeline = () => {
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

  const education = [
    {
      id: 1,
      years: "2022 – Present",
      degree: "BTech in Electrical Engineering",
      institution: "National Institute of Technology, Sector 1, Rourkel",
      icon: <GraduationCap size={24} className="text-ssnpink" />,
      details: "Currently pursuing my Bachelor's degree in Electrical Engineering along with extra-curricular involvements ",
    },
    {
      id: 2,
      years: "May 2024 – July 2024",
      degree: "Summer Intern",
      institution: "Ministry of Railways",
      icon: <Code size={24} className="text-ssnblue" />,
      details: "Worked onsite at metro and railway stations, gaining hands-on experience with train traffic monitoring systems, signaling systems, and overall traffic management infrastructure within Indian Railways.",
    },
    {
      id: 3,
      years: "2021",
      degree: "Intermediate",
      institution: "DAV Chandrasekharpur, Bhubaneswar, Odisha",
      percentage: "96.8%",
      board: "CBSE",
      icon: <School size={24} className="text-ssnblue" />,
      details: "Completed my intermediate education with a focus on PCMB.",
    },
    {
      id: 4,
      years: "2019",
      degree: "High School",
      institution: "Kendriya Vidyalaya No 4, Niladrivihar, Bhubaneswar",
      percentage: "95.2%",
      board: "CBSE",
      icon: <Library size={24} className="text-ssnpink" />,
      details: "Completed my high school education with excellent academic performance.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-ssnblack"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="gradient-heading">Journey</span> So Far
          </h2>

          <div className="relative">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`timeline-item transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gray-900/80 border border-gray-800 rounded-lg p-6 ml-4 hover:border-ssnpink transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 bg-gray-800 p-3 rounded-lg">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold gradient-heading">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="space-y-2 ml-16">
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2 text-ssnblue" />
                      <span>{edu.years}</span>
                    </div>
                    {edu.board && (
                      <p className="text-gray-400">
                        <span className="text-ssnblue">Board:</span> {edu.board}
                      </p>
                    )}
                    {edu.percentage && (
                      <p className="text-gray-400">
                        <span className="text-ssnblue">Percentage:</span>{" "}
                        {edu.percentage}
                      </p>
                    )}
                    <p className="text-gray-300 mt-2">{edu.details}</p>
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

export default EducationTimeline;
