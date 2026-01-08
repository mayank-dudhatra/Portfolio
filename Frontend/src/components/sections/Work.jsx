// import { useState, useEffect } from "react";
// // https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=829-3&t=RfkxXVmZ9ZQdsZBU-1
// import portfoliobanner from '../../assets/PORTFOLIO.png';
// import codinggitafigma from '../../assets/CodinggitaFigma.png';
// export default function Work() {
//   const projects = [
//     {
//       id: 1,
//       category: "Web Development",
//       title: "TRAZEX11",
//       imageUrl:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/143d5d46f85270602bca04c545a9fce6c4748eca7b9c8802589ed4d35417bc78?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072",
//       url: "https://trazex11.netlify.app",
//       description:
//         "TRAZEX11 is a stock market-based fantasy gaming platform where users create virtual teams using stocks instead of sports players. It allows users to participate in different types of contests (daily, weekly, and special events) and earn virtual coins based on their team's performance. The platform features real-time stock prices, portfolio management, leaderboards, and referral-based rewards. Users can select 11 stocks, assign a Captain (C) and Vice-Captain (VC), and compete with others.",
//     },
//     {
//       id: 2,
//       category: "UI/UX Design",
//       title: "Slick",
//       imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740031631/i7capxymvi9vidits3lb.png",
//       url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1-3&t=NVFz6WvsNH1imv8L-1",
//       description:
//         "Slick is a modern UI/UX design project that focuses on user-friendly interactions, smooth animations, and an aesthetically pleasing layout.",
//     },
//     {
//       id: 3,
//       category: "Web Development",
//       title: "Quadfusion",
//       imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740026990/zrmxfd4hechsg90qtszl.png",
//       url: "https://quadfusion.netlify.app/",
//       description:
//         "Quadfusion is a powerful web development project designed to provide seamless user experiences with a clean and responsive interface.",
//     },
//     {
//       id: 4,
//       category: "Frontend Development",
//       title: "Probo",
//       imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740032607/upddei7awxqd5cfgrl1b.png",
//       url: "https://my-probo-clone.netlify.app/",
//       description:
//         "Probo is a frontend development project featuring dynamic UI elements, performance optimizations, and a sleek design.",
//     },
//     {
//       id: 5,
//       category: "UI/UX Design",
//       title: "ScanX",
//       imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1742497642/kxrtmszauv8nz6qnjryb.png",
//       url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1949-239&t=ZnBpp5DSBmvxs18v-1",
//       description:
//         "Designed a modern, user-friendly interface for ScanX, a document scanning and comparison platform. The Figma prototype features an intuitive Home Page, seamless User Authentication (Signup/Login), and dedicated pages for Scanning, Comparing, and Managing Documents. The UI ensures easy navigation, interactive file uploads, and a structured My Files section for efficient document storage. Additional pages include Contact Us, FAQs, and Privacy Policy, enhancing user accessibility and support. The design prioritizes clarity, responsiveness, and a professional experience.",
//     },
//     {
//     id: 6,
//     category: "UI/UX Design",
//     title: "TRAZEX11 Design",
//     imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/143d5d46f85270602bca04c545a9fce6c4748eca7b9c8802589ed4d35417bc78?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072", // Replace with your image
//     url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=829-3&t=RfkxXVmZ9ZQdsZBU-1",
//     description: "The UI/UX design phase of TRAZEX11, focusing on a seamless user experience for stock selection, contest participation, and real-time portfolio tracking. Designed with a dark-themed, modern financial aesthetic.",
//   },
//   {
//     id: 7,
//     category: "UI/UX Design",
//     title: "Portfolio Design",
//     imageUrl: portfoliobanner, // Replace with your image
//     url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1699-312&t=RfkxXVmZ9ZQdsZBU-1", // Add link if available
//     description: "A comprehensive design project for a personal portfolio, emphasizing clean typography, interactive motion elements, and a professional user interface to showcase developer accomplishments.",
//   },
//   {
//     id: 8,
//     category: "UI/UX Design",
//     title: "CodingGita Web Design",
//     imageUrl: codinggitafigma, // Replace with your image
//     url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=0-1&t=RfkxXVmZ9ZQdsZBU-1", // Add link if available
//     description: "A custom web design for CodingGita, focusing on educational platform architecture, intuitive navigation for students, and a vibrant, engaging aesthetic for tech learners.",
//   },
  
