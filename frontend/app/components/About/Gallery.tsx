"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/assets/images/testimonials/story-1.jpg" },
  { id: 2, src: "/assets/images/testimonials/story-2.jpg" },
  { id: 3, src: "/assets/images/testimonials/story-3.jpg" },
  { id: 4, src: "/assets/images/testimonials/story-1.jpg" },
  { id: 5, src: "/assets/images/testimonials/story-2.jpg" },
];

export default function InfiniteMarqueeGallery() {
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section className="w-full bg-[#02050A] py-[100px] lg:py-[140px] relative overflow-hidden font-poppins">
      
      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Dark Overlay with Gradient Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Main Container with max-w-full */}
      <div className="max-w-full mx-auto relative z-20">

        {/* Marquee Wrapper spanning full width */}
        <div className="w-full overflow-hidden relative flex items-center">
          
          {/* Gradient Fade Edges matching `#02050A` */}
          <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#02050A] to-transparent z-30 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[#02050A] to-transparent z-30 pointer-events-none" />

          <motion.div
            className="flex items-center gap-[24px] shrink-0 z-20"
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedImages.map((item, index) => {
              const isLarge = index % 2 === 0;
              const heightClass = isLarge ? "h-[460px] sm:h-[540px]" : "h-[320px] sm:h-[380px]";
              const widthClass = isLarge ? "w-[280px] sm:w-[340px]" : "w-[220px] sm:w-[260px]";

              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`relative ${widthClass} ${heightClass} rounded-[24px] overflow-hidden bg-[#02050a]/40 backdrop-blur-[2px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] shrink-0 group select-none transition-all duration-500 hover:border-[#F7A400]/60`}
                >
                  {/* Creative Corner Glow Effect */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl group-hover:bg-[#F7A400]/20 transition-all duration-500 pointer-events-none z-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/10 via-transparent to-[#F7A400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                  {/* Image */}
                  <Image
                    src={item.src}
                    alt="CampaignSquad Workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                  />

                  {/* Subtle Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />

                  {/* Golden Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-[#F7A400]/60 group-hover:shadow-[inset_0_0_25px_rgba(247,164,0,0.3)] transition-all duration-300 pointer-events-none z-20" />
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </section>
  );
}