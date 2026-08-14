"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiCpu,
  FiZap,
} from "react-icons/fi";
import {
  Plus,
  ArrowRight,
  Star,
  Layers,
  Users,
  BarChart3,
  ShieldCheck,
  ExternalLink,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Cpu,
  Check,
} from "lucide-react";

// Utility for gradient text style
const gradientTextStyle = {
  background: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

// ==========================================
// HERO HEADER SECTION COMPONENT
// ==========================================

function HeroHeaderSection() {
  return (
    <section className="w-full pt-[40px] sm:pt-[60px] pb-[32px] sm:pb-[48px] relative z-25">
      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-[24px]">
          <Link
            href="/our-projects"
            className="inline-flex items-center gap-[10px] bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#F7A400]/50 text-zinc-300 hover:text-white px-[16px] py-[10px] rounded-[30px] text-[13px] font-medium transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform text-[#F7A400]" size={15} />
            <span>Back to Projects</span>
          </Link>
        </div>

        <h1 
          className="text-[30px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight leading-[1.1] mb-[20px] sm:mb-[24px]"
          style={gradientTextStyle}
        >
          Farmer Care,<span className="text-[#F7A400]"> designed for trust.</span>
        </h1>
        <p className="text-zinc-400 text-[15px] sm:text-[18px] lg:text-[22px] leading-[1.6] max-w-[1150px]">
          A high-impact, dual-sided digital architecture connecting rural producers with dynamic markets, transparent financial credit, and modern telemetry—engineered for extreme clarity and sub-second execution in the field.
        </p>
      </div>
    </section>
  );
}

// ==========================================
// PROJECT METADATA BAR COMPONENT
// ==========================================

function ProjectMetaBar() {
  const metaItems = [
    {
      icon: ShieldCheck,
      label: "Company Name",
      value: "Farmer Care Global",
    },
    {
      icon: Star,
      label: "LAUNCH",
      value: "2025 / Q4",
    },
    {
      icon: Layers,
      label: "INDUSTRY",
      value: "Agricultural FinTech",
    },
    {
      icon: Cpu,
      label: "ARCHITECTURE",
      value: "Next.js App Router",
    },
  ];

  return (
    <section className="w-full relative z-20 mb-[32px] sm:mb-[64px]">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="bg-white/[0.03] backdrop-blur-2xl  rounded-[16px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          {metaItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-[20px] sm:p-[24px] lg:p-[28px] flex flex-col justify-between"
              >
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <IconComponent size={14} className="text-[#F7A400]" />
                  <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-zinc-400">
                    {item.label}
                  </span>
                </div>
                <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-white tracking-tight">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PROJECT INTRO & THE CHALLENGE SECTION
// ==========================================

function ProjectIntroChallengeSection() {
  return (
    <section className="w-full py-[32px] sm:py-[54px] relative overflow-hidden z-10">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] sm:gap-[48px] lg:gap-[64px]">
          
          {/* Project Intro Card - Unique Tint 1 (Blue/Cyan Glass) - Bottom footer removed */}
          <div className="bg-[linear-gradient(135deg,rgba(14,24,43,0.4)_0%,rgba(10,37,64,0.4)_100%)] backdrop-blur-2xl  rounded-[10px] p-[28px] sm:p-[40px] lg:p-[48px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-[12px]">
                <span className="w-[18px] h-[1px] bg-[#38bdf8]" />
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#38bdf8]">
                  PROJECT INTRO
                </span>
              </div>
              <h2 className="text-[24px] sm:text-[32px] font-bold tracking-tight mb-[16px]" style={gradientTextStyle}>
                Empowering Rural Ecosystems
              </h2>
              <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-[1.7]">
                Farmer Care represents a paradigm shift in rural agricultural infrastructure, bridging the gap between independent growers and digital financial markets through an intuitive, robust web portal.
              </p>
            </div>
          </div>

          {/* The Challenge Card - Unique Tint 2 (Amber/Gold Glass) - Bottom footer removed */}
          <div className="bg-[linear-gradient(135deg,rgba(36,24,12,0.4)_0%,rgba(43,28,10,0.4)_100%)] backdrop-blur-2xl  rounded-[10px] p-[28px] sm:p-[40px] lg:p-[48px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-[12px]">
                <span className="w-[18px] h-[1px] bg-[#F7A400]" />
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#F7A400]">
                  THE CHALLENGE
                </span>
              </div>
              <h2 className="text-[24px] sm:text-[32px] font-bold tracking-tight mb-[16px]" style={gradientTextStyle}>
                Overcoming Field Friction
              </h2>
              <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-[1.7]">
                Traditional micro-credit approval workflows suffered from high drop-off rates due to complex paper documentation, poor low-bandwidth connectivity, and fragmented commodity market pricing updates.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// SOLUTION SECTION COMPONENT
// ==========================================

function SolutionSection() {
  return (
    <section className="w-full py-[32px] sm:py-[54px] relative overflow-hidden z-10">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        {/* Solution Card - Unique Tint 3 (Purple/Violet Glass) - 3 items footer removed */}
        <div className="bg-[linear-gradient(135deg,rgba(26,16,42,0.4)_0%,rgba(37,16,43,0.4)_100%)] backdrop-blur-2xl  rounded-[10px] p-[32px] sm:p-[50px] lg:p-[64px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[900px] relative z-10">
            <div className="flex items-center gap-2 mb-[12px]">
              <span className="w-[18px] h-[1px] bg-purple-400" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-purple-400">
                THE SOLUTION
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[40px] font-bold tracking-tight mb-[20px] leading-[1.2]" style={gradientTextStyle}>
              A Unified Architecture Built for Rural Scale
            </h2>

            <p className="text-zinc-300 text-[15px] sm:text-[18px] leading-[1.7]">
              We engineered a streamlined, offline-resilient web architecture utilizing Next.js App Router and modular Tailwind components. By consolidating micro-credit verification, weather sync, and dynamic market lookup into a unified interface, we removed field friction entirely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// CORE MODULES SHIPPED SECTION COMPONENT
// ==========================================

const coreModules = [
  {
    title: "Algorithmic Dynamic Search",
    description: "Instant agricultural commodity lookup with real-time filtering and faceted rural market navigation.",
    tint: "hover:border-cyan-400/50 hover:bg-[linear-gradient(135deg,rgba(14,24,43,0.5)_0%,rgba(10,37,64,0.5)_100%)]",
    activeTint: "bg-[linear-gradient(135deg,rgba(14,24,43,0.6)_0%,rgba(10,37,64,0.6)_100%)] border-cyan-400/60 shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    accentColor: "text-cyan-400",
    bgAccent: "bg-cyan-400",
  },
  {
    title: "Multi-Step Secure Micro-Credits",
    description: "Frictionless loan application flow with encrypted biometric and identity gateway integration.",
    tint: "hover:border-amber-400/50 hover:bg-[linear-gradient(135deg,rgba(36,24,12,0.5)_0%,rgba(43,28,10,0.5)_100%)]",
    activeTint: "bg-[linear-gradient(135deg,rgba(36,24,12,0.6)_0%,rgba(43,28,10,0.6)_100%)] border-amber-400/60 shadow-[0_0_30px_rgba(247,164,0,0.15)]",
    accentColor: "text-amber-400",
    bgAccent: "bg-amber-400",
  },
  {
    title: "Real-time Yield & Weather Sync",
    description: "Automated satellite telemetry updates mapped directly to localized crop price indexes.",
    tint: "hover:border-purple-400/50 hover:bg-[linear-gradient(135deg,rgba(26,16,42,0.5)_0%,rgba(37,16,43,0.5)_100%)]",
    activeTint: "bg-[linear-gradient(135deg,rgba(26,16,42,0.6)_0%,rgba(37,16,43,0.6)_100%)] border-purple-400/60 shadow-[0_0_30px_rgba(192,132,252,0.15)]",
    accentColor: "text-purple-400",
    bgAccent: "bg-purple-400",
  },
  {
    title: "Responsive Offline-First Dashboard",
    description: "Custom progressive web panel engineered to sync seamlessly on low-bandwidth cellular networks.",
    tint: "hover:border-emerald-400/50 hover:bg-[linear-gradient(135deg,rgba(10,36,26,0.5)_0%,rgba(10,43,33,0.5)_100%)]",
    activeTint: "bg-[linear-gradient(135deg,rgba(10,36,26,0.6)_0%,rgba(10,43,33,0.6)_100%)] border-emerald-400/60 shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    accentColor: "text-emerald-400",
    bgAccent: "bg-emerald-400",
  },
];

function CoreModulesSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full py-[32px] sm:py-[64px] relative overflow-hidden z-10">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[36px] lg:gap-[64px] items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-[12px]">
              <span className="w-[18px] h-[1px] bg-[#F7A400]" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#F7A400]">
                CORE MODULES SHIPPED
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-tight leading-[1.15] mb-[20px]" style={gradientTextStyle}>
              Core modules shipped.
            </h2>

            <p className="text-zinc-300 text-[14px] sm:text-[18px] leading-[1.6]">
              Four primary architectural components carried the heaviest UX weight—prioritizing frictionless micro-credit processing above all.
            </p>
          </div>

          {/* Right Column: Interactive Modules List */}
          <div className="lg:col-span-7 space-y-[16px]">
            {coreModules.map((module, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-300 rounded-[10px] p-[20px] sm:p-[24px] border backdrop-blur-2xl ${
                    isActive
                      ? module.activeTint
                      : `bg-white/[0.02] border-white/10 ${module.tint}`
                  }`}
                >
                  <div className="flex items-start gap-[16px]">
                    <div
                      className={`w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0 mt-[2px] transition-colors ${
                        isActive
                          ? `${module.bgAccent} text-black`
                          : "border border-white/20 text-transparent"
                      }`}
                    >
                      <Check size={14} className={isActive ? "text-black" : "opacity-0"} />
                    </div>

                    <div>
                      <h3
                        className={`text-[16px] sm:text-[18px] font-semibold mb-[6px] tracking-tight transition-colors ${
                          isActive ? module.accentColor : "text-white"
                        }`}
                      >
                        {module.title}
                      </h3>
                      <p className="text-zinc-300 text-[13px] sm:text-[15px] leading-[1.5]">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// RESULTS & IMPACT COMPONENT
// ==========================================

function ResultsTestimonialSection() {
  return (
    <section className="w-full py-[32px] sm:py-[64px] relative overflow-hidden z-10">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-[28px] sm:mb-[40px]">
          <div className="flex items-center gap-2 mb-[12px]">
            <span className="w-[18px] h-[1px] bg-[#F7A400]" />
            <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#F7A400]">
              RESULTS & IMPACT
            </span>
          </div>

          <p className="text-[16px] sm:text-[22px] lg:text-[26px]  leading-[1.2] max-w-[1000px]" style={gradientTextStyle}>
            Achieved a 45% increase in active organic retention rates and successfully brought transaction drop-off to near-zero within the primary initial deployment cycle.
          </p>
        </div>

        {/* Testimonial Card - Unique Tint 4 (Teal/Emerald Glass) */}
        <div className="relative bg-[linear-gradient(135deg,rgba(10,36,26,0.4)_0%,rgba(16,42,37,0.4)_100%)] backdrop-blur-2xl  rounded-[16px] p-[10px] sm:p-[40px] lg:p-[48px] overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Background Decorative Quote Watermark */}
          <MessageSquare className="absolute right-[-20px] bottom-[-20px] text-white/[0.03] w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] pointer-events-none select-none" />

          <blockquote className="relative z-10">
            <p className="text-zinc-200 text-[16px] sm:text-[22px] lg:text-[24px] leading-[1.5] font-normal mb-[28px] sm:mb-[36px]">
              &ldquo;Working with the team was an absolute game-changer. Their rigorous focus on both complex backend efficiency and elegant rural user experience exceeded every milestone.&rdquo;
            </p>

            <footer className="flex items-center gap-[14px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-[10px] mb-[4px]">
                  <span className="w-[20px] h-[1px] bg-emerald-400" />
                  <cite className="not-italic text-white font-semibold text-[14px] sm:text-[16px]">
                    Alex Morgan
                  </cite>
                </div>
                <span className="text-zinc-300 text-[12px] sm:text-[14px] pl-[30px]">
                  Founder & Chief Executive Officer, Farmer Care Global
                </span>
              </div>
            </footer>
          </blockquote>

        </div>

      </div>
    </section>
  );
}

// ==========================================
// FAQ DATA & COMPONENT
// ==========================================

const faqs = [
  {
    question: "What was the primary goal of the Farmer Care UI/UX project?",
    answer:
      "The primary goal was to bridge the digital divide by creating a human-centered, dual-sided digital ecosystem that connects farmers effortlessly with markets, modern agricultural techniques, and transparent financial services.",
  },
  {
    question: "How was the Atomic Design system implemented?",
    answer:
      "We built a scalable component library starting from atomic elements up to complex organisms, ensuring design consistency and rapid developer handoff across platforms.",
  },
  {
    question: "What technologies were used for prototyping and design handoff?",
    answer:
      "We utilized Figma for advanced prototyping, auto-layout components, and design systems, paired with Tailwind CSS and React for production implementation.",
  },
  {
    question: "How does the platform handle high traffic during harvest seasons?",
    answer:
      "The architecture leverages auto-scaling cloud infrastructure, edge caching, and optimized database indexing to handle massive spikes in concurrent traffic seamlessly.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full py-[32px] sm:py-[64px] relative overflow-hidden border-t border-white/10 mt-[40px] z-10">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[28px] sm:gap-[40px] lg:gap-[64px] items-start">
          
          {/* FAQ Heading & Search */}
          <div className="lg:col-span-5 lg:sticky lg:top-[128px]">
            <div className="flex items-center gap-2 mb-[12px]">
              <span className="w-[18px] h-[1px] bg-[#F7A400]" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-[#F7A400]">
                FAQ
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[44px] font-bold leading-[1.15] tracking-tight mb-[16px]" style={gradientTextStyle}>
              Common inquiries.
            </h2>

            <p className="text-zinc-300 text-[13px] sm:text-[16px] leading-[1.6] mb-[28px]">
              Detailed breakdowns covering technical choices, design scaling, and workflow execution.
            </p>

            {/* Search Input - Glass */}
            <div className="relative mb-[20px] max-w-[380px]">
              <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input
                type="text"
                placeholder="Search case questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] backdrop-blur-2xl border border-white/15 rounded-full py-3 md:py-3.5 pl-[44px] pr-[16px] text-[13px] text-white placeholder-zinc-400 focus:outline-none focus:border-[#F7A400]/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              />
            </div>

            {/* Speak to an Expert Button */}
            <div>
              <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] text-black font-semibold text-[13px] sm:text-[14px] px-[24px] py-[14px] rounded-[40px] shadow-[0_0_25px_rgba(247,164,0,0.25)] hover:opacity-95 transition-all cursor-pointer">
                Speak to an Expert
              </button>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-7 space-y-[0px] border-t border-white/10">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const formattedNumber = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-[16px] py-[24px] sm:py-[28px] text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-[20px] sm:gap-[24px]">
                      <span className="text-[12px] sm:text-[14px] font-mono text-[#F7A400] font-medium">
                        {formattedNumber}
                      </span>
                      <span className="text-[14px] sm:text-[18px] leading-[1.4] font-medium text-white group-hover:text-[#F7A400] transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-full flex items-center justify-center transition-all shrink-0 ${
                        isOpen
                          ? "bg-[#F7A400] text-black"
                          : "bg-white/5 text-zinc-300 group-hover:bg-white/10 group-hover:text-white"
                      }`}
                    >
                      {isOpen ? <X size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-[32px] sm:pl-[44px] pr-[20px] pb-[28px] text-zinc-300 text-[13px] sm:text-[15px] leading-[1.7]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Navigation (Previous / Next Case) */}
        <div className="flex items-center justify-between pt-[30px] sm:pt-[60px] border-t border-white/10 mt-[40px]">
          <button className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer">
            <span className="w-[32px] h-[32px] rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F7A400] group-hover:text-[#F7A400] transition-all">
              <ChevronLeft size={16} />
            </span>
            <div className="text-left">
              <span className="block text-[10px] tracking-widest text-zinc-400 uppercase">Previous Case</span>
              <span className="text-[13px] sm:text-[14px] font-medium text-white">FinTech Dashboard</span>
            </div>
          </button>

          <button className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer">
            <div className="text-right">
              <span className="block text-[10px] tracking-widest text-zinc-400 uppercase">Next Case</span>
              <span className="text-[13px] sm:text-[14px] font-medium text-white">Cloud SaaS Platform</span>
            </div>
            <span className="w-[32px] h-[32px] rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F7A400] group-hover:text-[#F7A400] transition-all">
              <ChevronRight size={16} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// CTA SECTION COMPONENT
// ==========================================

function CallToActionSection() {
  return (
    <section className="w-full py-[48px] sm:py-[80px] relative overflow-hidden z-10 border-t border-white/10">
      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Card - Glass with Amber Glow */}
        <div className="bg-[linear-gradient(135deg,rgba(43,28,10,0.3)_0%,rgba(20,15,30,0.3)_100%)] backdrop-blur-2xl  rounded-[10px] p-[36px] sm:p-[64px] lg:p-[80px] text-center relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] bg-[#F7A400]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold tracking-tight leading-[1.15] mb-[20px]" style={gradientTextStyle}>
              Ready to build something extraordinary together?
            </h2>

            <p className="text-zinc-300 text-[14px] sm:text-[18px] leading-[1.6] mb-[36px] max-w-[650px] mx-auto">
              Let&apos;s transform your complex product vision into a high-performance ecosystem, custom-engineered for absolute scale.
            </p>

            <div>
              <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] text-black font-semibold text-[12px] sm:text-[15px] px-4 md:px-8 py-3 md:py-3.5 rounded-full shadow-[0_0_30px_rgba(247,164,0,0.3)] hover:opacity-95 transition-all inline-flex items-center gap-2 cursor-pointer group">
                <span>Start a Project</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// PRODUCT DATABASE & DETAILS PAGE
// ==========================================

const initialProducts = [
  {
    id: 1,
    title: "Restropos - Next-Generation Restaurant Automation",
    price: "$4,999 ",
    category: "Enterprise Software",
    rating: 4.9,
    reviewsCount: 128,
    description:
      "Restropos is a premium, cloud-ready restaurant management system engineered by Campaignsquat Ltd. Built specifically to streamline complex food service workflows, it bridges the gap between front-of-house hospitality and back-of-house efficiency.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function ProductDetailsPage() {
  const params = useParams();

  const productId = Number(params?.id) || 1;

  const product =
    initialProducts.find((item) => item.id === productId) ||
    initialProducts[0];

  return (
    <article className="min-h-screen bg-[#02050a] text-white pt-0 pb-[32px] sm:pb-[64px] relative overflow-hidden font-poppins selection:bg-[#F7A400] selection:text-black">

      {/* =====================================================
          BACKGROUND CREATIVE EFFECTS
      ===================================================== */}

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* =====================================================
          FULL WIDTH IMAGE
      ===================================================== */}

      <div className="w-screen relative mb-[28px] sm:mb-[36px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[650px] overflow-hidden  bg-[#02050a]">

          <Image
            src={product.image}
            alt={product.title}
            fill
            className="w-full h-full object-cover select-none"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#02050a] via-transparent to-transparent pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-transparent to-transparent pointer-events-none" />

        </div>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <HeroHeaderSection />
      <ProjectMetaBar />
      <ProjectIntroChallengeSection />
      <SolutionSection />
      <CoreModulesSection />
      <ResultsTestimonialSection />
      <FAQSection />
      <CallToActionSection />

    </article>
  );
}