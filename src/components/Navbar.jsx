import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills-detail" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
      // Highlight active section
      const sections = links.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-transparent backdrop-blur-2xl border-b border-white/[0.03] py-2" : "bg-transparent border-transparent py-4"}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 transition-all duration-500">
            <span className="text-sm font-bold text-indigo-400 font-mono tracking-tighter group-hover:scale-110 transition-transform duration-500">&lt;/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-widest text-[16px] text-white/90 group-hover:text-white transition-all duration-300">
              {personal.firstName.toUpperCase()} ALI
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`relative text-xs font-bold tracking-widest uppercase no-underline transition-all duration-300 py-1 ${active === l.href.slice(1) ? "text-white" : "text-white/40 hover:text-white/80"}`}>
              {l.label}
              {active === l.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 to-transparent animate-in slide-in-from-left duration-500" />
              )}
            </a>
          ))}
        </div>

        {/* Hire me CTA — desktop */}
        <a href="#contact"
          className="hidden md:inline-flex text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 bg-white/[0.06] border border-white/10 text-white/70 hover:bg-white hover:text-black hover:border-white rounded-lg no-underline transition-all duration-300">
          Hire Me
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1" aria-label="Menu">
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white/[0.01] backdrop-blur-xl ${open ? "max-h-80 border-t border-white/[0.03]" : "max-h-0"}`}>
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-white/75 hover:text-white no-underline transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2.5 bg-white text-black text-center rounded-lg no-underline">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
