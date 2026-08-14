"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, Transition } from "framer-motion";

const problems = [
  {
    title: "01 — Starting Point",
    quote: "“I don't even know where to start.” You have the idea. You know what you want the product to achieve. But turning that idea into the right features, user flows, technology and roadmap is where things get messy. The problem isn't the idea. It's knowing what comes next.",
    name: "Starting Point",
    flag: "🚀",
    cardBg: "bg-[linear-gradient(145deg,#113f17_0%,#0b210e_50%,#051006_100%)]",
    quoteColor: "text-[#4ade80]",
    btnBg: "bg-[#86efac] text-gray-950",
  },
  {
    title: "02 — Communication",
    quote: "“Why do I have to explain everything twice?” You explain the vision to one person, the requirements to another, and somehow the final product still doesn't look like what you imagined. Too many people involved can make a simple idea surprisingly difficult to communicate.",
    name: "Communication",
    flag: "💬",
    cardBg: "bg-[linear-gradient(145deg,#a3e635_0%,#84cc16_50%,#4d7c0f_100%)]",
    quoteColor: "text-gray-950",
    btnBg: "bg-[#0b210e] text-white",
  },
  {
    title: "03 — Timeline",
    quote: "“Why is a simple project taking so long?” The deadline keeps moving. Small changes keep stacking up. A few weeks slowly turn into a few months. And the frustrating part? You still don't have a product you're confident enough to launch.",
    name: "Timeline",
    flag: "⏳",
    cardBg: "bg-[linear-gradient(145deg,#3b82f6_0%,#1e3a8a_50%,#172554_100%)]",
    quoteColor: "text-[#93c5fd]",
    btnBg: "bg-[#93c5fd] text-gray-950",
  },
  {
    title: "04 — Management",
    quote: "“I hired a team. Why am I still managing everything?” You shouldn't have to chase updates, coordinate designers and developers, explain the same requirement repeatedly, or keep asking what's happening next.",
    name: "Management",
    flag: "👥",
    cardBg: "bg-[linear-gradient(145deg,#9333ea_0%,#7c3aed_50%,#581c87_100%)]",
    quoteColor: "text-[#ddd6fe]",
    btnBg: "bg-[#ddd6fe] text-gray-950",
  },
  {
    title: "05 — Final Product",
    quote: "“It works. So why doesn't it feel right?” The website is live. The app runs. The software technically does what it should. But the experience feels slow, confusing, inconsistent, or simply not like the product you had in mind.",
    name: "Final Product",
    flag: "✨",
    cardBg: "bg-[linear-gradient(145deg,#d97706_0%,#b45309_50%,#78350f_100%)]",
    quoteColor: "text-[#fde68a]",
    btnBg: "bg-[#fde68a] text-gray-950",
  },
];

const TOTAL = problems.length;
const VISIBLE_RANGE = 2;
const AUTOPLAY_MS = 4500;
const SPRING: Transition = { type: "spring", stiffness: 300, damping: 32, mass: 0.9 };

function circularOffset(from: number, to: number): number {
  let diff = to - from;
  if (diff > TOTAL / 2) diff -= TOTAL;
  if (diff < -TOTAL / 2) diff += TOTAL;
  return diff;
}

