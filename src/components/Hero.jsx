import { useEffect, useState } from "react";
import { personal, stats, skillTags } from "../data/portfolio";

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);

  return (
    <>
      {/* ── HERO (Completely fitted in a single page height 100vh on all devices, overflow hidden) ── */}
      <section id="hero" className="relative min-h-screen lg:h-screen bg-[#111111] overflow-x-hidden lg:overflow-hidden px-4 sm:px-6 lg:px-0">

        {/* Photo Container: Softened edges with increased top offset */}
        <div className="absolute left-0 right-0 lg:right-0 lg:left-auto top-20 w-full lg:w-[50%] h-[48vh] lg:h-[calc(100vh-5rem)] z-0 overflow-hidden pointer-events-auto">
          <img
            src={personal.photo}
            alt="profile"
            className="w-full h-full object-cover object-top transition-all duration-500 cursor-pointer pointer-events-auto"
          />
          {/* Main feathering masks — Adjusted to keep 85-90% of the image clear */}
          {/* Desktop: Left-to-Right blend */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#111] to-transparent pointer-events-none" />
          {/* Mobile: Top-to-Bottom blend */}
          <div className="lg:hidden absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#111] to-transparent pointer-events-none" />

          {/* Bottom blend */}
          <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#111] to-transparent pointer-events-none" />

          {/* Subtle Top blend overlay */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#111] to-transparent pointer-events-none" />
        </div>

        {/* Content Container: Positioned cleanly below top photo on mobile; completely separate with zero overlap */}
        <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 md:px-8 w-full min-h-[calc(100vh-4rem)] lg:min-h-0 lg:h-[calc(100vh-4rem)] mt-16 flex items-center pt-[50vh] lg:pt-0 pb-16 lg:pb-6">
          <div className="w-full lg:max-w-xl">

            {/* Green availability badge */}
            {personal.available && (
              <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-medium tracking-wide transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Work
              </div>
            )}

            {/* Hero heading — updated to font-medium for better distinct weight */}
            <h1
              className={`mt-6 font-serif font-medium leading-tight tracking-wide text-white transition-all duration-700 delay-100 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              {[personal.heroLine1, personal.heroLine2, personal.heroLine3].map((line, i) => (
                <div key={i} style={{ fontSize: "clamp(1rem, 3vw, 2.8rem)" }}>
                  {line}
                </div>
              ))}
            </h1>

            {/* Tagline */}
            <p
              className={`mt-4 font-sans text-xs md:text-sm text-white/60 leading-relaxed max-w-md transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              {personal.tagline}
            </p>

            {/* Skill pill tags */}
            <div className={`flex flex-wrap gap-1.5 mt-4 max-w-md transition-all duration-700 delay-300 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {skillTags.slice(0, 11).map(t => (
                <span key={t}
                  className="text-[11px] px-2.5 py-1 rounded-md border border-white/10 text-white/50 bg-white/[0.02] hover:border-white/30 hover:text-white transition-all duration-200 cursor-default">
                  {t}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className={`flex flex-wrap gap-5 mt-10 transition-all duration-700 delay-500 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a href="#contact" className="btn-primary">
                LET'S TALK
              </a>
              <a href={personal.cvLink} download target="_blank" rel="noreferrer" className="btn-secondary">
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#0a0a0a] border-t border-b border-white/[0.06] py-6 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">
          {stats.map((s, i) => (
            <div key={i} className={`${i < stats.length - 1 ? "border-r border-white/[0.08]" : ""} px-4`}>
              <div className="font-serif font-semibold text-white leading-none"
                style={{ fontSize: "clamp(2rem, 5vw, 1rem)" }}>
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-[0.12em] text-white/40 mt-2 font-sans">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
