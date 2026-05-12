const contactItems = [
  { icon: "📧", label: "Email",    value: "linacignacio@gmail.com" },
  { icon: "📍", label: "Location", value: "Calamba, Laguna, Philippines" },
  { icon: "⚡", label: "Status",   value: "Open to opportunities", accent: true },
];

const socials = [
  { label: "GitHub",   href: "https://github.com/Lina-Ignacio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lina-ignacio-020a9a357" },
  { label: "Facebook", href: "https://www.facebook.com/lina.ignacio.940" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#080810] text-white px-6 md:px-[10vw] py-32">

      <p className="flex items-center gap-3 text-violet-400 text-xs font-semibold uppercase tracking-[0.2em] mb-14">
        <span className="w-8 h-px bg-violet-400" />Contact
      </p>

      <div className="grid md:grid-cols-2 gap-20 items-start">

        <div>
          <h2 className="font-syne font-black text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.15] tracking-tight mb-5">
            Let's build<br />something together.
          </h2>
          <p className="text-white/45 text-sm leading-[1.75] mb-8">
            Open to collaborations, freelance projects, and full-time opportunities.
            Feel free to reach out — I'd love to connect.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {socials.map(({ label, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08]
                           hover:border-violet-400/50 text-white/50 hover:text-white
                           px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                target="_blank"
                rel="nopener noreferrer"
                >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {contactItems.map(({ icon, label, value, accent }) => (
            <div key={label}
              className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07]
                         hover:border-violet-400/30 hover:translate-x-1 rounded-2xl px-6 py-5
                         transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/20
                              flex items-center justify-center text-lg flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white/35 mb-0.5">
                  {label}
                </p>
                <p className={`text-sm font-medium ${accent ? "text-emerald-400" : "text-white/85"}`}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}