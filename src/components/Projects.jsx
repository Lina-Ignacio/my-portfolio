const projects = [
  {
    number: "01",
    title: "AIDUKADO: AI-Assisted LMS",
    description:
      "A full-featured web-based learning management system powered by AI to enhance educational outcomes. Designed for students and instructors with intelligent content recommendations.",
    tech: ["FastAPI", "React", "PostgreSQL", "Python", "JavaScript"],
    github: "https://github.com/Lina-Ignacio/aidukado67.git",
    live: "https://ai-dukado.vercel.app"
  },
  {
    number: "02",
    title: "Software Engineering Module",
    description:
      "An interactive web-based educational module covering core Software Engineering concepts — structured for student engagement and clarity.",
    tech: ["Vue.js"],
    github: "https://github.com/Lina-Ignacio/SE2-module.git",
    live: "https://se2-module.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#080810] text-white px-6 md:px-[10vw] py-32">

      <div className="flex justify-between items-end flex-wrap gap-6 mb-14">
        <div>
          <p className="flex items-center gap-3 text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-violet-400" />Work
          </p>
          <h2 className="font-syne font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="text-white/40 text-sm leading-relaxed max-w-[260px] text-right">
          Built with modern technologies and creative problem-solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i}
            className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-9 flex flex-col gap-5
                       hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.1)]
                       transition-all duration-300 relative overflow-hidden">
            
            {/* Top accent line on hover */}
            <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-violet-400">
              {project.number} — Project
            </span>

            <h3 className="font-syne font-bold text-[1.3rem] leading-snug tracking-tight">
              {project.title}
            </h3>

            <p className="text-white/45 text-sm leading-[1.75] flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t}
                  className="bg-violet-400/10 border border-violet-400/20 text-violet-300
                             rounded-md px-2.5 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-2.5 pt-2">
              <button className="bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold
                                 px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(139,92,246,0.4)]
                                 hover:-translate-y-0.5">
                  <a href={project.live}
                    target="- blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                
              </button>
              <button className="border border-white/[0.1] hover:border-white/25 text-white/50 hover:text-whitetext-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}