//     {
//     id: 9,
//     category: "UI/UX Design",
//     title: "Instagram",
//     imageUrl: "https://s3-alpha.figma.com/hub/file/3072810644/2c720c27-d222-4c66-9eef-b9cdcf0d0e01-cover.png", // Replace with your image
//     url: "https://www.figma.com/design/bDRJK3WaBXUQoEPsRh3ZVc/NEW?node-id=0-1&t=t0KizWOwHuBjhTD5-1", // Add link if available
//     description: "Instagram"
//   },
//   {
//     id: 5,
//     category: "Hackathon Project",
//     title: "WorkZen SHRMS",
//     platform: "ODOO x IITG (Offline Round)",
//     imageUrl: "YOUR_IMAGE_PATH_HERE", 
//     url: "#", 
//     description: "WorkZen SHRMS is a comprehensive, full-stack Human Resource Management System engineered to demonstrate robust Role-Based Access Control (RBAC), seamless integration between core HR functions, and complex business logic for payroll processing. Features four distinct, segregated user portals.",
//   },
//   {
//     id: 6,
//     category: "Hackathon Project",
//     title: "SynergySphere",
//     platform: "ODOO x NMIT (Online Round)",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#",
//     description: "A full-stack Role-Based Project & Collaboration Platform built with React, Node.js, Express, and MongoDB. Users can manage projects, assign tasks, and chat in real-time with dashboards tailored for Users and Admins.",
//   },
//   {
//     id: 7,
//     category: "Hackathon Project",
//     title: "Inventory Management",
//     platform: "ODOO x IITG (Online Round)",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#",
//     description: "A robust inventory tracking solution developed to optimize warehouse workflows, featuring real-time stock monitoring, automated reorder points, and detailed reporting analytics.",
//   },
//   {
//     id: 8,
//     category: "Hackathon Project",
//     title: "StockMaster",
//     platform: "ODOO x SPIT (Online Round)",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#",
//     description: "A real-time, full-stack warehouse inventory management system designed to streamline stock tracking and product movement. Built during the SPIT College Hackathon to solve manual tracking inefficiencies with an automated, scalable solution.",
//   },
//   {
//     id: 9,
//     category: "Hackathon Project",
//     title: "Dayflow",
//     platform: "ODOO x GCET (Online Round)",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#",
//     description: "A modern HRMS designed to digitize core HR operations including employee onboarding, attendance tracking, and payroll visibility, featuring specialized approval workflows for HR Officers.",
//   },
//   {
//     id: 10,
//     category: "Mobile Development",
//     title: "Wallet App",
//     tech: "React Native, Expo, Node.js, PostgreSQL",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#", // Add GitHub link or Expo link if available
//     description: "A full-stack cross-platform mobile expense tracker featuring Clerk authentication (6-digit verification). Built with an Express backend and Neon PostgreSQL, it includes real-time balance updates, Redis-based rate limiting, and a custom pull-to-refresh architecture.",
//   },
//   {
//     id: 11,
//     category: "Mobile Development",
//     title: "Trazex11 App",
//     tech: "React Native, Expo",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#",
//     description: "The mobile implementation of the Trazex11 fantasy platform. This frontend-focused project brings the stock-market gaming experience to mobile, focusing on gesture-based navigation, high-performance UI components, and a seamless cross-platform user experience.",
//   },
//   {
//     id: 12,
//     category: "Web Development", // Or "SaaS Platform"
//     title: "AgroSaaS",
//     tech: "Next.js, Multi-tenant Architecture",
//     imageUrl: "YOUR_IMAGE_PATH_HERE",
//     url: "#",
//     description: "A multi-tenant business management SaaS designed for agro-input shops. It digitizes offline workflows by combining Inventory Management, POS/Billing, and Supplier Management into a single secure platform where shop data remains fully isolated.",
//   }
//   ];

//   const categories = ["All", "Web Development", "Frontend Development", "UI/UX Design"];
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);

//   const filteredProjects =
//     selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

//   return (
//     <section className="flex flex-col rounded-none p-4 mt-28 max-md:px-2 relative">
//       <header className="text-center">
//         <h1 className="text-4xl font-semibold text-[#88db66] tracking-widest max-md:text-3xl">PORTFOLIO</h1>
//         <h2 className="font-jost mt-4 text-6xl font-semibold text-[#2e2e37] max-md:text-3xl">My Recent Works</h2>
//       </header>

