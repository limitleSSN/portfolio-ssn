
import { useState, useEffect } from "react";
import { Award, Star, Trophy, Medal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const certificatesData = [
  {
    id: 1,
    title: "Certificate of Accomplishment",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "5-Nov-2024",
    description: "For successfully completing Two industry-ready projects in two weeks as part of the Growth Cycle 1 BuildAThon",
    image: "/lovable-uploads/4293cb27-0be0-489a-88ec-7fd66509b9e6.png",
    icon: "Award",
    borderColor: "border-kunalpink",
    glowColor: "kunalpink"
  },
  {
    id: 2,
    title: "Certificate of Completion",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "08-Feb-2025",
    description: "For Successfully Achieving the 5 Day Milestone, showcasing the skills of a Modern Age Developer in the NxtCode- AI-Powered Challenge: 25 Under 5",
    image: "/lovable-uploads/6d8be2da-8ed7-44da-844a-25825d46cd28.png",
    icon: "Trophy",
    borderColor: "border-kunalblue",
    glowColor: "kunalblue"
  },
  {
    id: 3,
    title: "Certificate of Participation",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "20-Feb-2025",
    description: "For attending the Masterclass by Mr. Pranjal Singh, Staff Data Scientist, Udaan, on 'Skills You Can't Ignore to get Exciting AI Jobs'",
    image: "/lovable-uploads/38e41d04-2a1f-4fde-9d07-af3c48095610.png",
    icon: "Star",
    borderColor: "border-purple-500",
    glowColor: "rgba(168, 85, 247, 0.5)"
  },
  {
    id: 4,
    title: "Certificate of Participation",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "08-Feb-2025",
    description: "For participating in the NxtCode- AI-Powered Challenge: 25 Under 5",
    image: "/lovable-uploads/82606a89-76b0-44e6-bee2-26c761507452.png",
    icon: "Medal",
    borderColor: "border-amber-400",
    glowColor: "rgba(251, 191, 36, 0.5)"
  },
  {
    id: 5,
    title: "Consistent Champ",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "2025",
    description: "#AIPoweredCoder - 5/5 DAYS - Finished the AI-Powered Challenge!",
    image: "/lovable-uploads/34020e03-d57f-46a2-97d3-a3ef50d6557b.png",
    icon: "Star",
    borderColor: "border-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.5)"
  },
  {
    id: 6,
    title: "Certificate of Participation",
    issuer: "Infinity Personality Development",
    date: "2024",
    description: "Participation in Anveshan - Empowering Minds, Class of B.Tech. 2024-2028",
    image: "/lovable-uploads/d91dc142-fdb1-4ac5-b4cb-7abf4742b1e4.png",
    icon: "Award",
    borderColor: "border-cyan-400",
    glowColor: "rgba(34, 211, 238, 0.5)"
  },
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
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

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
          
          {/* Legacy Navigation Dots - Kept for visual appeal */}
          <div className="flex justify-center mt-12 space-x-2">
            {certificatesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "transition-all duration-300",
                  activeIndex === index 
                    ? "bg-gradient-to-r from-kunalpink to-kunalblue w-8 h-3 rounded-full" 
                    : "bg-gray-600 hover:bg-gray-400 w-3 h-3 rounded-full"
                )}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
