"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, X, Loader2 } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

const techCardsRow1 = [
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "NextJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
];

const techCardsRow2 = [
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
];

const techCardsRow3 = [
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "NodeJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "NextJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

const AVATAR_COLORS = ["#F7A400", "#4ade80", "#7c3aed", "#3b82f6"];
const TOAST_DURATION = 4000;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setToast(true);
      setEmail("");
      setTimeout(() => setToast(false), TOAST_DURATION);
    }, 900);
  };

  return (
    <section className="w-full bg-[#02050A] py-4 sm:py-8 md:py-16 overflow-hidden relative font-poppins">
      {/* Ambient dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#747989 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <div className="max-w-[1445px] mx-auto px-2 sm:px-6 md:px-10 lg:px-12 relative z-10">
        {/* Rotating gradient-glow border wrapper */}
        <div className="relative rounded-[28px] p-[1.5px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
          <motion.div
            className="absolute inset-[-60%] z-0"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, #F7A400 12%, transparent 26%, transparent 74%, #FFDDA1 88%, transparent 100%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative bg-[#0A0A0A]/95 backdrop-blur-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center w-full rounded-[26px] z-10">
            {/* LEFT SIDE: Heading, Text & Form */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 z-20 flex flex-col justify-center lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12161D] border border-white/10 shadow-md w-fit mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-[#F7A400] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-white uppercase">
                  Stay In The Loop
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.1]">
                Don&apos;t Miss Out the <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FFDDA1] drop-shadow-[0_0_40px_rgba(247,164,0,0.3)]">
                  Future of Digital!
                </span>
              </h2>

              <p className="text-white/70 text-[14px] sm:text-[15px] md:text-[16px] mb-6 sm:mb-7 leading-relaxed max-w-[540px]">
                Subscribe to our high-frequency intelligence newsletter. Get hand-crafted engineering insights, architectural patterns, and exclusive tech updates straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-xl">
                <div className="relative w-full">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your professional email"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                    aria-label="Email address"
                    className="w-full h-[50px] sm:h-[54px] bg-[#121212]/90 border border-white/10 rounded-[10px] pl-12 pr-5 text-white placeholder:text-white/30 text-sm sm:text-base focus:outline-none focus:border-[#F7A400] focus:shadow-[0_0_0_3px_rgba(247,164,0,0.15)] transition-all disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative inline-flex items-center justify-center gap-2 px-7 py-3 md:py-3.5 sm:py-3 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[13px] sm:text-[14px] md:text-[15px] hover:opacity-90 shadow-[0_0_25px_rgba(247,164,0,0.4)] transition-all duration-300 cursor-pointer whitespace-nowrap w-full sm:w-auto group shrink-0 overflow-hidden disabled:cursor-not-allowed"
                >
                  {/* Shine sweep on hover */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Now</span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Social proof row */}
              <div className="flex items-center gap-3 mt-5 sm:mt-6">
                <div className="flex -space-x-3">
                  {AVATAR_COLORS.map((color, i) => (
                    <div
                      key={`avatar-${i}`}
                      className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold text-black"
                      style={{ background: color, zIndex: AVATAR_COLORS.length - i }}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-[#1a1a1a] flex items-center justify-center text-[9px] font-bold text-white/80">
                    +9k
                  </div>
                </div>
                <p className="text-white/50 text-[12px] sm:text-[13px]">
                  Trusted by <span className="text-white font-semibold">12,000+</span> developers worldwide
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Responsive Marquee & Radar Grid */}
            <div className="relative h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px] overflow-hidden flex items-center justify-center bg-[#070707]/90 border-t lg:border-t-0 lg:border-l border-white/10 w-full lg:col-span-5">
              {/* Background Marquee Rows with Images */}
              <div className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-6 opacity-85 pointer-events-none select-none overflow-hidden">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 sm:gap-6 w-max"
                  style={{ willChange: "transform" }}
                >
                  {[...techCardsRow1, ...techCardsRow1].map((item, i) => (
                    <div
                      key={`row1-${i}`}
                      className="flex items-center justify-center bg-white border border-white/20 rounded-2xl h-[48px] sm:h-[56px] w-[58px] sm:w-[68px] shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.8)] p-2"
                    >
                      <img src={item.src} alt={item.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 sm:gap-6 w-max"
                  style={{ willChange: "transform" }}
                >
                  {[...techCardsRow2, ...techCardsRow2].map((item, i) => (
                    <div
                      key={`row2-${i}`}
                      className="flex items-center justify-center bg-white border border-white/20 rounded-2xl h-[48px] sm:h-[56px] w-[58px] sm:w-[68px] shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.8)] p-2"
                    >
                      <img src={item.src} alt={item.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 sm:gap-6 w-max"
                  style={{ willChange: "transform" }}
                >
                  {[...techCardsRow3, ...techCardsRow3].map((item, i) => (
                    <div
                      key={`row3-${i}`}
                      className="flex items-center justify-center bg-white border border-white/20 rounded-2xl h-[48px] sm:h-[56px] w-[58px] sm:w-[68px] shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.8)] p-2"
                    >
                      <img src={item.src} alt={item.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-transparent to-[#070707] pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707] pointer-events-none z-10" />

              {/* Responsive Radar Rings & Center Logo Container */}
              <div className="relative w-[200px] sm:w-[240px] md:w-[270px] h-[200px] sm:h-[240px] md:h-[270px] flex items-center justify-center z-20">
                {/* Sweeping radar scan line */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{
                    willChange: "transform",
                    background: "conic-gradient(from 0deg, rgba(247,164,0,0.35), transparent 35%)",
                  }}
                  className="absolute inset-0 rounded-full pointer-events-none"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#747989] pointer-events-none"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-6 sm:inset-7 rounded-full border border-solid border-[#747989] pointer-events-none"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: "transform" }}
                  className="absolute inset-12 sm:inset-14 rounded-full border border-dotted border-[#747989] pointer-events-none"
                />

                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-14 sm:inset-16 rounded-full bg-gradient-to-r from-[#F7A400]/40 via-[#FFDDA1]/30 to-[#F7A400]/40 blur-2xl pointer-events-none"
                />

                <div className="relative w-[70px] sm:w-[84px] md:w-[94px] h-[70px] sm:h-[84px] md:h-[94px] rounded-full border-2 border-[#F7A400] shadow-[0_0_35px_rgba(247,164,0,0.9)] flex items-center justify-center p-2 sm:p-3 z-30">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-white/30 via-black to-black flex items-center justify-center overflow-hidden border border-white/30 p-2 shadow-[inset_0_0_15px_rgba(255,255,255,0.4)]">
                    <img
                      src="/assets/logo/campaign squat.png"
                      alt="Campaignsquat Logo"
                      className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Success Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 z-50 flex flex-col gap-0 bg-[#121212] border border-[#F7A400] rounded-[10px] shadow-[0_15px_50px_rgba(247,164,0,0.4)] backdrop-blur-2xl w-[90%] max-w-[360px] overflow-hidden"
          >
            <div className="flex items-center gap-3.5 px-6 py-4">
              <div className="w-9 h-9 rounded-full bg-[#F7A400]/20 flex items-center justify-center text-[#F7A400] shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm">Successfully Subscribed!</h4>
                <p className="text-[#A1A1AA] text-xs truncate">Welcome to the future of elite engineering.</p>
              </div>
              <button
                onClick={() => setToast(false)}
                className="ml-2 text-white/50 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Auto-dismiss progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: TOAST_DURATION / 1000, ease: "linear" }}
              className="h-[3px] bg-gradient-to-r from-[#FFDDA1] to-[#F7A400]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}