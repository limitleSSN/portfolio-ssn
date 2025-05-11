
import { useState, useEffect } from "react";
import { Award, Star, Trophy, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const certificatesData = [
  {
    id: 1,
    title: "Most In-Demand Engineer",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "January 2025",
    description: "For attending the Masterclass by Ms. Lalitha Tallapragada, Associate Director, PepsiCo, on 'How to be the Most In-Demand Engineer in 2025?'",
    image: "https://cdn1.ccbp.in/misc/most-in-demand-engineer/ZYKYGHH0Z2.png",
    icon: "Trophy",
    borderColor: "border-kunalpink",
    glowColor: "rgba(245, 66, 152, 0.5)"
  },
  {
    id: 2,
    title: "Brain Fitness for High Achievers",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "March 2025",
    description: "For attending the Masterclass by Dr. Patrick Porter, Ph.D. Founder at BrainTap, on 'Brain Fitness for High Achievers'",
    image: "https://cdn1.ccbp.in/misc/podcast-brain-fitness-for-high-achievers-participation/7L33CFDMVZ.png",
    icon: "Star",
    borderColor: "border-kunalblue",
    glowColor: "rgba(65, 224, 222, 0.5)"
  },
  {
    id: 3,
    title: "NxtCode 25Under5 Completion",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "February 2025",
    description: "For Successfully Achieving the 5 Day Milestone, showcasing the skills of a Modern Age Developer",
    image: "https://cdn1.ccbp.in/misc/nxtcode25under5-completion/Z0OE45EDUK.png",
    icon: "Award",
    borderColor: "border-purple-500",
    glowColor: "rgba(168, 85, 247, 0.5)"
  },
  {
    id: 4,
    title: "Certificate of Accomplishment",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "August 2024",
    description: "For successfully completing projects in the BuildAThon",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQGvMH6QhXT1Sw/feedshare-shrink_800/feedshare-shrink_800/0/1730824111421?e=1749686400&v=beta&t=c9dlgvMcaUGqBfqoMCdLi9t2Xsrh3ypvAIunjSdzp8E",
    icon: "Medal",
    borderColor: "border-amber-400",
    glowColor: "rgba(251, 191, 36, 0.5)"
  },
  {
    id: 5,
    title: "AI Jobs Skills Masterclass",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "February 2025",
    description: "For attending the Masterclass by Mr. Pranjal Singh, Staff Data Scientist, Udaan, on 'Skills You Can't Ignore to get Exciting AI Jobs'",
    image: "https://cdn1.ccbp.in/misc/podcast-skills-you-cant-ignore-to-get-ai-jobs-participation/6THXMQT9II.png",
    icon: "Star",
    borderColor: "border-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.5)"
  },
  {
    id: 6,
    title: "NxtCode 25Under5 Participation",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "February 2025",
    description: "For participating in the NxtCode- AI-Powered Challenge: 25 Under 5",
    image: "https://cdn1.ccbp.in/misc/nxtcode25under5-participation/XPNDG1T1BV.png",
    icon: "Award",
    borderColor: "border-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.5)"
  },
  {
    id: 7,
    title: "Certificate of Participation",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "June 2024",
    description: "For active participation in Featurethon 4.0 conducted exclusively for CCBP 4.0 Academy students",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQGFPHZrpwwEPg/feedshare-shrink_800/B4EZTg_7nqHcAo-/0/1738941656989?e=1749686400&v=beta&t=jZhbqUwGVON9UtEhKcGtXLwtgpy8Gu8i8ualypYtPUg",
    icon: "Trophy",
    borderColor: "border-blue-500",
    glowColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    id: 8,
    title: "Certificate of Completion",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "July 2024",
    description: "In recognition of successful completion of tasks and projects in the CCBP 4.0 Academy",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQHp9QBeH1lWqA/feedshare-shrink_800/B4EZXw93N5GwAs-/0/1743504511844?e=1749686400&v=beta&t=M7wlh3uRXjyM69WIv8TsSQrNfTClRT0eG79229Mk8bU",
    icon: "Medal",
    borderColor: "border-rose-500",
    glowColor: "rgba(244, 63, 94, 0.5)"
  },
  {
    id: 9,
    title: "Anveshan Certificate",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "August 2024",
    description: "For participation in the Anveshan program, empowering minds and fostering innovation",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQG_RLWY0NOMYA/feedshare-shrink_2048_1536/B4EZYq8eKLHgAw-/0/1744477218733?e=1749686400&v=beta&t=h5iRm3qn5kOc7csnQOjgTCrDgu5vUtcnW_A02NrE2vI",
    icon: "Award",
    borderColor: "border-orange-500",
    glowColor: "rgba(249, 115, 22, 0.5)"
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Award": return <Award className="h-6 w-6" />;
    case "Trophy": return <Trophy className="h-6 w-6" />;
    case "Star": return <Star className="h-6 w-6" />;
    case "Medal": return <Medal className="h-6 w-6" />;
    default: return <Award className="h-6 w-6" />;
  }
};

const Certificates = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // Initial animation for the certificates
    const timer = setTimeout(() => {
      setVisibleItems([0]);
      let index = 1;
      const interval = setInterval(() => {
        if (index < certificatesData.length) {
          setVisibleItems(prev => [...prev, index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-kunalblack to-gray-900 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-kunalblack/80" />
        
        {/* Multiple animated background lights */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-kunalpink/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-kunalblue/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-emerald-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Rotating gradient effect */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-conic from-kunalpink via-purple-500 to-kunalblue animate-rotate-glow" />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Animation */}
          <div className="flex items-center justify-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="w-16 h-1 bg-gradient-to-r from-kunalpink to-purple-500 rounded-full mr-4 transform origin-left animate-scale-in-line" style={{ animationDelay: '0.5s' }} />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-heading kunalpink-glow">Certificates</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-kunalblue rounded-full ml-4 transform origin-right animate-scale-in-line" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((certificate, index) => (
              <div 
                key={certificate.id}
                className={cn(
                  "opacity-0 transform translate-y-8",
                  visibleItems.includes(index) && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <Card 
                  className={cn(
                    "h-full border-2 group transition-all duration-500",
                    certificate.borderColor,
                    "bg-gray-900/70 backdrop-blur-sm hover:scale-[1.02]",
                    "overflow-hidden relative"
                  )}
                  style={{
                    boxShadow: `0 0 20px ${certificate.glowColor}`,
                    transition: "box-shadow 0.5s, transform 0.5s"
                  }}
                >
                  {/* Animated glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-conic from-kunalpink via-purple-500 to-kunalblue animate-rotate-glow" />
                  </div>
                  
                  <div className="p-4 relative h-full flex flex-col">
                    {/* Certificate Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={cn(
                        "p-2 rounded-full transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12",
                        certificate.borderColor.replace('border', 'bg').replace('-500', '-500/20').replace('-400', '-400/20')
                      )}>
                        {getIcon(certificate.icon)}
                      </div>
                    </div>
                    
                    {/* Certificate Image */}
                    <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Certificate Details with Animations */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-kunalpink transition-colors duration-300">
                        {certificate.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-2 opacity-90">{certificate.issuer} • {certificate.date}</p>
                      <p className="text-gray-400 text-sm">{certificate.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
