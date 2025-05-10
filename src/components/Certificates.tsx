
import { useState } from "react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
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
  },
  {
    id: 2,
    title: "Certificate of Completion",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "08-Feb-2025",
    description: "For Successfully Achieving the 5 Day Milestone, showcasing the skills of a Modern Age Developer in the NxtCode- AI-Powered Challenge: 25 Under 5",
    image: "/lovable-uploads/6d8be2da-8ed7-44da-844a-25825d46cd28.png",
  },
  {
    id: 3,
    title: "Certificate of Participation",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "20-Feb-2025",
    description: "For attending the Masterclass by Mr. Pranjal Singh, Staff Data Scientist, Udaan, on "Skills You Can't Ignore to get Exciting AI Jobs"",
    image: "/lovable-uploads/38e41d04-2a1f-4fde-9d07-af3c48095610.png",
  },
  {
    id: 4,
    title: "Certificate of Participation",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "08-Feb-2025",
    description: "For participating in the NxtCode- AI-Powered Challenge: 25 Under 5",
    image: "/lovable-uploads/82606a89-76b0-44e6-bee2-26c761507452.png",
  },
  {
    id: 5,
    title: "Consistent Champ",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "2025",
    description: "#AIPoweredCoder - 5/5 DAYS - Finished the AI-Powered Challenge!",
    image: "/lovable-uploads/34020e03-d57f-46a2-97d3-a3ef50d6557b.png",
  },
  {
    id: 6,
    title: "Certificate of Participation",
    issuer: "Infinity Personality Development",
    date: "2024",
    description: "Participation in Anveshan - Empowering Minds, Class of B.Tech. 2024-2028",
    image: "/lovable-uploads/d91dc142-fdb1-4ac5-b4cb-7abf4742b1e4.png",
  },
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === certificatesData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? certificatesData.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-kunalblack to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-kunalblack/80" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-kunalpink/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-kunalblue/10 rounded-full filter blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-1 bg-kunalpink rounded-full mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-heading">Certificates</span>
            </h2>
            <div className="w-16 h-1 bg-kunalblue rounded-full ml-4" />
          </div>

          <div className="flex items-center justify-between flex-col md:flex-row gap-8">
            {/* Certificate Showcase */}
            <div className="w-full relative flex justify-center items-center">
              <div className="relative w-full max-w-3xl aspect-[4/3] mx-auto">
                {/* Certificate Cards */}
                {certificatesData.map((certificate, index) => (
                  <div
                    key={certificate.id}
                    className={cn(
                      "absolute inset-0 transition-all duration-500 rounded-lg overflow-hidden",
                      activeIndex === index
                        ? "opacity-100 z-20 scale-100 transform-none"
                        : index === (activeIndex + 1) % certificatesData.length
                        ? "opacity-30 z-10 scale-90 translate-x-[60%]"
                        : index === (activeIndex - 1 + certificatesData.length) % certificatesData.length
                        ? "opacity-30 z-10 scale-90 -translate-x-[60%]"
                        : "opacity-0 z-0 scale-75"
                    )}
                  >
                    <Card className="h-full group border-2 border-gray-800 bg-gray-900/70 backdrop-blur-sm hover:border-kunalblue overflow-hidden">
                      <div className="relative h-full">
                        {/* Certificate Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-kunalblue/20 text-kunalblue p-2 rounded-full">
                            <Award className="h-6 w-6" />
                          </div>
                        </div>
                        
                        {/* Certificate Image */}
                        <div className="w-full h-full relative">
                          <img 
                            src={certificate.image} 
                            alt={certificate.title}
                            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                          />
                          
                          {/* Overlay for active certificate */}
                          {activeIndex === index && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <h3 className="text-xl font-bold text-white mb-1">{certificate.title}</h3>
                              <p className="text-gray-300 text-sm mb-2">{certificate.issuer} • {certificate.date}</p>
                              <p className="text-gray-400 text-sm">{certificate.description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}

                {/* Navigation Buttons */}
                <button 
                  onClick={handlePrev} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-kunalpink/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  disabled={isAnimating}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-kunalpink/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  disabled={isAnimating}
                  aria-label="Next certificate"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {certificatesData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-kunalpink w-8" 
                    : "bg-gray-600 hover:bg-gray-400"
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
