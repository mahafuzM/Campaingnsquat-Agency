"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiX, FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

const initialProjects = [
  {
    id: 1,
    title: "farmercare",
    tag: "Website Development",
    category: "Website Development",
    description: "Integrated Agri-FinTech Ecosystem – Transforming The Agricultural Value Chain With A Data-Driven Financial Platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
    bgClass: "bg-gradient-to-br from-[#73A917]",
    date: 2026,
    popularity: 90,
    rating: 4.8,
  },
  {
    id: 2,
    title: "humanity of bangladesh",
    tag: "Ecommerce Development",
    category: "Ecommerce Development",
    description: "Scalable NGO Management Ecosystem – Streamlining Nationwide Relief Operations And Donation Transparency For Maximum Social.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?q=80&w=800&auto=format&fit=crop",
    link: "#",
    bgClass: "bg-gradient-to-br from-[#17649A]",
    date: 2025,
    popularity: 85,
    rating: 4.5,
  },
  {
    id: 3,
    title: "amar vote kendra",
    tag: "Mobile App Development",
    category: "Mobile App Development",
    description: "A High-Performance GovTech Mobile Application That Handled 100,000 Requests Per Second To Help Citizens Find Polling Stations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    bgClass: "bg-gradient-to-br from-[#FFC547]",
    date: 2024,
    popularity: 95,
    rating: 4.9,
  },
  {
    id: 4,
    title: "digital health platform",
    tag: "UI/UX Design",
    category: "UI/UX Design",
    description: "Next-Gen Telemedicine And Patient Management System Connecting Rural Patients With Specialized Doctors Instantly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    link: "#",
    bgClass: "bg-gradient-to-br from-[#005B3E]",
    date: 2026,
    popularity: 80,
    rating: 4.2,
  },
  {
    id: 5,
    title: "Enterprise Cloud ERP",
    tag: "Software Development",
    category: "Software Development",
    description: "A highly scalable enterprise resource planning platform built with modern cloud architecture and real-time analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    bgClass: "bg-gradient-to-br from-[#3b82f6]",
    date: 2026,
    popularity: 92,
    rating: 4.9,
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
  const [sortBy, setSortBy] = useState("Most Popular");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Website Development",
    "Ecommerce Development",
    "UI/UX Design",
    "Software Development",
    "Mobile App Development",
  ];

  // Filtering and Sorting Logic
  const filteredAndSortedProjects = initialProjects
    .filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "Newest") return b.date - a.date;
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      if (sortBy === "Most Popular") return b.popularity - a.popularity;
      return 0;
    });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="w-full bg-[#02050a] py-8 sm:py-16 md:py-20 lg:py-24 overflow-hidden relative text-white font-poppins">

      {/* ================= Background System ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[140px] md:blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] relative z-10">

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
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Projects
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
          className="bg-[#0d1117]/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:px-6 mb-8 sm:mb-16 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xl"
        >
          {/* Showing Count */}
          <div className="text-[13px] sm:text-[14px] font-semibold text-white/90 whitespace-nowrap self-start lg:self-center">
            Showing <span className="text-[#F7A400] font-bold">{filteredAndSortedProjects.length}</span> Projects
          </div>

          {/* Real Search Bar */}
          <div className="relative w-full lg:max-w-[400px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-400">
              <FiSearch className="w-4 h-4 text-[#F7A400]" />
            </span>
            <input
              type="text"
              placeholder="Search projects..."
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

          {/* Controls Right (Sort Dropdown) */}
          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
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
                  {["Most Popular", "Highest Rated", "Newest"].map((option) => (
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
          </div>
        </motion.div>

        {/* ================= PROJECTS CARDS CONTAINER ================= */}
        {filteredAndSortedProjects.length === 0 ? (
          <div className="text-center py-20 bg-[#0d1117]/40 rounded-[10px] border border-white/10 mb-20">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#F7A400] text-black font-semibold rounded-full text-xs sm:text-sm transition-transform hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 lg:mb-32">
            {filteredAndSortedProjects.map((project, index) => {
              const isRightColumn = index % 2 !== 0;

              return (
                <TiltCard
                  key={project.id}
                  index={index}
                  isRightColumn={isRightColumn}
                  className={`${project.bgClass} rounded-[10px] p-5 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-shadow duration-500 group relative overflow-hidden will-change-transform ${
                    isRightColumn ? "lg:translate-y-16" : ""
                  }`}
                >
                  {/* Animated glow ring on hover */}
                  <div className="pointer-events-none absolute -inset-px rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#F7A400]/40 via-transparent to-transparent" />

                  {/* Card Image Container */}
                  <div className="relative rounded-[10px] overflow-hidden bg-black/10 flex items-center justify-center border border-black/5 shrink-0 w-full h-[220px] sm:h-[300px] lg:h-[320px] mb-5 sm:mb-6">
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
                      className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-[#FFDDA1] shadow-lg"
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

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow justify-between relative z-10 w-full">
                    <div>
                      <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-tight capitalize mb-2 sm:mb-3 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed mb-5 sm:mb-6 opacity-90">
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
        )}

      </div>

      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
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