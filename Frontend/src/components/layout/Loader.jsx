import React from "react";
import './Loader.css'
const MayankLoader = () => {
  return (
    <div className="flex items-center p-4 justify-center min-h-screen bg-black">
      <div className="relative">
        {/* Dark gray text in background */}
        <h1 className="text-8xl font-bold text-gray-700 uppercase absolute inset-0">
          Mayank
        </h1>

        {/* Foreground text with circle animation */}
        <div className="relative overflow-hidden text-[#80db66]">
          <h1 className="text-8xl font-bold uppercase relative">
            Mayank
            {/* Moving Circle inside text */}
            <span className="absolute inset-0 mask-container">
              <span className="absolute w-28 h-28 bg-[#80db66] rounded-full animate-moveCircle"></span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MayankLoader;


