// export default function Runningline() {
//   return (
//     <>
//       <div className="marquee-container">
//         <h1 className="stroke-text marquee mt-40 mb-40 text-[96px] font-semibold leading-none tracking-[12.96px]">
//           <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>
//           <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>
//           <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>
//           <span>I’M OPEN FOR NEW PROJECTS * LET’S WORK TOGETHER.</span>

//         </h1>
//       </div>
//     </>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

const RunningLine = () => {
  const row1Text = "Full Stack Developer * Frontend Developer * Backend Developer * UI/UX Designer * ";
  const row2Text = "I’m Open for new projects * Let’s Work Together * I’m Open for new projects * Let’s Work Together * ";

  // Animation settings
  const marqueeVariants = (direction = "left") => ({
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25, // Adjust speed here
          ease: "linear",
        },
      },
    },
  });

  return (
    <div className="py-10 overflow-hidden bg-transparent flex flex-col gap-4">
      
      {/* Top Line: Right to Left (Solid Text) */}
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap text-6xl md:text-8xl font-bold text-[#2e2e37] uppercase tracking-tighter"
          variants={marqueeVariants("left")}
          animate="animate"
        >
          <span>{row1Text}</span>
          <span>{row1Text}</span>
        </motion.div>
      </div>

      {/* Bottom Line: Left to Right (Outlined Text) */}
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap text-6xl md:text-8xl font-bold uppercase tracking-tighter"
          style={{
            WebkitTextStroke: "1px #2e2e37",
            color: "transparent",
          }}
          variants={marqueeVariants("right")}
          animate="animate"
        >
          <span>{row2Text}</span>
          <span>{row2Text}</span>
        </motion.div>
      </div>
      
    </div>
  );
};

export default RunningLine;