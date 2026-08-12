"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section className="w-full bg-[#02050A] py-20 px-4 sm:px-6 lg:px-12 font-poppins relative overflow-hidden text-white min-h-screen">
      
      {/* Background Gradient Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      <div className="max-w-[1300px] mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 shadow-sm backdrop-blur-md">
            <HiOutlineSparkles className="w-4 h-4 text-amber-400" />
            <span>OUR DIGITAL PRODUCTS & SAAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Innovative Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Your Business</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Explore our ready-to-deploy enterprise software, ERPs, and management systems designed for scale.
          </p>
        </div>

        {/* Search & Filter bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#0d1117]/80 backdrop-blur-2xl p-4 rounded-2xl shadow-xl border border-white/10">
          
          {/* Categories Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
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
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
              <FiSearch className="w-4 h-4 text-amber-400" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#02050a] border border-white/15 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* 3 Cards per row Grid Layout with White Background Cards */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-1">No Products Found</h3>
            <p className="text-slate-500 text-sm">Try searching with a different keyword or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-hidden transition-all duration-300 group"
              >
                <div>
                  {/* Product Image Box */}
                  <div className="relative w-full h-[210px] overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    {/* Badge Tag */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-amber-400 font-bold text-[10px] tracking-wider uppercase border border-white/10 shadow-lg">
                      {product.tag}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-xs font-semibold text-amber-600 tracking-wide uppercase block mb-1">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                      {product.description}
                    </p>

                    {/* Key Feature Bullets */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <FiCheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-6 pt-0">
                  <a
                    href={product.link}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2 group/btn transition-all duration-300 shadow-md"
                  >
                    <span>View Product Details</span>
                    <FiArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
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