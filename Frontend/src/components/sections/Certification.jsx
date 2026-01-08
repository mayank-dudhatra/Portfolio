import React from 'react';
import { motion } from 'framer-motion';

import eduztrikInternImg from '../../assets/certificates/Mayank-Dudhatra-Eduztrik-Certificate.jpg';
import eduztrikLOrImg from '../../assets/certificates/Mayank-Dudhatra-Eduztrik-LOR.jpg';
import hrFrontendImg from '../../assets/certificates/Frontend Developer.png';
import hrRestApiImg from '../../assets/certificates/REST API Intermidiate.png';
import hrReactImg from '../../assets/certificates/React Basi.png';
import hrNodeImg from '../../assets/certificates/NODEJS Basic.png';
import hrProblemSolvingImg from '../../assets/certificates/Problem Solving Basic.png';
import hrCssImg from '../../assets/certificates/CSS Basic.png';
import sololearnCImg from '../../assets/certificates/Introduction-to-c.jpg';
import azureSeminarImg from '../../assets/certificates/Introduction to Azure Basic.jpg';
import azureServicesImg from '../../assets/certificates/Azure-Certificate.png';
import leetcode50Img from '../../assets/Fifty.png';
import leetcode100Img from '../../assets/Hundreded.png';



const certificates = [
  {
    title: "Certificate of Internship",
    platform: "Eduztrik",
    image: eduztrikInternImg, // Use the imported variable
    link: "https://drive.google.com/file/d/1oWaK67xihIbHGRdNTwYAi700oyhT7_m6/view?usp=sharing",
  },
  {
    title: "Letter of Recommendation",
    platform: "Eduztrik",
    image: eduztrikLOrImg,
    link: "https://drive.google.com/file/d/1DLMOc-BLSNec45BAB_Tp7SIqd8lk-zzU/view?usp=sharing",
  },
    {
    title: "Azure Fundamentals",
    platform: "SkillupLearn",
    image: azureSeminarImg,
    link: "https://drive.google.com/file/d/1Qk909PHcm0vpA-Gh5W2mCTsdbCDUzGcG/view?usp=sharing",
  },
  {
    title: "Azure Services Basic",
    platform: "SkillupLearn",
    image: azureServicesImg,
    link: "https://drive.google.com/file/d/17qhiJJKLttF1nXLEWWBqwmwR8CTYiKLd/view?usp=sharing",
  },
  {
    title: "Frontend Developer (Software Engineer)",
    platform: "HackerRank",
    image: hrFrontendImg,
    link: "https://www.hackerrank.com/certificates/iframe/a636aa387192",
  },
  {
    title: "REST API Intermediate",
    platform: "HackerRank",
    image: hrRestApiImg,
    link: "https://www.hackerrank.com/certificates/iframe/67de083eeb71",
  },
  {
    title: "React (Basic)",
    platform: "HackerRank",
    image: hrReactImg,
    link: "https://www.hackerrank.com/certificates/iframe/fadda91619ae",
  },
  {
    title: "Node.js (Basic)",
    platform: "HackerRank",
    image: hrNodeImg,
    link: "https://www.hackerrank.com/certificates/iframe/5a078bf4c2eb",
  },
  {
    title: "Problem Solving (Basic)",
    platform: "HackerRank",
    image: hrProblemSolvingImg,
    link: "https://www.hackerrank.com/certificates/iframe/620b372dcd60",
  },
  {
    title: "CSS (Basic)",
    platform: "HackerRank",
    image: hrCssImg,
    link: "https://www.hackerrank.com/certificates/iframe/eb3ef0087606",
  },
  {
    title: "Introduction to C",
    platform: "Sololearn",
    image: sololearnCImg,
    link: "https://www.sololearn.com/certificates/CC-XOOBKQQG",
  },
  {
    title: "50+ Days Badge 2025",
    platform: "LeetCode",
    image: leetcode50Img,
    link: "https://leetcode.com/medal/?showImg=0&id=8225196&isLevel=false",
  },
  {
    title: "100+ Days Badge 2025",
    platform: "LeetCode",
    image: leetcode100Img,
    link: "https://leetcode.com/medal/?showImg=0&id=8692439&isLevel=false",
  }
];

const Certification = () => {
  return (
    <section id="Certificates" className="py-24 bg-transparent relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#80db66]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#80db66]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // <--- ADDED THIS
              className="text-[#80db66] font-jost font-medium tracking-widest uppercase text-sm"
            >
              Accomplishments
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // <--- ADDED THIS
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-[#2e2e37] font-jost mt-2"
            >
              Certifications & Badges<span className="text-[#80db66]">.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} // <--- ADDED THIS
            className="hidden md:block h-[1px] flex-1 bg-white/10 mx-10 mb-4"
          ></motion.div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} // <--- ADDED THIS (margin helps trigger slightly before it enters)
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Rest of your card code remains exactly the same... */}
              <div className="relative z-10 bg-white/[0.03] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#80db66]/30 transition-all duration-500 shadow-2xl">
                 {/* ... image and content ... */}
                 <div className="relative h-60 overflow-hidden">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center translate-y-4 group-hover:translate-y-0">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#80db66] transition-colors shadow-xl">
                      Verify Credential
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#80db66]"></div>
                    <p className="text-[#80db66] text-xs font-bold uppercase tracking-[0.2em]">{cert.platform}</p>
                  </div>
                  <h3 className="text-[#4d4d5c] text-xl font-semibold leading-snug group-hover:text-[#80db66] transition-colors duration-300">{cert.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#80db66]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;