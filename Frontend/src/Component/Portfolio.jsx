import { useState, useEffect } from "react";
import Skill from './Skill'
  import Loader1 from './Loader.jsx'

  
// Navbar Component
function Navbar({ isScrolled, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`top-0 left-0 w-full flex items-center font-jost text-white py-4 px-6 md:px-10 lg:px-12 transition-all duration-300 ${
        isScrolled ? "fixed bg-black bg-opacity-80 z-50 backdrop-blur-md shadow-md" : ""
      }`}
    >
      {/* Logo or Brand (Visible on all screens for consistency) */}
      <div className="text-[22px] font-medium">MD</div>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden ml-auto text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-8 text-[18px] lg:text-[22px] font-medium">
        <div className={activeSection === "Home" ? "text-[#80db66]" : "hover:text-[#80db66] transition-colors"}>Home</div>
        <div className={activeSection === "Aboutme" ? "text-[#80db66]" : "hover:text-[#80db66] transition-colors"}>About</div>
        <div className={activeSection === "Work" ? "text-[#80db66]" : "hover:text-[#80db66] transition-colors"}>Work</div>
        <div className={activeSection === "Service" ? "text-[#80db66]" : "hover:text-[#80db66] transition-colors"}>Service</div>
        <div className={activeSection === "Contactus" ? "text-[#80db66]" : "hover:text-[#80db66] transition-colors"}>Contact Us</div>
        <a
          href="/Mayank_Dudhatra.pdf"
          download="Mayank_Dudhatra_Resume.pdf"
          className="px-3 py-2 lg:px-4 lg:py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 text-[18px] font-medium transition-all duration-300 md:hidden`}
      >
        <div className={activeSection === "Home" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
          Home
        </div>
        <div className={activeSection === "Aboutme" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
          About
        </div>
        <div className={activeSection === "Work" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
          Work
        </div>
        <div className={activeSection === "Service" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
          Service
        </div>
        <div className={activeSection === "Contactus" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
          Contact Us
        </div>
        <a
          href="/Mayank_Dudhatra.pdf"
          download="Mayank_Dudhatra_Resume.pdf"
          className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
          onClick={toggleMenu}
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

// Rest of the components remain unchanged; integrating Navbar into HeroSection
// export default function HeroSection() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("Home");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }

//       if (window.scrollY < 50) {
//         setActiveSection("Home");
//       }
//     };

//     const sections = document.querySelectorAll("section");
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.3,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, options);

//     sections.forEach((section) => observer.observe(section));
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
    
//       <div
//         id="Home"
//         className="bg-cover pb-10 bg-center bg-[url('https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739889585/bkqz5lacwtir0dtytkab.png')]"
//       >
//         <Navbar isScrolled={isScrolled} activeSection={activeSection} />
//         <MainSection />
//       </div>

//       <Cards />
//       <section id="Aboutme">
//         <Aboutme />
//       </section>
//       <Runningline />
//       <section id="Work">
//         <Work />
//       </section>
//       <Myeducation />
//       <Runningline />
//       <section id="Skill">
//         <Skill />
//       </section>
//       <section id="Service">
//         <Service />
//       </section>
//       <section id="Contactus">
//         <Contactus />
//       </section>

      
//     </>
//   );
// }


import { motion } from "framer-motion";


export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    // Show loader for 5 seconds before showing content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

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
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show loader for 5 seconds before rendering main content
  if (isLoading) {
    return <Loader1 />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div
        id="Home"
        className="bg-cover pb-10 bg-center bg-[url('https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739889585/bkqz5lacwtir0dtytkab.png')]"
      >
        <Navbar isScrolled={isScrolled} activeSection={activeSection} />
        <MainSection />
      </div>

      <Cards />
      <section id="Aboutme">
        <Aboutme />
      </section>
      <Runningline />
      <section id="Work">
        <Work />
      </section>
      <Myeducation />
      <Runningline />
      <section id="Skill">
        <Skill />
      </section>
      <section id="Service">
        <Service />
      </section>
      <section id="Contactus">
        <Contactus />
      </section>
    </motion.div>
  );
}


// Including other components for completeness (unchanged)
function MainSection() {
  const roles = ["Full Stack Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === roles[roleIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }

      setText(roles[roleIndex].substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, charIndex, roleIndex]);

  const scrollToContact = () => {
    document.getElementById("Contactus")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly px-4 md:px-0">
        <div className="flex flex-col items-center justify-center pt-12 h-full md:flex-row md:justify-between w-full">
          <div className="ml-4 md:ml-10 text-center md:text-left">
            <p className="text-[#80db66] text-[28px] md:text-[36px] font-jost leading-[1.3] tracking-[4px] md:tracking-[7px] font-medium">
              HELLO I’M
            </p>
            <h1 className="text-white font-jost text-[40px] md:text-[120px] font-semibold leading-none">
              Mayank Dudhatra
            </h1>
            <p className="text-[18px] md:text-[36px] text-white mt-4">
              A Passionate <span className="text-[#80db66] font-semibold">{text}</span>
            </p>
            <button
              className="mt-6 bg-[#80db66] text-white text-[16px] md:text-[24px] font-semibold px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md hover:shadow-lg transition"
              onClick={scrollToContact}
            >
              SAY HELLO
            </button>
          </div>
          <div className="block mt-6">
            <img
              src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739995255/b2mdgw25byhsmu3tptje.png"
              alt="Profile"
              className="w-[300px] md:w-[707px] mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-row md:flex-col pl-4 md:pl-10 mr-4 md:mr-10 gap-6 md:gap-10 mt-6 md:mt-0">
          <a href="https://github.com/mayank-dudhatra" target="_blank" rel="noopener noreferrer" className="inline-block">
            <i className="border border-[#ccd3d9] p-3 md:p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897857/arwcxchywugmmwhhoyfb.png"
                alt="GitHub"
                className="w-5 md:w-auto"
              />
            </i>
          </a>

          <a
            href="https://www.linkedin.com/in/mayank-dudhatra-cg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <i className="border border-[#ccd3d9] p-3 md:p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897906/pjr9ozwfpkydjume90jc.png"
                alt="Linkedin"
                className="w-5 md:w-auto"
              />
            </i>
          </a>

          <a href="https://x.com/cg_mayank" target="_blank" rel="noopener noreferrer" className="inline-block">
            <i className="border border-[#ccd3d9] p-3 md:p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897781/mrqilasxjzcnv4apdpb8.png"
                alt="Twitter"
                className="w-5 md:w-auto"
              />
            </i>
          </a>

          <a
            href="https://leetcode.com/u/mayank_dudhatra_06/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <i className="border border-[#ccd3d9] p-3 md:p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897949/wbww9wmzmsj4vryaaiiv.png"
                alt="Leetcode"
                className="w-5 md:w-auto"
              />
            </i>
          </a>
        </div>
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      <div className="relative bg-[#E2ECF6] pt-20 pb-40 md:pt-40 md: flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:-translate-y-8">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739902939/ptl0oia57yacb3r9ghkv.png"
            alt="Dedication"
            className="mx-auto"
          />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:translate-y-6">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903128/gnmfjznksfnzgwgmxvjc.png"
            alt="Smart Work"
            className="mx-auto"
          />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:-translate-y-8">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903225/hhwd5e3m3g807ruaedn3.png"
            alt="Collaboration"
            className="mx-auto"
          />
        </div>

        <div className="bg-white shadow-lg p-4 rounded-lg w-full max-w-xs md:max-w-none md:translate-y-6">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903259/kg2cktz8tr3qmj8vbhpe.png"
            alt="Technology"
            className="mx-auto"
          />
        </div>

        <div className="hidden md:block absolute -bottom-8 right-0 text-[100px] md:text-[200px] font-bold text-[#F0F7FE] leading-none">
          Mayank
        </div>
      </div>
    </>
  );
}

function Aboutme() {
  return (
    <>
      <section className="py-14 md:pt-60 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-5/12 lg:w-[44%]">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739904150/qi2nacxd106x8pqnq6uu.png"
              className="object-contain w-full aspect-[0.86] rounded-lg "
              alt="Profile"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12 lg:w-[56%]">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#80db66] tracking-[8px] sm:tracking-[10px] lg:tracking-[12.96px] uppercase">
                About Me
              </h1>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2E2E37] leading-tight sm:leading-snug lg:leading-[60px]">
                Building Seamless & Scalable Digital Solutions
              </h2>
              <p className="mt-6 text-base sm:text-lg lg:text-2xl text-[#4D4D5C] leading-relaxed">
                I'm a UI/UX Designer and Full Stack Developer passionate about designing intuitive user experiences and
                building scalable web solutions. My journey began with cloning platforms like Amazon and YouTube,
                refining my frontend skills. Over time, I expanded into backend development, working on full-stack
                projects like TRAZEX11 and QuadFusion blending creativity with functionality.
              </p>

              {/* Info Section */}
              <section className="mt-8 w-full">
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                  {/* Left Column */}
                  <div className="w-full sm:w-1/2">
                    <dl className="grid grid-cols-2 gap-y-3 text-base sm:text-lg lg:text-2xl text-[#4D4D5C]">
                      <dt className="font-semibold">Name</dt>
                      <dd>Mayank Dudhatra</dd>
                      <dt className="font-semibold">Age</dt>
                      <dd>18 Years</dd>
                      <dt className="font-semibold">Address</dt>
                      <dd>Ahemdabad</dd>
                    </dl>
                  </div>

                  {/* Right Column */}
                  <div className="w-full sm:w-1/2">
                    <dl className="space-y-3 text-base sm:text-lg lg:text-2xl text-[#4D4D5C]">
                      <div className="flex gap-4">
                        <dt className="font-semibold whitespace-nowrap">E-Mail</dt>
                        <dd className="text-sm sm:text-base lg:text-xl break-all">
                          mayankdudhatracg@gmail.com
                        </dd>
                      </div>
                      <div className="flex gap-4">
                        <dt className="font-semibold whitespace-nowrap">Phone</dt>
                        <dd>+91 8155814237</dd>
                      </div>
                      <div className="flex gap-4">
                        <dt className="font-semibold whitespace-nowrap">Nationality</dt>
                        <dd>Indian</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Signature Section - Optimized for Laptop */}
              <div className="mt-8 w-full">
                {/* Show this version only on laptop screens (lg: 1024px - 1440px) */}
                <div className="hidden lg:flex xl:hidden gap-6 items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/122dbb8d77ee6be98e039605b7778fed68ad6746969e2b1b281318392c4a9fd9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
                    className="object-contain w-[149px] aspect-[2.44] rounded-md shadow-sm"
                    alt="Signature"
                  />
                  <div className="flex gap-4 items-center">
                    <p className="text-2xl font-semibold text-black">Mayank Dudhatra</p>
                    <p className="text-base text-black">--- CSE</p>
                  </div>
                </div>

                {/* Simplified version for mobile, tablet, and larger desktops */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center lg:hidden xl:flex">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/122dbb8d77ee6be98e039605b7778fed68ad6746969e2b1b281318392c4a9fd9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
                    className="object-contain w-[100px] sm:w-[120px] aspect-[2.44] rounded-md"
                    alt="Signature"
                  />
                  <p className="text-lg sm:text-xl font-semibold text-black">Mayank Dudhatra --- CSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


function Runningline() {
  return (
    <>
      <div className="marquee-container">
        <h1 className="stroke-text marquee mt-40 mb-40 text-[96px] font-semibold leading-none tracking-[12.96px]">
          <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>
          <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>
          <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>
          <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>

        </h1>
      </div>
    </>
  );
}

function Work() {
  const projects = [
    {
      id: 1,
      category: "Web Development",
      title: "TRAZEX11",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/143d5d46f85270602bca04c545a9fce6c4748eca7b9c8802589ed4d35417bc78?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072",
      url: "https://trazex11.netlify.app",
      description:
        "TRAZEX11 is a stock market-based fantasy gaming platform where users create virtual teams using stocks instead of sports players. It allows users to participate in different types of contests (daily, weekly, and special events) and earn virtual coins based on their team's performance. The platform features real-time stock prices, portfolio management, leaderboards, and referral-based rewards. Users can select 11 stocks, assign a Captain (C) and Vice-Captain (VC), and compete with others.",
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "Slick",
      imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740031631/i7capxymvi9vidits3lb.png",
      url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1-3&t=NVFz6WvsNH1imv8L-1",
      description:
        "Slick is a modern UI/UX design project that focuses on user-friendly interactions, smooth animations, and an aesthetically pleasing layout.",
    },
    {
      id: 3,
      category: "Web Development",
      title: "Quadfusion",
      imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740026990/zrmxfd4hechsg90qtszl.png",
      url: "https://quadfusion.netlify.app/",
      description:
        "Quadfusion is a powerful web development project designed to provide seamless user experiences with a clean and responsive interface.",
    },
    {
      id: 4,
      category: "Frontend Development",
      title: "Probo",
      imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740032607/upddei7awxqd5cfgrl1b.png",
      url: "https://my-probo-clone.netlify.app/",
      description:
        "Probo is a frontend development project featuring dynamic UI elements, performance optimizations, and a sleek design.",
    },
    {
      id: 5,
      category: "UI/UX Design",
      title: "ScanX",
      imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1742497642/kxrtmszauv8nz6qnjryb.png",
      url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1949-239&t=ZnBpp5DSBmvxs18v-1",
      description:
        "Designed a modern, user-friendly interface for ScanX, a document scanning and comparison platform. The Figma prototype features an intuitive Home Page, seamless User Authentication (Signup/Login), and dedicated pages for Scanning, Comparing, and Managing Documents. The UI ensures easy navigation, interactive file uploads, and a structured My Files section for efficient document storage. Additional pages include Contact Us, FAQs, and Privacy Policy, enhancing user accessibility and support. The design prioritizes clarity, responsiveness, and a professional experience.",
    },
  ];

  const categories = ["All", "Web Development", "Frontend Development", "UI/UX Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="flex flex-col rounded-none p-4 max-md:px-2 relative">
      <header className="text-center">
        <h1 className="text-4xl font-semibold text-[#88db66] tracking-widest max-md:text-3xl">PORTFOLIO</h1>
        <h2 className="font-jost mt-4 text-6xl font-semibold text-[#2e2e37] max-md:text-3xl">My Recent Works</h2>
      </header>

      <div className="flex justify-center gap-4 mt-8 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 text-lg font-semibold border-2 rounded-full transition-all max-md:text-sm max-md:px-4 max-md:py-1 
              ${selectedCategory === category ? "bg-[#88db66] text-white border-[#88db66]" : "border-[#BCC7D3] text-[#2e2e37] hover:bg-[#88db66] hover:text-white"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="border border-solid bg-neutral-300 bg-opacity-0 border-neutral-300 p-4 rounded-lg max-md:p-3"
          >
            <div className="flex items-center gap-5 max-md:flex-col max-md:gap-3">
              <div className="w-[50%] max-md:w-full">
                <h3 className="text-xl text-[#9b9db1] max-md:text-base">{project.category}</h3>
                <p className="text-5xl text-[#2e2e37] max-md:text-3xl font-semibold">{project.title}</p>
              </div>
              <div className="w-[40%] max-md:w-full relative">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-contain w-full rounded-2xl cursor-pointer max-md:rounded-lg max-md:w-[90%]"
                  />
                </a>
              </div>
              <div className="w-[10%] max-md:w-full flex justify-center max-md:mt-3">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="w-[50px] h-[50px] border-2 border-[#BCC7D3] rounded-full flex items-center justify-center bg-white hover:bg-[#80db66] cursor-pointer max-md:w-[40px] max-md:h-[40px]"
                >
                  <img
                    src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739954664/qi9kdueygxma105xflqk.png"
                    alt="Plus Icon"
                    className="w-1/2 h-1/2"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col w-full max-w-[1000px] mt-10 mb-10"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.title === "TRAZEX11" ? (
              <video
                src="https://res.cloudinary.com/dbrb9ptmn/video/upload/v1740980152/so6rxikt0v4vepkjjynw.mp4"
                controls
                autoPlay
                muted
                className="w-full max-h-[70vh] object-cover rounded-lg"
              />
            ) : (
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full max-h-[70vh] object-cover rounded-lg"
              />
            )}
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-[#2e2e37] text-left">{selectedProject.title}</h2>
            <p className="text-sm md:text-lg text-gray-600 mt-2 leading-relaxed text-left">{selectedProject.description}</p>
            <div className="mt-4 md:mt-6">
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-2 md:py-3 bg-[#88db66] text-white text-sm md:text-lg font-semibold rounded-full hover:bg-green-600 transition-all"
              >
                View Live
              </a>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 text-red-500 text-sm md:text-lg font-semibold hover:underline self-start"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

// function Myeducation() {
//   return (
//     <section className="py-12 px-6 mt-60 rounded-lg">
//       <div className="mx-auto flex gap-10 items-center lg:flex-row flex-col">
//         <div className="lg:w-[60%] w-full">
//           <header>
//             <h3 className="leading-none text-[#80db66] tracking-[12.96px] text-[36px] font-semibold max-md:text-[28px] max-md:tracking-[8px]">
//               EDUCATION
//             </h3>
//             <h1 className="text-[55px] font-jost text-[#2e2e37] font-semibold mt-2 max-md:text-[40px]">My Education</h1>
//             <p className="mt-4 text-lg text-[#4d4d5c] max-md:text-base">
//               I am currently pursuing a Bachelor of Technology in Computer Science Engineering, enhancing my skills in
//               Full Stack Development, UI/UX Design, and Web Technologies to create seamless and scalable digital
//               solutions.
//             </p>
//           </header>

//           <div className="mt-8 space-y-6">
//             <div className="flex items-start gap-6 rounded-lg flex-col md:flex-row">
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ba0099ed7733ab73ed996ad6424497f0e8cceb72a7d0c056983f1f03d740ec"
//                 alt="icon"
//                 className="w-12 h-12"
//               />
//               <div>
//                 <h2 className="text-[34px] font-semibold text-[#2e2e37] max-md:text-[28px]">
//                   Higher Secondary Certificate
//                 </h2>
//                 <p className="text-[20px] text-[#2e2e37] font-semibold max-md:text-[18px]">
//                   Alpha Vidhya Sankul, Junagadh <span className="text-[#4d4d5c]">(2022 - 2024)</span>
//                 </p>
//                 <p className="text-[#4d4d5c] mt-4 text-[22px] max-md:text-[18px]">
//                   Successfully completed Higher Secondary Education, building a strong academic foundation before
//                   transitioning into the field of technology.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-6 rounded-lg flex-col md:flex-row">
//               <img
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ba0099ed7733ab73ed996ad6424497f0e8cceb72a7d0c056983f1f03d740ec"
//                 alt="icon"
//                 className="w-12 h-12"
//               />
//               <div>
//                 <h2 className="text-[34px] font-semibold text-[#2e2e37] max-md:text-[28px]">
//                   Bachelor of Technology in CSE
//                 </h2>
//                 <p className="text-[20px] text-[#2e2e37] font-semibold max-md:text-[18px]">
//                   Rai University <span className="text-gray-500">(2024 - 2028)</span>
//                 </p>
//                 <p className="text-[#4d4d5c] mt-4 text-[22px] max-md:text-[18px]">
//                   Gaining expertise in Full Stack Development, UI/UX Design, and Web Technologies, with a strong focus on
//                   creating user-centric and scalable solutions.
//                   <p>In Sem-1 I Got 9.76CGPA</p>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <aside className="lg:w-[40%] w-full mt-8 lg:mt-0">
//           <img
//             src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/education-img.jpg"
//             alt="Education Illustration"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </aside>
//       </div>
//     </section>
//   );
// }

function Myeducation() {
  return (
    <section className="py-12 px-6 mt-60 rounded-lg">
      <div className="mx-auto flex gap-10 items-center lg:flex-row flex-col">
        <div className="lg:w-[60%] w-full">
          <header>
            <h3 className="leading-none text-[#80db66] tracking-[12.96px] text-[36px] font-semibold max-md:text-[28px] max-md:tracking-[8px]">
              EDUCATION
            </h3>
            <h1 className="text-[55px] font-jost text-[#2e2e37] font-semibold mt-2 max-md:text-[40px]">My Education</h1>
            <p className="mt-4 text-lg text-[#4d4d5c] max-md:text-base">
              I am currently pursuing a Bachelor of Technology in Computer Science Engineering, enhancing my skills in
              Full Stack Development, UI/UX Design, and Web Technologies to create seamless and scalable digital
              solutions.
            </p>
          </header>

          <div className="mt-8 space-y-6">
            {/* Higher Secondary Certificate */}
            <div className="flex items-start gap-6 rounded-lg flex-col md:flex-row">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ba0099ed7733ab73ed996ad6424497f0e8cceb72a7d0c056983f1f03d740ec"
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-[34px] font-semibold text-[#2e2e37] max-md:text-[28px]">
                  Higher Secondary Certificate
                </h2>
                <p className="text-[20px] text-[#2e2e37] font-semibold max-md:text-[18px]">
                  Alpha Vidhya Sankul, Junagadh <span className="text-[#4d4d5c]">(2022 - 2024)</span>
                </p>
                <p className="text-[#4d4d5c] mt-4 text-[22px] max-md:text-[18px]">
                  Successfully completed Higher Secondary Education, building a strong academic foundation before transitioning into the field of technology.
                </p>
                <p className="mt-2 text-[22px] font-semibold text-[#2e2e37] max-md:text-[18px]">
                  Scored: <strong className="text-[#80db66]">81.73%</strong>
                </p>
              </div>
            </div>

            {/* Bachelor of Technology in CSE */}
            <div className="flex items-start gap-6 rounded-lg flex-col md:flex-row">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ba0099ed7733ab73ed996ad6424497f0e8cceb72a7d0c056983f1f03d740ec"
                alt="icon"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-[34px] font-semibold text-[#2e2e37] max-md:text-[28px]">
                  Bachelor of Technology in CSE
                </h2>
                <p className="text-[20px] text-[#2e2e37] font-semibold max-md:text-[18px]">
                  Rai University <span className="text-gray-500">(2024 - 2028)</span>
                </p>
                <p className="text-[#4d4d5c] mt-4 text-[22px] max-md:text-[18px]">
                  Gaining expertise in Full Stack Development, UI/UX Design, and Web Technologies, with a strong focus on
                  creating user-centric and scalable solutions.
                </p>
                <p className="mt-2 text-[22px] font-semibold text-[#2e2e37] max-md:text-[18px]">
                  Current CGPA: <strong className="text-[#80db66]">9.76</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:w-[40%] w-full mt-8 lg:mt-0">
          <img
            src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/education-img.jpg"
            alt="Education Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </aside>
      </div>
    </section>
  );
}


function Service() {
  return (
    <div className="bg-[#25262f] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24 lg:py-32 text-center">
      <div className="text-[#80db66] font-jost text-lg sm:text-xl md:text-2xl lg:text-[36px] font-medium tracking-[2px] sm:tracking-[3px] md:tracking-[6px] lg:tracking-[10px] uppercase">
        Service
      </div>
      <div className="text-white font-jost font-semibold text-xl sm:text-2xl md:text-4xl lg:text-[55px] mt-2 pb-4 sm:pb-6 md:pb-8">
        What I Offer
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-10 mt-6 sm:mt-8 md:mt-10 max-w-7xl mx-auto px-4 sm:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 bg-white rounded-xl w-full max-w-[650px] min-h-[180px] sm:min-h-[200px]"
          >
            <img
              loading="lazy"
              src={service.image}
              alt={service.title}
              className="object-contain w-12 sm:w-14 md:w-16 lg:w-[72px] h-12 sm:h-14 md:h-16 lg:h-[72px] self-start sm:self-center flex-shrink-0"
            />
            <div className="text-left flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[35px] pl-0 sm:pl-4 md:pl-6 lg:pl-8 font-jost text-[#2e2e37] font-semibold">
                {service.title}
              </h2>
              <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-8 text-sm sm:text-base md:text-lg lg:text-[22px] pl-0 sm:pl-4 md:pl-6 lg:pl-8 font-jost text-[#4d4d5c]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Proficient in building dynamic, responsive websites and applications using modern technologies such as JavaScript, Node.js, React, and MongoDB.",
  },
  {
    title: "UI/UX Design",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Skilled in creating intuitive and aesthetically appealing interfaces, focused on delivering an engaging user experience with tools like Figma.",
  },
  {
    title: "Frontend Development",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Experienced in crafting responsive and user-friendly web pages using HTML, CSS, JavaScript, and frontend frameworks like React, ensuring a seamless and accessible user interface.",
  },
  {
    title: "Backend Development",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b90653539fc82c3989a36eb140676788b4d08aa698f9fa1384e2390aa6b2571a",
    description:
      "Expertise in building server-side applications with Node.js, Express, and managing databases like MongoDB and MySQL, ensuring efficient, secure, and scalable backend solutions.",
  },
];

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://portfolio-ycp9.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setResponseMessage("Server error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <>
    <div className="py-16 px-5 mt-32 max-w-7xl mx-auto">
      <h3 className="text-[#80db66] font-jost text-center font-semibold text-xl uppercase tracking-[10px]">
        Contact Me
      </h3>
      <h2 className="text-[#2e2e37] font-jost text-center text-3xl sm:text-[55px] font-bold mt-4">
        Let's Start A New Project
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-14 w-full">
        <div className="space-y-8 w-full max-w-lg">
          {[
            { label: "Location", value: "Rai University, Ahmedabad", img: "ugi0crtjdheiuvsrnhyi.png" },
            { label: "Phone", value: "+91 8155814237", img: "usf6jdg2okyyqbiwtymw.png" },
            { label: "Email", value: "maynkdudhatracg@gmail.com", img: "nw9cn5rsrjzsvjhvxmrk.png" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#80db66] p-3 rounded-full">
                <img
                  src={`https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739953054/${item.img}`}
                  alt={item.label}
                  className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-[24px] text-[#2e2e37] font-jost font-semibold">{item.label}</h4>
                <p className="text-[#4d4d5c] font-jost mt-2 text-sm sm:text-[20px]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="p-6 rounded-lg w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["name", "email"].map((field, index) => (
              <input
                key={index}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="border border-gray-300 p-3 rounded-lg w-full h-[50px] sm:h-[60px]"
                required
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {["phone", "subject"].map((field, index) => (
              <input
                key={index}
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="border border-gray-300 p-3 rounded-lg w-full h-[50px] sm:h-[60px]"
                required
              />
            ))}
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Start writing message here"
            className="border border-gray-300 p-3 rounded-lg w-full h-[150px] sm:h-[200px] resize-none mt-4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#80db66] text-white px-6 py-3 text-center rounded-lg mt-4 w-full sm:w-[183px] h-[50px] sm:h-[53px] font-semibold text-lg"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Now"}
          </button>

          {responseMessage && (
            <p className="mt-4 text-center text-lg font-semibold text-gray-600">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>


    <div className="flex justify-center items-center mt-6">
  <div className="grid grid-cols-4 gap-4 p-4">
    {[
      {
        href: "https://github.com/mayank-dudhatra",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897857/arwcxchywugmmwhhoyfb.png",
        alt: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/mayank-dudhatra-cg/",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897906/pjr9ozwfpkydjume90jc.png",
        alt: "LinkedIn",
      },
      {
        href: "https://x.com/cg_mayank",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897781/mrqilasxjzcnv4apdpb8.png",
        alt: "Twitter",
      },
      {
        href: "https://leetcode.com/u/mayank_dudhatra_06/",
        imgSrc: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897949/wbww9wmzmsj4vryaaiiv.png",
        alt: "Leetcode",
      },
    ].map((social, index) => (
      <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
        <div className="w-16 h-16 rounded-[10px] border border-[#ccd3d9] flex items-center justify-center transition-all duration-300 hover:rotate-180 hover:bg-[#80db66] hover:scale-110">
          <img src={social.imgSrc} alt={social.alt} className="w-7 transition-all duration-300" />
        </div>
      </a>
    ))}
  </div>
</div>



    </>
  );
}
