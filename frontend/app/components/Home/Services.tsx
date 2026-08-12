"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    step: "01",
    title: "UI/UX Design",
    subtitle: "Creating Intuitive & User-Centric Digital Experiences",
    description: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop",
    bgColor: "bg-[#B4FCB0]",
    accent: "#B4FCB0",
    glow: "hover:shadow-[0_0_50px_rgba(180,252,176,0.35)]",
    badgeBg: "bg-black/10 text-black border-black/20",
  },
  {
    id: 2,
    step: "02",
    title: "Web Design & Development",
    subtitle: "High-Performance Scalable Web Architectures",
    description: "Custom full-stack web applications built with Next.js, React, responsive layouts, blazing-fast speed, and SEO dominance.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    bgColor: "bg-[#FEC286]",
    accent: "#FEC286",
    glow: "hover:shadow-[0_0_50px_rgba(254,194,134,0.35)]",
    badgeBg: "bg-black/10 text-black border-black/20",
  },
  {
    id: 3,
    step: "03",
    title: "Software Development",
    subtitle: "Custom Enterprise & Cloud-Native Solutions",
    description: "End-to-end custom software architecture, microservices integration, and enterprise automation designed to streamline operations.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    bgColor: "bg-[#A1D1FF]",
    accent: "#A1D1FF",
    glow: "hover:shadow-[0_0_50px_rgba(161,209,255,0.35)]",
    badgeBg: "bg-black/10 text-black border-black/20",
  },
  {
    id: 4,
    step: "04",
    title: "Mobile App Development",
    subtitle: "Cross-Platform & Native iOS/Android Apps",
    description: "High-performance mobile applications built with Flutter and React Native, delivering native-like fluid animations and reliability.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    bgColor: "bg-[#FF9194]",
    accent: "#FF9194",
    glow: "hover:shadow-[0_0_50px_rgba(255,145,148,0.35)]",
    badgeBg: "bg-black/10 text-black border-black/20",
  },
];

// description থেকে ছোট tag chips বের করা
const getTags = (description: string) =>
  description
    .split(",")
    .map((t) => t.replace(/^and\s+/i, "").trim().replace(/\.$/, ""))
    .filter(Boolean)
    .slice(0, 4);

// পৃথক কম্পোনেন্ট হিসেবে কার্ড তৈরি করা হলো
function ServiceCard({ item, isActive, cardRef }: { item: typeof servicesData[0]; isActive: boolean; cardRef: (el: HTMLDivElement | null) => void }) {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });
  const tags = getTags(item.description);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y, active: true });
  };

  const onMouseLeave = () => setPos((p) => ({ ...p, active: false }));

  return (
    <div className="relative rounded-[10px] p-[1.5px] group/border">
      {/* Rotating gradient border ring */}
      <div className="absolute inset-0 rounded-[10px] overflow-hidden opacity-0 group-hover/border:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-[-60%] animate-[spin_5s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${item.accent}, transparent 35%)`,
          }}
        />
      </div>

      <div
        ref={cardRef}
        className={`${item.bgColor} relative overflow-hidden rounded-[10px] p-5 sm:p-9 shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-all duration-700 transform ${
          isActive ? "scale-[1.01] sm:scale-[1.02]" : "scale-100 opacity-75 hover:opacity-95"
        } ${item.glow} border border-white/20`}
      >
        {/* Ambient glow blob */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        {/* Outlined big number (stroke style) */}
        <span
          className="absolute -bottom-6 -right-2 text-[100px] sm:text-[180px] font-black select-none pointer-events-none leading-none"
          style={{
            WebkitTextStroke: "1.5px rgba(0,0,0,0.15)",
            color: "transparent",
          }}
        >
          {item.step}
        </span>

        {/* Corner dashed accent bracket */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-black/20 rounded-tl-lg pointer-events-none" />

        {/* Image with spotlight + CTA reveal */}
        <div
          ref={spotlightRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="h-[200px] sm:h-[390px] w-full rounded-[10px] overflow-hidden bg-[#0d1322] mb-5 sm:mb-7 relative group shadow-inner"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Cursor-follow spotlight */}
          <div
            className="absolute inset-0 transition-opacity duration-300 mix-blend-overlay"
            style={{
              opacity: pos.active ? 1 : 0,
              background: `radial-gradient(220px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.55), transparent 70%)`,
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating "View Case Study" pill */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <span className="inline-flex items-center gap-2 bg-white/95 text-black text-xs sm:text-sm font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-xl">
              View Case Study
              <FiArrowUpRight className="text-sm sm:text-base" />
            </span>
          </div>

          {/* Step Badge */}
          <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 backdrop-blur-md px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border text-[10px] sm:text-xs font-bold tracking-wider shadow-lg ${item.badgeBg}`}>
            STEP {item.step}
          </div>
        </div>

        {/* Text + tag chips + Explore Button */}
        <div className="relative z-10 flex flex-col gap-2.5 sm:gap-4">
          <div>
            <h4 className="text-[20px] sm:text-[28px] lg:text-[32px] font-extrabold text-black tracking-tight leading-snug">
              {item.title}
            </h4>
            <div
              className="h-[2px] sm:h-[3px] w-10 sm:w-12 rounded-full mt-1 sm:mt-2 mb-2 sm:mb-3"
              style={{ background: "rgba(0,0,0,0.35)" }}
            />
          </div>

          <p className="text-black/85 text-[13px] sm:text-[17px] font-medium leading-relaxed">
            {item.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-[13px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/10 text-black border border-black/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Added Explore Button inside card */}
          <div className="pt-1 sm:pt-2">
            <a
              href="#explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-black text-white font-semibold text-[12px] sm:text-[14px] hover:bg-black/80 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 group/btn w-fit"
            >
              <span>Explore</span>
              <FiArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StickyScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isManualScrolling = useRef(false);
  const [linePos, setLinePos] = useState({ top: 0, height: 0 });

  // Scroll korle automatic active index update hobe
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      cardRefs.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active index অনুযায়ী left side line/bar position update
  useEffect(() => {
    const el = listRefs.current[activeIndex];
    if (el) {
      setLinePos({ top: el.offsetTop, height: el.offsetHeight });
    }
  }, [activeIndex]);

  // বামপাশের আইটেমে ক্লিক করলে ডানপাশের নির্দিষ্ট কার্ড স্ক্রিনে আসবে
  const handleItemClick = (index: number) => {
    isManualScrolling.current = true;
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(() => {
      isManualScrolling.current = false;
    }, 600);
  };

  return (
    <section className="bg-[#02050a] py-8 sm:py-24 w-full text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none " />
      <div className="max-w-[1445px] w-full mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-center min-h-0 lg:min-h-[450px]">
            
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
                <span 
                  className="text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(247,164,0,0.3)] inline-block"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                  }}
                >
                  Services We Provide
                </span>
              </h2>
            </div>

            <div className="relative flex flex-col gap-2.5 sm:gap-4 mb-4 sm:mb-6 pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 rounded-full" />
              <div
                className="absolute left-0 w-[2px] rounded-full transition-all duration-500 ease-out"
                style={{
                  top: linePos.top,
                  height: linePos.height,
                  background: servicesData[activeIndex].accent,
                  boxShadow: `0 0 12px ${servicesData[activeIndex].accent}`,
                }}
              />

              {servicesData.map((item, index) => {
                const isActive = activeIndex === index;
                const cardTheme = [
                  { activeBg: "bg-[#B4FCB0]/20 text-[#B4FCB0]", borderCol: "border-[#B4FCB0]/60", shadow: "shadow-[0_0_25px_rgba(180,252,176,0.2)]" },
                  { activeBg: "bg-[#FEC286]/20 text-[#FEC286]", borderCol: "border-[#FEC286]/60", shadow: "shadow-[0_0_25px_rgba(254,194,134,0.2)]" },
                  { activeBg: "bg-[#A1D1FF]/20 text-[#A1D1FF]", borderCol: "border-[#A1D1FF]/60", shadow: "shadow-[0_0_25px_rgba(161,209,255,0.2)]" },
                  { activeBg: "bg-[#FF9194]/20 text-[#FF9194]", borderCol: "border-[#FF9194]/60", shadow: "shadow-[0_0_25px_rgba(255,145,148,0.2)]" }
                ][index];

                return (
                  <div
                    key={item.id}
                    ref={(el) => { listRefs.current[index] = el; }}
                    onClick={() => handleItemClick(index)}
                    className={`cursor-pointer p-3 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? ` ${cardTheme.borderCol} ${cardTheme.shadow} scale-[1.01] sm:scale-[1.02]` 
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <span className={`text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full ${isActive ? cardTheme.activeBg : "bg-white/10 text-gray-400"}`}>
                        {item.step}
                      </span>
                      <FiArrowRight className={`text-base sm:text-lg transition-transform duration-300 ${isActive ? "translate-x-1.5 text-white" : "text-gray-500"}`} />
                    </div>

                    <h3 className={`text-[18px] sm:text-[24px] lg:text-[26px] font-semibold mb-0.5 sm:mb-1 transition-colors text-white`}>
                      {item.title}
                    </h3>

                    <p className="text-white text-[11px] sm:text-[14px] lg:text-[15px] line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <a
                href="#explore"
                className="inline-flex items-center gap-2 px-6 py-2 sm:px-8 md:py-3 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[12px] sm:text-[15px] hover:opacity-90 shadow-[0_0_25px_rgba(247,164,0,0.4)] transition-all duration-300 group"
              >
                <span>Explore More</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-14">
            {servicesData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <ServiceCard
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  cardRef={(el) => { cardRefs.current[index] = el; }}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}