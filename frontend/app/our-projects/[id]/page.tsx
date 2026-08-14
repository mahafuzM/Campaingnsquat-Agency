"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiMessageSquare as FiQuote,
  FiSearch as Search,
  FiPlus as Plus,
  FiStar as FiSparkles,
  FiLayers,
  FiCpu,
  FiShield,
} from "react-icons/fi";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-display",
});
const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const projectMeta = [
  { label: "Client", value: "Farmer Care Global", icon: FiShield },
  { label: "Launch", value: "2025 / Q4", icon: FiSparkles },
  { label: "Industry", value: "Agricultural FinTech", icon: FiLayers },
  { label: "Architecture", value: "Next.js App Router", icon: FiCpu },
];

const servicesProvided = [
  "Brand Identity & Art Direction",
  "UI/UX Wireframing & Prototyping",
  "Full-Stack Custom Development",
  "SEO & Performance Optimization",
];

const techStack = [
  "Next.js App Router",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Figma Design System",
];

const featuredCreativeItems = [
  {
    title: "Algorithmic Dynamic Search",
    description:
      "Instant agricultural commodity lookup with real-time filtering and faceted rural market navigation.",
    active: false,
  },
  {
    title: "Multi-Step Secure Micro-Credits",
    description:
      "Frictionless loan application flow with encrypted biometric and identity gateway integration.",
    active: true,
  },
  {
    title: "Real-time Yield & Weather Sync",
    description:
      "Automated satellite telemetry updates mapped directly to localized crop price indexes.",
    active: false,
  },
  {
    title: "Responsive Offline-First Dashboard",
    description:
      "Custom progressive web panel engineered to sync seamlessly on low-bandwidth cellular networks.",
    active: false,
  },
];

const faqs = [
  {
    question: "What was the primary goal of the Farmer Care UI/UX project?",
    answer:
      "The primary goal was to bridge the digital divide by creating a human-centered, dual-sided digital ecosystem that connects farmers effortlessly with markets, modern agricultural techniques, and transparent financial services.",
  },
  {
    question: "How was the Atomic Design system implemented?",
    answer:
      "We broke down interface components from basic atoms (buttons, inputs) to complex organisms, ensuring high design consistency across both the public-facing farmer portal and the internal administrative dashboard.",
  },
  {
    question: "What technologies were used for prototyping and design handoff?",
    answer:
      "The design system, interactive wireframes, and high-fidelity mockups were built entirely in Figma, complete with component variants and auto-layout tailored for seamless developer translation.",
  },
  {
    question: "How does the platform handle high traffic during harvest seasons?",
    answer:
      "By utilizing optimized server-side rendering, edge caching, and high-performance database indexing to guarantee sub-second page load speeds even under massive concurrent rural loads.",
  },
];

function Eyebrow({ index, label }: { index?: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {index && (
        <span className="font-mono text-[11px] tracking-[0.15em] text-[#FFDDA1]/70">
          {index}
        </span>
      )}
      <span className="h-px w-8 bg-[#F7A400]/40" />
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFDDA1]">
        {label}
      </span>
    </div>
  );
}

