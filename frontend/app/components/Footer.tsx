"use client";

import React from "react";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube 
} from "react-icons/fa";
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker 
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-[30px] lg:pt-[60px] overflow-hidden relative">
      
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#F7A400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1445px] mx-auto px-[16px] md:px-[30px] lg:px-[40px] relative z-10">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[32px] md:gap-[48px] lg:gap-[40px] pb-[40px] lg:pb-[72px]">
          
          {/* Column 1: Logo, Description & Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-[20px] lg:space-y-[28px] text-left">
            <div className="flex items-center justify-start gap-[14px]">
              <img 
                src="/assets/logo/favicon-512.png" 
                alt="CampaignSquad Logo" 
                className="w-[48px] h-[48px] lg:w-[60px] lg:h-[60px] object-contain rounded-full p-[5px] bg-black shadow-[0_0_20px_rgba(247,164,0,0.3)]"
              />
              <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F7A400]">
                CampaignSquad
              </span>
            </div>

            <p className="text-white lg:text-white text-[14px] lg:text-[16px] leading-relaxed max-w-[380px] mx-auto md:mx-0 font-normal">
              Where Innovation Meets Excellence. We Craft Stunning Websites And High-Impact Digital Experiences, Blending Creativity With Precision To Enhance Your Brand.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-start gap-[10px] sm:gap-[14px] pt-[4px] lg:pt-[8px]">
              <Link href="#" aria-label="Facebook" className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-[#F7A400] hover:text-black hover:border-[#F7A400] transition-all duration-300">
                <FaFacebookF className="text-[16px] lg:text-[18px]" />
              </Link>
              <Link href="#" aria-label="Instagram" className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-[#F7A400] hover:text-black hover:border-[#F7A400] transition-all duration-300">
                <FaInstagram className="text-[16px] lg:text-[18px]" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-[#F7A400] hover:text-black hover:border-[#F7A400] transition-all duration-300">
                <FaLinkedinIn className="text-[16px] lg:text-[18px]" />
              </Link>
              <Link href="#" aria-label="Twitter" className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-[#F7A400] hover:text-black hover:border-[#F7A400] transition-all duration-300">
                <FaTwitter className="text-[16px] lg:text-[18px]" />
              </Link>
              <Link href="#" aria-label="YouTube" className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-[#F7A400] hover:text-black hover:border-[#F7A400] transition-all duration-300">
                <FaYoutube className="text-[16px] lg:text-[18px]" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services (Span 2 on Large, Responsive Grid on Tablet/Mobile) */}
          <div className="lg:col-span-2 space-y-[16px] lg:space-y-[22px]">
            <h3 className="text-white font-bold text-[16px] lg:text-[20px] tracking-wider uppercase">Services</h3>
            <ul className="space-y-[12px] lg:space-y-[16px] text-[14px] lg:text-[16px]">
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Software Dev
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Link (Span 2) */}
          <div className="lg:col-span-2 space-y-[16px] lg:space-y-[22px]">
            <h3 className="text-white font-bold text-[16px] lg:text-[20px] tracking-wider uppercase">Quick Link</h3>
            <ul className="space-y-[12px] lg:space-y-[16px] text-[14px] lg:text-[16px]">
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Our Project
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Our product
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 lg:text-white hover:text-[#F7A400] flex items-center gap-[8px] lg:gap-[10px] transition-colors">
                  <span className="text-[#F7A400] font-bold">»</span> Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 4) */}
          <div className="lg:col-span-4 space-y-[16px] lg:space-y-[22px]">
            <h3 className="text-white font-bold text-[16px] lg:text-[20px] tracking-wider uppercase">Contact Us</h3>
            
            <ul className="space-y-[14px] lg:space-y-[18px] text-[14px] lg:text-[16px] text-white">
              {/* Email */}
              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <HiOutlineMail className="text-[#F7A400] text-[18px] lg:text-[22px] shrink-0 mt-[3px]" />
                <a href="mailto:Sales@Campaignsquat.Com" className="hover:text-[#F7A400] transition-colors break-all sm:break-normal">
                  Sales@Campaignsquat.Com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <HiOutlinePhone className="text-[#F7A400] text-[18px] lg:text-[22px] shrink-0 mt-[3px]" />
                <a href="tel:+8801330093408" className="hover:text-[#F7A400] transition-colors">
                  +88 01330093408
                </a>
              </li>

              {/* Bangladesh Address */}
              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <HiOutlineLocationMarker className="text-[#F7A400] text-[20px] lg:text-[24px] shrink-0 mt-[3px]" />
                <div>
                  <strong className="text-white block font-semibold mb-[2px]">Bangladesh</strong>
                  <span className="text-white/80 lg:text-white text-[13px] lg:text-[16px] leading-snug">Shohid Moshiur Rahman Sharak, Jhenaidah 7300, Dhaka , Khulna , Bangladesh</span>
                </div>
              </li>

              {/* UK Address */}
              <li className="flex items-start gap-[12px] lg:gap-[14px]">
                <HiOutlineLocationMarker className="text-[#F7A400] text-[20px] lg:text-[24px] shrink-0 mt-[3px]" />
                <div>
                  <strong className="text-white block font-semibold mb-[2px]">UK</strong>
                  <span className="text-white/80 lg:text-white text-[13px] lg:text-[16px] leading-snug">UK - Unit 13 Freeland Park Wareham Road, Lytchett Matravers, Poole, England, BH16 6FA</span>
                </div>
              </li>
            </ul>

          </div>

        </div>

      </div>
        
      {/* Bottom Logo Image Section (Full width outside max-w container) */}
      <div className="text-center flex items-center justify-center w-full">
        <img 
          src="/assets/images/footer.png" 
          alt="CampaignSquad" 
          className="w-full h-[12vh] sm:h-[18vh] md:h-[30vh] lg:h-[40vh] object-cover"
        />
      </div>
    </footer>
  );
}