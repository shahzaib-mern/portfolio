import { useRef, useEffect, useState } from "react";
import { testimonials, sectionTitles } from "../data/portfolio";

export default function Testimonials() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref} className="relative bg-[#0d0d0d] py-24 px-6 overflow-hidden border-t border-white/[0.03]">
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="section-header">
          <p className="section-subtitle">{sectionTitles.testimonials.sub}</p>
          <h2 className="section-heading">
            {sectionTitles.testimonials.heading} <span className="text-white/40">{sectionTitles.testimonials.accent}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`group relative glass-card p-10 rounded-[1rem] transition-all duration-700 hover:-translate-y-2 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${i * 150}ms` }}>

              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden glass-card border border-white/10 flex items-center justify-center text-xl font-bold text-indigo-400">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{t.name}</h4>
                  <p className="text-xs uppercase text-indigo-400/70">{t.role}</p>
                </div>
              </div>

              <p className="text-sm text-white/60 font-medium leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
