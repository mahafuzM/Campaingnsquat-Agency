"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CeoMessage() {
  return (
    <section className="relative w-full bg-[#02050A] text-white py-[80px] sm:py-[100px] lg:py-[140px] px-4 sm:px-8 lg:px-12 overflow-hidden font-poppins">
      
      {/* Dark Overlay with Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#FFDDA1]/10 via-[#F7A400]/20 to-[#ff7a33]/15 rounded-full blur-[120px] sm:blur-[180px] lg:blur-[220px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container constrained to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT SIDE: CEO Image & Styling Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/5] flex items-center justify-center shrink-0"
        >
          {/* Outer Border Box Effect */}
          <div className="absolute inset-0 border border-[#F7A400]/30 rounded-[28px] translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />

          {/* Main Image Container */}
          <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#02050a]/40 backdrop-blur-[2px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group hover:border-[#F7A400]/60 transition-all duration-500">
            
            {/* Creative Corner Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl group-hover:bg-[#F7A400]/20 transition-all duration-500 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/10 via-transparent to-[#F7A400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

            {/* Background Brush/Art Layer */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/images/herobg.png"
                alt="Art Background"
                fill
                className="object-cover opacity-90 scale-110"
              />
            </div>

            {/* CEO Portrait Image */}
            <div className="absolute inset-0 z-10 flex items-end justify-center">
              <Image
                src="/assets/images/ceo.png"
                alt="Md. Maharab Biswas Api"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Floating Experience Badge */}
            <div className="absolute bottom-4 right-4 z-20 bg-[#02050A]/80 border border-white/15 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(247,164,0,0.2)] flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA] font-medium">Experience</span>
              <span className="text-[14px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">Full Stack</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content & Message */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col text-left max-w-[800px]"
        >
          {/* Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-md bg-[#02050a]/40 border border-white/15 backdrop-blur-[2px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] text-[12px] font-semibold tracking-wide shadow-[0_0_15px_rgba(247,164,0,0.15)]">
              Message from the CEO
            </span>
          </div>

          {/* Heading with Graded Background Text */}
          <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-tight text-white mb-3 leading-[1.2]">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FFDDA1] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(247,164,0,0.3)]">
              Digital Innovation
            </span>
          </h2>

          {/* Name & Title */}
          <div className="mb-6">
            <h3 className="text-[16px] sm:text-[18px] font-bold text-white">Md. Maharab Biswas Api</h3>
            <p className="text-[12px] sm:text-[14px] text-[#A1A1AA]">Founder & CEO, Campaignsquat Ltd</p>
          </div>

          {/* Paragraphs (Text White/80) */}
          <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-white/80 leading-[1.7] mb-4 font-normal">
            At Campaignsquat Ltd, we are dedicated to bridging the gap between complex technology and meaningful business growth. As a Full Stack Web Developer, I have seen firsthand how the right digital architecture can transform an idea into a powerhouse. Our mission is to provide scalable, high-performance solutions that empower brands to lead in an ever-evolving digital landscape.
          </p>

          <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-white/80 leading-[1.7] mb-8 font-normal">
            Through innovation, precision, and a commitment to excellence, we build more than just websites—we create the digital infrastructure that drives long-term success. Together, we are crafting the next generation of digital experiences.
          </p>

          {/* Footer Callout */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-[15px] sm:text-[18px] font-bold text-white mb-1">
              Let&apos;s build the future — together.
            </h4>
            <p className="text-[12px] sm:text-[14px] text-[#A1A1AA]">
              Join us in redefining the digital frontier.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}