"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Globe, 
  Check, 
  Plus, 
  Search, 
  Layers, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  Quote,
  LayoutGrid,
  AlertCircle,
  Lightbulb
} from "lucide-react";

// ==========================================
// 1. FAQ DATA & COMPONENT
// ==========================================
const faqs = [
  {
    question: "How do I check if my project qualifies for custom ecommerce development?",
    answer: "If your business requires specialized integration, custom inventory logic, or high scalability, our ecommerce development solution is fully tailored to fit your needs.",
  },
  {
    question: "How can I start a project with your team?",
    answer: "You can easily begin by filling out our online consultation form or speaking directly with one of our technical experts.",
  },
  {
    question: "How long does it take to complete an ecommerce platform?",
    answer: "Depending on the complexity and custom features required, projects typically range from 4 to 12 weeks from initial kickoff to final deployment.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer comprehensive maintenance, security updates, and performance optimization packages post-launch.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return faqs;
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 sm:py-28 relative overflow-hidden border-t border-white/10 mt-24 bg-gradient-to-b from-[#02050a] to-[#070A10]">
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-[#F7A400]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7A400]/10 border border-[#F7A400]/20 text-[#F7A400] text-xs font-semibold mb-4">
              <Sparkles size={13} />
              <span>Help & Support</span>
            </div>

            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold tracking-tight leading-[1.2] mb-4 sm:mb-6 text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)" }}
            >
              Frequently Asked Questions
            </h2>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-relaxed mb-6 sm:mb-8">
              Explore common questions regarding our project development lifecycle, deliverables, and agency services.
            </p>

            <div className="relative mb-6 sm:mb-8 max-w-md w-full">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setOpenIndex(null);
                  setQuery(e.target.value);
                }}
                placeholder="Search your question..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#12161D] border border-white/10 text-[13px] sm:text-[14px] text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F7A400]/50 transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {filtered.length === 0 && (
              <div className="text-center py-12 rounded-2xl border border-dashed border-white/10 bg-[#12161D]/50 px-4">
                <p className="text-gray-400 text-[14px] sm:text-[15px]">
                  No questions found for <span className="text-white font-semibold">"{query}"</span>
                </p>
              </div>
            )}

            {filtered.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`relative bg-[#12161D] border rounded-2xl overflow-hidden transition-all duration-300 shadow-xl ${
                    isOpen ? "border-[#F7A400]/40 bg-[#161b24]" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300"
                    style={{ background: isOpen ? "#F7A400" : "transparent" }}
                  />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-4 pr-2">
                      <span
                        className={`text-[14px] sm:text-[16px] font-bold shrink-0 pt-0.5 transition-colors duration-300 ${
                          isOpen ? "text-[#F7A400]" : "text-white/30"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] sm:text-[18px] font-medium text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#F7A400] border-[#F7A400] text-black font-bold shadow-[0_0_15px_rgba(247,164,0,0.4)]"
                          : "bg-white/5 border-white/10 text-white"
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 pl-[46px] sm:pl-[66px] text-gray-300 text-[14px] sm:text-[15px] leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
// 2. PROJECT DATA CONFIGURATION
// ==========================================
const projectsData: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  client: string;
  launch: string;
  industry: string;
  previewStatus: string;
  liveUrl: string;
  bannerImage: string;
  gallery: string[];
  overview: string[];
  challenge: string;
  problem: string;
  solution: string;
  services: string[];
  techStack: string[];
  featuresImplemented: { title: string; desc: string }[];
  features: string[];
  results: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  prevProject: { slug: string; title: string };
  nextProject: { slug: string; title: string };
}> = {
  "bottlecup": {
    title: "Bottlecup",
    subtitle: "Introducing Bottlecup Ecommerce Experience",
    category: "Ecommerce Development",
    client: "Private Client",
    launch: "2026",
    industry: "Retail & E-Commerce",
    previewStatus: "1 month",
    liveUrl: "#",
    bannerImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ],
    overview: [
      "Bottlecup is a next-generation ecommerce platform engineered to deliver frictionless user journeys, highly optimized state management, and lightning-fast checkout flow.",
      "Crafted with scalable micro-frontends and absolute security in mind, it provides robust database indexing and seamless responsive layouts built specifically for modern digital buyers.",
    ],
    challenge: "Scaling inventory management while maintaining sub-second page load speeds under high concurrent user traffic during peak flash sales.",
    problem: "The client's legacy storefront suffered from high checkout abandonment rates due to slow response times, poor mobile UX, and unoptimized database queries.",
    solution: "We re-architected the entire platform using Next.js App Router with server-side rendering, optimized PostgreSQL indexing, and integrated a modular state-driven checkout system.",
    services: [
      "Brand Identity & Art Direction",
      "UI/UX Wireframing & Prototyping",
      "Full-Stack Custom Development",
      "SEO & Performance Optimization"
    ],
    techStack: [
      "Next.js App Router",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "PostgreSQL",
      "Figma Design System"
    ],
    featuresImplemented: [
      { title: "Algorithmic Dynamic Search", desc: "Instant product lookup with real-time filtering and faceted navigation." },
      { title: "Multi-Step Secure Checkout", desc: "Frictionless checkout flow with encrypted payment gateway integration." },
      { title: "Real-time Inventory Sync", desc: "Automated stock level updates across multiple warehouses instantly." },
      { title: "Responsive Fluid Dashboard", desc: "Custom administrative panel for tracking sales analytics and user activity." }
    ],
    features: [
      "Advanced Product Filtering and Algorithmic Dynamic Search",
      "Secure Multi-Step Payment Gateway Integration",
      "Real-time Inventory Tracking and Analytical Dashboard",
      "Fully Fluid Responsive UI/UX Across All Viewports",
    ],
    results: "Achieved a 45% increase in organic user retention and successfully minimized checkout abandonment rate within the initial deployment cycle.",
    testimonial: {
      quote: "Working with the team was an absolute game-changer. Their attention to detail and technical execution exceeded all our expectations.",
      author: "Alex Morgan",
      role: "Founder & CEO",
      company: "Bottlecup Inc."
    },
    prevProject: { slug: "fintech-app", title: "Fintech Dashboard" },
    nextProject: { slug: "saas-platform", title: "Cloud SaaS Platform" }
  },
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = params?.slug ? (Array.isArray(params.slug) ? params.slug[0] : params.slug) : "bottlecup";
  const project = projectsData[slug] || projectsData["bottlecup"];

  return (
    <div className="w-full min-h-screen bg-[#02050a] text-white font-poppins pt-28 pb-20 relative overflow-hidden">
      
      {/* Background System */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[450px] sm:h-[600px] bg-gradient-to-r from-[#FF7A33]/10 via-[#F7A400]/10 to-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_2px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />
      
      <div className="max-w-[1445px] mx-auto px-4 sm:px-6 relative z-20">
        
        {/* Visual Banner / Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[320px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl mb-10 group"
        >
          <Image src={project.bannerImage} alt={project.title} fill sizes="(max-width: 1445px) 100vw, 1445px" className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050a]/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#F7A400] transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero / Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A400]/10 border border-[#F7A400]/20 text-[#F7A400] text-xs font-semibold mb-3">
              {project.category}
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
          </div>
        </motion.div>

        {/* Info Meta Grid Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-[#0B0F17]/95 backdrop-blur-xl border border-white/10 shadow-2xl mb-12"
        >
          <div className="space-y-1.5 border-r border-white/5 last:border-none">
            <div className="flex items-center gap-2 text-[#F7A400] text-xs uppercase tracking-wider font-semibold">
              <User size={15} />
              <span>Client</span>
            </div>
            <p className="text-white text-base sm:text-lg font-bold">{project.client}</p>
          </div>

          <div className="space-y-1.5 border-r border-white/5 last:border-none">
            <div className="flex items-center gap-2 text-[#F7A400] text-xs uppercase tracking-wider font-semibold">
              <Calendar size={15} />
              <span>Launch</span>
            </div>
            <p className="text-white text-base sm:text-lg font-bold">{project.launch}</p>
          </div>

          <div className="space-y-1.5 border-r border-white/5 last:border-none">
            <div className="flex items-center gap-2 text-[#F7A400] text-xs uppercase tracking-wider font-semibold">
              <Tag size={15} />
              <span>Industry</span>
            </div>
            <p className="text-white text-base sm:text-lg font-bold truncate">{project.industry}</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#F7A400] text-xs uppercase tracking-wider font-semibold">
              <Globe size={15} />
              <span>Timeline</span>
            </div>
            <p className="text-emerald-400 text-base sm:text-lg font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {project.previewStatus}
            </p>
          </div>
        </motion.div>

        {/* Project Gallery Grid */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-14"
          >
            <div className="flex items-center gap-2.5 text-white font-bold text-xl mb-6">
              <LayoutGrid size={20} className="text-[#F7A400]" />
              <span>Project Showcase Gallery</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, gIdx) => (
                <div key={gIdx} className="relative h-[240px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                  <Image src={imgUrl} alt="Gallery view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Project Overview / Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 text-gray-300 text-[16px] sm:text-[18px] leading-relaxed mb-14"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 100%)" }}
          >
            {project.subtitle}
          </h3>
          {project.overview.map((paragraph, index) => (
            <p key={index} className="text-gray-300/90 leading-relaxed">{paragraph}</p>
          ))}
        </motion.div>

        {/* 1. Project Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#12161D] border border-white/10 shadow-xl mb-10"
        >
          <div className="flex items-center gap-3 text-[#F7A400] font-bold text-xl mb-4">
            <AlertCircle size={22} />
            <span>Project Challenge</span>
          </div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {project.challenge}
          </p>
        </motion.div>

        {/* 2. The Problem & The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12161D] via-[#0B0F17] to-[#12161D] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] gap-8 md:gap-12 mb-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col justify-between md:border-r md:border-white/10 md:pr-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 text-red-400 font-bold text-lg mb-4">
                <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertCircle size={18} />
                </div>
                <span>The Problem</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg mb-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Lightbulb size={18} />
                </div>
                <span>The Solution</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Provided & Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-3xl bg-[#12161D] border border-white/10 shadow-xl flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F7A400]/10 border border-[#F7A400]/20 flex items-center justify-center text-[#F7A400]">
                  <Layers size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">Services Provided</h4>
              </div>
              <ul className="space-y-4">
                {project.services.map((service, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3.5 text-gray-300 text-sm sm:text-base font-medium">
                    <span className="w-3 h-3 rounded-full bg-[#F7A400] shadow-[0_0_10px_#F7A400] shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="p-8 rounded-3xl bg-[#12161D] border border-white/10 shadow-xl flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F7A400]/10 border border-[#F7A400]/20 flex items-center justify-center text-[#F7A400]">
                  <Cpu size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">Tech Stack & Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200 hover:border-[#F7A400]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. Features Implemented (Updated to match your requested image style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-14 py-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Title & Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-[36px] sm:text-[46px] font-extrabold tracking-tight text-white leading-tight">
                  Featured <br />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 100%)" }}>
                    Creative
                  </span>
                </h3>
              </div>

              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <h5 className="text-white font-bold text-lg">Subtitle</h5>
                <p>
                  A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
                </p>
                <p>
                  A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good.
                </p>
              </div>
            </div>

            {/* Right Side: Circular Check List Items */}
            <div className="lg:col-span-7 space-y-6">
              {project.featuresImplemented.map((feat, idx) => {
                // Let's make the second item active/highlighted like in your reference image
                const isActive = idx === 1; 

                return (
                  <div key={idx} className="flex items-start gap-5 group">
                    {/* Glowing / Normal Circle Button with Check Icon */}
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive 
                          ? "bg-[#F7A400] text-black shadow-[0_10px_25px_rgba(247,164,0,0.4)] scale-105" 
                          : "bg-[#12161D] border border-white/15 text-gray-300 group-hover:border-[#F7A400]/50"
                      }`}
                    >
                      <Check size={22} className={isActive ? "stroke-[3]" : "stroke-[2]"} />
                    </div>

                    {/* Content Text */}
                    <div className="pt-2">
                      <h5 className={`text-lg font-bold mb-1 transition-colors ${isActive ? "text-[#F7A400]" : "text-white"}`}>
                        {feat.title}
                      </h5>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* 4. Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12161D] via-[#0B0F17] to-[#12161D] border border-[#F7A400]/30 shadow-2xl mb-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7A400]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="flex items-center gap-3 text-[#F7A400] font-bold text-xl mb-3">
            <TrendingUp size={22} />
            <span>Results & Impact</span>
          </div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            {project.results}
          </p>
        </motion.div>

        {/* Client Testimonial Section */}
        {project.testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#12161D] border border-white/10 shadow-2xl mb-14 relative overflow-hidden"
          >
            <Quote size={48} className="absolute right-8 bottom-8 text-white/5 pointer-events-none" />
            <div className="text-[#F7A400] mb-4">
              <Quote size={28} />
            </div>
            <p className="text-white text-lg sm:text-xl font-medium italic mb-6 leading-relaxed">
              "{project.testimonial.quote}"
            </p>
            <div>
              <h5 className="text-white font-bold text-base">{project.testimonial.author}</h5>
              <p className="text-gray-400 text-sm">{project.testimonial.role}, <span className="text-[#F7A400]">{project.testimonial.company}</span></p>
            </div>
          </motion.div>
        )}

        {/* Next / Previous Project Navigation */}
        {project.prevProject && project.nextProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-y border-white/10 mb-14"
          >
            <Link
              href={`/projects/${project.prevProject.slug}`}
              className="flex items-center gap-3 text-gray-300 hover:text-[#F7A400] transition-colors group w-full sm:w-auto p-4 rounded-2xl bg-white/5 border border-white/5"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <span className="block text-xs text-gray-400">Previous Project</span>
                <span className="font-semibold text-sm sm:text-base text-white">{project.prevProject.title}</span>
              </div>
            </Link>

            <Link
              href={`/projects/${project.nextProject.slug}`}
              className="flex items-center justify-end gap-3 text-gray-300 hover:text-[#F7A400] transition-colors group w-full sm:w-auto p-4 rounded-2xl bg-white/5 border border-white/5 text-right"
            >
              <div>
                <span className="block text-xs text-gray-400">Next Project</span>
                <span className="font-semibold text-sm sm:text-base text-white">{project.nextProject.title}</span>
              </div>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}

        {/* Bottom CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-center py-16 px-6 rounded-3xl bg-[#12161D]/80 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7A400]/5 via-transparent to-[#FF7A33]/5 pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Build Something Amazing Together?
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Let's turn your digital vision into a high-performing masterpiece custom-engineered for maximum scale and impact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-9 py-4.5 rounded-full hover:opacity-95 transition-all shadow-[0_10px_30px_rgba(247,164,0,0.3)] hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>

      <FAQSection />
    </div>
  );
}