import { useState, useEffect } from "react";
import logo from "../assets/logo_.png"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[85%] lg:w-[85%] max-w-6xl flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 rounded-2xl transition-all duration-300
      ${scrolled ? "bg-[#080810]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}>

      <span className="flex items-center gap-0">
        <img
          src={logo}
          className="w-8 h-8 object-contain items-center justify-center"
        />

        <span className="font-syne text-2xl font-black bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent tracking-tight">
          Lina.
        </span>

      </span>

      <ul className="hidden md:flex gap-9">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href}
              className="text-white/50 hover:text-white text-sm font-medium uppercase tracking-widest
                         transition-colors duration-200 relative group">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact"
        className="bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold
                   px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(139,92,246,0.5)]">
        Hire Me
      </a>
    </nav>
  );
}