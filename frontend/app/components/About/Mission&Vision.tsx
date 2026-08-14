"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#02050A] py-[70px] text-white font-poppins sm:py-[100px] lg:py-[150px]">
      {/* =========================================================
          BACKGROUND CREATIVE SYSTEM
      ========================================================= */}

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem]" />

      {/* Main ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[300px] sm:h-[420px] w-full max-w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ff7a33]/10 via-[#F7A400]/10 to-[#00ffff]/10 blur-[120px] sm:blur-[150px]" />

      {/* Left glow */}
      <div className="pointer-events-none absolute -left-[100px] sm:-left-[180px] top-[20%] h-[300px] sm:h-[420px] w-[300px] sm:w-[420px] rounded-full bg-[#F7A400]/8 blur-[120px] sm:blur-[140px]" />

      {/* Right glow */}
      <div className="pointer-events-none absolute -right-[100px] sm:-right-[180px] bottom-[10%] h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] rounded-full bg-[#3b82f6]/8 blur-[140px] sm:blur-[160px]" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[150px] sm:h-[220px] bg-gradient-to-b from-[#02050A] via-[#02050A]/60 to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] sm:h-[220px] bg-gradient-to-t from-[#02050A] via-[#02050A]/60 to-transparent" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1445px] px-4 sm:px-8 lg:px-16 xl:px-20">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-[900px] text-center sm:mb-16 lg:mb-24"
        >
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-10 bg-gradient-to-r from-transparent to-[#F7A400]" />

            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F7A400] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              What Drives Us
            </span>

            <span className="h-px w-8 sm:w-10 bg-gradient-to-l from-transparent to-[#F7A400]" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[42px] lg:text-[58px] font-extrabold uppercase leading-[1.1] tracking-[-0.04em]">
            <span className="text-white">Our </span>

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#FFDDA1 0%,#F7A400 50%,#FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mission
            </span>

            <span className="text-white"> & </span>

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#FFDDA1 0%,#F7A400 50%,#FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Vision
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-5 max-w-[720px] text-[14px] sm:text-[17px] lg:text-[19px] leading-[1.7] sm:leading-[1.8] text-white/60">
            We combine technology, creativity, and strategic thinking to
            transform ambitious ideas into meaningful digital experiences.
          </p>
        </motion.div>

        {/* =======================================================
            MISSION + VISION AREA
        ======================================================= */}

        <div className="relative">

          {/* Center connecting line - desktop */}
          <div className="pointer-events-none absolute left-1/2 top-[15%] hidden h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#F7A400]/30 to-transparent lg:block" />

          {/* Center badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          >
            <div className="relative flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#F7A400]/30 bg-[#02050A]/90 shadow-[0_0_60px_rgba(247,164,0,0.12)] backdrop-blur-xl">
              <div className="absolute inset-[7px] rounded-full border border-white/10" />
              <Sparkles className="h-5 w-5 text-[#F7A400]" />
            </div>
          </motion.div>

          {/* =====================================================
              GRID
          ===================================================== */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

            {/* ===================================================
                MISSION
            =================================================== */}

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col justify-between"
            >
              <div>
                {/* Background giant number */}
                <span className="pointer-events-none absolute -right-2 -top-6 sm:-right-4 sm:-top-12 select-none text-[130px] sm:text-[190px] lg:text-[230px] font-black leading-none text-white/[0.025] transition-all duration-700 group-hover:text-[#F7A400]/[0.05]">
                  01
                </span>

                {/* Orange corner glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 sm:-right-32 sm:-top-32 h-[220px] sm:h-[330px] w-[220px] sm:w-[330px] rounded-full bg-[#F7A400]/10 blur-[80px] sm:blur-[100px] transition-all duration-700 group-hover:bg-[#F7A400]/20" />

                {/* Gradient wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#F7A400]/[0.04] via-transparent to-[#ff7a33]/[0.03] opacity-70" />

                {/* Top label */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                    01 / Purpose
                  </span>

                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/40 transition-all duration-300 group-hover:border-[#F7A400]/40 group-hover:text-[#F7A400]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 mt-10 sm:mt-14">
                  <div className="relative flex h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] items-center justify-center rounded-2xl border border-[#F7A400]/25 bg-[#F7A400]/[0.07] text-[#F7A400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#F7A400]/10 group-hover:shadow-[0_0_45px_rgba(247,164,0,0.15)]">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7" />
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#F7A400] shadow-[0_0_15px_rgba(247,164,0,0.8)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 sm:mt-8">
                  <h3 className="text-[26px] sm:text-[34px] lg:text-[42px] font-bold tracking-[-0.03em]">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg,#FFFFFF 0%,#FFDDA1 45%,#F7A400 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Our Mission
                    </span>
                  </h3>

                  <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.8] sm:leading-[1.9] text-white/65">
                    To empower businesses by delivering high-quality,
                    innovative digital solutions that bridge the gap between
                    complex technology and user-friendly experiences. We strive
                    to be a trusted partner for our global clients, creating
                    scalable products that help brands thrive in an
                    ever-evolving digital landscape.
                  </p>
                </div>
              </div>

              {/* Bottom mini indicator */}
              <div className="relative z-10 mt-8 sm:mt-10 flex items-center justify-between border-t border-white/[0.08] pt-4 sm:pt-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Empower / Build / Grow
                </span>
                <Zap className="h-4 w-4 text-[#F7A400]/60" />
              </div>

              {/* Bottom visual line hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7A400]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>

            {/* ===================================================
                VISION
            =================================================== */}

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:border-[#3b82f6]/40 flex flex-col justify-between"
            >
              <div>
                {/* Background giant number */}
                <span className="pointer-events-none absolute -right-2 -top-6 sm:-right-4 sm:-top-12 select-none text-[130px] sm:text-[190px] lg:text-[230px] font-black leading-none text-white/[0.025] transition-all duration-700 group-hover:text-[#3b82f6]/[0.05]">
                  02
                </span>

                {/* Blue corner glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 sm:-right-32 sm:-top-32 h-[220px] sm:h-[330px] w-[220px] sm:w-[330px] rounded-full bg-[#3b82f6]/10 blur-[80px] sm:blur-[100px] transition-all duration-700 group-hover:bg-[#3b82f6]/20" />

                {/* Gradient wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3b82f6]/[0.04] via-transparent to-[#00ffff]/[0.03] opacity-70" />

                {/* Top label */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                    02 / Direction
                  </span>

                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/40 transition-all duration-300 group-hover:border-[#3b82f6]/40 group-hover:text-[#8ab4ff]">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 mt-10 sm:mt-14">
                  <div className="relative flex h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] items-center justify-center rounded-2xl border border-[#3b82f6]/25 bg-[#3b82f6]/[0.07] text-[#8ab4ff] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-[#3b82f6]/10 group-hover:shadow-[0_0_45px_rgba(59,130,246,0.15)]">
                    <Eye className="h-6 w-6 sm:h-7 sm:w-7" />
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 sm:mt-8">
                  <h3 className="text-[26px] sm:text-[34px] lg:text-[42px] font-bold tracking-[-0.03em]">
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg,#FFFFFF 0%,#D6E5FF 45%,#8AB4FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Our Vision
                    </span>
                  </h3>

                  <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.8] sm:leading-[1.9] text-white/65">
                    To become a global leader in digital transformation,
                    recognized for creativity, technical excellence, and
                    integrity in every project. We envision a future where
                    CampaignSquad Ltd. becomes the destination for brands
                    seeking seamless design and world-class technology.
                  </p>
                </div>
              </div>

              {/* Bottom mini indicator */}
              <div className="relative z-10 mt-8 sm:mt-10 flex items-center justify-between border-t border-white/[0.08] pt-4 sm:pt-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Imagine / Innovate / Lead
                </span>
                <Eye className="h-4 w-4 text-[#8ab4ff]/60" />
              </div>

              {/* Bottom visual line hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          </div>
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-12 max-w-[850px] text-center sm:mt-20"
        >
          <div className="mx-auto mb-4 sm:mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-6 sm:w-8 bg-white/10" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F7A400] shadow-[0_0_12px_rgba(247,164,0,0.7)]" />
            <span className="h-px w-6 sm:w-8 bg-white/10" />
          </div>

          <p className="text-[12px] sm:text-[14px] uppercase tracking-[0.22em] text-white/40">
            One direction. One purpose.
            <span className="ml-2 text-[#F7A400]">Infinite possibilities.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}