"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiClock,
  FiCalendar,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiBookmark,
} from "react-icons/fi";
import { ArrowRight, ExternalLink } from "lucide-react";

// =====================================================
// 1. DUMMY DATA (ব্লগ এবং প্রোডাক্টের যাবতীয় ডেটা)
// =====================================================
const blogPost = {
  id: 1,
  title: "Mastering the Art of Cloud Kitchen Automation with Restropos",
  slug: "cloud-kitchen-automation-restropos",
  category: "Restaurant Tech",
  publishedAt: "Oct 15, 2023",
  readTime: "8 min read",
  
  // লেখকের তথ্য
  author: {
    name: "Alim Khan",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    role: "CTO, Campaignsquat Ltd.",
    bio: "Alim is a visionary in restaurant technology, focusing on scalable automation solutions for modern F&B businesses."
  },

  // বড় ফিচার্ড ইমেজ
  featuredImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
  
  // ব্লগ কন্টেন্ট
  content: `
    <p class="lead text-xl text-zinc-200 leading-relaxed font-normal">The restaurant industry is undergoing a massive technological shift. In this exclusive piece, we explore how modern automation, specifically platforms like Restropos, are revolutionizing cloud kitchens, reducing overheads, and boosting efficiency in unprecedented ways.</p>

    <h2 class="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">The Rise of the Cloud Kitchen Model</h2>
    <p class="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">Cloud kitchens (or ghost kitchens) have exploded in popularity, focusing solely on delivery and takeout. However, managing a high-volume delivery business without a physical dining room comes with unique challenges: order fragmentation, delivery logistics, and inventory management across multiple virtual brands.</p>

    <p class="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">This is where integrated technology steps in. A fragmented system leads to errors—lost tickets, delayed orders, and unhappy customers. A unified <strong class="text-[#F7A400]">Restaurant Automation System</strong> acts as the central nervous system of a modern food business.</p>

    <div class="image-wrapper my-8">
       <img src="https://images.unsplash.com/photo-1581349485608-946926a8e128?q=80&w=1000&auto=format&fit=crop" alt="Cloud kitchen workflow" class="rounded-2xl border border-white/10 w-full object-cover h-[400px]" />
       <p class="text-sm text-zinc-400 text-center mt-3">Modern KDS systems streamline the entire kitchen workflow seamlessly.</p>
    </div>

    <h2 class="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">How Restropos Changes the Game</h2>
    <p class="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">Restropos isn't just a point-of-sale; it's a comprehensive ecosystem. Here’s how it automates the chaos:</p>
    <ul class="list-disc pl-6 space-y-3 text-base sm:text-lg text-zinc-300 mb-6">
      <li><strong class="text-white">Centralized Order Management:</strong> Aggregate orders from all delivery platforms (UberEats, DoorDash, etc.) into a single screen. No more tablets lined up on the counter!</li>
      <li><strong class="text-white">Kitchen Display System (KDS):</strong> Automate the kitchen workflow. Orders go straight to digital screens, prioritized by prep time, reducing human error and expediting ticket times.</li>
      <li><strong class="text-white">Real-Time Analytics:</strong> Get actionable insights into your best-selling items, peak hours, and food costs. Make data-driven decisions to boost profitability.</li>
      <li><strong class="text-white">Inventory Automation:</strong> Track ingredient usage in real-time. Set up automatic alerts when stock is low, preventing menu items from going "out of stock" during peak hours.</li>
    </ul>

    <h2 class="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">The Impact on Profitability</h2>
    <p class="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">By eliminating manual processes and streamlining operations, cloud kitchens can significantly increase their profit margins. Reduced errors mean less food waste and fewer refunds. Faster order fulfillment means higher driver turnover and more completed orders per day.</p>

    <h2 class="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">Conclusion</h2>
    <p class="text-base sm:text-lg text-zinc-300 leading-relaxed">The future of the F&B industry lies in intelligent automation. As competition intensifies, kitchens that embrace technology to optimize their operations will thrive. Restropos provides the essential tools needed to turn a complex, high-pressure environment into a well-oiled, profitable machine.</p>
  `,

  tags: ["Cloud Kitchen", "Automation", "POS", "Restropos", "F&B", "Efficiency"],
};

