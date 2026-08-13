"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Calendar, Clock, User, ArrowLeft, Share2, Bookmark, 
  Plus, Search, MessageSquare, Send, ChevronRight, ListOrdered, 
  Check, ThumbsUp, FileText 
} from "lucide-react";

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
    <section className="w-full py-16 sm:py-24 relative overflow-hidden border-t border-white/10 mt-20">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold tracking-tight leading-[1.25] mb-4 sm:mb-6 text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)" }}
            >
              Frequently Asked Questions
            </h2>

            <p className="text-gray-300 text-[15px] sm:text-[17px] leading-relaxed mb-6 sm:mb-8">
              We are here to help you with any questions you may have regarding our services and solutions.
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
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-full bg-[#12161D] border border-white/10 text-[13px] sm:text-[14px] text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F7A400]/50 transition-colors shadow-inner"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px]">
              <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-5 py-3 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-2 cursor-pointer">
                <span>Speak to an expert</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {filtered.length === 0 && (
              <div className="text-center py-12 rounded-[16px] border border-dashed border-white/10 bg-[#12161D]/50 px-4">
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
                  className={`relative bg-[#12161D] border rounded-[16px] overflow-hidden transition-colors duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${
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
                    <div className="flex items-start gap-3 sm:gap-4 pr-2">
                      <span
                        className={`text-[14px] sm:text-[16px] font-bold shrink-0 pt-0.5 transition-colors duration-300 ${
                          isOpen ? "text-[#F7A400]" : "text-white/25"
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
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 pl-[42px] sm:pl-[62px] text-gray-300 text-[13px] sm:text-[15px] leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
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
const blogPostsData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  wordCount: string;
  author: { name: string; role: string; avatar: string; bio: string };
  image: string;
  content: string[];
  tableOfContents: string[];
}> = {
  "1": {
    title: "The Future of AI and Web Development in 2026",
    category: "Technology",
    date: "June 12, 2026",
    readTime: "5 min read",
    wordCount: "850 words",
    author: {
      name: "Campaignsquat Team",
      role: "Engineering Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      bio: "Engineering leads focusing on scalable web architectures, modern React ecosystems, and intelligent AI integrations for next-gen products.",
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    tableOfContents: [
      "Introduction to AI in Development",
      "Automated UI and LLM Integrations",
      "Scalability and Performance Optimization",
      "Why This Matters for the Future"
    ],
    content: [
      "Artificial Intelligence has rapidly shifted from a futuristic concept to an everyday core driver in modern software and web development. Developers are no longer just writing boilerplate code; they are orchestrating intelligent systems.",
      "From automated UI generation to hyper-personalized user experiences powered by LLMs, the boundaries of what a web application can achieve are expanding faster than ever. In this article, we break down the critical trends shaping the digital landscape.",
      "Scalability, performance optimization, and rigorous security remain paramount. As frameworks like Next.js evolve with server-side AI integrations, development workflows become smoother, cutting time-to-market significantly for startups and enterprises alike.",
    ],
  },
  "2": {
    title: "Scalable UX/UI Design Systems for Enterprise Apps",
    category: "Design",
    date: "June 08, 2026",
    readTime: "4 min read",
    wordCount: "620 words",
    author: {
      name: "Design Studio",
      role: "Lead UI/UX Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      bio: "Crafting bulletproof design systems and intuitive cross-platform experiences for high-growth enterprise companies.",
    },
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    tableOfContents: [
      "Bridging Design and Engineering",
      "The Value of Unified Design Tokens",
      "Scaling Across Multi-Platforms"
    ],
    content: [
      "Design systems are the single source of truth that bridges the gap between design and engineering. Without a solid design system, scaling a multi-platform enterprise product becomes chaotic and inefficient.",
      "Consistency builds user trust. When every button, typography scale, and color token is unified, teams can ship features twice as fast without compromising on visual quality or accessibility standards.",
    ],
  },
};

export default function BlogDetailsPage() {
  const params = useParams();
  const id = (params?.id as string) || "1";
  const post = blogPostsData[id] || blogPostsData["1"];

  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState([
    { name: "Alex Morgan", time: "2 hours ago", text: "This is an incredible overview of upcoming tech trends. Very helpful!" }
  ]);
  const [likesCount, setLikesCount] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll Progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setCommentsList([...commentsList, { name: "Guest User", time: "Just now", text: commentText }]);
    setCommentText("");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(likesCount + 1);
      setHasLiked(true);
    } else {
      setLikesCount(likesCount - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#02050a] text-white font-poppins pt-24 pb-20 relative overflow-hidden">
      
      {/* 1. Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Glow & Grids */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-r from-[#ff7a33]/10 via-[#3b82f6]/10 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#F7A400] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-600" />
          <Link href="/blog" className="hover:text-[#F7A400] transition-colors">Blog</Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#F7A400] font-medium truncate max-w-[200px] sm:max-w-none">{post.category}</span>
        </div>

        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#F7A400] transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Article Title & Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-3.5 py-1.5 rounded-full bg-[#F7A400]/10 border border-[#F7A400]/30 text-[#F7A400] text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="text-[28px] sm:text-[38px] md:text-[46px] font-extrabold tracking-tight mt-4 mb-6 leading-[1.2] text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
                <p className="text-xs text-gray-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#F7A400]" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#F7A400]" /> {post.readTime}</span>
              <span className="flex items-center gap-1.5"><FileText size={14} className="text-[#F7A400]" /> {post.wordCount}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl mb-10"
        >
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </motion.div>

        {/* Table of Contents */}
        {post.tableOfContents && (
          <div className="mb-10 p-6 rounded-2xl bg-[#12161D] border border-white/10 shadow-lg">
            <div className="flex items-center gap-2 text-[#F7A400] font-semibold mb-4 text-sm uppercase tracking-wide">
              <ListOrdered size={18} />
              <span>Table of Contents</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              {post.tableOfContents.map((item, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx}`} className="hover:text-[#F7A400] transition-colors flex items-center gap-2">
                    <span className="text-gray-500 font-mono">0{idx + 1}.</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 text-gray-300 text-[15px] sm:text-[17px] leading-relaxed"
        >
          {post.content.map((paragraph, index) => (
            <p key={index} id={`section-${index}`}>{paragraph}</p>
          ))}

          <h3 id={`section-${post.content.length}`} className="text-xl sm:text-2xl font-bold text-white pt-4">Why This Matters for the Future</h3>
          <p>
            As technology continues to merge with everyday business architecture, keeping up with these shifts ensures long-term competitive advantage. Teams that embrace agile workflows and smart frameworks scale smoothly without hitting infrastructure bottlenecks.
          </p>
        </motion.div>

        {/* Like & Share Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleLike}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                hasLiked 
                  ? "bg-[#F7A400] border-[#F7A400] text-black" 
                  : "bg-white/5 border-white/10 hover:border-[#F7A400] text-white"
              }`}
            >
              <ThumbsUp size={14} />
              <span>{hasLiked ? "Liked" : "Helpful?"}</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-black/20 text-[10px]">{likesCount}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#F7A400] text-xs font-semibold text-white transition-all cursor-pointer"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Share2 size={14} className="text-[#F7A400]" />}
              <span>{copied ? "Link Copied!" : "Share Article"}</span>
            </button>

            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#F7A400] text-xs font-semibold text-white transition-all cursor-pointer">
              <Bookmark size={14} className="text-[#F7A400]" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#12161D] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F7A400]/40 shrink-0">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">{post.author.name}</h4>
            <p className="text-xs text-[#F7A400] mb-2">{post.author.role}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{post.author.bio}</p>
          </div>
        </div>

        {/* Call to Action (CTA) */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#12161D] to-[#1a212d] border border-[#F7A400]/30 text-center relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#F7A400]/10 rounded-full blur-2xl pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Scale Your Business with Us?</h3>
          <p className="text-gray-300 text-sm max-w-lg mx-auto mb-6">
            Let our experts help you build cutting-edge web architecture and secure seamless funding solutions tailored to your growth.
          </p>
          <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-6 py-3.5 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] cursor-pointer text-sm">
            Start a Project Today
          </button>
        </div>

        {/* Related Posts / Suggested Articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/blog/2" className="p-4 rounded-2xl bg-[#12161D] border border-white/10 hover:border-[#F7A400]/50 transition-all group block">
              <span className="text-xs text-[#F7A400] font-semibold">Design</span>
              <h4 className="text-base font-bold text-white mt-1 group-hover:text-[#F7A400] transition-colors">
                Scalable UX/UI Design Systems for Enterprise Apps
              </h4>
              <p className="text-xs text-gray-400 mt-2">June 08, 2026 • 4 min read</p>
            </Link>
            <Link href="/blog/1" className="p-4 rounded-2xl bg-[#12161D] border border-white/10 hover:border-[#F7A400]/50 transition-all group block">
              <span className="text-xs text-[#F7A400] font-semibold">Technology</span>
              <h4 className="text-base font-bold text-white mt-1 group-hover:text-[#F7A400] transition-colors">
                The Future of AI and Web Development in 2026
              </h4>
              <p className="text-xs text-gray-400 mt-2">June 12, 2026 • 5 min read</p>
            </Link>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <MessageSquare size={20} className="text-[#F7A400]" />
            <span>Discussion ({commentsList.length})</span>
          </div>

          <form onSubmit={handleAddComment} className="mb-8">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Leave a comment or ask a question..."
              rows={3}
              className="w-full p-4 rounded-xl bg-[#12161D] border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F7A400]/55 transition-colors resize-none"
            />
            <div className="flex justify-end mt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7A400] text-gray-950 font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send size={14} />
                <span>Post Comment</span>
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {commentsList.map((c, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#12161D]/70 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-xs font-bold text-white">{c.name}</h5>
                  <span className="text-[11px] text-gray-500">{c.time}</span>
                </div>
                <p className="text-sm text-gray-300">{c.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <FAQSection />
    </div>
  );
}