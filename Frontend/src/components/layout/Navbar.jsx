// https://elements.envato.com/jonathan-personal-portfolio-landing-page-FY5QPSY

import { useState } from "react";

export default function Navbar({ isScrolled, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "#Home", id: "Home" },
    { name: "About", href: "#Aboutme", id: "Aboutme" },
    { name: "Experience", href: "#Experience", id: "Experience" },
        { name: "Projects", href: "#Work", id: "Work" },
    { name: "Skill", href: "#Skill", id: "Skill" },
    { name: "Certificates", href: "#Certificates", id: "Certificates" }, // Added this
    { name: "Service", href: "#Service", id: "Service" },
    { name: "Contact Us", href: "#Contactus", id: "Contactus" },
  ];

  return (
    <nav
      className={`top-0 left-0 w-full flex items-center font-jost text-white py-4 px-6 md:px-10 lg:px-12 transition-all duration-500 z-[100] ${
        isScrolled 
          ? "fixed bg-[#25262f]/80 backdrop-blur-xl shadow-2xl border-b border-white/5" 
          : "absolute bg-transparent"
      }`}
    >
      <div className="text-[22px] font-bold tracking-tight">MD</div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden ml-auto text-white focus:outline-none p-2"
        onClick={toggleMenu}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-8 text-[18px] lg:text-[20px] font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`transition-all duration-300 ${
              activeSection === link.id 
                ? "text-[#80db66] scale-105" 
                : "text-gray-300 hover:text-[#80db66]"
            }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://drive.google.com/uc?export=download&id=16RezKoXaEGv_E8y1di4ZrBI-nUZQKL25"
          download="Mayank_Dudhatra_Resume.pdf"
          className="ml-4 px-5 py-2 border border-[#80db66] text-[#80db66] rounded-full hover:bg-[#80db66] hover:text-black transition-all duration-300 font-semibold text-sm"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } absolute top-0 left-0 w-full bg-[#25262f] min-h-screen flex flex-col items-center justify-center gap-8 text-[24px] font-semibold transition-all duration-500 md:hidden z-[-1]`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleMenu}
            className={activeSection === link.id ? "text-[#80db66]" : "text-white"}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://drive.google.com/uc?export=download&id=16RezKoXaEGv_E8y1di4ZrBI-nUZQKL25"
          download="Mayank_Dudhatra_Resume.pdf"
          className="mt-4 px-8 py-3 bg-[#80db66] text-black rounded-full font-bold"
          onClick={toggleMenu}
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}