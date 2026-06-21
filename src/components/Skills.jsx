import { useRef, useEffect, useState } from "react";
import { skillCategories, sectionTitles } from "../data/portfolio";

const icons = {
  "Frontend Engineering": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  "Backend Development": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  "AI & Automation": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  "DevOps & Deployment": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  "Core CS Concepts": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "Design & Prototyping": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Skills() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="skills-detail" ref={ref} className="bg-[#0b0b0b] border-t border-white/[0.04] relative overflow-hidden">
      <div className="section-container relative z-10">
        
        <div className="section-header">
          <p className="section-subtitle">{sectionTitles.skills.sub}</p>
          <h2 className="section-heading">
            {sectionTitles.skills.heading} <span className="text-white/40">{sectionTitles.skills.accent}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} 
              className={`card-base card-hover flex flex-col items-center text-center group ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-white/5 mb-8">
                <div className="w-8 h-8">
                  {icons[cat.title]}
                </div>
              </div>

              <h3 className="font-serif font-bold text-white text-xl mb-6 group-hover:text-indigo-400 transition-colors">
                {cat.title}
              </h3>

              <div className="w-full flex flex-col gap-3 mt-auto">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
                    <span className="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
