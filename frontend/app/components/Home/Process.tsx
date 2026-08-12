"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search, Map, PenTool, Code2, TestTube2, LifeBuoy,
  ChevronLeft, ChevronRight,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Project Analysis",
    icon: Search,
    description: "Project analysis involves carefully examining the project to understand its objectives, requirements, and overall feasibility. This stage focuses on identifying the problem, analyzing available resources, estimating time and cost, and recognizing possible risks.",
  },
  {
    id: "02",
    title: "Strategy & Planning",
    icon: Map,
    description: "Developing a comprehensive roadmap tailored to your business goals. We define tech stacks, milestones, architecture, and resource allocation to ensure smooth execution from start to finish.",
  },
  {
    id: "03",
    title: "UX/UI Designing",
    icon: PenTool,
    description: "UX/UI designing focuses on creating an interface that is both user-friendly and visually appealing. User Experience (UX) design ensures that the product is easy to use, efficient, and meets user needs, while User Interface (UI) design concentrates on the layout, colors, fonts, and overall visual elements.",
  },
  {
    id: "04",
    title: "App Development",
    icon: Code2,
    description: "Writing clean, scalable, and optimized code. We build robust frontend and backend architectures ensuring high performance, security, and seamless cross-platform compatibility.",
  },
  {
    id: "05",
    title: "App Testing & Launch",
    icon: TestTube2,
    description: "Rigorous quality assurance testing to eliminate bugs, security vulnerabilities, and performance bottlenecks. Once perfected, we handle smooth deployment to production.",
  },
  {
    id: "06",
    title: "Support & Maintenance",
    icon: LifeBuoy,
    description: "Support and maintenance involve providing ongoing assistance and updates after the app is launched. This stage includes fixing bugs, improving performance, adding new features, and ensuring compatibility with updates.",
  },
];

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const goTo = (index: number) => {
    setActiveStep((index + processSteps.length) % processSteps.length);
  };

  return (
    <section
      className="w-full bg-[#02050a] py-8 sm:py-16 lg:py-20 overflow-hidden relative text-white font-poppins"
    >
      {/* Background Glow & Grid System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[400px] sm:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[120px] sm:blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-8">
          <div className="max-w-[750px]">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[#0d1117] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-3 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#F7A400" }} />
              <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-wider text-white uppercase">
                Process
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[24px] sm:text-[38px] md:text-[50px] font-extrabold tracking-tight leading-[1.25] sm:leading-[1.15] text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)" }}
            >
              Our Simple & Transparent App Development Process
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[480px]"
          >
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/90 sm:text-white leading-relaxed">
              Our app development process is designed to be simple, clear, and transparent at every stage. We begin by understanding the project requirements and planning the strategy, followed by user-friendly UX/UI design and efficient app development.
            </p>
          </motion.div>
        </div>

        {/* MAIN PROCESS CONTAINER (ACCORDION / EXPANDABLE GRID STYLE) */}
        <div className="w-full backdrop-blur-[20px] rounded-[10px] sm:rounded-[10px] border border-white/15 p-2.5 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row gap-2.5 sm:gap-4 items-stretch lg:h-[540px]">
          {processSteps.map((step, index) => {
            const isActive = activeStep === index;
            const IconComponent = step.icon;

            return (
              <motion.div
                key={step.id}
                onClick={() => goTo(index)}
                layout={false}
                className={`cursor-pointer rounded-[10px] border relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isActive
                    ? "lg:flex-[3.5] bg-[#02050a] border-white/25 p-4 sm:p-6 lg:p-8 shadow-2xl"
                    : "lg:flex-[0.5] bg-[#02050a]/70 border-white/10 hover:border-white/25 hover:bg-[#02050a] p-3.5 sm:py-5 lg:py-6 sm:px-3 lg:items-center"
                }`}
              >
                {isActive ? (
                  /* --- ACTIVE EXPANDED VIEW --- */
                  <div className="flex flex-col h-full justify-between gap-3.5 sm:gap-5 relative z-10 w-full">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[8px] sm:rounded-[10px] bg-[#F7A400] text-black font-black flex items-center justify-center text-[12px] sm:text-[14px] shadow-md shrink-0">
                          {step.id}
                        </div>
                        <h3 className="text-[16px] sm:text-[19px] md:text-[21px] font-bold text-white tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F7A400] shrink-0">
                        <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </div>
                    </div>

                    {/* Image inside expanded card */}
                    <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[230px] rounded-[8px] sm:rounded-[10px] overflow-hidden border border-white/10 shadow-lg shrink-0">
                      <Image
                        src="/assets/images/proces.png"
                        alt={step.title}
                        fill
                        className="object-cover select-none transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <p className="text-[12px] sm:text-[13px] md:text-[14px] text-white/90 sm:text-white leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-white/10 mt-auto">
                      <span className="text-[9px] sm:text-[11px] font-bold tracking-widest text-[#F7A400]/80 uppercase">
                        STEP {activeStep + 1} OF {processSteps.length}
                      </span>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          onClick={(e) => { e.stopPropagation(); goTo(activeStep - 1); }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-black hover:bg-[#F7A400] hover:border-[#F7A400] transition-all duration-300"
                          aria-label="Previous step"
                        >
                          <ChevronLeft size={14} className="sm:w-[16px] sm:h-[16px]" />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); goTo(activeStep + 1); }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-black hover:bg-[#F7A400] hover:border-[#F7A400] transition-all duration-300"
                          aria-label="Next step"
                        >
                          <ChevronRight size={14} className="sm:w-[16px] sm:h-[16px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* --- COLLAPSED VIEW --- */
                  <div className="flex flex-row lg:flex-col items-center justify-between h-full select-none w-full gap-3 lg:gap-0">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-[8px] sm:rounded-[10px] flex items-center justify-center font-black text-[11px] sm:text-[13px] bg-white/5 text-white/60 shrink-0">
                      {step.id}
                    </div>

                    <div className="my-auto py-1 lg:py-4 flex items-center justify-center">
                      <h4
                        className="text-[13px] sm:text-[15px] lg:text-[16px] font-bold tracking-wider text-white group-hover:text-white/90 whitespace-nowrap block lg:[writing-mode:vertical-rl] lg:[transform:rotate(180deg)]"
                      >
                        {step.title}
                      </h4>
                    </div>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-white/5 text-white shrink-0">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:transform lg:-rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}