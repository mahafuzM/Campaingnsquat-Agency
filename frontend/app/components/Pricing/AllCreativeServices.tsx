"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceColumn {
  category: string;
  items: string[];
}

const serviceColumns: ServiceColumn[] = [
  {
    category: "UI/UX Design",
    items: [
      "UI/UX Design",
      "App Interfaces",
      "Landing Page UI",
      "Design Systems",
      "SaaS & Dashboards",
      "Interactive Prototype",
      "UX & Wireframing",
      "Web & Mobile UI",
    ],
  },
  {
    category: "Web Design & Development",
    items: [
      "Web Design & Development",
      "E-commerce Development",
      "Site Optimization",
      "Personal Branding",
      "Corporate Sites",
      "Landing Pages",
      "WordPress Dev",
      "Custom Websites",
    ],
  },
  {
    category: "Software Development",
    items: [
      "Software Development",
      "API Integration",
      "HRM Systems",
      "Inventory & Billing",
      "Business Automation",
      "ERP Systems",
      "SaaS Solution",
      "Custom CRM",
    ],
  },
  {
    category: "Mobile App Development",
    items: [
      "Mobile App Development",
      "On-Demand Apps",
      "Food Delivery",
      "Booking Apps",
      "E-commerce Apps",
      "Cross-Platform",
      "iOS Apps",
      "Android Apps",
    ],
  },
];

export default function AllCreativeServicesSection() {
  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative text-white overflow-hidden font-poppins">
      
      {/* Background Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[650px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container bounded to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-[48px] sm:mb-[64px] relative z-10">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-tight mb-3 text-white">
            All Our Creative Services Included
          </h2>
          {/* Gold Accent Divider Bar */}
          <div className="w-[80px] h-[3px] bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(247,164,0,0.6)]" />
        </div>

        {/* Outer Master Wrapper */}
        <div className="bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 rounded-[24px] p-[20px] sm:p-[40px] lg:p-[50px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group/outer transition-all duration-500 hover:border-[#F7A400]/60">
          
          {/* Creative Corner Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/5 via-transparent to-[#F7A400]/5 opacity-0 group-hover/outer:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[24px] relative z-20">
            {serviceColumns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-[12px]">
                {col.items.map((itemText, itemIndex) => {
                  const isHeaderItem = itemIndex === 0;

                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (colIndex * 0.08) + (itemIndex * 0.03) }}
                      className={`group/card flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4 rounded-[14px] bg-[#02050a]/30 backdrop-blur-md border border-white/10 hover:border-[#F7A400]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
                        isHeaderItem ? "bg-[#02050a]/60 border-[#F7A400]/40" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7A400] shrink-0" />
                        <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold text-white tracking-tight group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] transition-all duration-300">
                          {itemText}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/30 group-hover/card:text-[#F7A400] transform group-hover/card:translate-x-1 transition-all duration-300 shrink-0" />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}