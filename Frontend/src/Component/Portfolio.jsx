import React from "react";


function Navbar () {

  return (
    <>
    <nav className=" top-0 left-0 w-full flex justify-end items-center font-jost gap-16 text-[22px] font-medium leading-10 text-white py-9 px-12">
        <div className='text-[#80db66]'>Home</div>
        <div>About</div>
        <div>Work</div>
        <div>Service</div>
        <div>Contact Us</div>
        <a
         href="/Mayank_Dudhatra.pdf"
         download="Mayank_Dudhatra_Resume.pdf"
         className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
        >
          Download CV
        </a>
      </nav>
    </>
  )
}

function MainSection () {

  return (
    <>
          <div className="flex items-center justify-evenly">
      <div className="flex items-center justify-between pt-12 h-full">
        <div className="ml-10">
          <p className="text-[#80db66] text-[36px] font-jost leading-[1.3] tracking-[7px] font-medium">
            HELLO I’M
          </p>
          <h1 className="text-white font-jost text-[120px] font-semibold leading-none">
            Mayank Dudhatra
          </h1>
          <p className="text-[36px] text-white mt-4">
            A Passionate <span className="text-[#80db66] font-semibold">Full Stack Developer</span>
          </p>
          <button className="mt-6 bg-[#80db66] text-white text-[24px] font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition">
            SAY HELLO
          </button>
        </div>
        <div className="hidden md:block">
          <img
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739895501/vp8bahhpvyzb8qo8estx.png"
            alt="Profile"
            className="w-[684px] "
          />
        </div>
      </div>
      
      <div className="flex flex-col pl-10 mr-10 gap-10 perspective-1000">

      <a href="https://github.com/mayank-dudhatra" target="_blank" rel="noopener noreferrer"className="inline-block">
          <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
             <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897857/arwcxchywugmmwhhoyfb.png" alt="GitHub" />
          </i>
      </a>

      <a href="https://www.linkedin.com/in/mayank-dudhatra-cg/" target="_blank" rel="noopener noreferrer"className="inline-block">
          <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
             <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897906/pjr9ozwfpkydjume90jc.png" alt="Linkedin" />
          </i>
      </a>

      <a href="https://x.com/cg_mayank" target="_blank" rel="noopener noreferrer"className="inline-block">
          <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
             <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897781/mrqilasxjzcnv4apdpb8.png" alt="Twitter" />
          </i>
      </a>

      <a href="https://leetcode.com/u/mayank_dudhatra_06/" target="_blank" rel="noopener noreferrer"className="inline-block">
          <i className="border border-[#ccd3d9] p-4 rounded-[10px] transform hover:rotate-180 hover:bg-[#80db66] hover:scale-110 transition-transform duration-300 flex items-center justify-center">
             <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739897949/wbww9wmzmsj4vryaaiiv.png" alt="Twitter" />
          </i>
      </a>

</div>

    </div>
    
    </>
  )
}

function Cards () {

  return (
    <>
    <div className="relative bg-[#E2ECF6] pt-40 pb-60 flex gap-2 justify-around">
      
      <div className="transform -translate-y-8">
        <img
          src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739902939/ptl0oia57yacb3r9ghkv.png"
          alt="Dedication"
        />
      </div>
      <div className="transform translate-y-6">
        <img
          src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903128/gnmfjznksfnzgwgmxvjc.png"
          alt="Smart Work"
        />
      </div>
      <div className="transform -translate-y-8">
        <img
          src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903225/hhwd5e3m3g807ruaedn3.png"
          alt="Collaboration"
        />
      </div>
      <div className="transform translate-y-6">
        <img
          src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739903259/kg2cktz8tr3qmj8vbhpe.png"
          alt="Technology"
        />
      </div>

      <div className="absolute bottom-0 left-[72%] top-[74%] -z-1 font-jost transform -translate-x-[48%]  text-[200px] font-bold text-[#F0F7FE]">
        Mayank
      </div>
    </div>
    </>
  )
}




import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Ensure Home is active when scrolled back to the top
      if (window.scrollY < 50) {
        setActiveSection("Home");
      }
    };

    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjusted threshold for better section detection
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section Background */}
      <div id="Home" className="bg-cover pb-10 bg-center bg-[url('https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739889585/bkqz5lacwtir0dtytkab.png')]">
        
        {/* Navbar */}
        <nav
          className={`top-0 left-0 w-full flex justify-end items-center font-jost gap-16 text-[22px] font-medium leading-10 text-white py-9 px-12 transition-all duration-300 ${
            isScrolled ? "fixed bg-black bg-opacity-80 py-1 pt-2 px-10 z-50 backdrop-blur-md shadow-md" : ""
          }`}
        >
          <div className={activeSection === "Home" ? "text-[#80db66]" : ""}>Home</div>
          <div className={activeSection === "Aboutme" ? "text-[#80db66]" : ""}>About</div>
          <div className={activeSection === "Work" ? "text-[#80db66]" : ""}>Work</div>
          <div className={activeSection === "Service" ? "text-[#80db66]" : ""}>Service</div>
          <div className={activeSection === "Contactus" ? "text-[#80db66]" : ""}>Contact Us</div>
          <a
            href="/Mayank_Dudhatra.pdf"
            download="Mayank_Dudhatra_Resume.pdf"
            className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
          >
            Download CV
          </a>
        </nav>

        {/* Hero Section */}
        <MainSection />

      </div>

      {/* Feature Cards */}
      <Cards />

     
          </>
  );
}