export default function TestimonialSliderSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragging = useRef<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
  }, []);

  const goTo = useCallback((idx: number) => setCurrentIndex(idx), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused, goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    dragStartX.current = "clientX" in e ? e.clientX : e.touches[0].clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    const endX = "clientX" in e ? e.clientX : "changedTouches" in e ? e.changedTouches[0].clientX : dragStartX.current;
    const delta = endX - dragStartX.current;
    if (Math.abs(delta) > 60) {
      delta < 0 ? goNext() : goPrev();
    }
  };

  return (
    <section
      className="w-full py-6 lg:py-28 relative overflow-hidden bg-[#02050A] -mt-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1445px] w-full mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">

          {/* Left Side: Title & Navigation */}
          <div className="w-full lg:w-[420px] xl:w-[460px] flex-shrink-0 space-y-3.5 sm:space-y-6">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#12161D] border border-white/10 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#F7A400]"></span>
              <span className="text-[11px] md:text-[14px] font-semibold tracking-widest text-white">
                WHY CLIENTS GET STUCK
              </span>
            </div>

            <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-semibold tracking-tight leading-[1.15] lg:leading-[1] bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">
              Good ideas shouldn't become complicated projects.
            </h2>

            <p className="text-white text-[13px] sm:text-[16px] tracking-tight leading-relaxed">
              From the first conversation to the final launch, digital projects often get harder than they need to be. Different teams, unclear communication, changing timelines and endless revisions can turn a simple idea into a long, expensive process.
            </p>

            <p className="text-white text-[14px] sm:text-[16px] font-semibold pt-0.5">
              We believe the experience should feel different.
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 pt-1 sm:pt-2">
              <button
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#12161D] border border-white/10 flex items-center justify-center text-white hover:bg-[#F7A400] hover:text-black transition-colors duration-300 cursor-pointer shadow-lg active:scale-90"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={goNext}
                aria-label="Next testimonial"
                className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] flex items-center justify-center text-gray-950 hover:opacity-90 transition-opacity duration-300 cursor-pointer shadow-[0_10px_25px_rgba(247,164,0,0.25)] active:scale-90"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5 pt-1 sm:pt-2">
              {problems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className="h-[5px] sm:h-[6px] rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: idx === currentIndex ? 28 : 8,
                    background:
                      idx === currentIndex
                        ? "linear-gradient(90deg,#FFDDA1,#F7A400)"
                        : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: 3D Coverflow Stage (Full width card fix for Mobile) */}
          <div
            className="relative w-full flex-1 min-w-0 h-auto min-h-[380px] sm:h-[400px] lg:h-[460px] flex items-center justify-center select-none overflow-hidden mt-2 lg:mt-0"
            style={{
              perspective: "1800px",
              WebkitMaskImage: isMobile
                ? "none"
                : "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
              maskImage: isMobile
                ? "none"
                : "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            {problems.map((item, idx) => {
              const offset = circularOffset(currentIndex, idx);
              const abs = Math.abs(offset);
              
              if (isMobile && offset !== 0) return null;
              if (!isMobile && abs > VISIBLE_RANGE) return null;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={idx}
                  className={`${item.cardBg} ${
                    isMobile ? "relative w-full" : "absolute lg:w-[310px]"
                  } sm:w-[290px] h-auto min-h-[320px] sm:h-[380px] lg:h-[420px] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 flex flex-col justify-between border border-white/10 mx-auto overflow-hidden`}
                  initial={false}
                  animate={{
                    x: isMobile ? 0 : offset * 150,
                    scale: isActive ? 1 : 0.86 - (abs - 1) * 0.1,
                    rotateY: isMobile ? 0 : offset * -30,
                    opacity: isActive ? 1 : 0.55 - (abs - 1) * 0.2,
                    zIndex: 20 - abs,
                    filter: isActive ? "brightness(1)" : "brightness(0.7)",
                    boxShadow: isActive
                      ? "0 25px 60px rgba(0,0,0,0.55)"
                      : "0 15px 30px rgba(0,0,0,0.35)",
                  }}
                  transition={SPRING}
                  onClick={() => !isActive && goTo(idx)}
                  style={{
                    cursor: isActive ? "default" : "pointer",
                    transformStyle: "preserve-3d",
                    pointerEvents: abs > VISIBLE_RANGE ? "none" : "auto",
                  }}
                  whileTap={isActive ? { scale: 0.98 } : {}}
                >
                  {/* Top: Flag & Pill Title */}
                  <div className="flex items-center justify-between w-full mb-3 sm:mb-0">
                    <div className="w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] rounded-full overflow-hidden flex items-center justify-center text-[20px] sm:text-[28px] leading-none select-none bg-white shadow-sm flex-shrink-0">
                      {item.flag}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-white bg-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full truncate max-w-[180px]">
                      {item.title}
                    </span>
                  </div>

                  {/* Middle: Card Title & Quote */}
                  <div className="my-auto space-y-1.5 py-1 sm:py-2">
                    <h3 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-semibold tracking-wide">
                      {item.title}
                    </h3>
                    <p className={`${item.quoteColor} text-[12px] sm:text-[14px] lg:text-[15px] font-medium leading-relaxed sm:leading-tight`}>
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom: Button */}
                  <div className="pt-2 sm:pt-0">
                    <span className={`inline-block ${item.btnBg} font-semibold text-[10px] sm:text-[11px] px-3 py-1.5 sm:py-2 rounded-full shadow-md`}>
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}