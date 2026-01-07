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
    { name: "Service", href: "#Service", id: "Service" },
    { name: "Contact Us", href: "#Contactus", id: "Contactus" },
  ];

  return (
    <nav
      className={`top-0 left-0 w-full flex items-center font-jost text-white py-4 px-6 md:px-10 lg:px-12 transition-all duration-300 ${
        isScrolled ? "fixed bg-black bg-opacity-80 z-50 backdrop-blur-md shadow-md" : "absolute"
      }`}
    >
      <div className="text-[22px] font-medium">MD</div>

      <button
        className="md:hidden ml-auto text-white focus:outline-none"
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
      <div className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-8 text-[18px] lg:text-[22px] font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={activeSection === link.id ? "text-[#80db66]" : "hover:text-[#80db66] transition-colors"}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://drive.google.com/uc?export=download&id=16RezKoXaEGv_E8y1di4ZrBI-nUZQKL25"
          download="Mayank_Dudhatra_Resume.pdf"
          className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-black bg-opacity-95 flex-col items-center gap-6 py-8 text-[20px] font-medium transition-all duration-300 md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleMenu}
            className={activeSection === link.id ? "text-[#80db66]" : ""}
          >
            {link.name}
          </a>
        ))}
        <a
          href="https://drive.google.com/uc?export=download&id=16RezKoXaEGv_E8y1di4ZrBI-nUZQKL25"
          download="Mayank_Dudhatra_Resume.pdf"
          className="px-6 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] transition"
          onClick={toggleMenu}
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}