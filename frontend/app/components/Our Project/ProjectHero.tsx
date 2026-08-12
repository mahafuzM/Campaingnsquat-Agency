"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCode,
  FiLayers,
  FiCpu,
  FiCheckCircle,
  FiFolder,
  FiTrendingUp,
} from "react-icons/fi";

const projectFeatures = [
  {
    icon: FiCode,
    title: "Clean Architecture",
    description: "Scalable, maintainable code built with modern tech stacks.",
    iconClass: "text-[#F7A400]",
    bgClass: "bg-[#F7A400]/10 border-[#F7A400]/20",
  },
  {
    icon: FiLayers,
    title: "Modular Systems",
    description: "Component-driven design engineered for seamless extension.",
    iconClass: "text-purple-400",
    bgClass: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: FiCpu,
    title: "High Performance",
    description: "Optimized pipelines delivering ultra-fast execution speeds.",
    iconClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20",
  },
];

export default function SimpleProjectHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#02050A] py-20 font-poppins text-white sm:py-24 lg:py-32">
      
      {/* Background Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-20 mx-auto max-w-[1445px] px-4 sm:px-6 lg:px-10">
        
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="mx-auto max-w-[900px] text-center">
          
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F7A400]/30 bg-[#0B1017]/90 px-4 py-2 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#F7A400] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F7A400]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFDDA1] sm:text-xs">
              Featured Portfolio Works
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[76px]">
            Crafting Digital Solutions
            <br />
            <span className="bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FF8800] bg-clip-text text-transparent">
              That Drive Real Impact.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Explore our curated collection of enterprise software architectures, high-performance web applications, and scalable digital products engineered for success.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="
                group inline-flex w-full items-center justify-center gap-3
                rounded-2xl
                bg-gradient-to-r from-[#FFDDA1] to-[#F7A400]
                px-8 py-4
                text-sm font-extrabold text-black
                shadow-[0_15px_35px_rgba(247,164,0,0.25)]
                transition-all duration-300
                hover:opacity-95 hover:shadow-[0_20px_45px_rgba(247,164,0,0.35)]
                sm:w-auto
              "
            >
              <span>Explore Projects</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="#contact"
              className="
                inline-flex w-full items-center justify-center gap-2
                rounded-2xl
                border border-white/15
                bg-[#0B1017]/80
                px-8 py-4
                text-sm font-bold text-white
                backdrop-blur-xl
                transition-all duration-300
                hover:border-[#F7A400]/50
                hover:bg-[#121824]
                sm:w-auto
              "
            >
              Request Custom Work
            </Link>
          </div>
        </div>

        {/* =====================================================
            PROJECT OVERVIEW BAR (Different Metrics)
        ====================================================== */}
        <div className="mx-auto mt-20 max-w-[1100px] rounded-3xl border border-white/10 bg-[#070b12]/85 p-6 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 items-center">
            
            {/* Total Projects */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F7A400]/30 bg-[#F7A400]/10 shadow-inner">
                <FiFolder className="h-5 w-5 text-[#F7A400]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Total Works
                </p>
                <p className="text-sm font-extrabold text-white">
                  25+ Delivered
                </p>
              </div>
            </div>

            {/* Success Rate */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 shadow-inner">
                <FiCheckCircle className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Success Rate
                </p>
                <p className="text-sm font-extrabold text-white">
                  100% Completed
                </p>
              </div>
            </div>

            {/* Scale */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 shadow-inner">
                <FiTrendingUp className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Scale
                </p>
                <p className="text-sm font-extrabold text-white">
                  Enterprise Grade
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 shadow-inner">
                <FiCode className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                  Tech Stack
                </p>
                <p className="text-sm font-extrabold text-white">
                  Modern & Secure
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            FEATURE CARDS (Different Project Highlights)
        ====================================================== */}
        <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
          {projectFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-[#080C12]/80
                  p-6
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-[#F7A400]/40
                  hover:bg-[#0d131d]
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${feature.bgClass} shadow-inner`}
                  >
                    <Icon className={`h-6 w-6 ${feature.iconClass}`} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFDDA1] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Label */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/10" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
            Engineered for excellence
          </span>
          <span className="h-px w-12 bg-white/10" />
        </div>

      </div>
    </section>
  );
}