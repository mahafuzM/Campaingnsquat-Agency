"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Brand 1", img: "/assets/images/farmercare.png" },
  { name: "Brand 2", img: "/assets/images/farmercare.png" },
  { name: "Brand 3", img: "/assets/images/farmercare.png" },
  { name: "Brand 4", img: "/assets/images/farmercare.png" },
  { name: "Brand 5", img: "/assets/images/farmercare.png" },
  { name: "Brand 6", img: "/assets/images/farmercare.png" },
  { name: "Brand 7", img: "/assets/images/farmercare.png" },
];

export default function TrustedBrands() {
  return (
    <section className="w-full bg-[#02050A] mb-2 md:pb-4 lg:pb-8  overflow-hidden relative">
      
      {/* SECTION HEADING */}
      <div className="text-center md:mb-8 lg:mb-10 p-2">
        <h2 
          className="relative inline-block text-[26px] sm:text-[36px] md:text-[42px] font-semibold tracking-tight text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Trusted by agencies that resell our work
        </h2>
      </div>

      {/* AUTO-RUNNING LOGO CONTAINER */}
      <div className="relative w-full flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        <motion.div
          className="flex items-center gap-6 min-w-max py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {/* Double the array to create a seamless infinite loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[220px] h-[80px] bg-white rounded-[10px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  fill
                  className="object-contain p-2 select-none"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}