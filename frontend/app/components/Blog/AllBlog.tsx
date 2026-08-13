"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiX, FiSearch } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { BsGridFill, BsListUl } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

const initialBlogs = [
  {
    id: 1,
    title: "Betopia to double workforce in a year",
    date: "JUL 15, 2026",
    category: "Enterprise",
    description:
      "Betopia Group has unveiled its Vision 2030 strategy, outlining plans to double its workforce within a year, reorganise its leadership structure and expand investment in artificial intelligence (AI), cloud computing and enterprise technologies as it pursues global growth.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Betopia unveils Vision 2030, plans to double workforce",
    date: "JUL 12, 2026",
    category: "AI & Cloud",
    description:
      "Betopia Group has unveiled its Vision 2030 strategy and announced plans to double its workforce within a year as it expand investment in artificial intelligence, cloud computing and enterprise.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Beyond outsourcing: How Betopia Group is anchoring Bangladesh's leap into Asia's leading AI economy",
    date: "JUL 11, 2026",
    category: "Technology",
    description:
      "From a seven-person startup founded with just Tk5 lakh to a tech group serving clients in 80 countries, Betopia Group is betting that Bangladesh's future lies...",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Rise of Next-Gen Cloud Architecture in Modern Enterprises",
    date: "JUL 05, 2026",
    category: "Enterprise",
    description:
      "Exploring how modern businesses are scaling their cloud infrastructure to meet demands, ensuring high availability, security, and performance.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "AI-Driven Solutions Transforming Global Startup Ecosystems",
    date: "JUN 28, 2026",
    category: "AI & Cloud",
    description:
      "Artificial Intelligence is no longer optional. Startups leveraging custom AI workflows are outperforming traditional competitors at unprecedented rates.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Scaling UI/UX Design Systems for Multi-National Corporations",
    date: "JUN 20, 2026",
    category: "Technology",
    description:
      "Consistency is key. How unified design systems save thousands of development hours while elevating brand identity across platforms.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function NewsroomSection() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Enterprise", "AI & Cloud", "Technology"];

  // Filtering Logic
  const filteredBlogs = initialBlogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="w-full bg-[#02050a] py-8 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative text-white font-poppins">
      
      {/* Background System */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 
              className="text-[24px] xs:text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold tracking-tight text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Newsroom
            </h2>
          </motion.div>
        </div>

        {/* ================= CATEGORY TABS BAR ================= */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-[#F7A400] text-black border-[#F7A400] shadow-[0_0_20px_rgba(247,164,0,0.4)]"
                  : "bg-[#0d1117] text-white border-white/15 hover:border-[#F7A400]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ================= CONTROL BAR ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0d1117]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:px-6 mb-8 sm:mb-12 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xl"
        >
          {/* Showing Count */}
          <div className="text-[14px] sm:text-[16px] font-semibold text-white/90 whitespace-nowrap self-start lg:self-center">
            Showing <span className="text-[#F7A400] font-bold">{filteredBlogs.length}</span> Articles
          </div>

          {/* Real Search Bar */}
          <div className="relative w-full lg:max-w-[400px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-400">
              <FiSearch className="w-4 h-4 text-[#F7A400]" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#02050a] border border-white/15 rounded-xl pl-10 pr-4 py-2 md:py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F7A400] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-white"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Controls Right */}
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
            
            {/* Sort Dropdown */}
            <div className="relative">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                <span className="hidden sm:inline">Sort By:</span>
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 bg-[#02050a] border border-white/15 px-3 sm:px-4 py-2 rounded-xl text-white font-semibold text-xs sm:text-sm hover:border-[#F7A400]/50 transition-all"
                >
                  <span>{sortBy}</span>
                  <IoChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0d1117] border border-white/15 rounded-xl shadow-2xl z-50 overflow-hidden py-1">
                  {["Most Recent", "Oldest First", "Alphabetical"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-white/80 hover:bg-[#F7A400] hover:text-black font-medium transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Grid / List View Toggle */}
            <div className="flex items-center bg-[#02050a] border border-white/15 rounded-full p-1 gap-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all ${
                  viewMode === "grid"
                    ? "bg-[#F7A400] text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Grid View"
              >
                <BsGridFill className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all ${
                  viewMode === "list"
                    ? "bg-[#F7A400] text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="List View"
              >
                <BsListUl className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* ================= BLOG CARDS CONTAINER ================= */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-[#0d1117]/40 rounded-[10px] border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-zinc-400 text-sm mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#F7A400] text-black font-semibold rounded-xl text-sm transition-transform hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              : "flex flex-col gap-6"
          }>
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: viewMode === "grid" ? -6 : 0 }}
                className={`bg-[#0d1117]/60 backdrop-blur-md hover:border-[#F7A400]/60 p-4 sm:p-6 rounded-2xl transition-all duration-500 group relative overflow-hidden flex ${
                  viewMode === "list" ? "flex-col md:flex-row gap-6 items-center" : "flex-col justify-between"
                }`}
              >
                {/* Card Image Container */}
                <Link href={`/blog/${blog.id}`} className={`relative rounded-xl overflow-hidden shrink-0 block ${
                  viewMode === "list" ? "w-full md:w-[320px] h-[220px]" : "w-full h-[220px] mb-5"
                }`}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg border border-white/10">
                    <GoArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>

                {/* Content Area */}
                <div className="flex flex-col justify-between flex-1 w-full">
                  <div>
                    {/* Date & Category Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 tracking-wider">
                        <HiOutlineCalendar className="w-4 h-4 text-[#F7A400]" />
                        <span>{blog.date}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#F7A400]/10 text-[#F7A400] border border-[#F7A400]/20">
                        {blog.category}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${blog.id}`}>
                      <h3 className="text-[18px] sm:text-[20px] font-bold tracking-tight mb-3 text-white group-hover:text-[#F7A400] transition-colors duration-300 line-clamp-2 leading-snug">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[15px] text-white/80 mb-6 line-clamp-3 leading-relaxed font-normal">
                      {blog.description}
                    </p>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-[#F7A400] transition-colors duration-300"
                    >
                      Read Story
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <Link href={`/blog/${blog.id}`} className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-300 group-hover:bg-[#F7A400] group-hover:text-black transition-all duration-300">
                      <GoArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}