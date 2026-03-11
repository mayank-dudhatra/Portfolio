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
import walletAppImage from '../../assets/Wallet-App.png';
import trazex11AppImage from '../../assets/TRAZEX11-Expo.png';
import stockMasterImage from '../../assets/StockMaster.png';
import expenseManagementImage from '../../assets/Expense-Managment.png';
import synergySphereImage from '../../assets/SynergySphere.png';
import hrmsImage from '../../assets/HRMS.png';
import trazex11WebImage from '../../assets/TRAZEX11-APP.png';
import dayflowImage from '../../assets/DayFlow.png';
import trazex11UIUXImage from '../../assets/TRAZEX11-UIUX.png';


export default function Work() {
  const projects = [
  {
    id: 1,
    category: "Web Development",
    title: "TRAZEX11",
    tech: "React, Tailwind, Node.js, MongoDB",
    // imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/143d5d46f85270602bca04c545a9fce6c4748eca7b9c8802589ed4d35417bc78?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072",
    imageUrl: trazex11WebImage,
    videoUrl: "https://res.cloudinary.com/dbrb9ptmn/video/upload/v1740980152/so6rxikt0v4vepkjjynw.mp4",
    url: "https://trazex11.netlify.app",
    github: "https://github.com/Mayank-Dudhatra/Trazex11",
    description: "TRAZEX11 is a stock market-based fantasy gaming platform where users create virtual teams using stocks instead of sports players. Features real-time prices, leaderboards, and portfolio management.",
  },
  {
    id: 2,
    category: "Web Development",
    title: "AgroSaaS",
    tech: "Next.js, Multi-tenant, PostgreSQL",
    imageUrl: "YOUR_IMAGE_PATH_HERE",
    url: "#",
    description: "Multi-tenant business management SaaS for agro-shops, combining Inventory, POS, and Supplier management.",
  },
  {
    id: 3,
    category: "Mobile Development",
    title: "Wallet App",
    tech: "React Native, Expo, PostgreSQL, Clerk",
    imageUrl: walletAppImage,
    url: "#",
    github: "https://github.com/Mayank-Dudhatra/Wallet-App",
    description: "Wallet is a full-stack mobile expense tracking application built with React Native and Express.js, featuring secure Clerk authentication, real-time balance updates, and cross-platform compatibility for Android and iOS.",
  },
  {
    id: 4,
    category: "Mobile Development",
    title: "Trazex11 App",
    tech: "React Native, Expo, Socket.IO, MongoDB",
    imageUrl: trazex11AppImage,
    url: "#",
    description: "TRAZEX11 is a gamified mobile stock market contest platform that transforms stock market learning into an interactive and competitive experience with real-time data, virtual teams, and contest-based gameplay.",
  },
  {
    id: 5,
    category: "Hackathon Project",
    title: "StockMaster",
    tech: "React, TypeScript, Node.js, MongoDB, Socket.IO",
    platform: "ODOO x SPIT (Online)",
    imageUrl: stockMasterImage,
    url: "#",
    description: "StockMaster is a smart warehouse inventory management system developed during the SPIT College Hackathon to automate stock tracking, multi-warehouse operations, and real-time inventory updates with RBAC and analytics dashboards.",
  },
  {
    id: 6,
    category: "Web Development",
    title: "Expense Management",
    tech: "React, TypeScript, Node.js, MongoDB, Socket.IO",
    imageUrl: expenseManagementImage,
    url: "#",
    description: "A full-stack multi-tenant expense tracking and reimbursement platform with OCR-based receipt processing, role-based access control, and real-time updates for efficient organizational expense management.",
  },
  {
    id: 7,
    category: "Hackathon Project",
    title: "SynergySphere",
    tech: "React, TypeScript, Node.js, MongoDB",
    platform: "ODOO x NMIT (Online)",
    imageUrl: synergySphereImage,
    url: "#",
    description: "SynergySphere is a full-stack project management and collaboration platform with role-based access control, task management, team communication, and project-based chat system for improved team coordination.",
  },
  {
    id: 8,
    category: "Hackathon Project",
    title: "WorkZen SHRMS",
    tech: "Full Stack, RBAC, Business Logic",
    platform: "ODOO x IITG (Offline)",
    imageUrl: hrmsImage,
    url: "#",
    description: "A comprehensive Human Resource Management System engineered with robust Role-Based Access Control and payroll processing.",
  },
  {
    id: 17,
    category: "Hackathon Project",
    title: "Dayflow",
    tech: "React/Next.js, Node.js, MongoDB, JWT",
    platform: "ODOO x GCET (Online)",
    imageUrl: dayflowImage,
    url: "#",
    description: "Dayflow is a full-stack Human Resource Management System (HRMS) designed to streamline and digitize everyday HR operations with role-based dashboards, attendance tracking, leave management, and payroll visibility.",
  },
  {
    id: 9,
    category: "Web Development",
    title: "Quadfusion",
    tech: "React, Node.js, Responsive Design",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740026990/zrmxfd4hechsg90qtszl.png",
    url: "https://quadfusion.netlify.app/",
    github: "https://github.com/mayank-dudhatra/4-App",
    description: "Quadfusion is a powerful web development project designed to provide seamless user experiences with a clean and responsive interface.",
  },
  {
    id: 10,
    category: "Frontend Development",
    title: "Probo",
    tech: "React, CSS Animations, API Integration",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740032607/upddei7awxqd5cfgrl1b.png",
    url: "https://my-probo-clone.netlify.app/",
    description: "Probo is a frontend development project featuring dynamic UI elements, performance optimizations, and a sleek design.",
  },
  {
    id: 11,
    category: "UI/UX Design",
    title: "ScanX",
    tech: "Figma, Prototyping, UI Design, Responsive Design",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1742497642/kxrtmszauv8nz6qnjryb.png",
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1949-239&t=ZnBpp5DSBmvxs18v-1",
    description: "ScanX is a modern document scanning and comparison platform UI/UX design created to simplify how users digitize, manage, and analyze documents. The platform focuses on providing a clean, intuitive, and professional user experience.",
  },
  {
    id: 12,
    category: "UI/UX Design",
    title: "Slick",
    tech: "Figma, Prototyping, Motion Design",
    imageUrl: "https://res.cloudinary.com/dbrb9ptmn/image/upload/v1740031631/i7capxymvi9vidits3lb.png",
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1-3&t=NVFz6WvsNH1imv8L-1",
    description: "Slick is a modern UI/UX design project that focuses on user-friendly interactions, smooth animations, and an aesthetically pleasing layout.",
  },
  {
    id: 13,
    category: "UI/UX Design",
    title: "Portfolio Design",
    tech: "Figma, Interaction Design",
    imageUrl: portfoliobanner,
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=1699-312&t=RfkxXVmZ9ZQdsZBU-1",
    description: "A comprehensive design project for a personal portfolio, emphasizing clean typography and interactive motion elements.",
  },
  {
    id: 14,
    category: "UI/UX Design",
    title: "TRAZEX11 Design",
    tech: "Figma, FinTech UI, Dark Theme, Responsive Design",
    imageUrl: trazex11UIUXImage,
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=829-3&t=RfkxXVmZ9ZQdsZBU-1",
    description: "The comprehensive UI/UX design phase of TRAZEX11, a stock market fantasy gaming platform. A modern, dark-themed interface designed for seamless stock selection, contest participation, and real-time portfolio tracking.",
  },
  {
    id: 15,
    category: "UI/UX Design",
    title: "CodingGita Web",
    tech: "Figma, EdTech Design, Prototyping",
    imageUrl: codinggitafigma,
    url: "https://www.figma.com/design/5FzaWNrX0zAdTpEXdIXkfj/My-Free?node-id=0-1&t=RfkxXVmZ9ZQdsZBU-1",
    description: "A custom web design for CodingGita, focusing on intuitive navigation for students and an engaging aesthetic for tech learners.",
  },
  {
    id: 16,
    category: "UI/UX Design",
    title: "Instagram",
    tech: "Figma, Interactive Prototyping, Mobile UI",
    imageUrl: "https://s3-alpha.figma.com/hub/file/3072810644/2c720c27-d222-4c66-9eef-b9cdcf0d0e01-cover.png",
    url: "https://www.figma.com/design/bDRJK3WaBXUQoEPsRh3ZVc/NEW?node-id=0-1&t=t0KizWOwHuBjhTD5-1",
    description: "A comprehensive UI/UX mobile application design inspired by Instagram, featuring interactive prototypes, complete user flows, and mobile-first design principles created in Figma.",
  },
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
              
              {selectedProject.title === "TRAZEX11" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "Vite", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Chart.js",
                        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "CORS", 
                        "Express Rate Limit", "Helmet", "Socket.io", "Yahoo Finance API"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      TRAZEX11 is a gamified stock market contest platform where users create virtual stock teams and compete in contests based on real-time market performance. Inspired by fantasy sports platforms, TRAZEX11 transforms stock market learning into an engaging and competitive experience.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      Instead of traditional trading simulators, users select 11 stocks to form a team, assign captain and vice-captain roles, and participate in daily, weekly, and special contests. Team scores are calculated based on live stock price movements, and users compete with others on leaderboards to earn virtual coins and rewards.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The platform aims to make stock market participation accessible, interactive, and risk-free, allowing beginners to learn market behavior while experienced users can test strategies through competitive gameplay.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Stock Team Creation – Users build teams by selecting 11 stocks whose performance determines their contest score.",
                        "Captain & Vice-Captain System – Assign C and VC roles to stocks to gain score multipliers and strategic advantages.",
                        "Contest-Based Gameplay – Participate in daily, weekly, and special contests and compete against other users.",
                        "Real-Time Stock Data – Fetches live stock market data to calculate team performance dynamically.",
                        "Leaderboard System – Real-time rankings show top-performing teams and contest winners.",
                        "Virtual Coins & Rewards – Users earn coins through contests, referrals, and achievements.",
                        "User Dashboard – Track joined contests, team performance, contest history, and wallet details.",
                        "Real-Time Updates – Live stock updates and contest results using WebSocket-based communication.",
                        "Responsive UI – Optimized interface across mobile, tablet, and desktop devices."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Quadfusion" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "Vite", "React Router DOM", "Axios", "CSS3", "ESLint", "JavaScript (ES6+)",
                        "TheMealDB API", "TheCocktailDB API", "Potter API", "Indian Bank IFSC API", 
                        "OpenWeatherMap API", "Alpha Vantage API"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      Quadfusion is a multi-feature web application that brings together several interactive tools and data services into a single platform. The application allows users to explore food recipes, discover cocktail preparations, learn about the Harry Potter universe, search Indian bank details using IFSC codes, and view real-time weather and stock market data.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The goal of Quadfusion is to demonstrate modern frontend development practices and API integration by combining multiple real-world data services within a unified and intuitive interface. The platform is designed with a clean dashboard layout that lets users easily navigate between different modules while maintaining a responsive and engaging user experience.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Multi-Service Dashboard – Centralized home interface with navigation cards for accessing different tools and modules.",
                        "Meals Explorer – Browse international recipes, view ingredients and cooking instructions, and access original recipe sources.",
                        "Cocktail Recipes Explorer – Discover cocktail drinks with preparation steps, ingredients list, and serving suggestions.",
                        "Harry Potter Explorer – Explore characters, magical spells, and Hogwarts houses from the wizarding universe.",
                        "Indian Bank IFSC Finder – Search bank details using IFSC codes and retrieve branch information such as address and bank name.",
                        "Weather Information Module – Displays real-time weather conditions including temperature, humidity, and wind speed.",
                        "Stock Market Data Viewer – Track stock market information including open, close, high, low prices, and trading volume.",
                        "API-Driven Data Fetching – Integrates multiple external APIs to provide dynamic and real-time data across modules.",
                        "Responsive UI Design – Optimized interface for smooth experience across desktop, tablet, and mobile devices."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "WorkZen SHRMS" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "Vite", "React Router DOM", "Axios", "Material UI (MUI)", "Tailwind CSS", "Recharts",
                        "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "bcryptjs", 
                        "Nodemailer", "CORS", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      WorkZen is a full-stack Human Resource Management System (HRMS) designed to digitize and streamline HR operations within an organization. The platform manages employee records, attendance tracking, leave requests, and payroll processing through a centralized system.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      It implements Role-Based Access Control (RBAC) to provide dedicated dashboards for administrators, HR officers, payroll officers, and employees. By connecting employee data with attendance, leave management, and payroll workflows, the system helps organizations maintain accurate records and automate salary calculations efficiently.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Role-Based Access Control (RBAC) – Separate portals for Admin, HR Officer, Payroll Officer, and Employees.",
                        "Employee Management – Create and manage employee profiles and accounts.",
                        "Attendance & Leave Management – Track employee attendance and handle leave requests.",
                        "Payroll Processing – Automated salary calculations with configurable deductions.",
                        "Payslip Generation – Generate detailed digital payslips for employees.",
                        "Analytics Dashboard – Visual insights for attendance trends, payroll data, and workforce metrics.",
                        "Secure Authentication – JWT-based login with encrypted password protection."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "StockMaster" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "TypeScript", "Vite", "React Router DOM", "Axios", "TanStack Query", 
                        "Tailwind CSS", "Shadcn UI", "Radix UI", "Recharts", "Lucide React", "Node.js", 
                        "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT Authentication", "bcryptjs", 
                        "Nodemailer", "OTP Generator", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      StockMaster is a full-stack warehouse inventory management system developed during the SPIT College Hackathon to automate stock tracking and warehouse operations. The platform enables businesses to manage products, monitor inventory levels across multiple warehouses, and track stock movements such as receipts, deliveries, transfers, and adjustments in real time.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The system provides role-based access control, real-time updates, and analytics dashboards that help warehouse managers and business owners monitor stock levels, detect low inventory, and maintain a complete audit trail of all inventory transactions. By replacing manual tracking methods with a centralized digital platform, StockMaster improves inventory visibility, operational efficiency, and decision-making.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Multi-Warehouse Management – Manage multiple warehouse locations and track warehouse-specific inventory levels.",
                        "Product & SKU Management – Add, update, and organize products with category, SKU, and stock-level configuration.",
                        "Inventory Operations – Handle stock receipts, deliveries, transfers, and adjustments with full transaction tracking.",
                        "Real-Time Updates – Live inventory updates across users using WebSocket communication.",
                        "Role-Based Access Control (RBAC) – Secure system with Admin, Inventory Manager, and Warehouse Staff roles.",
                        "Low Stock Alerts – Automatic notifications when product stock falls below the minimum level.",
                        "Inventory Analytics Dashboard – Visual charts for stock distribution, warehouse statistics, and operational insights.",
                        "Movement History & Audit Trail – Complete record of all inventory transactions for tracking and accountability.",
                        "Secure Authentication – JWT-based authentication with OTP email verification."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Expense Management" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "TypeScript", "Vite", "React Router", "TanStack React Query", "Tailwind CSS", 
                        "Shadcn UI", "Radix UI", "Framer Motion", "GSAP", "Lottie", "Three.js", "Node.js", "Express.js", 
                        "MongoDB", "Mongoose", "Socket.IO", "Redis", "Bull Queue", "JWT Authentication", "bcryptjs", 
                        "Nodemailer", "Joi Validation", "Helmet Security", "Express Rate Limit", "Sharp", "PDF-Parse", 
                        "Tesseract.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      Expense Management System is a full-stack multi-tenant expense tracking and reimbursement platform designed to help organizations manage employee expenses efficiently. The system allows employees to submit expenses with receipt uploads, while managers and administrators review, approve, or reject requests through a structured workflow.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The platform implements role-based access control for Admin, Manager, and Employee roles, ensuring secure company-level data isolation. It also supports real-time updates, OCR-based receipt processing, and analytics dashboards, enabling organizations to monitor spending patterns, streamline reimbursement processes, and maintain transparent financial records.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Multi-Tenant Architecture – Company-based data isolation with separate users and expense records.",
                        "Role-Based Access Control (RBAC) – Dedicated dashboards for Admin, Manager, and Employee roles.",
                        "Expense Submission & Approval Workflow – Employees submit expenses while managers/admins approve or reject them.",
                        "OCR-Based Receipt Processing – Extract expense details from uploaded receipts using OCR technology.",
                        "Real-Time Updates – Live notifications and status updates using WebSocket communication.",
                        "Expense Tracking & History – Maintain a complete record of submitted and processed expenses.",
                        "Analytics Dashboard – Visual insights for expense trends and financial monitoring.",
                        "Secure Authentication System – JWT-based authentication with refresh token support."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Dayflow" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js / Next.js", "Node.js", "Express.js", "MongoDB / PostgreSQL", "JWT Authentication",
                        "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git", "GitHub", "Postman", "VS Code"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      Dayflow is a full-stack Human Resource Management System (HRMS) designed to streamline and digitize everyday HR operations within an organization. The platform centralizes employee management, attendance tracking, leave requests, and payroll visibility into a single system, helping organizations replace manual processes with an efficient digital workflow.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The system uses role-based access control to provide dedicated dashboards for Admin/HR officers and employees. Administrators can manage employee records, approve leave requests, and monitor workforce activity, while employees can track attendance, apply for leave, and access their personal work information. By integrating HR workflows into a unified platform, Dayflow improves transparency, operational efficiency, and record management across organizations.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Secure Authentication System – Signup and login with role-based access for Admin/HR and Employees.",
                        "Role-Based Dashboards – Separate dashboards for administrators and employees.",
                        "Employee Profile Management – Manage employee personal information, job details, and documents.",
                        "Attendance Tracking – Daily check-in/check-out system with attendance status monitoring.",
                        "Leave Management System – Employees can apply for leave while HR/Admin review and approve requests.",
                        "Payroll Visibility – Employees can view salary details while administrators manage payroll data.",
                        "Approval Workflows – Structured workflow for leave requests and HR approvals.",
                        "Reports & Analytics – Attendance reports, salary slips, and workforce insights for HR monitoring.",
                        "Centralized HR Dashboard – Overview of employee activity, approvals, and workforce statistics."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "SynergySphere" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "TypeScript", "Vite", "Tailwind CSS", "PostCSS", "shadcn/ui", "Node.js", 
                        "Express.js", "MongoDB", "Mongoose", "JWT Authentication", "JavaScript (ES6+)", "HTML5", 
                        "CSS3", "REST APIs", "Context API", "Git", "GitHub", "Postman", "VS Code", "ESLint"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      SynergySphere is a full-stack project management and collaboration platform that enables teams to organize projects, manage tasks, and communicate within a centralized workspace. The system allows users to create projects, assign tasks, collaborate with team members, and track project progress through structured dashboards.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The platform implements role-based access control with separate dashboards for Admin and Users. Admins can manage projects and team members, while users can collaborate on tasks and communicate through project-based chat. By integrating project management, task tracking, and team communication into one system, SynergySphere improves team coordination and productivity.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Authentication & Authorization – Secure login system with JWT-based authentication and protected routes.",
                        "Role-Based Access Control (RBAC) – Separate dashboards for Admin and User roles.",
                        "Project Management – Create and manage projects with team collaboration features.",
                        "Task Management (Kanban Style) – Track tasks using status-based workflow boards.",
                        "Team Collaboration – Invite and manage team members within projects.",
                        "Project Chat System – Project-based messaging with reply and threading support.",
                        "Notifications Center – Centralized notification interface for updates and activity alerts.",
                        "Dashboard Interface – Dedicated dashboards for managing projects, tasks, and team activity."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Wallet App" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React Native", "Expo", "React Navigation", "JavaScript (ES6+)", "Node.js", "Express.js", 
                        "PostgreSQL (Neon)", "Clerk Authentication", "Redis", "REST APIs"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      Wallet is a full-stack mobile expense tracking application built using React Native and Express.js that helps users manage their daily income and expenses. The application allows users to securely sign up, track financial transactions, and monitor their current balance through a simple and intuitive mobile interface.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The system integrates cloud-based authentication, backend APIs, and database storage to provide a seamless experience across mobile devices. Users can add income or expense transactions, view transaction history, and manage their financial records in real time. The platform also supports secure login with email verification and ensures smooth mobile performance across both Android and iOS devices.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Secure Authentication – Email-based login and signup with verification using Clerk.",
                        "Transaction Management – Add income and expense transactions with automatic balance updates.",
                        "Expense Tracking Dashboard – View current balance and transaction history on the home screen.",
                        "Delete Transactions – Remove transactions and instantly update the balance.",
                        "Pull-to-Refresh – Refresh transaction data to sync with the backend.",
                        "Cross-Platform Mobile App – Works on both Android and iOS using React Native.",
                        "Secure Backend Integration – REST APIs built with Express.js connected to a cloud database.",
                        "Rate Limiting & Security – Redis-based rate limiting to protect backend APIs."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Probo" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3",
                        "Git", "GitHub", "VS Code"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      This project is a web-based prediction market platform interface that allows users to explore and participate in event-based predictions through a modern and interactive UI. The platform presents different prediction categories, market cards, and user engagement elements within a clean and responsive dashboard.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The goal of this project was to build a high-performance, responsive frontend application that replicates a real-world fintech-style user experience while focusing on modern UI design, component-based architecture, and fast rendering using modern web technologies.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Interactive Prediction Market UI – Displays multiple prediction events with dynamic market cards.",
                        "Responsive Layout – Optimized interface for desktop, tablet, and mobile devices.",
                        "Modern Dashboard Interface – Clean navigation and structured layout for exploring prediction markets.",
                        "Reusable Component Architecture – Built using modular React components for scalability.",
                        "Fast Performance – Powered by Vite for fast development and optimized builds.",
                        "Modern UI Styling – Styled with Tailwind CSS for responsive and utility-first design.",
                        "Smooth User Experience – Structured layout with intuitive navigation and interactive elements."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Instagram" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Figma", "Interactive Prototyping", "Mobile UI Design Principles"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      This project is a UI/UX mobile application design inspired by Instagram, created using Figma. The design includes major screens such as login, home feed, stories, search, reels, profile, messaging, and content upload. Each interface closely follows Instagram's visual style while being recreated as a learning exercise to practice layout design and user interface structure.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      All screens are connected through interactive prototype links, enabling a smooth simulation of the user journey throughout the application. The design follows proper mobile layout guidelines, including consistent spacing, alignment, and grid-based structure. Icons, typography, and color schemes are designed to resemble the original application while maintaining clarity and usability.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      This project focuses on improving skills in mobile interface design, user flow planning, interaction design, and maintaining visual consistency across multiple screens.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Includes screens for login, feed, profile, messaging, upload, and stories",
                        "Interactive prototype with connected user flow",
                        "Proper mobile grid system and balanced spacing",
                        "Recreates the main UI behavior and layout of Instagram",
                        "Designed with a mobile-first approach",
                        "Emphasis on UI consistency, icons, and good UX practices"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "Trazex11 App" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React Native", "Expo", "React Navigation", "Node.js", "Express.js", "MongoDB", "Mongoose", 
                        "WebSockets / Socket.IO", "REST APIs", "JavaScript (ES6+)", "HTML5", "CSS3", "JWT", 
                        "Bcrypt", "CORS", "Express Rate Limit", "Helmet", "Yahoo Finance API"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      TRAZEX11 is a gamified mobile stock market contest platform that allows users to create virtual stock teams and compete in contests based on real-time market performance. Inspired by fantasy sports platforms, the app transforms stock market learning into an interactive and competitive experience.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      Users select 11 stocks to form a team, assign Captain and Vice-Captain roles, and participate in daily, weekly, and special contests. Team scores are calculated using live stock price movements, and users compete on leaderboards to earn virtual coins and rewards. The platform provides a risk-free environment where beginners can learn about stock market behavior while experienced users can test strategies through competitive gameplay.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Stock Team Creation – Build teams by selecting 11 stocks whose performance determines contest scores.",
                        "Captain & Vice-Captain System – Assign multiplier roles to maximize scoring strategy.",
                        "Contest-Based Gameplay – Participate in daily, weekly, and special contests against other users.",
                        "Real-Time Stock Data Integration – Live stock prices used to dynamically calculate team performance.",
                        "Leaderboard System – Real-time rankings to track top-performing teams and contest winners.",
                        "Virtual Coins & Rewards – Earn coins through contests, achievements, and referrals.",
                        "User Dashboard – Track teams, joined contests, wallet balance, and contest history.",
                        "Real-Time Updates – Live stock and contest updates using WebSocket-based communication.",
                        "Mobile-Optimized UI – Smooth experience across Android and iOS devices."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "ScanX" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Figma", "UI/UX Design", "Prototyping", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Component-Based Architecture"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      ScanX is a modern document scanning and comparison platform UI/UX design created to simplify how users digitize, manage, and analyze documents. The platform focuses on providing a clean, intuitive, and professional user experience for scanning documents, comparing files, and generating similarity reports.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      This project was designed as part of an internship selection task, where the goal was to create a complete product interface including document upload, scanning workflows, comparison reports, file management, and support pages. The design emphasizes usability, clear workflows, and scalable dashboard architecture.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      The design prioritizes clarity, responsiveness, and a professional experience, making document management accessible to all users regardless of technical expertise.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {[
                        "Document Scanning Interface – Upload or capture documents and convert them into digital format.",
                        "Document Comparison System – Compare two documents and highlight similar and unique content.",
                        "Similarity Report Visualization – Displays similarity percentage with highlighted matching sections.",
                        "File Management Dashboard – Manage uploaded documents with options to view, download, and organize files.",
                        "Step-by-Step Workflow Design – Clear process flow for scanning, comparing, and downloading reports.",
                        "Intuitive User Authentication – Seamless Signup/Login interface for secure access.",
                        "Contact Us & Support Pages – Help center with FAQs and support interface for user assistance.",
                        "Privacy & Security Pages – Structured privacy policy and platform information pages.",
                        "Modern Responsive UI – Clean and user-friendly interface designed for professional platforms."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : selectedProject.title === "TRAZEX11 Design" ? (
                <div className="mt-6 space-y-8">
                  {/* Technology Stack */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Figma", "UI/UX Design", "Prototyping", "Component Design System", "Dark Theme Design", "Responsive Design", "Interaction Design"
                      ].map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-[#88db66]/10 text-[#88db66] text-sm font-semibold rounded-lg border border-[#88db66]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Project Overview</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      The UI/UX design phase of TRAZEX11, a gamified stock market contest platform. This comprehensive design project focuses on creating a seamless, intuitive user experience for stock selection, contest participation, and real-time portfolio tracking.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost mb-4">
                      The design follows a modern dark-themed, professional financial aesthetic that appeals to stock market enthusiasts and casual investors. Every interface element is carefully crafted to guide users through the stock team creation process, contest participation, and portfolio management with minimal friction.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-jost">
                      This design project demonstrates comprehensive UI/UX principles including user research, information architecture, wireframing, prototyping, and interactive design for a complex fintech application.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#2e2e37] mb-4">Design Highlights</h3>
                    <div className="space-y-3">
                      {[
                        "Stock Selection Interface – Intuitive interface for browsing, searching, and selecting 11 stocks for team formation.",
                        "Captain & Vice-Captain Assignment – Clear visual hierarchy for designating multiplier roles with instant feedback.",
                        "Contest Dashboard – Comprehensive view of available contests, participation status, and scoring system.",
                        "Real-Time Portfolio Tracker – Live updates of stock prices and team performance with visual charts and metrics.",
                        "Leaderboard Design – Engaging leaderboard interface showing rankings, scores, and user achievements.",
                        "Mobile-First Responsive Design – Optimized for mobile, tablet, and desktop devices with consistent experience.",
                        "Dark Theme Aesthetic – Professional dark theme with green accent colors for fintech appeal.",
                        "Interactive Prototyping – Connected user flows and interactive elements for realistic prototyping.",
                        "Component Design System – Reusable UI components and design patterns for scalability."
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#88db66] rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-jost">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 mt-6 text-xl leading-relaxed font-jost">
                  {selectedProject.description}
                </p>
              )}

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