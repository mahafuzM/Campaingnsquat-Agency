"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiShare2, FiCheckCircle, FiClock, FiShield, FiCpu } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { Plus, Search, ArrowRight, MessageSquare } from "lucide-react";

// ==========================================
// FAQ DATA & COMPONENT
// ==========================================
const faqs = [
  {
    question: "How do I check if my business qualifies for Ebury's financing solutions?",
    answer: "If the annual revenue of your business is more than £1m, has a tangible net worth of £100,000, and displays a healthy trading record for at least two years, you can apply for Ebury financing.",
  },
  {
    question: "How can I apply?",
    answer: "You can easily apply by filling out our online form or speaking directly with one of our financial experts to guide you through the process.",
  },
  {
    question: "How long does it take for the funds to be paid?",
    answer: "Once your application is approved and all documentation is verified, funds are typically disbursed within 24 to 48 hours.",
  },
  {
    question: "How do I repay Ebury?",
    answer: "Repayments are structured according to your agreed facility terms, usually via automated direct debits or scheduled bank transfers.",
  },
  {
    question: "Why would I choose Ebury finance over a bank loan?",
    answer: "Ebury offers faster processing, more flexible terms tailored to international trade, and dedicated expert support compared to traditional banks.",
  },
  {
    question: "How long does it take to set up the financing account?",
    answer: "The account setup and verification process generally takes just a few business days, depending on the complexity of your business structure.",
  },
  {
    question: "Do I have to provide security or a guarantee for the credit line?",
    answer: "Requirements vary based on the type of financing solution and your business profile. Our experts will discuss this transparently during your consultation.",
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
    <section className="w-full py-12 sm:py-20 relative overflow-hidden border-t border-white/10 mt-20">
      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Title, Search & Buttons */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] xl:text-[42px] font-semibold tracking-tight leading-[1.25] lg:leading-[1.1] mb-4 sm:mb-6 bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>

            <p className="text-white text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed mb-6 sm:mb-8 max-w-5xl">
              We are here to help you with any questions you may have.
            </p>

            {/* Search box */}
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
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-full bg-[#12161D] border border-white/10 text-[13px] sm:text-[14px] text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F7A400]/50 transition-colors shadow-inner"
              />
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4 text-[12px] sm:text-[13px] md:text-[15px]">
              <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center">
                <span>Speak to an expert</span>
              </button>

              <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center">
                <span>Read more FAQs</span>
              </button>
            </div>
          </div>

          {/* Right Side: Accordion Questions */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {filtered.length === 0 && (
              <div className="text-center py-12 sm:py-16 rounded-[16px] border border-dashed border-white/10 bg-[#12161D]/50 px-4">
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
                  className={`relative bg-[#12161D] border rounded-[16px] sm:rounded-[20px] overflow-hidden transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${
                    isOpen ? "border-[#F7A400]/40" : "border-white/10"
                  }`}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300"
                    style={{ background: isOpen ? "#F7A400" : "transparent" }}
                  />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 pr-2 sm:pr-4">
                      <span
                        className={`text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-bold shrink-0 pt-0.5 transition-colors duration-300 ${
                          isOpen ? "text-[#F7A400]" : "text-white/25"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-medium text-white leading-snug sm:leading-normal">
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#F7A400] border-[#F7A400] text-black font-bold"
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
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 pl-[42px] sm:pl-[62px] text-white/90 text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
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
// BLOG DATABASE & DETAILS PAGE
// ==========================================
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

export default function BlogDetailsPage() {
  const params = useParams();
  const blogId = Number(params?.id);

  const blog = initialBlogs.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#02050a] text-white flex flex-col items-center justify-center px-4 font-poppins">
        <h2 className="text-3xl font-bold mb-4 text-[#F7A400]">Article Not Found</h2>
        <p className="text-zinc-400 mb-6">The article you are looking for does not exist or has been removed.</p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-[#F7A400] text-black font-semibold rounded-xl text-sm transition-transform hover:scale-105"
        >
          Back to Newsroom
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#02050a] text-white py-12 sm:py-20 relative overflow-hidden font-poppins">
      {/* Background Glow & Grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-r from-[#ff7a33]/10 via-[#3b82f6]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-[#F7A400] transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Newsroom
          </Link>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#F7A400]/10 text-[#F7A400] border border-[#F7A400]/20">
              {blog.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 tracking-wider">
              <HiOutlineCalendar className="w-4 h-4 text-[#F7A400]" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 tracking-wider">
              <FiClock className="w-4 h-4 text-[#F7A400]" />
              <span>4 min read</span>
            </div>
          </div>

          <h1 className="text-[28px] sm:text-[38px] md:text-[48px] font-extrabold tracking-tight mb-6 leading-[1.15] text-white">
            {blog.title}
          </h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden mb-10 border border-white/10 shadow-2xl bg-[#12161D]"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover select-none"
            priority
          />
        </motion.div>

        {/* ========================================== */}
        {/* AGENCY PRODUCT/SERVICE HIGHLIGHT BOX (NEW) */}
        {/* ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 p-6 rounded-3xl bg-[#12161D]/80 border border-white/10 backdrop-blur-md"
        >
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400] shrink-0">
              <FiCpu size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Core Technology</p>
              <h4 className="text-sm font-semibold text-white">AI & Cloud Scalability</h4>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400] shrink-0">
              <FiShield size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Enterprise Grade</p>
              <h4 className="text-sm font-semibold text-white">Secure Architecture</h4>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400] shrink-0">
              <FiCheckCircle size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">Execution Timeline</p>
              <h4 className="text-sm font-semibold text-white">Ready in 2-4 Weeks</h4>
            </div>
          </div>
        </motion.div>

        {/* Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-invert max-w-none text-zinc-300 text-[16px] sm:text-[18px] leading-[1.8] space-y-6"
        >
          <p className="font-medium text-white/90 text-xl leading-relaxed">
            {blog.description}
          </p>
          <p>
            As Betopia Group continues to scale its operations globally, the focus remains firmly on innovation, talent acquisition, and delivering exceptional value to clients across more than 80 countries. This strategic initiative marks a pivotal milestone in the company&apos;s roadmap toward fulfilling its long-term objectives.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 tracking-tight">
            Driving Future Growth Through Advanced Technologies
          </h3>
          <p>
            The integration of cutting-edge infrastructure and a dedication to continuous improvement ensures that the organisation stays ahead of industry trends. By empowering teams and investing heavily in next-generation solutions, the enterprise is well-positioned to navigate future challenges successfully.
          </p>

          {/* Key Deliverables Checkpoints */}
          <div className="my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12161D] to-[#0a0e17] border border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">What's Included in This Solution:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} />
                <span>Custom Architecture Setup</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} />
                <span>Dedicated Tech Lead & Experts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} />
                <span>24/7 Monitoring & Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} />
                <span>Scalable Cloud Infrastructure</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agency Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-[linear-gradient(135deg,#12161D_0%,#1a2230_100%)] border border-[#F7A400]/30 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to transform your enterprise infrastructure?</h3>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Speak with our engineering consultants today to discuss custom implementation for your business ecosystem.
          </p>
          <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-8 py-4 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] inline-flex items-center gap-2 text-sm sm:text-base cursor-pointer">
            <span>Schedule a Consultation</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Footer Actions */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#F7A400] hover:underline flex items-center gap-2"
          >
            ← Explore More Articles
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: blog.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[#12161D] border border-white/15 px-4 py-2.5 rounded-xl text-white hover:border-[#F7A400] transition-colors cursor-pointer"
          >
            <FiShare2 className="w-4 h-4 text-[#F7A400]" />
            Share Article
          </button>
        </div>
      </div>

      {/* FAQ Section Added at the bottom */}
      <FAQSection />
    </article>
  );
}