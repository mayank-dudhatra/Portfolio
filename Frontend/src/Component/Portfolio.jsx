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

function Aboutme () {

  return (
    <>
    <section className="py-14 pt-60">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[44%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739904150/qi2nacxd106x8pqnq6uu.png"
            className="object-contain w-full aspect-[0.86] max-md:mt-10 max-md:max-w-full"
            alt="Profile"
          />
        </div>
        <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-7 w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="text-4xl font-semibold leading-none text-[#80db66] tracking-[12.96px]">
              ABOUT ME
            </h1>
            <h2 className="mt-5 text-6xl font-semibold text-[#2E2E37] leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Building Seamless & Scalable Digital Solutions
            </h2>
            <p className="self-stretch mt-9 text-2xl text-[#4D4D5C] max-md:mr-2 max-md:max-w-full">
              I'm a UI/UX Designer and Full Stack Developer passionate about designing
              intuitive user experiences and building scalable web solutions. My
              journey began with cloning platforms like Amazon and YouTube, refining
              my frontend skills. Over time, I expanded into backend development,
              working on full-stack projects like TRAZEX11 and QuadFusion blending
              creativity with functionality.
            </p>
            <section className="self-stretch mt-9 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[46%] max-md:ml-0 max-md:w-full">
                  <dl className="flex grow gap-5 justify-between text-2xl text-[#4D4D5C] max-md:mt-10">
                    <div className="flex flex-col items-start font-semibold whitespace-nowrap">
                      <dt>Name</dt>
                      <dt className="mt-2">Age</dt>
                      <dt className="self-stretch mt-2">Address</dt>
                    </div>
                    <div className="flex flex-col items-start">
                      <dd>Mayank Dudhatra</dd>
                      <dd className="mt-2">18 Years</dd>
                      <dd className="mt-2">Ahemdabad</dd>
                    </div>
                  </dl>
                </div>
                <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                  <dl className="flex flex-col w-full text-[#4D4D5C] max-md:mt-10">
                    <div className="flex gap-8">
                      <div className="text-2xl font-semibold whitespace-nowrap">
                        <dt className="max-md:mr-1">E-Mail</dt>
                        <dt className="mt-2">Phone</dt>
                      </div>
                      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
                        <dd className="text-xl">mayankdudhatracg@gmail.com</dd>
                        <dd className="self-start mt-3 text-2xl">+91 8155814237</dd>
                      </div>
                    </div>
                    <div className="flex gap-8 self-start mt-2 text-2xl whitespace-nowrap">
                      <dt className="font-semibold basis-auto">Nationality</dt>
                      <dd>Indian</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <div className="flex gap-10 mt-9 max-w-full font-semibold w-[474px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/122dbb8d77ee6be98e039605b7778fed68ad6746969e2b1b281318392c4a9fd9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
                className="object-contain shrink-0 max-w-full aspect-[2.44] w-[149px]"
                alt="Signature"
              />
              <div className="flex flex-auto gap-4 self-start mt-1.5">
                <p className="grow text-2xl text-black">Mayank Dudhatra</p>
                <p className="text-base text-black">--- CSE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

      {/* About Me Section */}
      <section id="Aboutme">
        <Aboutme />
      </section>

          </>
  );
}
