"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, ShieldCheck, Layers } from "lucide-react";

interface EdgeFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const edgeFeatures: EdgeFeature[] = [
  {
    icon: <Zap className="w-6 h-6 text-[#F7A400]" />,
    title: "Zero-Bloat Architecture",
    description: `We don't use heavy templates or "cracked" plugins that slow down your business. Every project is built with a clean, custom-coded foundation (Next.js/Laravel), ensuring 95+ PageSpeed scores and 100% code ownership. No hidden subscription fees, ever.`,
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#F7A400]" />,
    title: "High-Fidelity Tactical Prototype",
    description: "Visualize your ecosystem before we write a single line of code. We deliver a fully interactive, 'Tactical Command Center' styled Figma prototype. This allows you to test the user journey and interface logic in a realistic, high-definition environment.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#F7A400]" />,
    title: "Military-Grade Security Hardening",
    description: "A beautiful site is useless if it isn't secure. Every build undergoes a rigorous internal audit. We implement custom protection against SQL injections, XSS attacks, and common vulnerabilities, ensuring your data remains impenetrable from day one.",
  },
  {
    icon: <Layers className="w-6 h-6 text-[#F7A400]" />,
    title: "Scalability & Logic Roadmap",
    description: "We don't just launch and leave. You receive a comprehensive technical roadmap for your software's future. We consult on how to scale your database and cloud infrastructure (AWS/DigitalOcean) to handle millions of requests as your brand grows.",
  },
];

export default function TechnicalEdgeSection() {
  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative text-white overflow-hidden font-poppins">
      
      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[650px] bg-gradient-to-r from-[#FFDDA1]/10 via-[#F7A400]/20 to-[#ff7a33]/15 rounded-full blur-[120px] sm:blur-[180px] lg:blur-[220px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* Main Container bounded to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-10">

        {/* Outer Master Wrapper matching screenshot card styling */}
        <div className="bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 rounded-[24px] p-[28px] sm:p-[48px] lg:p-[70px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group/outer transition-all duration-500 hover:border-[#F7A400]/60">
          
          {/* Creative Corner Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/5 via-transparent to-[#F7A400]/5 opacity-0 group-hover/outer:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-[48px] sm:mb-[64px] relative z-10">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight mb-3 text-white">
              The Technical Edge
            </h2>
            <p className="text-[15px] sm:text-[18px] lg:text-[19px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">
              Strategic Assets included with every partnership
            </p>
          </div>

          {/* 4-Column Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] sm:gap-[32px] relative z-10">
            {edgeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#02050a]/30 backdrop-blur-md border border-white/15 rounded-[20px] p-[24px] sm:p-[32px] flex flex-col justify-between group hover:border-[#F7A400]/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-500 relative overflow-hidden"
              >
                {/* Individual Card Glow */}
                <div className="absolute -top-20 -right-20 w-36 h-36 bg-[#F7A400]/10 rounded-full blur-2xl group-hover:bg-[#F7A400]/20 transition-all duration-500 pointer-events-none z-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/5 via-transparent to-[#F7A400]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                <div className="relative z-20">
                  {/* Icon Box */}
                  <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-2xl bg-[#02050A] border border-white/15 flex items-center justify-center mb-6 shadow-inner group-hover:border-[#F7A400] group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white mb-4 tracking-tight leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A1A1AA] text-[14px] sm:text-[15px] leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Bar on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F7A400] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-20" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}