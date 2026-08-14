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
} from "lucide-react";

// ==========================================
// FAQ DATA & COMPONENT
// ==========================================

const faqs = [
  {
    question: "How do I check if my business qualifies for this solution?",
    answer:
      "Our solution is built for enterprises and scaling businesses looking to automate workflows, leverage AI, and expand globally with robust cloud infrastructure.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Once onboarded, standard architecture setup and deployment typically take between 2 to 4 weeks depending on custom requirements.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we provide 24/7 monitoring, security updates, and dedicated technical support for all our enterprise clients.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-[32px] sm:py-[64px] relative overflow-hidden border-t border-white/10 mt-[40px] z-10">
      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[28px] sm:gap-[40px] lg:gap-[64px] items-start">
          
          {/* FAQ Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-[128px]">
            <h2 className="text-[24px] sm:text-[36px] font-bold leading-[1.2] tracking-tight mb-[12px] sm:mb-[16px] bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <p className="text-zinc-400 text-[13px] sm:text-[18px] leading-[1.6]">
              Got questions about our product or deployment? Find answers below.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-7 space-y-[10px] sm:space-y-[16px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`bg-[#12161D]/85 backdrop-blur-xl border rounded-[10px] overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#F7A400]/50 shadow-[0_0_30px_rgba(247,164,0,0.15)]"
                      : "border-white/10"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-[12px] p-[12px] sm:p-[20px] text-left cursor-pointer"
                  >
                    <span className="text-[12px] sm:text-[18px] leading-[1.45] font-medium text-white">
                      {faq.question}
                    </span>

                    <span
                      className={`w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] rounded-full flex items-center justify-center transition-transform shrink-0 ${
                        isOpen
                          ? "bg-[#F7A400] text-black rotate-45"
                          : "bg-white/5 text-white"
                      }`}
                    >
                      <Plus size={15} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-[12px] sm:px-[20px] pb-[14px] sm:pb-[20px] text-zinc-300 text-[11px] sm:text-[16px] leading-[1.65] border-t border-white/5 pt-[10px] sm:pt-[12px]">
                      {faq.answer}
                    </div>
                  )}
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

      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-25">

        {/* =====================================================
            BACK TO PRODUCTS
        ================================================     */}

        <div className="mb-[16px] sm:mb-[20px]">
          <Link
            href="/products"
            className="inline-flex items-center gap-[6px] sm:gap-[8px] text-[11px] sm:text-[14px] font-semibold text-zinc-400 hover:text-[#F7A400] transition-colors"
          >
            <FiArrowLeft className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
            Back to Products
          </Link>
        </div>

        {/* =====================================================
            TOP HEADER
        ================================================     */}

        <div className="space-y-[12px] sm:space-y-[16px] max-w-[1100px] mb-[20px] sm:mb-[24px]">

          <div className="flex flex-wrap items-center justify-between gap-[8px] sm:gap-[12px]">

            <span className="px-[10px] sm:px-[14px] py-[4px] rounded-full text-[9px] sm:text-[12px] font-bold bg-[#F7A400]/10 text-[#F7A400] border border-[#F7A400]/25">
              {product.category}
            </span>

            <div className="flex items-center gap-[3px] sm:gap-[4px] text-amber-400 text-[11px] sm:text-[14px] font-semibold">

              <Star
                size={13}
                className="sm:w-[16px] sm:h-[16px]"
                fill="currentColor"
              />

              <span>{product.rating}</span>

              <span className="text-zinc-500">
                ({product.reviewsCount} reviews)
              </span>

            </div>

          </div>

          <h1 className="text-[26px] sm:text-[38px] md:text-[46px] font-extrabold tracking-tight bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent leading-[1.15] sm:leading-[1.2]">
            {product.title}
          </h1>

        </div>

        {/* =====================================================
            DESCRIPTION
        ================================================     */}

        <div className="space-y-[12px] sm:space-y-[16px] max-w-[1400px] mb-[28px] sm:mb-[36px]">

          <p className="text-zinc-300 text-[13px] sm:text-[19px] leading-[1.65] sm:leading-relaxed">
            {product.description} Whether you operate a single boutique cafe
            or a multi-location fine dining chain, this ecosystem minimizes
            operational friction, eliminates order delays, and maximizes daily
            table turnover.
          </p>

        </div>

        {/* =====================================================
            TECH STACK & TOOLS (Added here cleanly)
        ================================================     */}
        <div className="mb-[28px] sm:mb-[36px] p-[16px] sm:p-[24px] rounded-[14px] bg-[#12161D]/85 backdrop-blur-xl border border-white/10 shadow-xl">
          <h3 className="text-[14px] sm:text-[18px] font-bold text-white mb-[12px] sm:mb-[16px] flex items-center gap-[8px]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#F7A400]" />
            Tech Stack & Tools
          </h3>
          <div className="flex flex-wrap gap-[8px] sm:gap-[12px]">
            {["Next.js App Router", "Tailwind CSS", "Framer Motion", "Node.js"].map((tech, idx) => (
              <span
                key={idx}
                className="px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[11px] sm:text-[14px] font-medium bg-white/5 border border-white/10 text-zinc-200 hover:border-[#F7A400]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            PRICING & CTA
        ================================================     */}

        <div className="p-[10px] sm:p-[20px] rounded-[10px] bg-[#12161D]/85 backdrop-blur-xl border border-white/10 flex flex-row items-center justify-between gap-[10px] sm:gap-[20px] shadow-2xl mb-[28px] sm:mb-[40px]">

          <div className="min-w-0 flex-1">

            <p className="text-[12px] sm:text-[16px] text-white mb-[3px] sm:mb-[4px]">
              Project price
            </p>

            <p className="text-[18px] sm:text-[34px] font-bold leading-none bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent whitespace-nowrap">
              {product.price}
            </p>

          </div>

          <button className="shrink-0 bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-[11px] sm:px-[32px] py-[9px] sm:py-[12px] rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-[5px] sm:gap-[10px] cursor-pointer text-[10px] sm:text-[16px] whitespace-nowrap">

            <span>Get This product</span>

            <ArrowRight
              size={14}
              className="sm:w-[18px] sm:h-[18px]"
            />

          </button>

        </div>

          {/* =====================================================
              LIVE DEMO SECTION
        ================================================     */}

        <div className="my-[40px] sm:my-[60px] text-center space-y-[28px] sm:space-y-[40px]">
          
          <div className="space-y-[10px] sm:space-y-[12px]">
            <h2 className="text-[28px] sm:text-[40px] font-extrabold tracking-tight text-white">
              Live <span className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">Demo</span>
            </h2>
            <p className="text-zinc-400 text-[13px] sm:text-[18px] max-w-[600px] mx-auto">
              Explore the demo panels & interface to see how it works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[24px]">
            
            {/* Website Demo Card */}
            <div className="bg-[#12161D]/85 backdrop-blur-xl border border-white/10 rounded-[14px] p-[20px] sm:p-[28px] text-left flex flex-col justify-between shadow-xl">
              <div className="space-y-[12px] mb-[24px]">
                <h3 className="text-[18px] sm:text-[22px] font-bold text-white">Website</h3>
                <p className="text-zinc-400 text-[12px] sm:text-[15px] leading-[1.6]">
                  Experience the full customer journey on the live website. Browse available products, explore packages, check real-time details, and walk through the complete process just like your real customers would.
                </p>
              </div>
              <button className="w-full bg-[#1A1F29] hover:bg-[#232A36] text-white font-semibold py-[11px] sm:py-[14px] rounded-[10px] border border-white/10 transition-colors flex items-center justify-center gap-[8px] text-[13px] sm:text-[15px] cursor-pointer">
                <span>Visit Website</span>
                <ExternalLink size={16} />
              </button>
            </div>

            {/* Customer Portal Card */}
            <div className="bg-[#12161D]/85 backdrop-blur-xl border border-white/10 rounded-[14px] p-[20px] sm:p-[28px] text-left flex flex-col justify-between shadow-xl">
              <div className="space-y-[12px] mb-[24px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-white">Customer Portal</h3>
                  <span className="px-[10px] py-[3px] rounded-full text-[11px] font-semibold bg-white/10 text-zinc-300">User</span>
                </div>
                <p className="text-zinc-400 text-[12px] sm:text-[15px] leading-[1.6]">
                  Experience the user portal from customer's perspective.
                </p>
                <div className="bg-[#0A0D14] rounded-[8px] p-[12px] border border-white/5 space-y-[6px] text-[12px] sm:text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">URL:</span>
                    <span className="text-[#F7A400] font-medium hover:underline cursor-pointer">View Demo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Email:</span>
                    <span className="text-zinc-300 select-all">customer@customer.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Password:</span>
                    <span className="text-zinc-300 select-all font-mono">12345678</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#1A1F29] hover:bg-[#232A36] text-white font-semibold py-[11px] sm:py-[14px] rounded-[10px] border border-white/10 transition-colors flex items-center justify-center gap-[8px] text-[13px] sm:text-[15px] cursor-pointer">
                <span>Access Customer Panel</span>
                <ExternalLink size={16} />
              </button>
            </div>

            {/* Admin Panel Card */}
            <div className="bg-[#12161D]/85 backdrop-blur-xl border border-white/10 rounded-[14px] p-[20px] sm:p-[28px] text-left flex flex-col justify-between shadow-xl">
              <div className="space-y-[12px] mb-[24px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-white">Admin Panel</h3>
                  <span className="px-[10px] py-[3px] rounded-full text-[11px] font-semibold bg-white/10 text-zinc-300">Admin</span>
                </div>
                <p className="text-zinc-400 text-[12px] sm:text-[15px] leading-[1.6]">
                  Experience the admin dashboard from admin's perspective.
                </p>
                <div className="bg-[#0A0D14] rounded-[8px] p-[12px] border border-white/5 space-y-[6px] text-[12px] sm:text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">URL:</span>
                    <span className="text-[#F7A400] font-medium hover:underline cursor-pointer">View Demo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Email:</span>
                    <span className="text-zinc-300 select-all">admin@admin.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Password:</span>
                    <span className="text-zinc-300 select-all font-mono">12345678</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#1A1F29] hover:bg-[#232A36] text-white font-semibold py-[11px] sm:py-[14px] rounded-[10px] border border-white/10 transition-colors flex items-center justify-center gap-[8px] text-[13px] sm:text-[15px] cursor-pointer">
                <span>Access Admin Panel</span>
                <ExternalLink size={16} />
              </button>
            </div>

          </div>

        </div>

        {/* =====================================================
            QUICK FEATURES
        ================================================     */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] sm:gap-[16px] mb-[32px] sm:mb-[40px]">

          <div className="flex items-center gap-[6px] sm:gap-[10px] text-[10px] sm:text-[14px] leading-[1.35] text-zinc-300 p-[10px] sm:p-[16px] rounded-[10px] bg-white/5 border border-white/5">
            <FiCheckCircle
              className="text-[#F7A400] shrink-0"
              size={14}
            />
            Instant Access & Setup
          </div>

          <div className="flex items-center gap-[6px] sm:gap-[10px] text-[10px] sm:text-[14px] leading-[1.35] text-zinc-300 p-[10px] sm:p-[16px] rounded-[10px] bg-white/5 border border-white/5">
            <FiCheckCircle
              className="text-[#F7A400] shrink-0"
              size={14}
            />
            24/7 Expert Support
          </div>

          <div className="flex items-center gap-[6px] sm:gap-[10px] text-[10px] sm:text-[14px] leading-[1.35] text-zinc-300 p-[10px] sm:p-[16px] rounded-[10px] bg-white/5 border border-white/5">
            <FiCheckCircle
              className="text-[#F7A400] shrink-0"
              size={14}
            />
            Scalable Cloud Architecture
          </div>

          <div className="flex items-center gap-[6px] sm:gap-[10px] text-[10px] sm:text-[14px] leading-[1.35] text-zinc-300 p-[10px] sm:p-[16px] rounded-[10px] bg-white/5 border border-white/5">
            <FiCheckCircle
              className="text-[#F7A400] shrink-0"
              size={14}
            />
            Money-back Guarantee
          </div>

        </div>

        {/* =====================================================
            PACKAGE DETAILS
        ================================================     */}

        <div className="p-[14px] sm:p-[32px] rounded-[10px] bg-[#12161D]/50 backdrop-blur-xl border border-white/10 shadow-2xl mb-[36px] sm:mb-[48px]">

          <h3 className="text-[16px] sm:text-[22px] font-bold leading-[1.3] bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent mb-[16px] sm:mb-[20px]">
            What's Included in This Package
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] sm:gap-[16px]">

            <div className="p-[10px] sm:p-[20px] rounded-[10px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">

              <FiCpu
                className="text-[#F7A400] mb-[8px]"
                size={18}
              />

              <h4 className="text-[11px] sm:text-[16px] leading-[1.3] font-semibold text-white mb-[4px]">
                Custom AI Workflow
              </h4>

              <p className="text-[9px] sm:text-[12px] leading-[1.45] text-zinc-400">
                Tailored automation scripts designed for efficiency.
              </p>

            </div>

            <div className="p-[10px] sm:p-[20px] rounded-[10px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">

              <FiShield
                className="text-[#F7A400] mb-[8px]"
                size={18}
              />

              <h4 className="text-[11px] sm:text-[16px] leading-[1.3] font-semibold text-white mb-[4px]">
                Enterprise Security
              </h4>

              <p className="text-[9px] sm:text-[12px] leading-[1.45] text-zinc-400">
                Top-tier encryption & security protocols.
              </p>

            </div>

            <div className="p-[10px] sm:p-[20px] rounded-[10px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">

              <FiClock
                className="text-[#F7A400] mb-[8px]"
                size={18}
              />

              <h4 className="text-[11px] sm:text-[16px] leading-[1.3] font-semibold text-white mb-[4px]">
                Rapid Deployment
              </h4>

              <p className="text-[9px] sm:text-[12px] leading-[1.45] text-zinc-400">
                Fully configured & launched in 2-4 weeks.
              </p>

            </div>

            <div className="p-[10px] sm:p-[20px] rounded-[10px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">

              <FiZap
                className="text-[#F7A400] mb-[8px]"
                size={18}
              />

              <h4 className="text-[11px] sm:text-[16px] leading-[1.3] font-semibold text-white mb-[4px]">
                Cloud Integration
              </h4>

              <p className="text-[9px] sm:text-[12px] leading-[1.45] text-zinc-400">
                Seamless scaling with real-time sync.
              </p>

            </div>

          </div>

        </div>

        {/* =====================================================
            KEY FEATURES SECTION (Three Grid Cards Style)
        ================================================     */}

        <div className="my-[40px] sm:my-[60px] space-y-[28px] sm:space-y-[40px]">
          
          <div className="text-center space-y-[10px] sm:space-y-[12px]">
            <h2 className="text-[28px] sm:text-[40px] font-extrabold tracking-tight text-white">
              Key <span className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-zinc-400 text-[13px] sm:text-[18px] max-w-[750px] mx-auto">
              Restropos equips your business with high-speed tools for tracking, bookings, and revenue. From real-time inventory to live dashboards, it eliminates bottlenecks so you stay ahead—maximum uptime, zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[24px]">
            
            {/* Card 1 */}
            <div className="bg-[#12161D]/85 backdrop-blur-xl border border-white/10 rounded-[14px] p-[20px] sm:p-[28px] text-left flex flex-col justify-between shadow-xl">
              <div className="space-y-[16px]">
                <h3 className="text-[18px] sm:text-[22px] font-bold text-white leading-snug">
                  Fleet Intelligence: Track Every Vehicle Effortlessly
                </h3>
                <ul className="space-y-[12px] text-zinc-300 text-[12px] sm:text-[15px]">
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Multi-Mode Registry:</strong> Handle self-drive, chauffeur-driven, or dual-mode fleets seamlessly.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Dynamic Spec Sheets:</strong> Profile transmission, fuel, seating, and luggage for quick reference.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Smart Inventory Status:</strong> Real-time Available/In-Maintenance/Disabled toggles to avoid errors.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Maintenance Sentinel:</strong> Track health and registrations for compliant, road-ready cars.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#12161D]/85 backdrop-blur-xl border border-white/10 rounded-[14px] p-[20px] sm:p-[28px] text-left flex flex-col justify-between shadow-xl">
              <div className="space-y-[16px]">
                <h3 className="text-[18px] sm:text-[22px] font-bold text-white leading-snug">
                  Driver Management: Roster & Dispatch Pros
                </h3>
                <ul className="space-y-[12px] text-zinc-300 text-[12px] sm:text-[15px]">
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Chauffeur Roster:</strong> Profiles with license expiry, experience, and contacts.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Live Driver Status:</strong> Monitor Available/On Trip/Off Duty in real-time.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Manual & Auto-Dispatch:</strong> Pair drivers to bookings by availability and needs.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#12161D]/85 backdrop-blur-xl border border-white/10 rounded-[14px] p-[20px] sm:p-[28px] text-left flex flex-col justify-between shadow-xl">
              <div className="space-y-[16px]">
                <h3 className="text-[18px] sm:text-[22px] font-bold text-white leading-snug">
                  High-Velocity Booking Engine: Fill Slots Fast
                </h3>
                <ul className="space-y-[12px] text-zinc-300 text-[12px] sm:text-[15px]">
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Frictionless Reservations:</strong> 3-step flow for hourly/daily/weekly rentals.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">One-Way Support:</strong> Different pickups/drop-offs with auto fee calculations.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Anti-Overlap Logic:</strong> Prevent double-bookings across all statuses.</span>
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F7A400] mt-[7px] shrink-0" />
                    <span><strong className="text-white">Document Vault:</strong> Secure license uploads and expiry checks for self-drive.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* =====================================================
            RESTAURANT ECOSYSTEM STATS
        ================================================     */}

        <div className="mt-[40px] sm:mt-[56px] grid grid-cols-2 lg:grid-cols-4 gap-[8px] sm:gap-[16px]">

          {/* Stat 1 */}
          <div className="p-[12px] sm:p-[24px] rounded-[10px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[6px] sm:space-y-[8px]">

            <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] mx-auto rounded-[10px] bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <Layers
                size={18}
                className="sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <h4 className="text-[18px] sm:text-[24px] font-bold text-white">
              99.9%
            </h4>

            <p className="text-[10px] sm:text-[13px] leading-[1.4] text-zinc-400">
              System Uptime & Cloud Stability
            </p>

          </div>

          {/* Stat 2 */}
          <div className="p-[12px] sm:p-[24px] rounded-[10px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[6px] sm:space-y-[8px]">

            <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] mx-auto rounded-[10px] bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <Users
                size={18}
                className="sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <h4 className="text-[18px] sm:text-[24px] font-bold text-white">
              35% Faster
            </h4>

            <p className="text-[10px] sm:text-[13px] leading-[1.4] text-zinc-400">
              Average Table Turnover Boost
            </p>

          </div>

          {/* Stat 3 */}
          <div className="p-[12px] sm:p-[24px] rounded-[10px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[6px] sm:space-y-[8px]">

            <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] mx-auto rounded-[10px] bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <BarChart3
                size={18}
                className="sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <h4 className="text-[18px] sm:text-[24px] font-bold text-white">
              Real-Time
            </h4>

            <p className="text-[10px] sm:text-[13px] leading-[1.4] text-zinc-400">
              Inventory & Stock Tracking
            </p>

          </div>

          {/* Stat 4 */}
          <div className="p-[12px] sm:p-[24px] rounded-[10px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[6px] sm:space-y-[8px]">

            <div className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] mx-auto rounded-[10px] bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <ShieldCheck
                size={18}
                className="sm:w-[24px] sm:h-[24px]"
              />
            </div>

            <h4 className="text-[18px] sm:text-[24px] font-bold text-white">
              100% Secure
            </h4>

            <p className="text-[10px] sm:text-[13px] leading-[1.4] text-zinc-400">
              Data Encryption & Protection
            </p>

          </div>

        </div>

      </div>

      <FAQSection />

    </article>
  );
}