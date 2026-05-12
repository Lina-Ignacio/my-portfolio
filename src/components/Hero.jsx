import my_pic from "../assets/my_pic.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start bg-[#080810] text-white
                        px-6 md:px-[10vw] pt-36 pb-24 relative overflow-hidden">

      {/* ── Blob shape (SVG background) ── */}
      <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none">
        <svg
          viewBox="0 0 600 900"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Tweak this path to change the blob shape */}
          <path
            d="M753 621.5Q743 743 621.5 744T387 735.5Q274 726 206.5 613T260 440.5Q381 381 440.5 320t182-63Q745 255 754 377.5t-1 244Z"
            fill="url(#blobGrad)"
          />
        </svg>
      </div>

      {/* ── Your photo, on top of the blob ── */}
      <div className="absolute right-[10%] md:right-[-25%] bottom-39 w-[80%] max-w-[1000px] pointer-events-none">
        <img
          src={my_pic}
          alt="Lina Ignacio"
          className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>

      {/* ── Text content (left side) ── */}
      <div className="relative z-10 flex flex-col items-start">

        {/* Available badge */}
        <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full
                        px-4 py-1.5 text-sm text-white/50 mb-8 w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="font-syne font-black leading-[0.95] tracking-tight text-[clamp(3.5rem,9vw,7.5rem)] mb-6">
          <span className="bg-gradient-to-br from-white via-white to-violet-400 bg-clip-text text-transparent">
            Lina
          </span>
          <br />Ignacio
        </h1>

        <p className="text-white/45 text-[clamp(1rem,2.5vw,1.35rem)] font-light mb-6">
          Full Stack Web Developer
        </p>

        <p className="max-w-lg text-white/45 leading-relaxed text-base mb-10">
          Computer Science graduate crafting
          full-stack web experiences with React, FastAPI, and PostgreSQL.
          Based in Calamba, Laguna.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a href="#projects"
            className="flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white
                       px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200
                       hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)] hover:-translate-y-0.5">
            View Projects
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact"
            className="border border-white/[0.1] hover:border-white/25 hover:bg-white/[0.06]
                       text-white px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200
                       hover:-translate-y-0.5">
            Contact Me
          </a>
          <a href="https://drive.google.com/file/d/1ct_M_xZ6PYJ1p_SujwQyjhVD6e0a3uFJ/view?usp=drive_link"
            className="flex items-center gap-2 border border-violet-400/40
             hover:bg-violet-500/10 text-violet-300
             px-7 py-3.5 rounded-xl font-medium text-sm
             transition-all duration-200 hover:-translate-y-0.5"
          >View CV</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                      text-white/30 text-[0.65rem] tracking-[0.15em] uppercase z-10">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-violet-400" />
      </div>
    </section>
  );
}