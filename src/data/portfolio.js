import { useState, useRef, useEffect } from "react";
import { personal, contactInfo, sectionTitles } from "../data/portfolio";

const WEB3FORMS_KEY = "8177812e-d882-4645-acd8-89f7bf8ff1e3";

async function sendEmail({ name, email, message }) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      name,
      email,
      message,
      subject: `New Inquiry from ${name} — Shahzaib's Portfolio`,
      from_name: "Shahzaib Portfolio",
      replyto: email,
    }),
  });

  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Failed to send. Please try again.");
  }

  return data;
}

export default function Contact() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendEmail(form);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      key: "github",
      href: personal.social.github,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      key: "linkedin",
      href: personal.social.linkedin,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      key: "facebook",
      href: personal.social.facebook,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.791-4.667 4.532-4.667 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.951.925-1.951 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      key: "instagram",
      href: personal.social.instagram,
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#0b0b0b] border-t border-white/[0.04] relative overflow-hidden"
    >
      <div className="section-container relative z-10">

        <div className="section-header">
          <p className="section-subtitle">{sectionTitles.contact.sub}</p>
          <h2 className="section-heading">
            {sectionTitles.contact.heading}{" "}
            <span className="text-white/40">{sectionTitles.contact.accent}</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500/30 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* ── Info Side ── */}
          <div
            className={`lg:col-span-5 flex flex-col gap-12 transition-all duration-1000 ${
              vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight mb-6">
                Based in {contactInfo.address.split(",")[0]}, <br /> Serving Globally.
              </h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                Open to freelance projects, collaborations, and full-stack opportunities. I typically respond within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {[
                {
                  label: "Email Me",
                  val: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  ),
                },
                {
                  label: "Phone & WhatsApp",
                  val: contactInfo.phone,
                  href: `tel:${contactInfo.phone}`,
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.155-.441.011-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H3.375A2.25 2.25 0 002.25 3.375V6.75z" />
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">{item.label}</p>
                    <a href={item.href} className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors tracking-wide">
                      {item.val}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-5">Connect Socially</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Form Side ── */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-200 ${
              vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="card-base !p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/[0.02] transition-colors duration-700" />

              {sent ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 text-3xl shadow-2xl shadow-emerald-500/20">
                    ✓
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white mb-3">Message Received.</h4>
                  <p className="text-sm text-white/50">I'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="relative z-10 space-y-8">
                  {error && (
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] uppercase tracking-widest font-bold rounded-xl">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={change}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-white/20 px-6 py-4 rounded-xl outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={change}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-white/20 px-6 py-4 rounded-xl outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold ml-2">Your Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={change}
                      required
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-white/20 px-6 py-4 rounded-xl outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary border-none w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
