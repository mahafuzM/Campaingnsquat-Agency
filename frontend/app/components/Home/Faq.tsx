"use client";

import React, { useState, useMemo } from "react";
import { Plus, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function FAQSection() {
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
    <section className="w-full py-8 sm:py-20 lg:py-28 relative overflow-hidden bg-[#02050A]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050A_0%,#02050A_50%,#02050A_100%)] pointer-events-none" />

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

            {/* Buttons (মোবাইলে পাশাপাশি করার জন্য grid/flex অ্যাডজাস্ট করা হয়েছে) */}
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
                  {/* active accent bar */}
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