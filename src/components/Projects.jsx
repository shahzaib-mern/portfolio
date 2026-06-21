import { useRef, useEffect, useState } from "react";
import { projects, sectionTitles } from "../data/portfolio";

const filters = ["All", "Web Application", "Website"];

export default function Projects() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.type === active);

  return (
    <section id="projects" ref={ref} className="bg-[#0d0d0d] border-t border-white/[0.04] relative overflow-hidden">
      <div className="section-container relative z-10">

        <div className="section-header">
          <p className="section-subtitle">{sectionTitles.projects.sub}</p>
          <h2 className="section-heading">
            {sectionTitles.projects.heading} <span className="text-white/40">{sectionTitles.projects.accent}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white/[0.03] border border-white/[0.07] rounded-xl gap-1">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)}
                className={`text-[10px] font-bold tracking-widest uppercase px-6 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  active === f
                    ? "bg-white text-black"
                    : "text-white/35 hover:text-white/70"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <div key={p.title}
              className={`card-base card-hover group !p-0 flex flex-col overflow-hidden ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>

              <div className="relative h-52 overflow-hidden bg-white/[0.03]" style={{ isolation: 'isolate', transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {p.live && p.live !== "#" && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 transform-gpu">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform-gpu">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-px bg-indigo-500/40" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400">{p.type}</span>
                </div>

                <h3 className="font-serif font-bold text-white text-xl mb-3 group-hover:text-indigo-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-[13px] text-white/40 leading-relaxed mb-6 line-clamp-2">
                  {p.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/30 group-hover:text-white/50 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
