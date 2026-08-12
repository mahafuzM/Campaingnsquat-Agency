"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalRecognitionSection() {
  const recognitions = [
    {
      title: "Clutch",
      subtitle: "Top B2B Service Provider & UX Design Agency",
    },
    {
      title: "Upwork",
      subtitle: "Top Rated Design & Development Agency",
    },
    {
      title: "Fiverr",
      subtitle: "Pro-Verified Development Squad",
    },
  ];

  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative font-poppins text-white overflow-hidden">
      
      {/* Dark Overlay with Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Ambient Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container strictly bounded to max-w-[1445px] with responsive padding */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-20">
        
        {/* Grid Layout: Left Image / Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-center">
          
          {/* Left Column: Team/Agency Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[28px] overflow-hidden bg-[#02050a]/40 backdrop-blur-[2px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group hover:border-[#F7A400]/60 transition-all duration-500"
          >
            {/* Creative Corner Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/5 rounded-full blur-3xl group-hover:bg-[#F7A400]/10 transition-all duration-500 pointer-events-none z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

            <Image
              src="/assets/images/testimonials/story-1.jpg"
              alt="CampaignSquad Team"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          </motion.div>

          {/* Right Column: Recognition List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Title */}
            <h2 className="text-[32px] sm:text-[42px] lg:text-[50px] font-extrabold tracking-tight uppercase leading-[115%] mb-[40px] text-white">
              The Global <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">Recognition</span>
            </h2>

            {/* Recognition Items */}
            <div className="flex flex-col">
              {recognitions.map((item, index) => (
                <div key={index} className="group">
                  <div className="py-[24px] sm:py-[28px] transition-transform duration-300 group-hover:translate-x-2">
                    <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight text-white mb-[8px] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#A1A1AA] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Divider Line (Omit for the last item) */}
                  {index !== recognitions.length - 1 && (
                    <div className="w-full h-[1px] bg-white/10 group-hover:bg-[#F7A400]/30 transition-colors duration-300" />
                  )}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}