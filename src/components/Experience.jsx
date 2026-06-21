import { useRef, useEffect, useState } from "react";
import { experiences, sectionTitles } from "../data/portfolio";

const colorMap = {
  emerald: {
    accent:  "text-emerald-400",
    glow:    "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]",
    line:    "bg-emerald-500/20",
    dot:     "bg-emerald-500",
  },
  indigo: {
    accent:  "text-indigo-400",
    glow:    "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
    line:    "bg-indigo-500/20",
    dot:     "bg-indigo-500",
  },
  violet: {
    accent:  "text-violet-400",
    glow:    "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
    line:    "bg-violet-500/20",
    dot:     "bg-violet-500",
  },
};

export default function Experience() {
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
    <section id="experience" ref={ref} className="bg-[#0a0a0a] py-32 px-6 relative border-t border-white/[0.04] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2 -ml-48 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="section-header">
          <p className="section-subtitle">{sectionTitles.experience.sub}</p>
          <h2 className="section-heading">
            {sectionTitles.experience.heading} <span className="text-white/40">{sectionTitles.experience.accent}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color] || colorMap.indigo;
              const isEven = i % 2 === 0;

              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full z-20 border-2 border-[#0a0a0a] bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
                       style={{ top: "2.5rem" }} />

                  {/* Date/Period Label */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "pl-12" : "pr-12 text-right"}`}>
                    <span className="text-xs font-bold tracking-widest text-white/30 uppercase font-sans">
                      {exp.period}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`group glass-card glass-card-hover p-8 rounded-3xl transition-all duration-500 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                         style={{ transitionDelay: `${i * 150}ms` }}>
                      
                      <div className="md:hidden text-[10px] font-bold tracking-widest text-white/30 uppercase font-sans mb-3">
                        {exp.period}
                      </div>

                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-1 ${c.accent}`}>{exp.company}</p>
                          <h3 className="text-lg font-bold text-white font-sans">{exp.role}</h3>
                        </div>
                        {exp.badge && (
                          <span className="text-[9px] font-bold py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white/60 tracking-wider">
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-white/40 leading-relaxed font-sans mb-6 group-hover:text-white/60 transition-colors duration-500">
                        {exp.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="text-[10px] px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40 font-medium group-hover:border-white/20 group-hover:text-white/70 transition-all duration-500">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}