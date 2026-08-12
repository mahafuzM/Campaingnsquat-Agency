"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "farmercare",
    tag: "Agri-Tech",
    description: "Integrated Agri-FinTech Ecosystem – Transforming The Agricultural Value Chain With A Data-Driven Financial Platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "humanity of bangladesh",
    tag: "Social Impact",
    description: "Scalable NGO Management Ecosystem – Streamlining Nationwide Relief Operations And Donation Transparency For Maximum Social.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "amar vote kendra",
    tag: "GovTech",
    description: "A High-Performance GovTech Mobile Application That Handled 100,000 Requests Per Second To Help Citizens Find Polling Stations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "digital health platform",
    tag: "HealthTech",
    description: "Next-Gen Telemedicine And Patient Management System Connecting Rural Patients With Specialized Doctors Instantly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

// Helper component: gives card tilt effect only on desktop/laptop
function TiltCard({
  children,
  className,
  isRightColumn,
  index,
}: {
  children: React.ReactNode;
  className: string;
  isRightColumn: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={isDesktop ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isDesktop ? { y: isRightColumn ? 40 : -16, scale: 1.015 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-[#02050a] py-4 sm:py-12 md:py-16 lg:py-20 overflow-hidden relative text-white">

      {/* ================= Background System ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[140px] md:blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] mx-auto px-2 sm:px-6 md:px-10 lg:px-[40px] relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-16 lg:mb-24">
          
          {/* Heading with animated gradient sweep */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-bold tracking-tight text-transparent bg-clip-text mb-3 sm:mb-4 inline-block bg-[length:200%_auto]"
            style={{
              backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 6s linear infinite",
            }}
          >
            Featured Projects
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[720px] mx-auto leading-relaxed font-normal px-2 sm:px-0"
          >
            Where High-End UI/UX Design Meets Scalable Software Development.
            We Build Digital Products Engineered To Accelerate Your Business Growth.
          </motion.p>

          {/* Animated underline accent */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="h-[3px] mx-auto mt-4 sm:mt-6 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400]"
          />
        </div>

        {/* ================= 2 COLUMNS CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 lg:mb-32">
          {projects.map((project, index) => {
            const cardBgs = [
              "bg-gradient-to-br from-[#73A917]",
              "bg-gradient-to-br from-[#17649A]",
              "bg-gradient-to-br from-[#FFC547]",
              "bg-gradient-to-br from-[#005B3E]",
            ];

            const isRightColumn = index % 2 !== 0;

            return (
              <TiltCard
                key={index}
                index={index}
                isRightColumn={isRightColumn}
                className={`${cardBgs[index]} rounded-[10px] p-5 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-shadow duration-500 group relative overflow-hidden will-change-transform ${
                  isRightColumn ? "lg:translate-y-16" : ""
                } `}
              >
                {/* Animated glow ring on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#F7A400]/40 via-transparent to-transparent" />

                {/* Card Top Image Container */}
                <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[320px] rounded-[10px] overflow-hidden bg-black/10 flex items-center justify-center mb-5 sm:mb-6 border border-black/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                  />

                  {/* Shimmer sweep across image on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Floating Tag/Badge over Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-[8px] sm:rounded-[10px] bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-[#FFDDA1] shadow-lg"
                  >
                    {project.tag}
                  </motion.div>

                  {/* Arrow reveal on hover, top-right */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                    whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F7A400] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  >
                    <FiArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Card Content: Title -> Subtitle -> Explore Button */}
                <div className="flex flex-col flex-grow justify-between relative z-10">
                  <div>
                    <h3 className="text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight capitalize mb-2 sm:mb-3 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-5 sm:mb-6 opacity-90">
                      {project.description}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-1 sm:pt-2">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-black text-white font-semibold text-[12px] sm:text-[13px] md:text-[14px] hover:bg-black/80 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 group/btn w-fit"
                    >
                      <span>Explore</span>
                      <FiArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* ================= VIEW ALL PROJECT BUTTON SECTION ================= */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#all-projects"
            className="relative inline-flex items-center gap-2.5 py-[11px] px-[22px] sm:py-[12px] sm:px-[30px] rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-extrabold text-[13px] sm:text-[16px] hover:opacity-95 shadow-[0_0_35px_rgba(247,164,0,0.4)] transition-all duration-300 group overflow-hidden"
          >
            {/* Pulsing glow ring behind the button */}
            <motion.span
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.06, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#F7A400]/50 blur-md -z-10"
            />
            View All Projects
            <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </div>

      </div>

      {/* Keyframes for the moving gradient headline */}
      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}