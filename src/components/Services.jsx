import { useRef, useEffect, useState } from "react";
import { services, sectionTitles } from "../data/portfolio";

const icons = {
  "MERN": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
  "FE": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.878 2.122L7.5 21h9l-.622-.621A3 3 0 0115 18.257V17.25M2.25 4.125C2.25 3.504 2.754 3 3.375 3h17.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125-.504-1.125-1.125v-9.75zM12 10.5h.008v.008H12V10.5z" />
    </svg>
  ),
  "API": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  "DEPLOY": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  "GIT": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12" />
    </svg>
  ),
  "AI": (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function Services() {
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
    <section id="services" ref={ref} className="bg-[#0a0a0a] border-t border-white/[0.04] relative overflow-hidden">
      <div className="section-container relative z-10">
        
        <div className="section-header">
          <p className="section-subtitle">{sectionTitles.services.sub}</p>
          <h2 className="section-heading">
            {sectionTitles.services.heading} <span className="text-white/40">{sectionTitles.services.accent}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} 
              className={`card-base card-hover flex flex-col items-center text-center group ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-white/5 mb-8">
                <div className="w-8 h-8">
                  {icons[s.icon]}
                </div>
              </div>

              <h3 className="font-serif font-bold text-white text-xl mb-4 group-hover:text-indigo-400 transition-colors">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
