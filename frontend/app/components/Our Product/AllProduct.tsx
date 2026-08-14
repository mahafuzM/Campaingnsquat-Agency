"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowRight, FiSearch, FiEye, FiDownload } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

// এজেন্সি প্রোডাক্ট বা সফটওয়্যার ডাটা
const agencyProducts = [
  {
    id: 1,
    title: "Enterprise ERP System",
    category: "ERP Solution",
    tag: "MOST POPULAR",
    author: "by 6amTech",
    downloads: "2580 Downloads",
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
    description: "Complete resource planning software to automate inventory, HR, accounting, and supply chain seamlessly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    gradient: "linear-gradient(145deg, #181324 0%, #080a14 100%)",
    accentColor: "text-purple-400",
  },
  {
    id: 2,
    title: "School Management SaaS",
    category: "Education",
    tag: "FEATURE RICH",
    author: "by 6amTech",
    downloads: "1940 Downloads",
    technologies: ["PHP", "Laravel", "MySQL"],
    description: "All-in-one platform for attendance, grading, fee collection, and parent-teacher communication portals.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    gradient: "linear-gradient(145deg, #112024 0%, #060b12 100%)",
    accentColor: "text-cyan-400",
  },
  {
    id: 3,
    title: "E-Commerce Multi-Vendor",
    category: "E-Commerce",
    tag: "HIGH PERFORMANCE",
    author: "by 6amTech",
    downloads: "3420 Downloads",
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
    description: "Scalable online marketplace solution with lightning-fast checkout, inventory sync, and vendor dashboards.",
    image: "https://images.unsplash.com/photo-1556742049-0a67d553c2a3?q=80&w=800&auto=format&fit=crop",
    gradient: "linear-gradient(145deg, #241912 0%, #0d0906 100%)",
    accentColor: "text-amber-400",
  },
  {
    id: 4,
    title: "Cloud SaaS Starter Kit",
    category: "SaaS",
    tag: "READY TO LAUNCH",
    author: "by 6amTech",
    downloads: "1250 Downloads",
    technologies: ["PHP", "Laravel", "MySQL"],
    description: "Boilerplate SaaS software equipped with subscription billing, user auth, and dashboard components.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    gradient: "linear-gradient(145deg, #102418 0%, #06120b 100%)",
    accentColor: "text-emerald-400",
  },
  {
    id: 5,
    title: "Hospital Management Suite",
    category: "Healthcare",
    tag: "ADVANCED",
    author: "by 6amTech",
    downloads: "980 Downloads",
    technologies: ["PHP", "Laravel", "Vue.js", "MySQL"],
    description: "Streamline patient records, doctor appointments, pharmacy stock, and billing operations securely.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    gradient: "linear-gradient(145deg, #241219 0%, #12060b 100%)",
    accentColor: "text-rose-400",
  },
  {
    id: 6,
    title: "Real Estate CRM & Portal",
    category: "Real Estate",
    tag: "TRENDING",
    author: "by 6amTech",
    downloads: "1670 Downloads",
    technologies: ["PHP", "Laravel", "MySQL"],
    description: "Manage properties, client leads, agent commissions, and booking schedules all in a single dashboard.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    gradient: "linear-gradient(145deg, #241e12 0%, #120e06 100%)",
    accentColor: "text-yellow-400",
  },
];

export default function AgencyProductShowcase() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "ERP Solution", "Education", "E-Commerce", "SaaS", "Healthcare", "Real Estate"];

  // ফিল্টারিং লজিক
  const filteredProducts = agencyProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full bg-[#02050A] py-[80px] px-[16px] sm:px-[24px] lg:px-[48px] font-poppins relative overflow-hidden text-white min-h-screen">
      
      {/* Background Gradient Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      <div className="max-w-[1300px] mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-[56px]">
          <div className="inline-flex items-center gap-[8px] px-[16px] py-[6px] rounded-full text-[12px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-[16px] shadow-sm backdrop-blur-md">
            <HiOutlineSparkles className="w-[16px] h-[16px] text-amber-400" />
            <span>OUR DIGITAL PRODUCTS & SAAS</span>
          </div>
          <h2 className="text-[30px] sm:text-[36px] lg:text-[48px] font-semibold tracking-tight text-white leading-tight mb-[18px] md:mb-[12px]">
            <span 
              className="text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(247,164,0,0.3)] "
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              }}
            >
              Innovative Solutions for Your Business
            </span>
          </h2>
          <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
            Explore our ready-to-deploy enterprise software, ERPs, and management systems designed for scale.
          </p>
        </div>

        {/* Search & Filter bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[16px] mb-[40px] bg-[#0d1117]/80 backdrop-blur-2xl p-[16px] rounded-[10px] shadow-xl border border-white/10">
          
          {/* Categories Filter Pills */}
          <div className="flex items-center gap-[8px] overflow-x-auto w-full md:w-auto pb-[8px] md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-[16px] py-[8px] rounded-[10px] text-[12px] font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/30 scale-105 font-bold"
                    : "bg-[#02050a] text-zinc-400 border border-white/10 hover:border-amber-500/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-[300px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-[12px] pointer-events-none text-zinc-400">
              <FiSearch className="w-[16px] h-[16px] text-amber-400" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#02050a] border border-white/15 rounded-[10px] pl-[36px] pr-[16px] py-[8px] text-[12px] text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid Layout - Whole Card Clickable */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-[80px] bg-white rounded-[10px] border border-slate-200">
            <h3 className="text-[20px] font-bold text-slate-800 mb-[4px]">No Products Found</h3>
            <p className="text-slate-500 text-[14px]">Try searching with a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] items-start">
            {filteredProducts.map((product, index) => {
              const isOffset = index % 2 === 1;
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  onClick={() => router.push(`/our-product/${product.id}`)}
                  className={`rounded-[10px] border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.1)] flex flex-col justify-between overflow-hidden transition-all duration-300 group p-[24px] cursor-pointer ${
                    isOffset ? "lg:mt-[32px]" : "lg:mt-0"
                  }`}
                  style={{
                    backgroundImage: product.gradient,
                  }}
                >
                  {/* Top Content */}
                  <div>
                    {/* Category & Downloads */}
                    <div className="flex items-center justify-between mb-[6px]">
                      <span className={`text-[12px] font-semibold tracking-wide uppercase ${product.accentColor}`}>
                        {product.category}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-medium bg-black/30 px-[8px] py-[2px] rounded-[4px] border border-white/5">
                        {product.downloads}
                      </span>
                    </div>

                    {/* Title & Author */}
                    <h3 className="text-[22px] font-bold text-white mb-[2px] group-hover:text-amber-300 transition-colors">
                      {product.title}
                    </h3>
                    <span className="text-[12px] text-zinc-400 block mb-[10px] font-medium">
                      {product.author}
                    </span>

                    {/* Description */}
                    <p className="text-zinc-300 text-[13px] sm:text-[14px] leading-relaxed mb-[14px] font-normal">
                      {product.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-[6px] mb-[16px]">
                      {product.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-[10px] py-[3px] rounded-[6px] text-[11px] font-medium bg-white/5 border border-white/10 text-zinc-300 shadow-inner"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mb-[20px]">
                      <span className={`inline-flex items-center gap-[6px] font-semibold text-[13px] group-hover:gap-[10px] transition-all ${product.accentColor}`}>
                        <span>Learn More</span>
                        <FiArrowRight className="w-[14px] h-[14px]" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Image Box with Preview & Download Actions */}
                  <div className="relative w-full h-[190px] rounded-[10px] overflow-hidden bg-slate-900 block border border-white/10 group/img">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    
                    {/* Badge Tag */}
                    <div className="absolute top-[12px] left-[12px] z-10 px-[10px] py-[3px] rounded-[6px] bg-slate-900/90 backdrop-blur-md text-white font-bold text-[10px] tracking-wider uppercase border border-white/10 shadow-lg">
                      {product.tag}
                    </div>

                    {/* Action Buttons overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-[12px]">
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/our-product/${product.id}`);
                        }}
                        title="Preview"
                        className="w-[42px] h-[42px] rounded-[10px] bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl hover:scale-110 border border-white/20"
                      >
                        <FiEye className="w-[18px] h-[18px]" />
                      </button>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          // এখানে আপনার ডাউনলোড লিঙ্ক বা ফাংশন দিতে পারেন
                        }}
                        title="Download"
                        className="w-[42px] h-[42px] rounded-[10px] bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center transition-all shadow-xl hover:scale-110 border border-white/20"
                      >
                        <FiDownload className="w-[18px] h-[18px]" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
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