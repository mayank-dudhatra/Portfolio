import { motion } from "framer-motion";
import { X } from "lucide-react";

const POSTER_URL =
  "https://lh3.googleusercontent.com/d/1xRap1IM8HbXP7kDPG-3gCxzLHjSugTJH";

const HackathonPopup = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(8px)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden font-jost"
          style={{
            background: "#1e1f28",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
          }}
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 10 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Green top border accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#80db66]" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center
                       rounded-full text-white/40 hover:text-white hover:bg-white/10
                       transition-all duration-200"
          >
            <X size={16} />
          </button>

          {/* Two-column body */}
          <div className="flex max-sm:flex-col">

            {/* Left — poster */}
            <div
              className="w-[42%] max-sm:w-full flex-shrink-0 relative"
              style={{ minHeight: "440px", background: "#12131a" }}
            >
              <img
                src={POSTER_URL}
                alt="Doppelgänger Hackathon Poster"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right — content */}
            <div className="w-[58%] max-sm:w-full flex flex-col justify-center gap-5 px-8 py-10">

              {/* Label */}
              <span className="text-[#80db66] text-[12px] font-semibold tracking-[4px] uppercase">
                🏆 Hackathon Winner
              </span>

              {/* Title */}
              <h2 className="text-white text-[22px] font-bold leading-snug">
                Doppelgänger Hackathon
                <br />
                <span className="text-[#80db66]">Openpools</span>
              </h2>

              {/* Rank */}
              <p className="text-white/70 text-[15px] font-medium">
                🥇 1st Rank — <span className="text-white">Team Eklavya</span>
              </p>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#80db66] rounded-full" />

              {/* Description */}
              <p className="text-white/55 text-[14px] leading-relaxed">
                Built{" "}
                <span className="text-white/80">Azure AI Code Assistant</span>{" "}
                — an AI-powered VS Code extension with a RAG-based architecture
                (vector retrieval + LLM) that delivers context-aware Azure SDK
                code completions directly in the editor.{" "}
                <span className="text-white/80">30-Hour sprint.</span>
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    background: "rgba(128,219,102,0.08)",
                    border: "1px solid rgba(128,219,102,0.25)",
                    color: "#80db66",
                  }}
                >
                  ⚡ 30 Hours
                </span>
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  🤖 AI + Cloud
                </span>
              </div>

              {/* CTA */}
              <a
                href="#Work"
                onClick={onClose}
                className="mt-1 inline-flex items-center justify-center gap-2 px-5 py-2.5
                           rounded-xl text-[13px] font-bold text-black bg-[#80db66]
                           hover:bg-[#6fcf54] transition-colors duration-200"
              >
                View Project →
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HackathonPopup;

