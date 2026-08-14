"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FiArrowLeft, FiCheckCircle, FiClock, FiShield, FiCpu, FiStar, FiZap } from "react-icons/fi";
import { Plus, ArrowRight, Star, Layers, Users, BarChart3, ShieldCheck } from "lucide-react";

// ==========================================
// FAQ DATA & COMPONENT
// ==========================================
const faqs = [
  {
    question: "How do I check if my business qualifies for this solution?",
    answer: "Our solution is built for enterprises and scaling businesses looking to automate workflows, leverage AI, and expand globally with robust cloud infrastructure.",
  },
  {
    question: "How long does implementation take?",
    answer: "Once onboarded, standard architecture setup and deployment typically take between 2 to 4 weeks depending on custom requirements.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we provide 24/7 monitoring, security updates, and dedicated technical support for all our enterprise clients.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-[32px] sm:py-[64px] relative overflow-hidden border-t border-white/10 mt-[40px] z-10">
      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[64px] items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-[128px]">
            <h2 className="text-[28px] sm:text-[36px] font-bold tracking-tight mb-[16px] bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-[16px] sm:text-[18px] leading-relaxed">
              Got questions about our product or deployment? Find answers below.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-[16px]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className={`bg-[#12161D]/80 backdrop-blur-xl border rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? "border-[#F7A400]/50 shadow-[0_0_30px_rgba(247,164,0,0.15)]" : "border-white/10"}`}>
                  <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-[20px] text-left cursor-pointer">
                    <span className="text-[16px] sm:text-[18px] font-medium text-white">{faq.question}</span>
                    <span className={`w-[28px] h-[28px] rounded-full flex items-center justify-center transition-transform shrink-0 ${isOpen ? "bg-[#F7A400] text-black rotate-45" : "bg-white/5 text-white"}`}>
                      <Plus size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-[20px] pb-[20px] text-zinc-300 text-[14px] sm:text-[16px] leading-relaxed border-t border-white/5 pt-[12px]">
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
    price: "$4,999 / project",
    category: "Enterprise Software",
    rating: 4.9,
    reviewsCount: 128,
    description: "Restropos is a premium, cloud-ready restaurant management system engineered by Campaignsquat Ltd. Built specifically to streamline complex food service workflows, it bridges the gap between front-of-house hospitality and back-of-house efficiency.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = Number(params?.id) || 1;
  const product = initialProducts.find((item) => item.id === productId) || initialProducts[0];

  return (
    <article className="min-h-screen bg-[#02050a] text-white py-[32px] sm:py-[64px] relative overflow-hidden font-poppins selection:bg-[#F7A400] selection:text-black">
      
      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#F7A400]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Container width updated to max-w-[1445px] */}
      <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-25">
        
        {/* Back Link */}
        <div className="mb-[16px]">
          <Link href="/products" className="inline-flex items-center gap-[8px] text-[14px] font-semibold text-zinc-400 hover:text-[#F7A400] transition-colors">
            <FiArrowLeft className="w-[16px] h-[16px]" /> Back to Products
          </Link>
        </div>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-start">
          
          {/* Left: Product Image */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F7A400]/30 to-[#3b82f6]/30 rounded-[24px] blur-xl opacity-50 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            <div className="relative w-full h-[320px] sm:h-[450px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-[#12161D]">
              <Image src={product.image} alt={product.title} fill className="object-cover select-none" priority />
            </div>
          </div>

          {/* Right: Product Info & Pricing */}
          <div className="lg:col-span-6 space-y-[20px]">
            <div className="flex flex-wrap items-center justify-between gap-[12px]">
              <span className="px-[14px] py-[4px] rounded-full text-[12px] font-bold bg-[#F7A400]/10 text-[#F7A400] border border-[#F7A400]/25">
                {product.category}
              </span>
              <div className="flex items-center gap-[4px] text-amber-400 text-[14px] font-semibold">
                <Star size={16} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="text-zinc-500">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold tracking-tight bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent leading-[1.3]">
              {product.title}
            </h1>

            <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-relaxed">
              {product.description} Whether you operate a single boutique cafe or a multi-location fine dining chain, this ecosystem minimizes operational friction, eliminates order delays, and maximizes daily table turnover.
            </p>

            <div className="p-[20px] rounded-[16px] bg-[#12161D]/90 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] shadow-xl">
              <div>
                <p className="text-[12px] text-zinc-400">Starting Price</p>
                <p className="text-[22px] sm:text-[26px] font-bold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">{product.price}</p>
              </div>
              <button className="w-full sm:w-auto bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-[24px] py-[12px] rounded-[12px] hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-[8px] cursor-pointer">
                <span className="text-[14px]">Get Started</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] pt-[12px] border-t border-white/10">
              <div className="flex items-center gap-[8px] text-[12px] text-zinc-300">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} /> Instant Access & Setup
              </div>
              <div className="flex items-center gap-[8px] text-[12px] text-zinc-300">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} /> 24/7 Expert Support
              </div>
              <div className="flex items-center gap-[8px] text-[12px] text-zinc-300">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} /> Scalable Cloud Architecture
              </div>
              <div className="flex items-center gap-[8px] text-[12px] text-zinc-300">
                <FiCheckCircle className="text-[#F7A400] shrink-0" size={16} /> Money-back Guarantee
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Specs Section (Fixed to 4 items and 2-column grid on mobile) */}
        <div className="mt-[40px] p-[20px] sm:p-[32px] rounded-[24px] bg-[#12161D]/50 backdrop-blur-xl border border-white/10 shadow-2xl">
          <h3 className="text-[18px] sm:text-[22px] font-bold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent mb-[20px]">What's Included in This Package</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
            <div className="p-[16px] sm:p-[20px] rounded-[16px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">
              <FiCpu className="text-[#F7A400] mb-[10px]" size={22} />
              <h4 className="text-[14px] sm:text-[16px] font-semibold text-white mb-[4px]">Custom AI Workflow</h4>
              <p className="text-[11px] sm:text-[12px] text-zinc-400">Tailored automation scripts designed for efficiency.</p>
            </div>
            <div className="p-[16px] sm:p-[20px] rounded-[16px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">
              <FiShield className="text-[#F7A400] mb-[10px]" size={22} />
              <h4 className="text-[14px] sm:text-[16px] font-semibold text-white mb-[4px]">Enterprise Security</h4>
              <p className="text-[11px] sm:text-[12px] text-zinc-400">Top-tier encryption & security protocols.</p>
            </div>
            <div className="p-[16px] sm:p-[20px] rounded-[16px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">
              <FiClock className="text-[#F7A400] mb-[10px]" size={22} />
              <h4 className="text-[14px] sm:text-[16px] font-semibold text-white mb-[4px]">Rapid Deployment</h4>
              <p className="text-[11px] sm:text-[12px] text-zinc-400">Fully configured & launched in 2-4 weeks.</p>
            </div>
            <div className="p-[16px] sm:p-[20px] rounded-[16px] bg-white/5 border border-white/5 hover:border-[#F7A400]/30 transition-all">
              <FiZap className="text-[#F7A400] mb-[10px]" size={22} />
              <h4 className="text-[14px] sm:text-[16px] font-semibold text-white mb-[4px]">Cloud Integration</h4>
              <p className="text-[11px] sm:text-[12px] text-zinc-400">Seamless scaling with real-time sync.</p>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* RESTROPOS SPECIFIC SECTIONS (NO BORDERS)   */}
        {/* ========================================== */}
        <div className="mt-[48px] space-y-[40px]">
          
          {/* Section 1: High-Speed Point of Sale & Billing */}
          <div className="space-y-[12px]">
            <h3 className="text-[18px] sm:text-[24px] font-bold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent border-l-4 border-[#F7A400] pl-[12px]">
              High-Speed Point of Sale & Billing
            </h3>
            <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-relaxed">
              Speed up your checkout process with an intuitive, touch-optimized POS interface designed to handle high-volume rush hours effortlessly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] pt-[4px]">
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Instant order entry and split-billing capabilities.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Multi-payment gateway integrations (Cards, Mobile Banking, and Cash).</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Offline billing protection with automatic cloud synchronization.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Real-time discount, tax, and service charge computations.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Automated Kitchen Order Tracking (KOT) */}
          <div className="space-y-[12px]">
            <h3 className="text-[18px] sm:text-[24px] font-bold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent border-l-4 border-[#F7A400] pl-[12px]">
              Automated Kitchen Order Tracking (KOT)
            </h3>
            <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-relaxed">
              Say goodbye to lost paper tickets. Restropos instantly routes orders from the server's device straight to the kitchen staff display, ensuring accuracy and reducing preparation lag.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] pt-[4px]">
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Digital Kitchen Display System (KDS) for real-time order tracking.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Color-coded preparation alerts based on waiting times.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Immediate item-ready notifications sent back to servers.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Strict modification/add-on handling (e.g., allergies, preferences).</span>
              </div>
            </div>
          </div>

          {/* Section 3: Dynamic Table & Floor Layout Management */}
          <div className="space-y-[12px]">
            <h3 className="text-[18px] sm:text-[24px] font-bold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent border-l-4 border-[#F7A400] pl-[12px]">
              Dynamic Table & Floor Layout Management
            </h3>
            <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-relaxed">
              Empower your floor managers with a live visual map of your dining room. Monitor table statuses in real-time to optimize guest seating and maximize capacity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] pt-[4px]">
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Customizable floor plans matching your restaurant’s physical layout.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Live color indicators showing available, occupied, billed, or dirty tables.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Advanced table merging and switching for unexpected large groups.</span>
              </div>
              <div className="flex items-start gap-[10px]">
                <FiCheckCircle className="text-[#F7A400] mt-[2px] shrink-0" size={16} />
                <span className="text-[14px] text-zinc-300">Reservation booking management directly linked to table assignments.</span>
              </div>
            </div>
          </div>

          {/* Section 4: Data-Driven Business Analytics */}
          <div className="space-y-[12px]">
            <h3 className="text-[18px] sm:text-[24px] font-bold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent border-l-4 border-[#F7A400] pl-[12px]">
              Data-Driven Business Analytics
            </h3>
            <p className="text-zinc-300 text-[14px] sm:text-[16px] leading-relaxed">
              Make smarter, more profitable decisions using our centralized reporting dashboard. Track daily sales trends, monitor your best-selling menu items, and optimize your inventory costs effortlessly.
            </p>
          </div>

        </div>

        {/* ========================================== */}
        {/* NEWLY ADDED: RESTAURANT ECOSYSTEM STATS    */}
        {/* ========================================== */}
        <div className="mt-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          <div className="p-[24px] rounded-[20px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[8px]">
            <div className="w-[48px] h-[48px] mx-auto rounded-full bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <Layers size={24} />
            </div>
            <h4 className="text-[24px] font-bold text-white">99.9%</h4>
            <p className="text-[13px] text-zinc-400">System Uptime & Cloud Stability</p>
          </div>

          <div className="p-[24px] rounded-[20px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[8px]">
            <div className="w-[48px] h-[48px] mx-auto rounded-full bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <Users size={24} />
            </div>
            <h4 className="text-[24px] font-bold text-white">35% Faster</h4>
            <p className="text-[13px] text-zinc-400">Average Table Turnover Boost</p>
          </div>

          <div className="p-[24px] rounded-[20px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[8px]">
            <div className="w-[48px] h-[48px] mx-auto rounded-full bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <BarChart3 size={24} />
            </div>
            <h4 className="text-[24px] font-bold text-white">Real-Time</h4>
            <p className="text-[13px] text-zinc-400">Inventory & Stock Tracking</p>
          </div>

          <div className="p-[24px] rounded-[20px] bg-[#12161D]/70 backdrop-blur-xl border border-white/10 text-center space-y-[8px]">
            <div className="w-[48px] h-[48px] mx-auto rounded-full bg-[#F7A400]/10 flex items-center justify-center text-[#F7A400]">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-[24px] font-bold text-white">PCI-DSS</h4>
            <p className="text-[13px] text-zinc-400">Compliant Payment Processing</p>
          </div>
        </div>

      </div>

      {/* FAQ Section */}
      <FAQSection />
    </article>
  );
}