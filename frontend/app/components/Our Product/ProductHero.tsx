"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiBox,
} from "react-icons/fi";

const features = [
  {
    icon: FiCheckCircle,
    title: "Enterprise Ready",
    description: "Reliable products built for demanding business workflows.",
    iconClass: "text-[#F7A400]",
    bgClass: "bg-[#F7A400]/10 border-[#F7A400]/20",
  },
  {
    icon: FiShield,
    title: "Secure by Design",
    description: "Modern security practices keep your business data protected.",
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: FiZap,
    title: "Built for Speed",
    description: "Optimized systems designed for fast and efficient performance.",
    iconClass: "text-blue-400",
    bgClass: "bg-blue-500/10 border-blue-500/20",
  },
];

export default function SimpleProductHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#02050A] py-16 font-poppins text-white sm:py-24 lg:py-32">
      
      {/* Background Gradient Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-20 mx-auto max-w-[1445px] px-4 sm:px-6 lg:px-10">
        
        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div className="mx-auto max-w-[950px] text-center">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F7A400]/30 bg-[#0B1017]/90 px-4 py-2 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#F7A400] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F7A400]" />
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFDDA1] sm:text-xs">
              Official Product Suite
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.12] tracking-[-0.035em]">
            Simple Solutions for
            <br />
            <span className="bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FF8800] bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[720px] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] sm:leading-[1.7] text-white">
            Discover powerful software products, intelligent automation systems, and enterprise-ready digital solutions designed to simplify complex workflows and help your business move forward.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#products"
              className="
                group inline-flex w-full items-center justify-center gap-3
                rounded-full
                bg-gradient-to-r from-[#FFDDA1] to-[#F7A400]
                px-8 py-4
                text-sm font-extrabold text-black
                shadow-[0_15px_35px_rgba(247,164,0,0.25)]
                transition-all duration-300
                hover:opacity-95 hover:shadow-[0_20px_45px_rgba(247,164,0,0.35)]
                sm:w-auto
              "
            >
              <span>Explore Products</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            <Link
              href="#contact"
              className="
                inline-flex w-full items-center justify-center gap-2
                rounded-full
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
              Contact Support
            </Link>
          </div>
        </div>

        {/* =====================================================
            PRODUCT OVERVIEW BAR
        ===================================================== */}
        <div className="mx-auto mt-16 max-w-[1100px] rounded-3xl border border-white/10 bg-[#070b12]/85 p-6 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 items-center">
            
            {/* Product */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#F7A400]/30 bg-[#F7A400]/10 shadow-inner">
                <FiBox className="h-5 w-5 text-[#F7A400]" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-[14px] font-bold tracking-wider text-white">
                  Product Suite
                </p>
                <p className="text-[8px] md:text-[12px] font-semibold text-white">
                  12+ Products
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 shadow-inner">
                <FiShield className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-[14px] font-bold tracking-wider text-white">
                  Security
                </p>
                <p className="text-[8px] md:text-[12px] font-semibold text-white">
                  Enterprise Grade
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 shadow-inner">
                <FiZap className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-[14px] font-bold tracking-wider text-white">
                  Performance
                </p>
                <p className="text-[8px] md:text-[12px] font-semibold text-white">
                  99.9% Uptime
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 shadow-inner">
                <span className="text-[10px] font-black text-[#FFDDA1]">
                  24/7
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] md:text-[14px] font-bold tracking-wider text-white">
                  Support
                </p>
                <p className="text-[8px] md:text-[12px] font-semibold text-white">
                  Live Assistance
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}
        <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
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
                    <h3 className="text-[10px] md:text-[14px] font-bold text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[8px] md:text-[12px] leading-relaxed text-white">
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
            Built for modern teams
          </span>
          <span className="h-px w-12 bg-white/10" />
        </div>

      </div>
    </section>
  );
}