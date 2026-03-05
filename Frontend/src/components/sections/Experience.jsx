export default function Experience() {
  const experiences = [
    {
      role: "UI/UX Designer Intern",
      company: "Eduztrik",
      duration: "April 2025 – June 2025",
      description: "Contributed as a UI/UX Designer for Eduztrik's core platform, focusing on creating intuitive, user-centric, and visually engaging web experiences. Worked closely with the product and development teams to design scalable interfaces that improve usability and streamline user workflows.",
      contributions: [
        "Designed user-centric web interfaces from scratch using Figma",
        "Created wireframes, high-fidelity UI designs, and interactive prototypes",
        "Developed clean and intuitive dashboards for students, teachers, and institutes",
        "Conducted UX research and usability improvements based on user insights",
        "Built design systems and reusable UI components to ensure design consistency",
        "Collaborated with developers to deliver pixel-perfect implementations",
        "Participated in team discussions, sprint planning, and design reviews"
      ]
    },
    {
      role: "UI/UX Designer & Frontend Developer",
      company: "NeoRachna",
      duration: "July 2025 – Nov 2025",
      description: "Worked as a UI/UX Designer and Frontend Developer to design and build an intuitive event management platform. Focused on delivering a clean user interface, responsive layouts, and smooth user interactions while contributing to both design and development aspects of the product.",
      contributions: [
        "Designed user-friendly UI/UX for the event management platform",
        "Created wireframes, UI designs, and interactive prototypes in Figma",
        "Developed responsive frontend interfaces for seamless cross-device experience",
        "Built reusable UI components to improve development efficiency",
        "Implemented frontend features and supported backend functionality integration",
        "Ensured smooth navigation and optimized user interaction flows"
      ]
    }
  ];

  return (
    <div className="bg-[#25262f] px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
      <div className="text-[#80db66] font-jost text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[6px] uppercase">
        Experience
      </div>
      <div className="text-white font-jost font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 pb-3 sm:pb-4 md:pb-6">
        My Professional Journey
      </div>
      
      <div className="max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8 grid gap-4 sm:gap-6 md:gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white rounded-lg p-4 sm:p-6 md:p-8 text-left">
            {/* Role Header */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-jost font-semibold text-[#2e2e37] mb-1">
                {experience.role}
              </h3>
              <div className="text-[#80db66] text-base sm:text-lg md:text-xl lg:text-2xl font-jost font-medium">
                {experience.company} • {experience.duration}
              </div>
            </div>

            {/* Description */}
            <div className="mb-5 md:mb-7">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-jost text-[#4d4d5c] leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Key Contributions */}
            <div>
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-jost font-semibold text-[#2e2e37] mb-3 sm:mb-4">
                Key Contributions
              </h4>
              <div className="grid gap-2 sm:gap-3">
                {experience.contributions.map((contribution, contIndex) => (
                  <div key={contIndex} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 bg-[#80db66] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-jost text-[#4d4d5c] leading-relaxed">
                      {contribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}