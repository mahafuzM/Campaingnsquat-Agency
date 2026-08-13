"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

const blogs = [
  {
    id: "1",
    title: "Betopia to double workforce in a year",
    date: "JUL 15, 2026",
    description:
      "Betopia Group has unveiled its Vision 2030 strategy, outlining plans to double its workforce within a year, reorganise its leadership... structure and expand investment in artificial intelligence (AI), cloud computing and enterprise technologies as it pursues global growth.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Betopia unveils Vision 2030, plans to double workforce",
    date: "JUL 12, 2026",
    description:
      "Betopia Group has unveiled its Vision 2030 strategy and announced plans to double its workforce within a year as it expan... investment in artificial intelligence, cloud computing and enterprise",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title:
      "Beyond outsourcing: How Betopia Group is anchoring Bangladesh's leap into Asia's leading AI economy",
    date: "JUL 11, 2026",
    description:
      "From a seven-person startup founded with just Tk5 lakh to a tech group serving clients in 80 countries, Betopia Group is betting that Bangladesh's future lies...",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
];

export default function NewsroomSection() {
  return (
    <section className="w-full bg-[#02050a] py-8 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative text-white">
      
      {/* Background System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-row items-center justify-between mb-8 sm:mb-12 lg:mb-16 gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 
              className="text-[22px] xs:text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-extrabold tracking-tight text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Newsroom
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="shrink-0"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-white hover:text-[#F7A400] transition-colors duration-300 group whitespace-nowrap"
            >
              View All News
              <FiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* ================= 3 COLUMNS BLOG CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {blogs.map((blog, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-transparent p-1.5 sm:p-3 flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Card Image Container */}
                  <Link href={`/blog/${blog.id}`} className="block relative w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[240px] rounded-[14px] sm:rounded-[16px] overflow-hidden mb-3.5 sm:mb-5">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />

                    {/* Top-Right Circular Action Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full backdrop-blur-md bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-white/10">
                      <GoArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>

                  {/* Date Badge */}
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-zinc-400 mb-2 sm:mb-3 tracking-wider">
                    <HiOutlineCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7A400]" />
                    <span>{blog.date}</span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${blog.id}`}>
                    <h3 className="text-[17px] sm:text-[20px] md:text-[22px] font-bold tracking-tight mb-2 sm:mb-3 text-white group-hover:text-[#F7A400] transition-colors duration-300 line-clamp-2 leading-snug">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/90 sm:text-white mb-4 sm:mb-6 line-clamp-3 leading-relaxed font-normal">
                    {blog.description}
                  </p>
                </div>

                {/* Card Footer / Read Story Link */}
                <div className="pt-2 sm:pt-4 flex items-center justify-between relative z-10">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-white group-hover:text-[#F7A400] transition-colors duration-300"
                  >
                    Read Story
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  <Link href={`/blog/${blog.id}`} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-zinc-300 group-hover:bg-[#F7A400] group-hover:text-black transition-all duration-300">
                    <GoArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}