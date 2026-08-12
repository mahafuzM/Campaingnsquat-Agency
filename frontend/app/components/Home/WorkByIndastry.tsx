"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface CardProps {
  item: {
    id: number;
    title: string;
    heading: string;
    description: string;
    pages: string;
    growth: string;
    color: string;
    imgBg: string;
    projectImg: any;
  };
  index: number;
  total: number;
}

const Card: React.FC<CardProps> = ({ item, index, total }) => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, index === total - 1 ? 1 : 0.96]);

  return (
    <div 
      ref={container}
      className="w-full sticky top-[12vh] flex justify-center items-start h-[85vh] sm:h-[55vh] md:h-[55vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        style={{ 
          scale,
          backgroundColor: item.color,
        }}
        className="w-full max-w-[1440px] h-full rounded-[5px] shadow-2xl overflow-hidden relative border border-black/10 flex flex-col"
      >
        {/* Card Header */}
        <div className="px-6 sm:px-10 md:px-14 py-4 border-b border-black/5 flex justify-between items-center bg-white/10">
          <span className="text-[14px] md:text-[18px] font-semibold text-black tracking-tighter">
            {item.title}
          </span>
        </div>

        {/* Card Content */}
        <div className="flex-1 px-2 sm:px-10 md:px-14 py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
          
          {/* Left Side - Text */}
          <div className="space-y-6 text-black">
            <div className="space-y-3">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-semibold text-black leading-[1.1] tracking-tight">
                {item.heading}
              </h2>
              <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-black max-w-[500px]">
                {item.description}
              </p>
            </div>

            <div className="flex gap-10 py-2">
              <div>
                <p className="text-[26px] md:text-[30px] font-semibold">{item.pages}</p>
                <p className="text-[14px] text-black md:text-[16px] font-semibold">Pages in Projects</p>
              </div>
              <div>
                <p className="text-[26px] md:text-[30px] font-semibold">{item.growth}</p>
                <p className="text-[14px] text-black md:text-[16px] font-semibold">Retention Growth</p>
              </div>
            </div>

            {/* CEO Section */}
            <div className="flex items-center justify-between p-1 sm:p-2 bg-black/10 backdrop-blur-sm rounded-[5px] w-full max-w-[380px] group cursor-pointer hover:bg-black/25 transition-all border border-black/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12  rounded-full border-2 border-white/20 overflow-hidden shrink-0 shadow-sm relative">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${item.id}`} 
                    alt="CEO" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] sm:text-[16px] font-semibold text-black leading-tight">
                    Shubho Al-Farooque
                  </p>
                  <p className="text-[12px] sm:text-[14px] text-black font-medium leading-tight">
                    {item.title} CEO
                  </p>
                </div>
              </div>
              <div className="pr-2">
                <FiArrowRight size={20} className="text-black/70 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Side - Image Preview */}
          <div className="relative h-[280px] sm:h-full max-h-[420px] w-full rounded-[5px] overflow-hidden shadow-inner border border-black/5" 
               style={{ backgroundColor: item.imgBg }}>
               
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-10">
              <div className="w-full h-[240px] sm:h-[320px] bg-white/20 backdrop-blur-md rounded-[5px] border border-white/30 flex items-center justify-center shadow-2xl rotate-2 translate-y-2 sm:translate-y-4 overflow-hidden transform-gpu relative">
                 <Image 
                    src={item.projectImg} 
                    alt={item.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top antialiased"
                    style={{ 
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(0)' 
                    }}
                 />
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default function WorkByIndustry() {
  const industries = [
    { 
      id: 0, 
      title: 'Triply', 
      heading: 'Easy Booking for Dream Trips',
      description: "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website.",
      pages: '40+',
      growth: '36%',
      color: '#B4F4BC', 
      imgBg: '#5bfa6f',
      projectImg: '/assets/images/heroimage.webp'
    },
    { 
      id: 1, 
      title: 'DineDash', 
      heading: 'Smart Management for Restaurants',
      description: "A complete POS and reservation system that helps restaurant owners streamline their operations.",
      pages: '25+',
      growth: '42%',
      color: '#8c8fd1', 
      imgBg: '#5f60ec',
      projectImg: '/assets/images/heroimage.webp'
    },
    { 
      id: 2, 
      title: 'NexGen', 
      heading: 'Simplifying Business Care',
      description: "Our SaaS platform offers seamless integration and powerful tools to optimize your workflow.",
      pages: '60+',
      growth: '55%',
      color: '#ffb5c6', 
      imgBg: '#f53e82',
      projectImg: '/assets/images/heroimage.webp'
    },
    { 
      id: 3, 
      title: 'MediCare', 
      heading: 'Healthcare Innovation Platform',
      description: "A digital health solution focused on patient care management and real-time medical data tracking.",
      pages: '35+',
      growth: '28%',
      color: '#ffe082', 
      imgBg: '#ffb800',
      projectImg: '/assets/images/heroimage.webp'
    },
    { 
      id: 4, 
      title: 'PulseFit', 
      heading: 'Complete Health & Wellness',
      description: "A fitness tracking ecosystem that helps users maintain their physical health through personalized data.",
      pages: '50+',
      growth: '48%',
      color: '#C9FFF7', 
      imgBg: '#00EBC2',
      projectImg: '/assets/images/heroimage.webp'
    },
  ];

  return (
    <section className="w-full bg-[#02050A] relative overflow-clip pt-6 md:pt-8 pb-20">
      <div className="max-w-[1440px] px-2 sm:px-10 md:px-16 mx-auto">
        <div className="text-center mb-16 space-y-3 px-2">
          <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-semibold tracking-tighter leading-[1.2] md:leading-[1.3]">
            {" "}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
            Global Excellence - Showcased on Behance
            </span>
          </h2>
          <p className="text-white text-[16px] md:text-[20px] max-w-[500px] md:max-w-[850px] mx-auto font-medium leading-[1.3]">
            Explore our high-impact UI/UX Design gallery. We turn complex ideas into intuitive, user-centric interfaces that drive real business results.
          </p>
        </div>

        <div className="flex flex-col relative items-center pb-[15vh] gap-8 md:gap-6">
          {industries.map((item, index) => (
            <Card key={item.id} item={item} index={index} total={industries.length} />
          ))}
        </div>

        <div className="flex justify-center pb-6">
          <a
            href="https://www.behance.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[12px] md:text-[15px] hover:opacity-90 shadow-[0_0_25px_rgba(247,164,0,0.4)] transition-all duration-300 group cursor-pointer"
          >
            Browse Our Behance Portfolio
            <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}