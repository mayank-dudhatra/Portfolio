const POSTER_URL =
  "https://lh3.googleusercontent.com/d/1xRap1IM8HbXP7kDPG-3gCxzLHjSugTJH";

const highlights = [
  { icon: "⚡", text: "AI-powered VS Code extension" },
  { icon: "🧠", text: "Context-aware code suggestions using RAG architecture" },
  { icon: "☁️", text: "Azure SDK detection and intelligent code generation" },
  { icon: "🔎", text: "Vector search using ChromaDB for documentation retrieval" },
  { icon: "⭐", text: "Feedback system for improving suggestions" },
];

const badges = [
  { icon: "🥇", label: "Rank", value: "1st Place" },
  { icon: "⏱", label: "Duration", value: "30 Hours" },
  { icon: "👥", label: "Team", value: "Team Eklavya" },
  { icon: "🤖", label: "Category", value: "AI + Cloud + Dev Tools" },
];

export default function HackathonAchievement() {
  return (
    <section className="bg-[#25262f] px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 font-jost">
      {/* Section label */}
      <div className="text-center mb-12">
        <p className="text-[#80db66] text-sm sm:text-base font-medium tracking-[6px] uppercase">
          Achievement
        </p>
        <h2 className="mt-2 text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          🏆 Hackathon Achievement
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-14 items-stretch">

        {/* LEFT — poster image */}
        <div className="w-full md:w-[42%] rounded-2xl overflow-hidden flex-shrink-0"
          style={{ minHeight: "480px", background: "#1a1b23", position: "relative" }}>
          <img
            src={POSTER_URL}
            alt="Doppelgänger Hackathon Poster"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — content */}
        <div className="w-full md:w-[58%] flex flex-col justify-center gap-5">

          {/* Title + rank */}
          <div>
            <h3 className="text-[#80db66] text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              🥇 1st Place – Doppelgänger Hackathon
              <span className="text-white/60 text-lg font-normal"> (Openpools)</span>
            </h3>
            <p className="mt-1 text-white/50 text-sm tracking-[3px] uppercase font-medium">
              Team Eklavya
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-[#80db66] rounded-full" />

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold text-white/80">Doppelgänger</span> is a 30-hour
            signal-driven innovation sprint powered by Openpools, where teams build solutions
            based on their professional compatibility with their AI-discovered "Doppelgänger."
            Each team receives a unique challenge derived from their combined professional signals.
          </p>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Our team built{" "}
            <span className="text-[#80db66] font-semibold">Azure AI Code Assistant</span> — an
            AI-powered VS Code extension that helps developers write Azure SDK code faster. It
            analyzes coding context, retrieves relevant Azure documentation through a{" "}
            <span className="text-white/80 font-medium">RAG pipeline</span>, and generates
            intelligent inline code suggestions directly inside the editor.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#80db66] mt-[7px] flex-shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="mr-1">{h.icon}</span>{h.text}
                </p>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-1">
            {badges.map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(128,219,102,0.07)",
                  border: "1px solid rgba(128,219,102,0.22)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                <span>{b.icon}</span>
                <span className="text-white/40">{b.label}:</span>
                <span className="text-white/80">{b.value}</span>
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#Work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold
                         text-black bg-[#80db66] hover:bg-[#6fcf54] transition-colors duration-200"
            >
              View Project →
            </a>
            <a
              href="https://youtu.be/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold
                         text-white transition-colors duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
            >
              ▶ Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
