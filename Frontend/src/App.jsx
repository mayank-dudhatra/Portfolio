import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// Layout & UI
import MayankLoader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Cards from './components/ui/Cards';
import Runningline from './components/ui/RunningLine';
import Skill from './components/ui/Skill';
import Certification from './components/sections/Certification'; // Import the new file
import Verticle from './components/ui/Verticle';

// Sections
import Hero from './components/sections/Hero';
import Aboutme from './components/sections/AboutMe';
import Work from './components/sections/Work';
import Myeducation from './components/sections/MyEducation';
import Service from './components/sections/Service';
import Contactus from './components/sections/ContactUs';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      if (window.scrollY < 50) setActiveSection("Home");
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-10% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) return <MayankLoader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />

      <section id="Home">
        <Hero isScrolled={isScrolled} activeSection={activeSection} />
      </section>

      <Cards />

      {/* Grouped About and Education */}
      <section id="Aboutme">
        <Aboutme />
        <Myeducation />
      </section>

      <Runningline />

      {/* Experience Section */}
      <section id="Experience">
        <Verticle data={[
          {
            title: "UI/UX Intern – Eduztrik",
            content: <p className="md:text-lg lg:text-2xl text-[#4D4D5C] leading-relaxed">Designed user-friendly interfaces...</p>,
          },
          {
            title: "UI/UX & Full Stack Developer Intern – NeoRachna",
            content: <p className="md:text-lg lg:text-2xl text-[#4D4D5C] leading-relaxed">Designed and developed an intuitive...</p>,
          }
        ]} />
      </section>

      {/* Projects Section (using the Work component) */}
      <section id="Work">
        <Work />
      </section>
      
      <Runningline />

      <section id="Skill">
        <Skill />
      </section>

      <Certification />

      <section id="Service">
        <Service />
      </section>

      <section id="Contactus">
        <Contactus />
      </section>
    </motion.div>
  );
}

export default App;