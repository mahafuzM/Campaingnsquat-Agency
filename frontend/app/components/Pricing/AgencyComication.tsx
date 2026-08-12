"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

interface ComparisonRow {
  feature: string;
  us: boolean;
  others: boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Zero-Bloat Architecture Guarantee", us: true, others: false },
  { feature: "Full IP & Source Code Ownership", us: true, others: false },
  { feature: "Figma-to-Code Pixel Perfection", us: true, others: false },
  { feature: "Strategic User Flow Mapping", us: true, others: false },
  { feature: "Advanced Business Process Automation", us: true, others: false },
  { feature: "Infrastructure & Cloud Scaling Roadmap", us: true, others: false },
  { feature: "Security-First Development Framework", us: true, others: false },
  { feature: "Comprehensive Technical Documentation", us: true, others: false },
  { feature: "Data-Driven & Mobile-Ergonomic UI/UX", us: true, others: false },
  { feature: "Dedicated Post-Handover Stability Support", us: true, others: false },
];

export default function WhyChooseUsComparisonSection() {
  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative text-white overflow-hidden font-poppins">
      
      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[650px] bg-gradient-to-r from-[#FFDDA1]/10 via-[#F7A400]/20 to-[#ff7a33]/15 rounded-full blur-[120px] sm:blur-[180px] lg:blur-[220px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* Main Container bounded to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-10">

        {/* Section Header with Top Call Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-[48px] sm:mb-[64px]">
          <div>
            <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-tight mb-2 text-white">
              What do you get by choosing
            </h2>
            <h3 className="text-[28px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">
              Campaignsquat Ltd
            </h3>
          </div>

          <div>
            <a
              href="#book-intro-call"
              className="inline-flex items-center gap-2 px-[28px] py-[14px] bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-extrabold text-[15px] rounded-xl shadow-[0_0_25px_rgba(247,164,0,0.4)] hover:shadow-[0_0_35px_rgba(247,164,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
            >
              <span>Book an Intro Call</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 rounded-[24px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative">
          
          {/* Creative Corner Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none z-0" />
          
          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Header */}
              <thead>
                <tr className="border-b border-white/10 bg-[#02050a]/40">
                  <th className="py-6 px-6 sm:px-8 text-[18px] sm:text-[20px] font-bold text-white w-1/2">
                    Features
                  </th>
                  <th className="py-6 px-6 text-center text-[18px] sm:text-[20px] font-extrabold text-black bg-gradient-to-b from-[#FFDDA1] to-[#F7A400] w-1/4 relative shadow-[0_10px_30px_rgba(247,164,0,0.3)]">
                    Campaignsquat Ltd
                    {/* Ribbon Arrow Effect at Bottom matching reference image */}
                    <div className="absolute left-0 right-0 -bottom-4 h-5 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] [clip-path:polygon(0_0,100%_0,50%_100%)] shadow-md" />
                  </th>
                  <th className="py-6 px-6 text-center text-[18px] sm:text-[20px] font-bold text-white/70 w-1/4">
                    Other Agency
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="border-b border-white/10 hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Feature Title */}
                    <td className="py-5 px-6 sm:px-8 text-[15px] sm:text-[17px] font-medium text-white/90">
                      {row.feature}
                    </td>

                    {/* Campaignsquat Ltd Column (Highlighted Background Strip) */}
                    <td className="py-5 px-6 text-center bg-[#F7A400]/[0.12] border-x border-[#F7A400]/20 relative">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F7A400] text-black shadow-[0_0_15px_rgba(247,164,0,0.6)]">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                    </td>

                    {/* Other Agency Column */}
                    <td className="py-5 px-6 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 text-red-500">
                        <X className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

        {/* Footer Trust Note */}
        <div className="text-center mt-8">
          <p className="text-[14px] sm:text-[15px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] tracking-wide uppercase">
            Trusted by Industry Leaders Worldwide
          </p>
        </div>

      </div>
    </section>
  );
}