// =====================================================
// 2. MAIN COMPONENT
// =====================================================
export default function BlogDetailsPage() {
  return (
    <div className="min-h-screen bg-[#02050a] text-zinc-300 font-poppins selection:bg-[#F7A400] selection:text-black">
      
      {/* ব্যাকগ্রাউন্ড গ্রিড ও গ্লো ইফেক্ট */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      <div className="fixed top-1/4 -left-1/2 w-[600px] h-[600px] bg-[#ff7a33]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 -right-1/4 w-[400px] h-[400px] bg-[#F7A400]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* মূল কন্টেইনার (w-full এর সাথে max-w-[1445px] mx-auto যুক্ত করা হয়েছে) */}
      <div className="w-full max-w-[1445px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* হিরো সেকশন (ব্লগ টাইটেল ও মেটা) */}
        <header className="mb-16 pt-12 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-8 bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm sm:text-base flex-wrap">
              <div className="flex items-center gap-3">
                <Image src={blogPost.author.avatar} alt={blogPost.author.name} width={44} height={44} className="rounded-full border-2 border-white/10 shadow-lg" />
                <div className="text-left">
                    <p className="font-semibold text-white">{blogPost.author.name}</p>
                    <p className="text-xs text-zinc-400">{blogPost.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-[#F7A400]" /> <span>{blogPost.publishedAt}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-[#F7A400]" /> <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* মেইন কন্টেন্ট এরিয়া */}
        <div className="flex flex-col lg:flex-row gap-12 items-start relative justify-center">
          
          {/* ফিক্সড সোশ্যাল সাইডবার */}
          <aside className="lg:sticky lg:top-32 flex lg:flex-col gap-4 mb-10 lg:mb-0 border border-white/10 p-3 rounded-full bg-[#12161D]/50 backdrop-blur-md z-20 mx-auto lg:mx-0 shadow-xl">
            {[FiFacebook, FiTwitter, FiLinkedin, FiBookmark].map((Icon, index) => (
              <button key={index} className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#F7A400] hover:text-black flex items-center justify-center transition-all duration-300 group cursor-pointer">
                <Icon size={20} className="text-zinc-400 group-hover:text-black" />
              </button>
            ))}
          </aside>

          {/* আর্টিকেল ও ফিচার্ড ইমেজ */}
          <article className="flex-1 max-w-4xl w-full">
            
            <div className="relative w-full h-[320px] sm:h-[480px] md:h-[580px] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl group">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />
               <Image 
                 src={blogPost.featuredImage} 
                 alt={blogPost.title} 
                 fill 
                 className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                 priority
               />
            </div>

            {/* ব্লগ টেক্সট কন্টেন্ট */}
            <div 
              className="prose prose-invert max-w-none text-zinc-300"
              dangerouslySetInnerHTML={{ __html: blogPost.content }} 
            />

            {/* ট্যাগস */}
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-3 flex-wrap">
                <span className="text-zinc-400 font-medium text-sm">Tags:</span>
                {blogPost.tags.map(tag => (
                    <Link key={tag} href={`/tag/${tag.toLowerCase().replace(' ','-')}`} className="px-3.5 py-1.5 rounded-lg bg-white/5 text-xs sm:text-sm hover:bg-white/10 text-zinc-300 transition-colors">
                        {tag}
                    </Link>
                ))}
            </div>

            {/* অথর বক্স */}
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#12161D] border border-white/10 flex items-center gap-6 flex-col sm:flex-row text-center sm:text-left shadow-2xl">
                <Image src={blogPost.author.avatar} alt={blogPost.author.name} width={100} height={100} className="rounded-full border-4 border-white/10 shadow-lg" />
                <div>
                    <p className="text-xs text-[#F7A400] font-bold uppercase tracking-wider mb-1">About The Author</p>
                    <h4 className="text-2xl font-bold text-white mb-2">{blogPost.author.name}</h4>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">{blogPost.author.bio}</p>
                     <button className="text-[#F7A400] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer mx-auto sm:mx-0">
                        View all posts by {blogPost.author.name.split(' ')[0]} <ArrowRight size={16} />
                    </button>
                </div>
            </div>

          </article>

        </div>

        {/* CTA সেকশন (প্রোডাক্ট কার্ড সহ) */}
        <section className="mt-24 sm:mt-32 mb-20 relative rounded-[32px] p-8 sm:p-16 bg-[linear-gradient(145deg,#12161D_0%,#02050a_100%)] border border-white/10 overflow-hidden shadow-2xl">
            
            <div className="absolute -bottom-1/2 -right-1/2 w-[600px] h-[600px] bg-[#F7A400]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-[#F7A400] font-bold text-xs sm:text-sm mb-4 block tracking-wider">READY TO AUTOMATE YOUR KITCHEN?</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                        Elevate Your F&B Business with Restropos
                    </h2>
                    <p className="text-zinc-300 text-base sm:text-lg mb-8 leading-relaxed">
                        Stop struggling with fragmented systems. Get the all-in-one platform designed to streamline operations, boost efficiency, and increase profitability for cloud kitchens and restaurants.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-8 py-4 rounded-xl hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center gap-2 cursor-pointer">
                            <span>Request a Demo</span>
                            <ArrowRight size={18} />
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all flex items-center gap-2 cursor-pointer">
                            Explore Features <ExternalLink size={16} />
                        </button>
                    </div>
                </div>

                {/* প্রোডাক্ট শোকেস কার্ড */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#02050a] border border-white/10 shadow-xl relative group hover:border-[#F7A400]/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#12161D] flex items-center justify-center border border-white/10 relative overflow-hidden">
                             <Image 
                               src="https://images.unsplash.com/photo-1556742049-0a67d553c2a5?q=80&w=100&auto=format&fit=crop" 
                               alt="Restropos Enterprise" 
                               fill 
                               className="object-cover" 
                             />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Restropos Enterprise</h4>
                            <p className="text-xs text-zinc-400">Complete Kitchen Automation Suite</p>
                        </div>
                         <span className="ml-auto px-3 py-1 rounded-full text-[10px] font-bold bg-[#F7A400]/10 text-[#F7A400] border border-[#F7A400]/25">
                            TOP RATED
                         </span>
                    </div>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                        Integrated POS, KDS, Inventory, and Analytics. Trusted by leading cloud kitchen chains globally to scale operations securely.
                    </p>
                     <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400 border-t border-white/10 pt-4">
                        <span>Unlimited Brands</span>
                        <span>Cloud Sync</span>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}