"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative text-white overflow-hidden font-poppins">
      
      {/* Background Ambient Glow & Grid Effects */}
     
      {/* Main Container bounded to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-[40px] sm:mb-[60px] lg:mb-[80px]">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight uppercase leading-[115%] mb-3 sm:mb-4">
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Our Mission & Vision
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed px-4 sm:px-0">
            Driving digital excellence and shaping the future through innovation, creativity, and unwavering commitment.
          </p>
        </div>

        {/* Mission & Vision Grid (Exactly 2 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] sm:gap-[32px]">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#02050a]/15 backdrop-blur-[2px] p-[28px] sm:p-[36px] lg:p-[48px] rounded-[10px] border border-white/15 hover:border-[#F7A400]/60 shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group flex flex-col justify-between overflow-hidden"
          >
            {/* Creative Corner Glow Effect (Mission) */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/5 rounded-full blur-3xl group-hover:bg-[#F7A400]/10 transition-all duration-500 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              {/* Top Row: Icon and Title side by side */}
              <div className="flex items-center gap-4 mb-[24px] sm:mb-[30px]">
                <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#02050A] border border-white/15 flex items-center justify-center text-[#F7A400] group-hover:scale-110 group-hover:border-[#F7A400] group-hover:bg-[#F7A400]/10 transition-all duration-300 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                
                {/* Title: Default White, Hover Gradient */}
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold tracking-tight leading-snug text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] transition-all duration-300">
                    Our Mission
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/80 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] font-normal">
                To empower businesses by delivering high-quality, innovative digital solutions that bridge the gap between complex technology and user-friendly experiences. We strive to be a trusted partner for our global clients, providing cutting-edge UI/UX design, web development, and robust software solutions that drive measurable growth. Our focus is on creating scalable products that help brands thrive in an ever-evolving digital landscape.
              </p>
            </div>

            {/* Bottom Accent Bar - Appears on Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F7A400] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#02050a]/15 backdrop-blur-[2px] p-[28px] sm:p-[36px] lg:p-[48px] rounded-[10px] border border-white/15 hover:border-[#F7A400]/60 shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group flex flex-col justify-between overflow-hidden"
          >
            {/* Creative Corner Glow Effect (Vision) */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/5 rounded-full blur-3xl group-hover:bg-[#F7A400]/10 transition-all duration-500 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              {/* Top Row: Icon and Title side by side */}
              <div className="flex items-center gap-4 mb-[24px] sm:mb-[30px]">
                <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#02050A] border border-white/15 flex items-center justify-center text-[#F7A400] group-hover:scale-110 group-hover:border-[#F7A400] group-hover:bg-[#F7A400]/10 transition-all duration-300 shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                
                {/* Title: Default White, Hover Gradient */}
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold tracking-tight leading-snug text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] transition-all duration-300">
                    Our Vision
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/80 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] font-normal">
                To become a global leader in digital transformation, recognized for our creativity, technical excellence, and integrity in every project. We envision a future where CampaignSquad Ltd. is the premier destination for brands seeking to redefine their digital presence through seamless design and world-class technology. Our goal is to set new industry standards by consistently delivering excellence that inspires users and scales businesses.
              </p>
            </div>

            {/* Bottom Accent Bar - Appears on Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F7A400] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}