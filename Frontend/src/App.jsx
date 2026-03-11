import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './prerender.css';

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
import Experience from './components/sections/Experience';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Prerender detection
  const isPrerendering = typeof navigator !== 'undefined' && 
    (navigator.userAgent.toLowerCase().indexOf('prerenderjs') > -1 || 
     navigator.userAgent.toLowerCase().indexOf('prerender') > -1);

  useEffect(() => {
    // Skip loading animation for prerendering
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Signal to Prerender that page is ready
      if (window.prerenderReady === false) {
        window.prerenderReady = true;
      }
    }, isPrerendering ? 0 : 1500);
    return () => clearTimeout(timer);
  }, [isPrerendering]);

  useEffect(() => {
    // Set prerender ready flag initially
    if (typeof window !== 'undefined') {
      window.prerenderReady = false;
      // Set prerender token from environment variable
      window.prerenderToken = import.meta.env.VITE_PRERENDER_TOKEN;
    }
  }, []);

  useEffect(() => {
    // Skip scroll effects during prerendering
    if (isPrerendering) return;
    
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
  }, [isPrerendering]);

  useEffect(() => {
    // Add prerender ready class to body when loaded
    if (!isLoading && typeof document !== 'undefined') {
      document.body.classList.add('_prerender_ready');
    }
  }, [isLoading]);

  if (isLoading && !isPrerendering) return <MayankLoader />;

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
        <Experience />
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