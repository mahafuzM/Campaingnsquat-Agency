"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPromiseSection() {
  return (
    <section className="w-full bg-[#02050A] py-[100px] lg:py-[140px] overflow-hidden relative font-poppins text-white">
      
      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      

      <div className="max-w-[1445px] mx-auto px-[24px] md:px-[48px] lg:px-[80px] relative z-10">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-center">
          
          {/* LEFT COLUMN: Premium Image Showcase with Dark Luxury Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group hover:border-[#F7A400]/60 transition-all duration-500">
              
              {/* Creative Corner Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl group-hover:bg-[#F7A400]/20 transition-all duration-500 pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/10 via-transparent to-[#F7A400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              <Image
                src="/assets/images/videoimage.jpeg"
                alt="CampaignSquad Team Collaboration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 z-10"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Decorative Gold Accent Frame Behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full" />
          </motion.div>

          {/* RIGHT COLUMN: Heading, Description & Button */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 space-y-[28px]"
          >
            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight leading-[115%] text-white">
              Driven by Precision, Sustained by Trust: <br />
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                The Campaignsquat Promise
              </span>
            </h2>

            {/* Description Text */}
            <p className="text-white/80 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed font-normal">
              At Campaignsquat Ltd, we redefine the client-agency dynamic by transforming one-off transactions into long-term strategic alliances. Every structural architectural choice, line of clean code, and intuitive user journey we engineer is a direct reflection of our dedication to your brand&apos;s operational stability. When you collaborate with us, you aren&apos;t just outsourcing a task; you are integrating a high-performance team entirely committed to secure scalability, transparency, and sustainable business growth.
            </p>

            {/* Action Button */}
            <div className="pt-[8px]">
              <Link 
                href="/projects"
                className="inline-flex items-center justify-center px-[32px] py-2 md:py-3 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-extrabold text-[15px] rounded-full shadow-[0_0_25px_rgba(247,164,0,0.4)] hover:shadow-[0_0_35px_rgba(247,164,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Our Project
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}