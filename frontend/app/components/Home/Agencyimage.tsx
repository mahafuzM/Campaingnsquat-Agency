"use client";

import React from "react";
import Image from "next/image";

export default function AgencyImageHero() {
  return (
    <section className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center bg-[#02050A] overflow-hidden px-2 sm:px-6 md:px-10">
      
      {/* ================= IMAGE CONTAINER ================= */}
      <div className="relative w-full max-w-[1445px] h-full flex items-center justify-center mx-auto">
        <Image
          src="/assets/images/Agencyimage.png"
          alt="Agency Showcase"
          fill
          priority
          className="w-full h-full object-contain object-center select-none"
        />
      </div>

    </section>
  );
}