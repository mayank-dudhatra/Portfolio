import { useState, useEffect } from "react";

export default function Work() {
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
    <section className="flex flex-col rounded-none p-4 mt-28 max-md:px-2 relative">
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