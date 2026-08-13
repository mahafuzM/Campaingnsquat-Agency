"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const techList = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-start overflow-hidden font-poppins pt-28 pb-10 md:py-20 lg:py-28 bg-[#02050a]">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/assets/videos/hello1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Gradient Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/90 to-transparent pointer-events-none" />

      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-[1445px] w-full mx-auto px-4 md:px-6 lg:px-12 relative z-20 text-left flex flex-col items-start">

        {/* Top Badges Container */}
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#0d1117]/90 backdrop-blur-md border border-[#F7A400]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] shrink-0"
          >
            <span className="text-[#F7A400] shrink-0 text-xs sm:text-sm">✨</span>
            <span className="text-[13px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-semibold tracking-wider text-white/90 leading-tight">
              Award-Winning Web & UI/UX Agency
            </span>
          </motion.div>
        </div>

        {/* Tech Logo Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 xs:gap-2.5 sm:gap-3 mb-3 sm:mb-4 w-full sm:w-auto"
        >
          {techList.map((tech, idx) => (
            <div
              key={idx}
              className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 xl:w-18 xl:h-18 shrink-0 rounded-full bg-[#0d1117]/80 border border-white/10 flex items-center justify-center p-1.5 sm:p-2.5 shadow-md hover:border-[#F7A400]/50 transition-all duration-300"
            >
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow" />
            </div>
          ))}
        </motion.div>

        {/* Trusted by 150+ Companies Globally */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 mb-3 sm:mb-4"
        >
          <div className="flex items-center gap-0.5 text-[#F7A400] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]">
            {"★".repeat(5)}
          </div>
          <span className="text-white/90 text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[20px] font-semibold tracking-wide">
            Trusted by 150+ Companies Globally
          </span>
        </motion.div>

        {/* Rating Badge Row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex items-center mb-4 sm:mb-6 w-full overflow-hidden"
        >
          <div className="inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 px-2.5 xs:px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl sm:rounded-full bg-[#0d1117]/90 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-full flex-nowrap">
            
            <div className="flex items-center gap-1 text-[9.5px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-semibold text-white/90 whitespace-nowrap shrink-0">
              <span className="text-[#F7A400]">5.0 RATING</span> On Google
            </div>

            <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" alt="User" className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-6 sm:w-6 rounded-full ring-1.5 ring-[#02050a] object-cover" />
            </div>

            <span className="text-[9.5px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-semibold text-white/90 whitespace-nowrap shrink-0">
              150+
            </span>

            <div className="h-3 sm:h-4 w-[1px] bg-white/20 mx-0.5 shrink-0" />

            <div className="flex items-center gap-1 text-[9.5px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-semibold text-white/90 whitespace-nowrap shrink-0">
              <span className="text-[#F7A400]">★ EXCELLENT</span> Trustpilot
            </div>

          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[28px] xs:text-[30px] sm:text-[34px] md:text-[42px] lg:text-[50px] xl:text-[56px] 2xl:text-[62px] font-extrabold tracking-tight leading-[1.2] sm:leading-[1.1] text-white max-w-[1200px] mb-4 sm:mb-6"
        >
          You Build the Empire, We Build the Tech —{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)" }}
          >
            Your On-Demand Web & UI/UX Design Agency
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] text-white max-w-[800px] leading-relaxed mb-5 md:mb-4 lg:mb-8"
        >
          Focus on building your business while we handle the digital heavy lifting. We deliver end-to-end UI/UX design and scalable web development tailored to your goals—built for performance, seamless user experience, and real growth.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#explore"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-8 py-3 sm:py-3 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] hover:opacity-95 active:scale-[0.98] shadow-[0_0_20px_rgba(247,164,0,0.3)] transition-all duration-300 group whitespace-nowrap text-center"
          >
            <span>Explore More</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
          
          <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-8 py-3 sm:py-3 rounded-full bg-[#0d1117]/80 backdrop-blur-md border border-white/20 text-white font-bold text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-center">
            <span>How It Works</span> 
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white shrink-0" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}