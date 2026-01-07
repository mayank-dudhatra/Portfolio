import { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";

export default function Hero({ isScrolled, activeSection }) { 
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
      <div id="Home" className="bg-cover pb-14 bg-center bg-[url('https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739889585/bkqz5lacwtir0dtytkab.png')]">
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />
      <div className="flex pt-12 flex-col items-center justify-center md:flex-row md:justify-evenly px-4 md:px-0">
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
    </div>
    </>
  );
}