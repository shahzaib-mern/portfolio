import { useRef, useEffect, useState } from "react";
import { vision, sectionTitles } from "../data/portfolio";

export default function Vision() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-[#0a0a0a] border-t border-white/[0.04] relative overflow-hidden">
      <div className="section-container relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
        
        {/* Left — Visual Identity */}
        <div className={`flex-1 relative transition-all duration-1000 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <div className="h-full w-full rounded-2xl overflow-hidden border border-white/5 relative bg-white/[0.02]">
            <img
              src={vision.photo}
              alt="Vision Profile"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 lg:-right-6 glass-card p-4 rounded-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Validated</p>
                <p className="text-[11px] font-bold text-white">Full-Stack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Text Content */}
        <div className="flex-1 flex flex-col pt-2">
          <div className="space-y-4">
            <p className="section-subtitle">
              {vision.subHeading}
            </p>
            <h2 className={`section-heading transition-all duration-1000 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {vision.heading}
            </h2>
          </div>

          <div className="mt-8 space-y-6">
            {vision.body.map((p, i) => (
              <p key={i} className={`text-sm text-white/45 leading-relaxed font-sans transition-all duration-1000 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}>
                {p}
              </p>
            ))}
          </div>

          <div className={`mt-auto pt-12 transition-all duration-1000 delay-500 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href={vision.ctaHref} className="btn-primary">
              {vision.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
