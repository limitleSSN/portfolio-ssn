
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationTimeline from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import YouTubeSection from "@/components/YouTube";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EducationTimeline />
      <Skills />
      <Projects />
      <Certificates />
      <YouTubeSection />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
