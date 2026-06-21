import { personal, footerData } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <p className="text-sm text-white/30 font-sans">{footerData.copy}</p>
        {/* <div className="flex items-center gap-4 text-xs text-white/25 font-sans">
          <a href={personal.social.github} target="_blank" rel="noreferrer"
            className="text-white/30 underline hover:text-white/60  transition-colors duration-200 uppercase tracking-widest font-bold">
            GitHub Source
          </a>
        </div> */}
      </div>
    </footer>
  );
}
