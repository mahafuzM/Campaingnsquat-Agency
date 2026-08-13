"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiSearch, FiCheckCircle } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

// এজেন্সি প্রোডাক্ট বা সফটওয়্যার ডাটা
const agencyProducts = [
  {
    id: 1,
    title: "Enterprise ERP System",
    category: "ERP Solution",
    tag: "MOST POPULAR",
    description: "Complete resource planning software to automate inventory, HR, accounting, and supply chain seamlessly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    features: ["Real-time Analytics", "Multi-branch Support", "Secure Cloud DB"],
    link: "#",
  },
  {
    id: 2,
    title: "School Management SaaS",
    category: "Education",
    tag: "FEATURE RICH",
    description: "All-in-one platform for attendance, grading, fee collection, and parent-teacher communication portals.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    features: ["Student Portal", "SMS & Email Alerts", "Automated Fee Tracking"],
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Multi-Vendor",
    category: "E-Commerce",
    tag: "HIGH PERFORMANCE",
    description: "Scalable online marketplace solution with lightning-fast checkout, inventory sync, and vendor dashboards.",
    image: "https://images.unsplash.com/photo-1556742049-0a67d553c2a3?q=80&w=800&auto=format&fit=crop",
    features: ["Stripe & SSLCommerz", "Advanced SEO", "Vendor Panel"],
    link: "#",
  },
  {
    id: 4,
    title: "Cloud SaaS Starter Kit",
    category: "SaaS",
    tag: "READY TO LAUNCH",
    description: "Boilerplate SaaS software equipped with subscription billing, user auth, and dashboard components.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    features: ["Subscription Billing", "Role Management", "API Ready"],
    link: "#",
  },
  {
    id: 5,
    title: "Hospital Management Suite",
    category: "Healthcare",
    tag: "ADVANCED",
    description: "Streamline patient records, doctor appointments, pharmacy stock, and billing operations securely.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    features: ["Patient History", "Prescription Gen", "Billing System"],
    link: "#",
  },
  {
    id: 6,
    title: "Real Estate CRM & Portal",
    category: "Real Estate",
    tag: "TRENDING",
    description: "Manage properties, client leads, agent commissions, and booking schedules all in a single dashboard.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    features: ["Lead Pipeline", "Property Listing", "Agent Tracking"],
    link: "#",
  },
];

export default function AgencyProductShowcase() {
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
          <h2 className="text-[30px] sm:text-[36px] lg:text-[48px] font-semibold tracking-tight text-white leading-tight mb-[16px]">
            <span 
              className="text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(247,164,0,0.3)] inline-block"
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-[16px] mb-[40px] bg-[#0d1117]/80 backdrop-blur-2xl p-[16px] rounded-[16px] shadow-xl border border-white/10">
          
          {/* Categories Filter Pills */}
          <div className="flex items-center gap-[8px] overflow-x-auto w-full md:w-auto pb-[8px] md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-[16px] py-[8px] rounded-[12px] text-[12px] font-semibold whitespace-nowrap transition-all duration-300 ${
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
              className="w-full bg-[#02050a] border border-white/15 rounded-[12px] pl-[36px] pr-[16px] py-[8px] text-[12px] text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* 3 Cards per row Grid Layout */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-[80px] bg-white rounded-[16px] border border-slate-200">
            <h3 className="text-[20px] font-bold text-slate-800 mb-[4px]">No Products Found</h3>
            <p className="text-slate-500 text-[14px]">Try searching with a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#0b1017] rounded-[16px] border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-hidden transition-all duration-300 group"
              >
                <div>
                  {/* Product Image Box */}
                  <Link href={`/our-product/${product.id}`} className="relative w-full h-[210px] overflow-hidden bg-slate-900 block">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    {/* Badge Tag */}
                    <div className="absolute top-[16px] left-[16px] z-10 px-[12px] py-[4px] rounded-[8px] bg-slate-900/90 backdrop-blur-md text-amber-400 font-bold text-[10px] tracking-wider uppercase border border-white/10 shadow-lg">
                      {product.tag}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-[24px]">
                    <span className="text-[12px] font-semibold text-amber-400 tracking-wide uppercase block mb-[6px]">
                      {product.category}
                    </span>
                    <Link href={`/our-product/${product.id}`}>
                      <h3 className="text-[20px] font-bold text-white mb-[10px] group-hover:text-amber-400 transition-colors">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="text-white text-[12px] sm:text-[14px] leading-relaxed mb-[20px] font-normal">
                      {product.description}
                    </p>

                    {/* Key Feature Bullets */}
                    <div className="space-y-[8px] mb-[24px] pt-[12px] border-t border-white/10">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-[8px] text-[12px] text-zinc-300 font-medium">
                          <FiCheckCircle className="w-[14px] h-[14px] text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Button with original gradient styling & dynamic link */}
                <div className="p-[24px] pt-0">
                  <Link
                    href={`/our-product/${product.id}`}
                    className="w-full py-[12px] px-[16px] rounded-[12px] text-black text-[12px] font-bold flex items-center justify-center gap-[8px] group/btn transition-all duration-300 shadow-md"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                    }}
                  >
                    <span>View Product Details</span>
                    <FiArrowRight className="w-[16px] h-[16px] transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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