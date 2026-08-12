"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import MegaMenu from '../components/MegaMenu';

const RunningIcons = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className={`relative flex items-center overflow-hidden ml-1 ${isMobile ? 'w-6 h-4' : 'w-7 h-5'}`}>
    <div className="flex gap-0" style={{ animation: 'arrowNoGap 3.5s infinite linear' }}>
      {[20, 50, 100, 20, 50, 100].map((op, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black shrink-0" style={{ opacity: op / 100 }}>
          <path d="M6.45 17.45L11.9 12L6.45 6.55L7.5 5.5L14 12L7.5 18.5L6.45 17.45ZM12.45 17.45L17.9 12L12.45 6.55L13.5 5.5L20 12L13.5 18.5L12.45 17.45Z" />
        </svg>
      ))}
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [dbServices, setDbServices] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handle করার জন্য useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/megamenu');
        setDbServices(res.data);
      } catch (err) {
        console.error("Error fetching menu for mobile:", err);
      }
    };
    fetchServices();
  }, []);

  const mobileCategories = [
    { id: "uiux", title: "UI/UX Design", link: "/service/ui-ux-design" },
    { id: "web", title: "Web Design & Development", link: "/service/web-design-development" },
    { id: "software", title: "Software Development", link: "/service/software-development" },
    { id: "app", title: "Mobile App Development", link: "/service/mobile-app-development" }
  ];

  return (
    <nav className={`w-full h-20 md:h-24 fixed top-0 left-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? "bg-[#02050A]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] " 
        : "bg-transparent"
    }`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Jost:wght@500;600&display=swap');
          @keyframes arrowNoGap { 0% { transform: translateX(-50%); } 100% { transform: translateX(0%); } }
          @keyframes fadeInCustom { from { opacity: 0; transform: translate(-50%, 10px); } to { opacity: 1; transform: translate(-50%, 0); } }
          .animate-fade-in-custom { animation: fadeInCustom 0.3s ease-out forwards; }
          .font-jost { font-family: 'Jost', sans-serif; }
        `}
      </style>

      {/* Added relative and proper padding wrapper */}
      <div className="max-w-[1445px] h-full mx-auto flex items-center justify-between px-2 lg:px-10 xl:px-10 relative">
        
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <img 
              src="/assets/logo/campaign squat.png" 
              alt="Campaignsquat Logo" 
              className="h-18 sm:h-18 md:h-20 lg:h-22 w-auto object-contain cursor-pointer transition-all duration-300" 
            />
          </Link>
        </div>
        
        {/* Mobile Center Title (Perfect absolute centering with pointer-events protection) */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:hidden pointer-events-auto">
          <Link href="/" className="block active:scale-95 transition-transform">
            <span className="font-jost text-white text-[15px] sm:text-[17px] font-semibold whitespace-nowrap">
              Campaignsquat Ltd
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
          <Link href="/" className="text-[15px] lg:text-[16px] xl:text-[18px] font-medium text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Home</Link>
          <Link href="/about-us" className="text-[15px] lg:text-[16px] xl:text-[18px] font-medium text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">About Us</Link>
          
          <div className="h-full flex items-center relative" 
               onMouseEnter={() => setIsServiceHovered(true)} 
               onMouseLeave={() => setIsServiceHovered(false)}>
            <Link href="/service" className="flex items-center gap-1 cursor-pointer group py-8 z-[110]">
              <span className={`text-[15px] lg:text-[16px] xl:text-[18px] font-medium transition-colors ${isServiceHovered ? 'text-[#F7A400]' : 'text-white'}`}>Service</span>
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isServiceHovered ? 'rotate-180 text-[#F7A400]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </Link>

            {isServiceHovered && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 animate-fade-in-custom z-[120]" style={{ width: 'calc(100vw - 48px)', maxWidth: '1445px' }}>
                <div className="pointer-events-auto">
                  <MegaMenu />
                </div>
              </div>
            )}
          </div>

          <Link href="/our-projects" className="text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Our Project</Link>
          <Link href="/our-product" className="text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Our Product</Link>
          <Link href="/pricing" className="text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Pricing</Link>
          <Link href="/blog" className="text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Blog</Link>
          <Link href="/careers" className="text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Careers</Link>
          <Link href="/contact" className="text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white hover:text-[#F7A400] transition-colors whitespace-nowrap">Contact</Link>
        </div>

        {/* Right Actions & Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/book-meeting" className="hidden sm:inline-flex items-center justify-center gap-2 px-2 sm:px-6 py-3 md:py-2.5 lg:py-2.5  xl:py-3 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-[12px] md:text-[15px] hover:opacity-90 shadow-[0_0_25px_rgba(247,164,0,0.4)] transition-all duration-300 whitespace-nowrap">
            <div className="flex items-center">
              <span>Book A Meeting</span>
              <RunningIcons />
            </div>
          </Link>

          {!isOpen && (
            <button className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 focus:outline-none" onClick={() => setIsOpen(true)}>
              <span className="w-8 h-[2px] bg-white"></span>
              <span className="w-6 h-[2.5px] bg-[#F7A400]"></span>
              <span className="w-8 h-[2px] bg-white"></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-full sm:w-[380px] bg-[#0A0A0A] z-[105] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 lg:hidden shadow-2xl flex flex-col`}>
        <div className="flex justify-between items-center h-20 px-6 border-b border-white/5 bg-white/5">
          <img src="/assets/logo/campaign squat.png" alt="Campaignsquat Logo" className="h-18 w-auto" />
          <button className="text-white text-4xl font-light" onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-3 px-6 flex flex-col gap-2.5">
          <Link href="/" className="flex items-center justify-between text-base font-semibold text-white border-b border-white/5 pb-2" onClick={() => setIsOpen(false)}>
            Home <span className="text-[#F7A400] text-lg">»</span>
          </Link>
          <Link href="/about-us" className="text-base font-semibold text-white border-b border-white/5 pb-2 flex justify-between" onClick={() => setIsOpen(false)}>
            About us <span className="text-[#F7A400] text-lg">»</span>
          </Link>

          <div className="flex flex-col">
            <div className="flex items-center justify-between w-full pb-3">
              <Link href="/service" className="text-base font-semibold text-white" onClick={() => setIsOpen(false)}>Service</Link>
              <span className="text-[#F7A400] text-lg rotate-90 inline-block mr-1">»</span>
            </div>
            
            <div className="flex flex-col gap-2 mb-2">
              {mobileCategories.map((category) => (
                <div key={category.id} className="mb-0.5">
                  <div className={`flex items-center justify-between w-full rounded-md border transition-all ${activeSubMenu === category.id ? 'bg-[#F7A400] border-[#F7A400]' : 'bg-white/5 border-white/10'}`}>
                    <Link href={category.link} className={`flex-1 p-2 font-semibold text-[13px] ${activeSubMenu === category.id ? 'text-black' : 'text-white/90'}`} onClick={() => setIsOpen(false)}>
                      {category.title}
                    </Link>
                    <button onClick={() => setActiveSubMenu(activeSubMenu === category.id ? null : category.id)} className={`px-3 py-2 border-l ${activeSubMenu === category.id ? 'border-black/20 text-black' : 'border-white/10 text-[#F7A400]'}`}>
                      <span className="text-base font-bold">{activeSubMenu === category.id ? '−' : '+'}</span>
                    </button>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${activeSubMenu === category.id ? 'max-h-[800px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-1 pl-3 py-1 ml-2 border-l border-[#F7A400]/50">
                      {dbServices
                        .filter(item => item.category === category.title)
                        .map((sub) => (
                          <Link 
                            key={sub.slug || sub._id} 
                            href={`/service-details/${sub.slug || sub._id}`} 
                            className="text-white/70 hover:text-[#F7A400] text-[13px] font-medium py-0.5 transition-colors" 
                            onClick={() => setIsOpen(false)}
                          >
                            → {sub.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {['Our Project', 'Our Product', 'Pricing', 'Blog', 'Careers', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={item === 'Our Project' ? "/our-projects" : item === 'Our Product' ? "/our-product" : item === 'Pricing' ? "/pricing" : item === 'Blog' ? "/blog" : item === 'Careers' ? "/careers" : "/contact"} 
              className="flex items-center justify-between text-base font-semibold text-white border-b border-white/5 pb-2" 
              onClick={() => setIsOpen(false)}
            >
              {item} <span className="text-[#F7A400] text-lg">»</span>
            </Link>
          ))}
          
          <Link href="/book-meeting" className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-2 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-semibold text-sm w-full shadow-[0_0_25px_rgba(247,164,0,0.4)] active:scale-95 transition-all text-center" onClick={() => setIsOpen(false)}>
            <div className="flex items-center">
              <span>Book A Meeting</span>
              <RunningIcons isMobile={true} />
            </div>
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] lg:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
}