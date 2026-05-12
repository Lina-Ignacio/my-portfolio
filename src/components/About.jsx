const skillGroups = [
  { label: "Languages",           skills: ["Python", "PHP", "JavaScript"] },
  { label: "Frontend",            skills: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS"] },
  { label: "Backend & Databases", skills: ["FastAPI", "PostgreSQL", "MySQL"] },
  { label: "Tools",               skills: ["Git & GitHub", "Figma"] },
];

export default function About() {
  return (
    <section id="about" className="bg-[#080810] text-white px-6 md:px-[10vw] py-32">

      <p className="flex items-center gap-3 text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
        <span className="w-8 h-px bg-violet-400" />About
      </p>

      <h2 className="font-syne font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight mb-14">
        The developer<br />behind the code.
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Bio */}
        <p className="text-white/50 text-[1.05rem] leading-[1.85]">
          Fresh <strong className="text-white font-medium">Computer Science graduate (Magna Cum Laude)</strong> with 
          hands-on experience building full-stack web applications. Contributed to the development of an{" "}
          <strong className="text-white font-medium">AI-assisted Learning Management System</strong> and 
          completed an IT automation internship at{" "}
          <strong className="text-white font-medium">SIIX Phils., Inc.</strong>
          <br /><br />
          Progressive leadership roles in the Association of Computer Engineering Students demonstrate 
          strong organizational and communication skills. Eager to bring solid technical foundations 
          and a collaborative mindset to a dynamic team.
        </p>

        {/* Skills */}
        <div className="space-y-7">
          {skillGroups.map(({ label, skills }) => (
            <div key={label}>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/35 mb-2.5">
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill}
                    className="bg-white/[0.04] border border-white/[0.08] hover:border-violet-400/60
                               hover:bg-violet-400/10 rounded-lg px-3.5 py-1.5 text-sm text-white/80
                               cursor-default transition-all duration-200 hover:-translate-y-0.5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}