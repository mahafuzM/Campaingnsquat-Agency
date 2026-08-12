"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

export default function ServiceHero() {
  return (
    <section className="relative w-full min-h-[850px] sm:min-h-[900px] lg:min-h-[1050px] flex flex-col justify-center items-center bg-[#02050A] text-white overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-24">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        
        {/* Background Image Container with Controlled Height & Width Ratio */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/herobg.png"
            alt="Campaignsquat Ltd Background"
            fill
            priority
            className="w-full h-full object-cover sm:object-fill object-center select-none"
          />
        </div>

        {/* Dark Gradient Overlay (To keep text readable) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050A]/70 via-transparent to-[#02050A]" />

        {/* Left & Right Golden Glow Effect */}
        <div className="" />
        <div className="" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="w-full max-w-[1445px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] relative z-10 flex flex-col items-center text-center">

        {/* 1. BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 h-[34px] sm:h-[36px] rounded-full bg-[rgba(255,255,255,0.03)] border border-[#F7A400]/40 shadow-[0_0_20px_rgba(247,164,0,0.2)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F7A400]" />
            <span className="text-[11px] sm:text-[14px] font-semibold tracking-wide text-white">
              Service
            </span>
          </div>
        </motion.div>

        {/* 2. MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-2xl sm:text-[26px] md:text-[36px] lg:text-[42px] font-extrabold tracking-tight max-w-[1200px] leading-[1.2] sm:leading-[1.08] mb-4 sm:mb-6 text-white"
        >
          Engineering Precision in Every Line of Code, Crafting Logic in Every Design to Transform{" "}
          <span
            className="text-transparent bg-clip-text drop-shadow-[0_0_40px_rgba(247,164,0,0.3)]"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Your Business Ideas
          </span>
        </motion.h1>

        {/* 3. DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#A1A1AA] max-w-[950px] leading-relaxed mb-8 sm:mb-10 font-normal px-2 sm:px-0"
        >
          Established in 2021, Campaignsquat Ltd has grown from a vision of logical problem-solving into a fully registered, globally recognized software development company operating proudly in both Bangladesh and the United Kingdom. We don't just write code or design templates; we architect high-performance digital ecosystems engineered to solve the toughest operational and business challenges. Our commitment to engineering excellence has allowed us to partner with prestigious institutions, including our notable collaboration in engineering critical digital infrastructure for the Jhenaidah District Police, Bangladesh. By merging complex logic with human-centric design, we transform abstract ideas into scalable software realities that drive absolute growth.
        </motion.p>

        {/* 4. BOOK A MEETING CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="flex justify-center w-full sm:w-auto"
        >
          <a
            href="#explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[12px] md:text-[15px] hover:opacity-90 shadow-[0_0_25px_rgba(247,164,0,0.4)] transition-all duration-300 group cursor-pointer"
          >
            <span>Explore More</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}