function Furrow({ index }: { index: string }) {
  return (
    <div className="mx-auto max-w-[1445px] flex items-center gap-4 py-4">
      <span className="font-mono text-[11px] tracking-[0.2em] text-[#FFDDA1]/60">
        {index}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-[#1a2333] via-[#F7A400]/30 to-transparent" />
    </div>
  );
}

export default function ProjectHeroShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`${display.variable} ${body.variable} ${mono.variable} relative w-full overflow-hidden bg-[#02050a] py-16 font-[var(--font-body)] text-white sm:py-24 lg:py-28`}
    >
      {/* ============ BACKGROUND (Pure #02050a + Monochrome Tones, Zero AI Colors) ============ */}

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Neutral Multi-Layer Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-white/[0.04] via-white/[0.07] to-white/[0.04] rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      
      {/* Grid Pattern Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      <div className="absolute top-10 -left-20 w-[450px] h-[450px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none z-0" />

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1445px] px-5 sm:px-8 lg:px-12">
        
        {/* ============ TOP NAV ============ */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 text-[14px] sm:text-[15px] font-medium text-white/80 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#0b0f19] transition-transform group-hover:-translate-x-1">
              <FiArrowLeft className="h-4 w-4 text-[#FFDDA1]" />
            </span>
            <span>Back to Portfolio</span>
          </Link>
          
        </div>

        {/* ============ HERO SECTION ============ */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/[0.05] border border-white/15 px-3 py-1 mb-6">
              <FiSparkles className="text-[#FFDDA1] h-3.5 w-3.5" />
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#FFDDA1]">
                UI / UX Design — AgriTech Ecosystem
              </span>
            </div>
            
            <h1 className="font-[var(--font-display)] text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.08] tracking-[-0.01em]">
              Farmer Care,
              
              <span
                className="bg-clip-text text-transparent  drop-shadow-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                designed for trust.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-white/85">
              A high-impact, dual-sided digital architecture connecting rural producers with dynamic markets, transparent financial credit, and modern telemetry—engineered for extreme clarity and sub-second execution in the field.
            </p>


          </div>

          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-[12px] bg-gradient-to-r from-[#FFDDA1]/20 via-[#F7A400]/20 to-[#FFDDA1]/20 opacity-70 blur-md transition duration-500 group-hover:opacity-100" />
              
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-[#0b0f19] border border-white/10 shadow-2xl">
                <Image
                  src="/image_d189a7.jpg"
                  alt="Farmer Care UI/UX Mockup"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050a]/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-md bg-[#02050a]/90 border border-white/10 px-3 py-1.5 font-mono text-[10px] sm:text-[11px] tracking-[0.1em] text-[#FFDDA1] backdrop-blur-md">
                    FIG. 01 — PRODUCT SURFACE
                  </span>
                  <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-1 font-mono text-[10px] text-[#FFDDA1]">
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ METRICS STRIP ============ */}
        <div className="mt-16 grid grid-cols-2 divide-x divide-y divide-white/10 rounded-[12px] border border-white/10 bg-[#0b0f19]/85 backdrop-blur-xl sm:grid-cols-4 sm:divide-y-0">
          {projectMeta.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.label} className="px-6 py-6 transition-colors hover:bg-white/[0.03]">
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent className="h-4 w-4 text-[#F7A400]" />
                  <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/60">
                    {item.label}
                  </p>
                </div>
                <p className="text-[16px] sm:text-[17px] font-bold text-white tracking-wide">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============ EXECUTIVE SUMMARY ============ */}
        <Furrow index="01" />
        <div id="features" className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <Eyebrow label="Executive Summary" />
            <h3
              className="font-[var(--font-display)] text-[26px] sm:text-[32px] font-semibold leading-snug bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              }}
            >
              One unified network, engineered for extreme contrast in user intent.
            </h3>
          </div>
          
          <div className="border-l border-white/10 pl-6 sm:pl-10 lg:col-span-8">
            <p className="text-[16px] sm:text-[18px] leading-[1.8] text-white/85">
              Farmer Care bridges the gap between rural agrarian communities and high-tier financial markets. The challenge was crafting an intuitive, low-latency mobile UI for field operators while delivering a comprehensive, data-dense portfolio interface for urban investors and administrative regulators. Using rigorous Atomic Design methodologies, every component scales gracefully from offline-first mobile viewports to executive desktop dashboards.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                ["94%", "Rural Usability Index"],
                ["48%", "Reduction in Supply Waste"],
                ["320%", "Increase in Producer Yield"],
              ].map(([stat, label]) => (
                <div 
                  key={label} 
                  className="bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-[#F7A400]/40 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 group shadow-xl hover:shadow-[0_15px_30px_rgba(247,164,0,0.1)] relative overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-28 h-28 bg-[#F7A400]/10 rounded-full blur-xl pointer-events-none group-hover:bg-[#F7A400]/20 transition-all" />
                  <span
                    className="font-[var(--font-display)] text-[28px] sm:text-[34px] bg-clip-text text-transparent block font-bold relative z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                    }}
                  >
                    {stat}
                  </span>
                  <span className="mt-2 block text-[13px] text-white/70 relative z-10">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ CHALLENGE ============ */}
        <Furrow index="02" />
        <div className="py-10">
          <Eyebrow label="Project Challenge" />
          <p className="max-w-4xl text-[18px] sm:text-[22px] lg:text-[24px] font-semibold leading-relaxed text-white">
            Scaling decentralized agricultural data ingestion while maintaining instant load performance across unstable cellular networks during crucial seasonal harvest peaks.
          </p>
        </div>

        {/* ============ PROBLEM / SOLUTION ============ */}
        <Furrow index="03" />
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 py-10 md:grid-cols-2">
          <div className="bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl p-6 sm:p-8 flex flex-col items-start text-left transition-all duration-300 group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-white/50 mb-3">
              01 — The Legacy Bottleneck
            </p>
            <h4 className="text-[18px] font-semibold text-white mb-2">High Latency & Complex Friction</h4>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/75">
              Legacy agricultural platforms suffered from massive drop-off rates due to unoptimized asset bundles, heavy JavaScript payloads, and zero offline redundancy for rural field deployment.
            </p>
          </div>

          <div className="bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl p-6 sm:p-8 flex flex-col items-start text-left transition-all duration-300 group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <p className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#FFDDA1] mb-3">
              02 — The Modern Architecture
            </p>
            <h4 className="text-[18px] font-semibold text-white mb-2">Optimized Edge SSR & Modular UX</h4>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/75">
              We re-engineered the experience using Next.js App Router, edge caching strategies, atomic component structuring, and a modular state pipeline that guarantees sub-second interactive speeds.
            </p>
          </div>
        </div>

        {/* ============ SERVICES + STACK ============ */}
        <Furrow index="04" />
        <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl">
            <Eyebrow label="Services Provided" />
            <ul className="space-y-4 mt-6">
              {servicesProvided.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3.5 text-[16px] text-white/90"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F7A400]/20 text-[#FFDDA1]">
                    <FiCheck className="h-3 w-3 stroke-[3]" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl">
            <Eyebrow label="Tech Stack & Tools" />
            <div className="flex flex-wrap gap-2.5 mt-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-[#02050a] px-4 py-2.5 font-mono text-[12px] sm:text-[13px] text-white/90 transition-all hover:border-[#F7A400]/40 hover:bg-[#121a2d]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ============ FEATURED CREATIVE ============ */}
        <Furrow index="05" />
        <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <Eyebrow label="Featured Creative" />
            <h2
              className="font-[var(--font-display)] text-[28px] sm:text-[34px] font-semibold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              }}
            >
              Core modules shipped.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-white/75">
              Four primary architectural components carried the heaviest UX weight—prioritizing frictionless micro-credit processing above all.
            </p>
          </div>
          
          <div className="space-y-4 lg:col-span-8">
            {featuredCreativeItems.map((item) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 rounded-3xl p-6 transition-all duration-300 backdrop-blur-xl border ${
                  item.active
                    ? "bg-[#0b0f19]/90 border-[#F7A400]/50 shadow-lg shadow-[#F7A400]/10"
                    : "bg-[#0b0f19]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    item.active
                      ? "bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FFDDA1] text-[#02050a]"
                      : "border border-white/10 text-white/40 bg-[#02050a]"
                  }`}
                >
                  <FiCheck className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[14px] sm:text-[15px] leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============ RESULTS ============ */}
        <Furrow index="06" />
        <div className="py-10">
          <Eyebrow label="Results & Impact" />
          <p className="max-w-3xl text-[18px] sm:text-[20px] font-semibold leading-relaxed text-white">
            Achieved a 45% increase in active organic retention rates and successfully brought transaction drop-off to near-zero within the primary initial deployment cycle.
          </p>
        </div>

        {/* ============ TESTIMONIAL ============ */}
        <div className="relative my-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b0f19] to-[#121a2d] border border-white/10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7A400]/5 rounded-full blur-3xl pointer-events-none" />
          <FiQuote className="absolute right-8 bottom-4 h-32 w-32 sm:h-44 sm:w-44 text-white/[0.03] pointer-events-none" />
          
          <blockquote className="relative max-w-4xl font-[var(--font-display)] text-[20px] sm:text-[26px] lg:text-[32px] font-semibold leading-[1.4] text-white">
            &ldquo;Working with the team was an absolute game-changer. Their rigorous focus on both complex backend efficiency and elegant rural user experience exceeded every milestone.&rdquo;
          </blockquote>
          
          <div className="relative mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#F7A400]/60" />
            <div>
              <span className="block text-[15px] sm:text-[16px] font-bold text-white">
                Alex Morgan
              </span>
              <span className="text-[13px] sm:text-[14px] text-[#FFDDA1]/80">
                Founder & Chief Executive Officer, Farmer Care Global
              </span>
            </div>
          </div>
        </div>

        {/* ============ FAQ SECTION ============ */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
              <Eyebrow label="FAQ" />
              <h2
                className="font-[var(--font-display)] text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                }}
              >
                Common inquiries.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-white/75">
                Detailed breakdowns covering technical choices, design scaling, and workflow execution.
              </p>

              <div className="relative mt-8 max-w-md">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F7A400]"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setOpenIndex(null);
                    setQuery(e.target.value);
                  }}
                  placeholder="Search case questions…"
                  className="w-full rounded-full border border-white/10 bg-[#0b0f19] py-3.5 pl-11 pr-4 text-[14px] text-white placeholder:text-white/40 focus:border-[#F7A400]/60 focus:outline-none transition-colors"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FFDDA1] text-[#02050a] px-6 py-3 text-[14px] font-bold transition-all hover:opacity-95 shadow-lg shadow-[#F7A400]/20">
                  Speak to an Expert
                </button>
              </div>
            </div>

            <div className="lg:col-span-8">
              {filtered.length === 0 && (
                <div className="rounded-3xl border border-dashed border-white/10 bg-[#0b0f19]/50 px-6 py-16 text-center">
                  <p className="text-[15px] text-white/80">
                    No matching items found for{" "}
                    <span className="font-semibold text-[#FFDDA1]">
                      &ldquo;{query}&rdquo;
                    </span>
                  </p>
                </div>
              )}

              <div className="divide-y divide-white/10 border-y border-white/10">
                {filtered.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={faq.question} className="transition-colors hover:bg-white/[0.02]">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex w-full items-start justify-between gap-4 py-7 text-left focus:outline-none"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`pt-0.5 font-mono text-[14px] shrink-0 transition-colors ${
                              isOpen ? "text-[#F7A400]" : "text-white/40"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[17px] sm:text-[19px] font-medium leading-snug text-white">
                            {faq.question}
                          </span>
                        </div>
                        <motion.span
                          animate={{ rotate: isOpen ? 135 : 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isOpen
                              ? "border-[#F7A400] bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FFDDA1] text-[#02050a]"
                              : "border-white/10 bg-[#0b0f19] text-white"
                          }`}
                        >
                          <Plus size={14} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-3xl pb-7 pl-9 text-[15px] sm:text-[16px] leading-relaxed text-white/75">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============ PREV / NEXT NAV ============ */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 py-8">
          <Link
            href="/portfolio/fintech-dashboard"
            className="group flex items-center gap-3 text-white transition-colors hover:text-[#FFDDA1]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0f19] transition-transform group-hover:-translate-x-1">
              <FiArrowLeft className="h-4 w-4 text-[#F7A400]" />
            </div>
            <div>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/50">
                Previous Case
              </p>
              <p className="text-[15px] font-semibold">FinTech Dashboard</p>
            </div>
          </Link>
          
          <Link
            href="/portfolio/cloud-saas-platform"
            className="group flex items-center gap-3 text-right text-white transition-colors hover:text-[#FFDDA1]"
          >
            <div>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/50">
                Next Case
              </p>
              <p className="text-[15px] font-semibold">Cloud SaaS Platform</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b0f19] transition-transform group-hover:translate-x-1">
              <FiArrowRight className="h-4 w-4 text-[#F7A400]" />
            </div>
          </Link>
        </div>

        {/* ============ CTA FOOTER BANNER ============ */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b0f19] via-[#121a2d] to-[#0b0f19] border border-white/10 px-8 py-20 text-center sm:py-24 shadow-2xl">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7A400]/10 blur-[130px]" />
          
          <div className="relative mx-auto max-w-[700px]">
            <h2
              className="font-[var(--font-display)] text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              }}
            >
              Ready to build something extraordinary together?
            </h2>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-white/80">
              Let&apos;s transform your complex product vision into a high-performance ecosystem, custom-engineered for absolute scale.
            </p>
            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#FFDDA1] px-8 py-4 text-[15px] font-bold text-[#02050a] shadow-lg shadow-[#F7A400]/20 transition-all hover:scale-[1.03]"
            >
              Start a Project
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}