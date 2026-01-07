import { useState } from "react";

export default function Navbar({ isScrolled, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            href="https://drive.google.com/uc?export=download&id=16RezKoXaEGv_E8y1di4ZrBI-nUZQKL25"
            download="Mayank_Dudhatra_Resume.pdf"
            className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
            onClick={toggleMenu}
        >
                Download Resume
          </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 text-[18px] font-medium transition-all duration-300 md:hidden`}
      >
       <a href="#Home">
  <div className={activeSection === "Home" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
    Home
  </div>
</a>

        <a href="#Aboutme">
  <div className={activeSection === "Aboutme" ? "text-[#80db66]" : ""} onClick={toggleMenu}>
    About
  </div>
</a>

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
  href="https://drive.google.com/uc?export=download&id=16RezKoXaEGv_E8y1di4ZrBI-nUZQKL25"
  download="Mayank_Dudhatra_Resume.pdf"
  className="px-4 py-2 border border-[#80db66] text-white rounded-lg hover:bg-[#80db66] hover:text-white transition"
  onClick={toggleMenu}
>
  Download Resume
</a>


      </div>
    </nav>
  );
}