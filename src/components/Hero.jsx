import my_pic from "../assets/my_pic.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080810] text-white overflow-hidden flex flex-col">

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (flex-col, visible below md)
      ═══════════════════════════════════════════ */}
      <div className="flex flex-col flex-1 md:hidden">

        {/* Top text block */}
        <div className="flex flex-col items-start px-6 pt-32 pb-6 relative z-10">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08]
                          rounded-full px-4 py-1.5 text-xs text-white/50 mb-7 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-pulse flex-shrink-0" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="font-syne font-black leading-[0.92] tracking-tight text-[3.8rem] mb-4">
            <span className="bg-gradient-to-br from-white via-white to-violet-400 bg-clip-text text-transparent">
              Lina
            </span>
            <br />Ignacio
          </h1>

          {/* Role */}
          <p className="text-white/45 text-base font-light mb-4">
            Full Stack Web Developer
          </p>

          {/* Description */}
          <p className="text-white/40 leading-relaxed text-sm mb-8 max-w-sm">
            Computer Science graduate crafting full-stack web experiences
            with React, FastAPI, and PostgreSQL. Based in Calamba, Laguna.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#projects"
               className="flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white
                          px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
                          hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)]">
              View Projects
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact"
               className="border border-white/[0.12] hover:border-white/30 hover:bg-white/[0.06]
                          text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1ct_M_xZ6PYJ1p_SujwQyjhVD6e0a3uFJ/view?usp=drive_link"
               target="_blank" rel="noopener noreferrer"
               className="border border-violet-400/40 hover:bg-violet-500/10 text-violet-300
                          px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200">
              View CV
            </a>
          </div>
        </div>

        {/* Photo + blob — fills remaining space at bottom */}
        <div className="relative flex-1 min-h-[320px] mt-4">
          {/* Blob */}
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
                 className="w-full h-full" preserveAspectRatio="xMidYMax slice">
              <defs>
                <linearGradient id="blobGradMob" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <ellipse cx="240" cy="340" rx="260" ry="200" fill="url(#blobGradMob)" />
            </svg>
          </div>
          {/* Photo — sits on top, anchored to bottom-right */}
          <img
            src={my_pic}
            alt="Lina Ignacio"
            className="absolute bottom-0 right-0 h-full max-h-[380px] w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>


      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <div className="hidden md:flex flex-1 items-center relative px-[8vw] lg:px-[10vw] pt-36 pb-24">

        {/* Blob — right side panel */}
        <div className="absolute top-0 right-0 w-[52%] h-full pointer-events-none">
          <svg viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg"
               className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="blobGradDesk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path
              d="M753 621.5Q743 743 621.5 744T387 735.5Q274 726 206.5 613T260 440.5Q381 381 440.5 320t182-63Q745 255 754 377.5t-1 244Z"
              fill="url(#blobGradDesk)"
            />
          </svg>
        </div>

        {/* Photo on top of blob */}
        <div className="absolute right-[10%] md:right-[-25%] bottom-39 w-[80%] max-w-[900px] pointer-events-none">
          <img
            src={my_pic}
            alt="Lina Ignacio"
            className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 flex flex-col items-start max-w-[50%] lg:max-w-[48%]">

          {/* Badge */}
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08]
                          rounded-full px-4 py-1.5 text-sm text-white/50 mb-8 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80] animate-pulse flex-shrink-0" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="font-syne font-black leading-[0.95] tracking-tight
                         text-[clamp(3.5rem,7vw,7.5rem)] mb-6">
            <span className="bg-gradient-to-br from-white via-white to-violet-400 bg-clip-text text-transparent">
              Lina
            </span>
            <br />Ignacio
          </h1>

          {/* Role */}
          <p className="text-white/45 text-[clamp(1rem,1.8vw,1.35rem)] font-light mb-6">
            Full Stack Web Developer
          </p>

          {/* Description */}
          <p className="max-w-lg text-white/45 leading-relaxed text-base mb-10">
            Computer Science graduate crafting full-stack web experiences
            with React, FastAPI, and PostgreSQL. Based in Calamba, Laguna.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#projects"
               className="flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white
                          px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200
                          hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)] hover:-translate-y-0.5">
              View Projects
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact"
               className="border border-white/[0.1] hover:border-white/25 hover:bg-white/[0.06]
                          text-white px-7 py-3.5 rounded-xl font-medium text-sm
                          transition-all duration-200 hover:-translate-y-0.5">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1ct_M_xZ6PYJ1p_SujwQyjhVD6e0a3uFJ/view?usp=drive_link"
               target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 border border-violet-400/40
                          hover:bg-violet-500/10 text-violet-300
                          px-7 py-3.5 rounded-xl font-medium text-sm
                          transition-all duration-200 hover:-translate-y-0.5">
              View CV
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center
                        gap-2 text-white/30 text-[0.65rem] tracking-[0.15em] uppercase z-10"
             aria-hidden="true">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-violet-400" />
        </div>
      </div>

    </section>
  );
}