//       <div className="flex justify-center gap-4 mt-8 mb-10 flex-wrap">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-6 py-2 text-lg font-semibold border-2 rounded-full transition-all max-md:text-sm max-md:px-4 max-md:py-1 
//               ${selectedCategory === category ? "bg-[#88db66] text-white border-[#88db66]" : "border-[#BCC7D3] text-[#2e2e37] hover:bg-[#88db66] hover:text-white"}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="space-y-6">
//         {filteredProjects.map((project) => (
//           <article
//             key={project.id}
//             className="border border-solid bg-neutral-300 bg-opacity-0 border-neutral-300 p-4 rounded-lg max-md:p-3"
//           >
//             <div className="flex items-center gap-5 max-md:flex-col max-md:gap-3">
//               <div className="w-[50%] max-md:w-full">
//                 <h3 className="text-xl text-[#9b9db1] max-md:text-base">{project.category}</h3>
//                 <p className="text-5xl text-[#2e2e37] max-md:text-3xl font-semibold">{project.title}</p>
//               </div>
//               <div className="w-[40%] max-md:w-full relative">
//                 <a href={project.url} target="_blank" rel="noopener noreferrer">
//                   <img
//                     src={project.imageUrl}
//                     alt={project.title}
//                     className="object-contain w-full rounded-2xl cursor-pointer max-md:rounded-lg max-md:w-[90%]"
//                   />
//                 </a>
//               </div>
//               <div className="w-[10%] max-md:w-full flex justify-center max-md:mt-3">
//                 <div
//                   onClick={() => setSelectedProject(project)}
//                   className="w-[50px] h-[50px] border-2 border-[#BCC7D3] rounded-full flex items-center justify-center bg-white hover:bg-[#80db66] cursor-pointer max-md:w-[40px] max-md:h-[40px]"
//                 >
//                   <img
//                     src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739954664/qi9kdueygxma105xflqk.png"
//                     alt="Plus Icon"
//                     className="w-1/2 h-1/2"
//                   />
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {selectedProject && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start p-4 overflow-y-auto"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col w-full max-w-[1000px] mt-10 mb-10"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {selectedProject.title === "TRAZEX11" ? (
//               <video
//                 src="https://res.cloudinary.com/dbrb9ptmn/video/upload/v1740980152/so6rxikt0v4vepkjjynw.mp4"
//                 controls
//                 autoPlay
//                 muted
//                 className="w-full max-h-[70vh] object-cover rounded-lg"
//               />
//             ) : (
//               <img
//                 src={selectedProject.imageUrl}
//                 alt={selectedProject.title}
//                 className="w-full max-h-[70vh] object-cover rounded-lg"
//               />
//             )}
//             <h2 className="text-3xl md:text-5xl font-bold mt-4 text-[#2e2e37] text-left">{selectedProject.title}</h2>
//             <p className="text-sm md:text-lg text-gray-600 mt-2 leading-relaxed text-left">{selectedProject.description}</p>
//             <div className="mt-4 md:mt-6">
//               <a
//                 href={selectedProject.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 md:px-8 py-2 md:py-3 bg-[#88db66] text-white text-sm md:text-lg font-semibold rounded-full hover:bg-green-600 transition-all"
//               >
//                 View Live
//               </a>
//             </div>
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="mt-4 text-red-500 text-sm md:text-lg font-semibold hover:underline self-start"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Asset Imports
import portfoliobanner from '../../assets/PORTFOLIO.png';
import codinggitafigma from '../../assets/CodinggitaFigma.png';

export default function Work() {
  const projects = [
  {
    id: 1,
    category: "Web Development",
    title: "TRAZEX11",
    tech: "React, Tailwind, Node.js, MongoDB",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/143d5d46f85270602bca04c545a9fce6c4748eca7b9c8802589ed4d35417bc78?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072",
    videoUrl: "https://res.cloudinary.com/dbrb9ptmn/video/upload/v1740980152/so6rxikt0v4vepkjjynw.mp4",
    url: "https://trazex11.netlify.app",
    github: "https://github.com/Mayank-Dudhatra/Trazex11",
    description: "TRAZEX11 is a stock market-based fantasy gaming platform where users create virtual teams using stocks instead of sports players. Features real-time prices, leaderboards, and portfolio management.",
  },
  {
    id: 2,
    category: "UI/UX Design",
    title: "Slick",
    tech: "Figma, Prototyping, Motion Design",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740031631/i7capxymvi9vidits3lb.png",
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1-3&t=NVFz6WvsNH1imv8L-1",
    description: "Slick is a modern UI/UX design project that focuses on user-friendly interactions, smooth animations, and an aesthetically pleasing layout.",
  },
  {
    id: 3,
    category: "Web Development",
    title: "Quadfusion",
    tech: "React, Node.js, Responsive Design",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740026990/zrmxfd4hechsg90qtszl.png",
    url: "https://quadfusion.netlify.app/",
    description: "Quadfusion is a powerful web development project designed to provide seamless user experiences with a clean and responsive interface.",
  },
  {
    id: 4,
    category: "Frontend Development",
    title: "Probo",
    tech: "React, CSS Animations, API Integration",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740032607/upddei7awxqd5cfgrl1b.png",
    url: "https://my-probo-clone.netlify.app/",
    description: "Probo is a frontend development project featuring dynamic UI elements, performance optimizations, and a sleek design.",
  },
  {
    id: 5,
    category: "UI/UX Design",
    title: "ScanX",
    tech: "Figma, Prototyping, UI Design",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1742497642/kxrtmszauv8nz6qnjryb.png",
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1949-239&t=ZnBpp5DSBmvxs18v-1",
    description: "A modern, user-friendly interface for ScanX, a document scanning and comparison platform focusing on clarity and professional experience.",
  },
  {
    id: 6,
    category: "UI/UX Design",
    title: "TRAZEX11 Design",
    tech: "Figma, FinTech UI, Dark Theme",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/143d5d46f85270602bca04c545a9fce6c4748eca7b9c8802589ed4d35417bc78?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072",
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=829-3&t=RfkxXVmZ9ZQdsZBU-1",
    description: "The UI/UX design phase of TRAZEX11, focusing on a seamless user experience for stock selection and real-time portfolio tracking.",
  },
  {
    id: 7,
    category: "UI/UX Design",
    title: "Portfolio Design",
    tech: "Figma, Interaction Design",
    imageUrl: portfoliobanner,
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1699-312&t=RfkxXVmZ9ZQdsZBU-1",
    description: "A comprehensive design project for a personal portfolio, emphasizing clean typography and interactive motion elements.",
  },
  {
    id: 8,
    category: "UI/UX Design",
    title: "CodingGita Web",
    tech: "Figma, EdTech Design, Prototyping",
    imageUrl: codinggitafigma,
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=0-1&t=RfkxXVmZ9ZQdsZBU-1",
    description: "A custom web design for CodingGita, focusing on intuitive navigation for students and an engaging aesthetic for tech learners.",
  },
  {
    id: 9,
    category: "UI/UX Design",
    title: "Instagram",
    tech: "Figma, Visual Design",
    imageUrl: "https://s3-alpha.figma.com/hub/file/3072810644/2c720c27-d222-4c66-9eef-b9cdcf0d0e01-cover.png",
    url: "https://www.figma.com/design/bDRJK3WaBXUQoEPsRh3ZVc/NEW?node-id=0-1&t=t0KizWOwHuBjhTD5-1",
    description: "Visual design exploration and UI recreation project for Instagram.",
  },
  {
    id: 10,
    category: "Hackathon Project",
    title: "WorkZen SHRMS",
    tech: "Full Stack, RBAC, Business Logic",
    platform: "ODOO x IITG (Offline)",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "A comprehensive Human Resource Management System engineered with robust Role-Based Access Control and payroll processing.",
  },
  {
    id: 11,
    category: "Hackathon Project",
    title: "SynergySphere",
    tech: "React, Node.js, MongoDB, Socket.io",
    platform: "ODOO x NMIT (Online)",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "A full-stack Role-Based Project & Collaboration Platform with real-time chat and role-specific dashboards.",
  },
  {
    id: 12,
    category: "Hackathon Project",
    title: "Inventory Management",
    tech: "Full Stack, Inventory Logic",
    platform: "ODOO x IITG (Online)",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "A robust inventory tracking solution developed to optimize warehouse workflows and reporting analytics.",
  },
  {
    id: 13,
    category: "Hackathon Project",
    title: "StockMaster",
    tech: "Full Stack, Real-time Tracking",
    platform: "ODOO x SPIT (Online)",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "Real-time warehouse inventory management system designed to streamline stock tracking and movement.",
  },
  {
    id: 14,
    category: "Hackathon Project",
    title: "Dayflow",
    tech: "React, Node.js, HRMS Logic",
    platform: "ODOO x GCET (Online)",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "Modern HRMS designed to digitize core HR operations like onboarding, attendance, and payroll visibility.",
  },
  {
    id: 15,
    category: "Mobile Development",
    title: "Wallet App",
    tech: "React Native, Expo, PostgreSQL, Clerk",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    github: "https://github.com/Mayank-Dudhatra/Wallet-App",
    description: "Full-stack mobile expense tracker with Clerk auth, real-time balance updates, and Redis-based rate limiting.",
  },
  {
    id: 16,
    category: "Mobile Development",
    title: "Trazex11 App",
    tech: "React Native, Expo, UI/UX",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "Mobile implementation of the Trazex11 platform focusing on gesture navigation and high-performance UI.",
  },
  {
    id: 17,
    category: "Web Development",
    title: "AgroSaaS",
    tech: "Next.js, Multi-tenant, PostgreSQL",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "Multi-tenant business management SaaS for agro-shops, combining Inventory, POS, and Supplier management.",
  }
];

  const categories = ["All", "Web Development", "UI/UX Design", "Mobile Development", "Hackathon Project"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="flex flex-col p-4 mt-28 max-md:px-4 relative bg-transparent">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-[#88db66] tracking-widest uppercase">Portfolio</h1>
        <h2 className="font-jost mt-4 text-7xl font-bold text-[#2e2e37] max-md:text-4xl">My Recent Works<span className="text-[#88db66]">.</span></h2>
      </header>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-20 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-8 py-3 text-lg font-bold rounded-full transition-all border-2 
              ${selectedCategory === category 
                ? "bg-[#88db66] text-white border-[#88db66] shadow-lg shadow-[#88db66]/20" 
                : "border-gray-200 text-gray-500 hover:border-[#88db66] hover:text-[#88db66]"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {filteredProjects.map((project) => (
          <motion.article
            layout
            key={project.id}
            className="group relative p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:border-[#88db66]/50 hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center gap-10 max-md:flex-col">
              
              {/* Left Side: Category, Title, and Tech Stack */}
              <div className="w-[50%] max-md:w-full">
                <span className="text-[#88db66] font-bold text-xs uppercase tracking-[0.2em]">{project.category}</span>
                <h3 className="text-5xl text-[#2e2e37] font-bold mt-2 mb-4 max-md:text-3xl transition-colors group-hover:text-[#88db66]">
                  {project.title}
                </h3>
                
                {/* Tech Stack on Front Card */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech?.split(',').map((stack, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-md group-hover:bg-[#88db66]/10 group-hover:text-[#88db66] transition-colors">
                      {stack.trim()}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Center: Image */}
              <div className="w-[40%] max-md:w-full overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                />
              </div>

              {/* Right: Plus Button */}
              <div className="w-[10%] flex justify-end max-md:w-full max-md:justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-14 h-14 rounded-full flex items-center justify-center border border-gray-300 bg-white group-hover:bg-[#88db66] group-hover:border-[#88db66] transition-all"
                >
                  <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739954664/qi9kdueygxma105xflqk.png" 
                    alt="Open" className="w-5 h-5 group-hover:invert" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal / Pop-up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2e2e37]/95 z-50 flex justify-center items-center p-6 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-3xl overflow-hidden bg-black aspect-video mb-8">
                {selectedProject.videoUrl ? (
                  <video src={selectedProject.videoUrl} controls autoPlay muted className="w-full h-full object-contain" />
                ) : (
                  <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
                )}
              </div>
              
              <h2 className="text-5xl font-bold text-[#2e2e37]">{selectedProject.title}</h2>
              <p className="text-gray-500 mt-6 text-xl leading-relaxed font-jost">
                {selectedProject.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-[#88db66] text-white font-bold rounded-full shadow-lg hover:-translate-y-1 transition-transform">
                  View Live
                </a>
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-[#2e2e37] text-[#2e2e37] font-bold rounded-full hover:bg-[#2e2e37] hover:text-white transition-all">
                    GitHub Repo
                  </a>
                )}
                <button onClick={() => setSelectedProject(null)} className="ml-auto text-red-500 font-bold hover:underline">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}