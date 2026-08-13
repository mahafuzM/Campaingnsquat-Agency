"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBriefcase, FiMapPin, FiSearch, FiX, FiStar, FiCheckCircle } from "react-icons/fi";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineShieldCheck, HiOutlineDesktopComputer } from "react-icons/hi";

const jobOpenings = [
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    department: "Engineering",
    location: "On-site (Dhaka)",
    type: "Full Time",
    description: "Build high-performance, scalable cross-platform and native mobile applications using modern frameworks.",
    icon: <HiOutlineDeviceMobile className="w-6 h-6 text-[#F7A400]" />,
    link: "/jobs/mobile-app-development",
  },
  {
    id: "software-development",
    title: "Software Development",
    department: "Engineering",
    location: "On-site (Dhaka)",
    type: "Full Time",
    description: "Architect and scale core enterprise software systems, cloud pipelines, and microservices architecture.",
    icon: <HiOutlineCode className="w-6 h-6 text-[#3b82f6]" />,
    link: "/jobs/software-development",
  },
  {
    id: "web-development",
    title: "Web Design & Development",
    department: "Design & Tech",
    location: "On-site (Dhaka)",
    type: "Full Time",
    description: "Craft stunning, lightning-fast, and immersive web experiences blending cutting-edge UI/UX with clean code.",
    icon: <HiOutlineDesktopComputer className="w-6 h-6 text-emerald-400" />,
    link: "/jobs/web-development",
  },
  {
    id: "key-account-manager",
    title: "Key Account Manager",
    department: "Engineering",
    location: "On-site",
    type: "Full Time",
    description: "Engage with international clients, understand client needs, and manage long-term relationships effectively.",
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-purple-400" />,
    link: "/jobs/key-account-manager",
  },
];

export default function CreativeCurrentOpenings() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = ["All", "Engineering", "Design", "Design & Tech"];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section className="w-full bg-[#02050A] py-16 sm:py-24 lg:py-32 overflow-hidden relative text-white font-poppins">
      
      {/* Background Gradient Fade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Immersive Creative Background Glow & Grid Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#FFDDA1]/10 via-[#F7A400]/15 to-[#3b82f6]/10 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      <div className="max-w-[1445px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[40px] relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#F7A400]/10 text-[#FFDDA1] border border-[#F7A400]/30 mb-4 shadow-lg backdrop-blur-md">
              <FiStar className="w-3.5 h-3.5 text-[#F7A400]" />
              CAREER OPPORTUNITIES
            </span>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold tracking-tight mb-4">
              Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#ffaa00]">Openings</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore our open roles, discover what fits your passion, and join us in building the next generation of digital products.
            </p>
          </motion.div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 bg-[#0d1117]/70 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  selectedDept === dept
                    ? "bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black border-transparent font-bold shadow-[0_0_20px_rgba(247,164,0,0.4)]"
                    : "bg-[#02050a]/80 text-zinc-400 border-white/10 hover:border-[#F7A400]/50 hover:text-white"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-[320px]">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-500">
              <FiSearch className="w-4 h-4 text-[#F7A400]" />
            </span>
            <input
              type="text"
              placeholder="Search roles or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#02050a] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F7A400] transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-white">
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-[#0d1117]/40 backdrop-blur-md rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">No Openings Found</h3>
            <p className="text-zinc-400 text-sm">Try changing your search or department filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#0d1117]/80 backdrop-blur-2xl border border-white/10 hover:border-[#F7A400]/70 rounded-3xl p-6 sm:p-8 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(247,164,0,0.2)]"
              >
                <div className="absolute -right-24 -top-24 w-48 h-48 bg-gradient-to-br from-[#F7A400]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-all duration-700 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#02050a] border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:border-[#F7A400] transition-all shadow-inner">
                      {job.icon}
                    </div>
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#F7A400]/10 text-[#FFDDA1] border border-[#F7A400]/30">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[26px] font-extrabold text-white mb-3 group-hover:text-[#F7A400] transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 font-medium">
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                      <FiMapPin className="text-[#F7A400]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                      <FiBriefcase className="text-[#F7A400]" />
                      <span>{job.department}</span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                    {job.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <FiCheckCircle className="w-4 h-4" />
                    <span>Active Opening</span>
                  </div>

                  <Link
                    href={job.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-bold text-xs sm:text-sm hover:opacity-95 transition-all duration-300 group/btn shadow-[0_5px_15px_rgba(247,164,0,0.3)] hover:scale-105"
                  >
                    <span>Job Details</span>
                    <FiArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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