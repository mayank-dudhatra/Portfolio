"use client";
import React from "react";

const skillsData = [
  { name: "HTML&CSS", percentage: 95 },
  { name: "Javascript", percentage: 80 },
  { name: "C&C++", percentage: 85 },
  { name: "Node.js", percentage: 90 },
  { name: "Express", percentage: 85 },
  { name: "React", percentage: 90 },
  { name: "Tailwind", percentage: 95 },
  { name: "Figma", percentage: 90 },
  { name: "Git&Github", percentage: 85 },
];

const CircularProgress = ({ percentage, skillName }) => {
    const radius = 70; // Increased radius
    const strokeWidth = 4; // Thick stroke for visibility
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const size = radius * 2 + strokeWidth; // Adjust SVG size
  
    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#D3D3D3" // Light gray background stroke
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#4CAF50" // Green progress stroke
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        {/* Centered Text */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-black">{percentage}%</span>
          <span className="text-lg font-semibold text-[#2e2e37">{skillName}</span>
        </div>
      </div>
    );
  };
  
  
  
  
const SkillsSection = () => {
  return (
    <section className="mt-20 font-jost">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[44%] max-md:w-full">
          <section className="grow font-semibold max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-start px-8 text-black max-md:px-5 max-md:max-w-full">
              <h2 className="text-[36px] text-[#80db66] font-semibold tracking-[9px]">My Skills</h2>
              <h1 className="mt-2 text-[55px] font-semibold text-[#2e2e37] max-md:max-w-full max-md:text-4xl">
                My Skill Growing Overtime
              </h1>
              <p className="self-stretch text-[24px] mt-10 font-normal text-[#4d4d5c] max-md:max-w-full">
                I am continuously developing my technical and soft skills through hands-on projects,
                coursework, and self-driven learning. As I progress in my B.Tech journey, I am gaining
                a deeper understanding of Full Stack Development, UI/UX Design, and Web Technologies,
                applying them in real-world scenarios. My ability to adapt to new tools and technologies,
                paired with a focus on user-centered design, ensures that I am always striving to create
                scalable and impactful digital solutions.
              </p>
            </div>
            <h1 className="mt-14  text-[#e2ecf6] text-[250px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Skills
            </h1>
          </section>
        </div>
        <div className="w-[56%] max-md:w-full">
          <div className="mt-4 w-full max-md:mt-10 max-md:max-w-full">
            <div className="grid grid-cols-3 gap-1 max-md:grid-cols-1">
              {skillsData.map((skill, index) => (
                <article
                  key={index}
                  className="flex flex-col text-2xl font-semibold text-black"
                >
                  <div className="flex relative flex-col px-16  aspect-square max-md:px-5">
                    <CircularProgress percentage={skill.percentage} />
                    <span className="self-center text-center font-jost text-[#2e2e37] font-semibold mt-6 text-[25px]">{skill.name}</span>
                  </div>
                  
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
