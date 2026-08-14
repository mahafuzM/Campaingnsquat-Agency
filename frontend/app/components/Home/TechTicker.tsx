"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { 
  SiReact, SiApple, SiAndroid, SiPwa, SiWebassembly, 
  SiPython, SiRust, SiCplusplus, SiFsharp, SiPhp, SiRuby, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiVuedotjs, SiSvelte, SiJavascript 
} from "react-icons/si";

const row1Techs = [
  { name: "React Native", icon: <SiReact className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "iOS Development", icon: <SiApple className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Android Development", icon: <SiAndroid className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Zero Trust", icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Progressive Web Apps", icon: <SiPwa className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "WebAssembly", icon: <SiWebassembly className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

const alternatingDevices = [
  { 
    type: "mobile", 
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop", 
    alt: "Mobile App 1" 
  },
  { 
    type: "tablet", 
    src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop", 
    alt: "Tablet Preview 1" 
  },
  { 
    type: "mobile", 
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop", 
    alt: "Mobile App 2" 
  },
  { 
    type: "tablet", 
    src: "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=600&auto=format&fit=crop", 
    alt: "Tablet Preview 2" 
  },
];

const row2Techs = [
  { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Python", icon: <SiPython className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Rust", icon: <SiRust className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "C++", icon: <SiCplusplus className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "C#", icon: <SiFsharp className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "PHP", icon: <SiPhp className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Svelte", icon: <SiSvelte className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

export default function TechTicker() {
  return (
    <section className="w-full bg-[#02050A] py-8 md:py-16 lg:py-20 overflow-hidden relative">
      <div className="w-full flex flex-col gap-6 sm:gap-8">
        
        {/* ROW 1: Top Tech Row (Moving Left) */}
        <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div 
            className="flex items-center gap-2 sm:gap-6 min-w-max py-0 md:py-2" 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...row1Techs, ...row1Techs, ...row1Techs].map((t, i) => (
              <div key={i} className="flex items-center gap-3 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#0c1017]  rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] shrink-0 transition-all duration-300 group">
                <span className="text-[#F7A400] flex items-center group-hover:scale-110 transition-transform duration-300">{t.icon}</span> 
                <span className="text-white font-medium text-sm sm:text-base tracking-tight">{t.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Single Alternating Running Devices (Border removed) */}
        <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div 
            className="flex items-center gap-4 sm:gap-8 min-w-max py-2 md:py-4" 
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
          >
            {[...alternatingDevices, ...alternatingDevices, ...alternatingDevices].map((item, i) => (
              <div key={i} className="flex items-center shrink-0">
                {item.type === "mobile" ? (
                  /* Mobile Mockup without wrapper border */
                  <div className="h-[210px] sm:h-[270px] lg:h-[310px] aspect-[9/19] rounded-[10px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 group flex items-center justify-center">
                    <div className="w-full h-full rounded-[10px] overflow-hidden bg-black flex items-center justify-center">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                ) : (
                  /* Tablet Mockup without wrapper border */
                  <div className="h-[210px] sm:h-[270px] lg:h-[310px] aspect-[4/3] rounded-[10px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 group flex items-center justify-center">
                    <div className="w-full h-full rounded-[10px] overflow-hidden bg-black flex items-center justify-center">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 3: Bottom Tech Row (Moving Left) */}
        <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div 
            className="flex items-center gap-2 sm:gap-6 min-w-max py-0  md:py-2" 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {[...row2Techs, ...row2Techs, ...row2Techs].map((t, i) => (
              <div key={i} className="flex items-center gap-3 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#0c1017]  hover:border-[#F7A400] rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] shrink-0 transition-all duration-300 group">
                <span className="text-[#F7A400] flex items-center group-hover:scale-110 transition-transform duration-300">{t.icon}</span> 
                <span className="text-white font-medium text-sm sm:text-base tracking-tight">{t.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}