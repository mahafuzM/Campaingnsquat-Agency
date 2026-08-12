"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiUsers, 
  FiGift, 
  FiCoffee, 
  FiHeart, 
  FiCompass 
} from "react-icons/fi";

const perks = [
  {
    id: 1,
    title: "Excellent Culture & Environment",
    description: "Collaborative and friendly workspace that fosters innovation and personal growth.",
    icon: <FiUsers className="w-7 h-7 text-[#F7A400]" />,
  },
  {
    id: 2,
    title: "Performance & Festival Bonuses",
    description: "Rewarding your hard work and dedication with competitive financial incentives.",
    icon: <FiGift className="w-7 h-7 text-[#F7A400]" />,
  },
  {
    id: 3,
    title: "Meals, Coffee & Snacks",
    description: "Stay fueled and energized throughout the day with complimentary refreshments.",
    icon: <FiCoffee className="w-7 h-7 text-[#F7A400]" />,
  },
  {
    id: 4,
    title: "Work-Life Harmony",
    description: "Flexible schedules and policies designed to keep you happy both on and off the clock.",
    icon: <FiHeart className="w-7 h-7 text-[#F7A400]" />,
  },
  {
    id: 5,
    title: "Annual Pleasure Tour",
    description: "Exciting yearly adventures and trips to recharge and bond with your teammates.",
    icon: <FiCompass className="w-7 h-7 text-[#F7A400]" />,
  },
];

export default function WhyJoinUsCreative() {
  return (
    <section className="w-full bg-[#02050A] py-16 sm:py-24 lg:py-32 overflow-hidden relative text-white font-poppins">
      
      {/* Background Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      <div className="max-w-[1445px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] relative z-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F7A400]/10 text-[#F7A400] border border-[#F7A400]/20 mb-4 inline-block shadow-lg backdrop-blur-md">
              PERKS & BENEFITS
            </span>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-tight">
              Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDDA1] to-[#F7A400]">CampaignSquad Ltd.</span>
            </h2>
          </motion.div>
        </div>

        {/* Perks Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-[#F7A400]/60 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 group shadow-xl hover:shadow-[0_15px_30px_rgba(247,164,0,0.15)] relative overflow-hidden"
            >
              {/* Subtle Top Glow Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#F7A400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#02050A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#F7A400]/40 transition-all shadow-inner">
                {perk.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-3 group-hover:text-[#F7A400] transition-colors leading-snug">
                {perk.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}