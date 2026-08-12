"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiActivity, FiShoppingBag, FiFilm, FiDollarSign, FiTruck, 
  FiCpu, FiRadio, FiSettings, FiUsers, FiHome, FiZap, 
  FiCompass, FiBookOpen, FiShield, FiBox 
} from "react-icons/fi";

const industries = [
  { icon: <FiActivity className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Healthcare", description: "Custom healthcare software development for secure, compliant digital platforms" },
  { icon: <FiShoppingBag className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Retail & E-Commerce", description: "End-to-end retail & ecommerce software development solutions that drive conversions" },
  { icon: <FiFilm className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Media & Entertainment", description: "Scalable media and entertainment software development for seamless content delivery" },
  { icon: <FiDollarSign className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Finance & Banking", description: "Robust finance & banking software development for secure financial infrastructure" },
  { icon: <FiTruck className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Automotive", description: "Advanced automotive software engineering for intelligent connected mobility" },
  { icon: <FiCpu className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Agriculture", description: "Smart agriculture software development for agri-tech automation & precision farming" },
  { icon: <FiRadio className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Telecommunication", description: "Scalable telecom software development for robust network management platforms" },
  { icon: <FiSettings className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Manufacturing", description: "Custom manufacturing software development for automated production optimization" },
  { icon: <FiUsers className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Public Sector & Government", description: "Trusted government software development for secure digital governance platforms" },
  { icon: <FiHome className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Real Estate", description: "Custom PropTech & real estate software development for smart property management platforms" },
  { icon: <FiZap className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Energy & Utilities", description: "Intelligent energy software development for real-time monitoring & utility management" },
  { icon: <FiCompass className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Travel & Hospitality", description: "Custom travel & hospitality software development for seamless booking experiences" },
  { icon: <FiBookOpen className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Education & E-Learning", description: "Scalable education & eLearning software development for modern digital classrooms" },
  { icon: <FiShield className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Insurance", description: "Custom insurance software development for automated policy & claims management" },
  { icon: <FiBox className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Logistics & Supply Chain", description: "End-to-end logistics & supply chain software development for real-time visibility" },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-[#02050a] py-8 sm:py-20 lg:py-28 overflow-hidden relative text-white">

      {/* Background Glow & Grid System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/10 via-[#3b82f6]/10 to-[#00ffff]/5 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] w-full mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-[800px] mx-auto mb-8 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-5 sm:py-2 rounded-full bg-[#0d1117] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-3 sm:mb-6"
          >
            <span 
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#F7A400" }}
            />
            <span className="text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-wider text-white uppercase">
              INDUSTRIES WE SERVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[22px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tight text-transparent bg-clip-text leading-tight"
            style={{
              backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
            }}
          >
            Tailored solutions for diverse industries
          </motion.h2>
        </div>

        {/* INDUSTRIES GRID - grid-cols-2 for Mobile, md:grid-cols-2, lg:grid-cols-3 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-12 gap-y-6 sm:gap-y-10">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              className="relative pl-3 sm:pl-6 flex flex-col justify-between group"
            >
              {/* Left Thin Accent Vertical Line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[2px] sm:w-[2.5px] rounded-full transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(247,164,0,0.8)]"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              />

              <div>
                {/* Icon */}
                <div 
                  className="mb-1.5 sm:mb-3 transition-transform duration-300 w-fit group-hover:scale-110"
                  style={{ color: "#F7A400" }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[14px] sm:text-[20px] font-bold tracking-tight mb-1 sm:mb-2 text-white group-hover:text-indigo-200 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-[15px] text-white leading-snug sm:leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}