"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
};

const baseItems: GalleryItem[] = [
  { src: "/assets/images/heroimage.webp", alt: "Development" },
  { src: "/images/hero/DigitalMarketing.webp", alt: "Digital Marketing" },
  { src: "/images/hero/MobileappDevelopment.webp", alt: "Mobile App Development" },
  { src: "/images/hero/Salesforce.webp", alt: "Software Development" },
  { src: "/images/hero/SMEINSPIRE.webp", alt: "SME Inspire" },
  { src: "/images/hero/WebDevelopment.webp", alt: "Web Development" },
];

const galleryItems: GalleryItem[] = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

export default function Dynamic3DGallery() {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const rightSideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    const leftSide = leftSideRef.current;
    const rightSide = rightSideRef.current;
    if (!track || !container) return;

    let scrollPos = 0;
    const autoSpeed = 0.8;
    let targetSpeedBoost = 0;
    let currentSpeedBoost = 0;
    let animationFrameId = 0;

    const updateCardTransforms = () => {
      const cards = track.querySelectorAll<HTMLDivElement>(".mtl-cgallery-card");
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const maxDistance = 620;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = containerCenter - cardCenter;
        const absDistance = Math.abs(distance);

        if (absDistance < maxDistance) {
          const progress = 1 - absDistance / maxDistance;
          const scale = 1.45 - progress * 0.75; 
          const rotateY = (distance / maxDistance) * 12;
          const translateZ = (1 - progress) * -400; 
          const translateY = progress * -10;

          card.style.transform = `perspective(1100px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px) translateY(${translateY}px)`;
          card.style.zIndex = String(Math.round(200 * (1 - progress) + 100));
        } else {
          const edgeRotate = distance > 0 ? 12 : -12;
          card.style.transform = `perspective(1100px) rotateY(${edgeRotate}deg) scale(1.45) translateZ(-400px) translateY(0px)`;
          card.style.zIndex = "100";
        }
      });
    };

    const animate = () => {
      currentSpeedBoost += (targetSpeedBoost - currentSpeedBoost) * 0.1;
      targetSpeedBoost *= 0.88;

      scrollPos += autoSpeed + currentSpeedBoost;

      const maxScroll = track.scrollWidth / 2;
      if (maxScroll > 0) {
        if (scrollPos >= maxScroll) {
          scrollPos -= maxScroll;
        } else if (scrollPos < 0) {
          scrollPos += maxScroll;
        }
      }

      track.style.transform = `translateX(-${scrollPos}px)`;
      updateCardTransforms();

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
      targetSpeedBoost += delta * 0.18;
    };

    const handleResize = () => updateCardTransforms();

    container.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (leftSide) leftSide.classList.add("animate-slide-in-left");
          if (rightSide) rightSide.classList.add("animate-slide-in-right");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="mtl-partners-wrap relative w-full overflow-hidden py-8 md:py-20 lg:py-24 bg-[#02050A] text-white p-4 md:p-6 lg:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] rounded-xl min-h-[950px] flex flex-col justify-between items-center font-poppins"
    >
      {/* Dark Overlay with Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Top Header Content */}
      <div className="text-center px-2 mb-2 pt-6 sm:pt-10 lg:pt-22 z-20 max-w-7xl mx-auto relative">
        <h1 className="text-[26px] md:text-[36px] lg:text-[42px] font-semibold text-white tracking-tight leading-tight">
          Software Development Company Delivering 
          Scalable IT Solutions & <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">AI</span> Innovation
        </h1>
        <p className="mt-2 md:mt-4 text-[16px] md:text-[18px] lg:text-[20px] text-white/90 max-w-2xl mx-auto">
          We help startups and enterprises build powerful digital products with custom software development, AI solutions, mobile apps, and web platforms.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-[32px] py-3 md:py-3.5 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[15px] rounded-full shadow-[0_0_25px_rgba(247,164,0,0.4)] hover:shadow-[0_0_35px_rgba(247,164,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
          >
            <span>Get Started</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Left and Right Safe Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#02050A] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#02050A] to-transparent pointer-events-none z-10" />

      {/* Gallery Track Container */}
      <div className="mtl-cgallery-wrap w-full overflow-hidden py-4 my-auto relative z-20">
        <div
          ref={trackRef}
          style={{ willChange: "transform" }}
          className="flex gap-1 w-max px-12 relative z-[2] items-center"
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="mtl-cgallery-card relative rounded-2xl overflow-hidden shadow-2xl w-[190px] h-[280px] flex-shrink-0 transition-transform duration-75 origin-center bg-[#02050a]/40 border border-white/15 backdrop-blur-[2px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="190px"
                loading={index < 8 ? "eager" : "lazy"}
                className="object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="w-full max-w-[1445px] mx-auto px-6 md:px-24 md:mt-10 lg:mt-12 z-20 flex flex-col md:flex-row justify-between items-center gap-8 relative">
        <div
          ref={leftSideRef}
          className="max-w-3xl text-left opacity-0 -translate-x-12 transition-all duration-1000 ease-out"
        >
          <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-white tracking-tight leading-tight">
            Successfully Delivered Government <br />
            & Enterprise-Grade Solutions
          </h2>
        </div>
        <div
          ref={rightSideRef}
          className="flex items-center gap-12 text-left opacity-0 translate-x-12 transition-all duration-1000 ease-out"
        >
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-white">14+</div>
            <div className="text-xs md:text-sm text-white/70 mt-1">Years of Industry Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-white flex items-center gap-2">
              4.9
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs md:text-sm font-bold text-[#F7A400]">5.0</span>
              <span className="text-[#F7A400] text-sm">★★★★★</span>
            </div>
            <div className="text-xs text-white/70 mt-0.5">3,595 Ratings</div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-slide-in-left {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .animate-slide-in-right {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
}