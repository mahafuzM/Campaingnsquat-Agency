"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck } from "lucide-react";

export default function WhatSetsUsApartSection() {
  const cards = [
    {
      icon: <Cpu className="w-6 h-6" />,
      badge: "Performance",
      title: "Scalable Solutions Only",
      description:
        "We build robust, high-performance systems using modern tech stacks designed to grow with your business and handle extreme traffic seamlessly.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      badge: "Experience",
      title: "UI That Converts",
      description:
        "We create intuitive, high-converting interfaces by putting user experience at the center, blending aesthetics with flawless navigation.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      badge: "Security",
      title: "Enterprise Protection",
      description:
        "We implement top-tier encryption and bulletproof compliance frameworks to keep your core infrastructure safe from vulnerabilities.",
    },
  ];

  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative font-poppins text-white overflow-hidden">
      
      {/* Dark Overlay with Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Ambient Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container bounded to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-[40px] sm:mb-[60px] lg:mb-[80px]">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight leading-[115%] mb-3 sm:mb-4">
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              What Sets CampaignSquad Apart
            </span> 
          </h2>
          <p className="text-[#A1A1AA] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed px-4 sm:px-0">
            We combine technical precision with creative strategy to build digital solutions that don&apos;t just work—they perform.
          </p>
        </div>

        {/* Exactly 3 Cards Grid inside max-w-[1445px] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[32px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-[#02050a]/40 backdrop-blur-[2px] border border-white/15 hover:border-[#F7A400]/60 p-[28px] sm:p-[36px] lg:p-[48px] rounded-[10px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group flex flex-col justify-between overflow-hidden"
            >
              {/* Creative Corner Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/5 rounded-full blur-3xl group-hover:bg-[#F7A400]/10 transition-all duration-500 pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                {/* Top Row: Icon and Title side by side */}
                <div className="flex items-center gap-4 mb-[24px] sm:mb-[30px]">
                  <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#02050A] border border-white/15 flex items-center justify-center text-[#F7A400] group-hover:scale-110 group-hover:border-[#F7A400] group-hover:bg-[#F7A400]/10 transition-all duration-300 shrink-0">
                    {card.icon}
                  </div>
                  
                  {/* Title: Default White, Hover Gradient */}
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold tracking-tight leading-snug text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    <span 
                      className="text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 inline-block"
                      style={{ backgroundImage: "none" }}
                    >
                      <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] transition-all duration-300">
                        {card.title}
                      </span>
                    </span>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/80 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.7] font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F7A400] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}