
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationTimeline from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EducationTimeline />
      <Skills />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
