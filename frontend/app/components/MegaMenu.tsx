"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const serviceData = [
  {
    title: "UI/UX Design",
    image: "/assets/images/hello.png",
    path: "/ui-ux-design", 
    items: [
      { name: "Web & Mobile UI Design", link: "/service-details/web-mobile-ui-design" },
      { name: "UX & Wireframing ", link: "/service-details/ux-wireframing" },
      { name: "Interactive Prototype ", link: "/service-details/interactive-prototype" },
      { name: "SaaS & Dashboards Design", link: "/service-details/saas-dashboards-design" },
      { name: "Design Systems", link: "/service-details/design-systems" },
      { name: "Landing Page UI Design", link: "/service-details/landing-page-ui-design" },
      { name: "App Interfaces Design", link: "/service-details/app-interfaces-design" }
    ]
  },
  {
    title: "Web Design & Development",
    image: "/assets/images/hello.png",
    path: "/web-design-development", 
    items: [
      { name: "Custom Websites Development", link: "/service-details/custom-websites-development" },
      { name: "E-Commerce Website Development", link: "/service-details/ecommerce-website-development" },
      { name: "WordPress Website Development ", link: "/service-details/wordpress-website-development" }, 
      { name: "Landing Page Development", link: "/service-details/landing-page-development" },
      { name: "Corporate Website Development", link: "/service-details/corporate-website-development" },
      { name: "Personal Branding Development", link: "/service-details/personal-branding-development" },
      { name: "Website speed Optimization", link: "/service-details/website-speed-optimization" },
    ]
  },
  {
    title: "Software Development",
    image: "/assets/images/hello.png",
    path: "/software-development", 
    items: [
      { name: "Custom Software Development", link: "/software-development/custom-software-development" },
      { name: "ERP Systems Development", link: "/software-development/erp-systems-development" },
      { name: "Business Automation Development", link: "/software-development/business-automation-development" },
      { name: "Web Application Development", link: "/software-development/web-application-development" },
      { name: "Enterprise Application Development", link: "/software-development/enterprise-application-development" },
      { name: "SaaS Solutions Development", link: "/software-development/saas-solutions-development" },
      { name: "Software Maintenance & Support", link: "/software-development/software-maintenance-support" }
    ]
  },
  {
    title: "Mobile App Development",
    image: "/assets/images/hello.png",
    path: "/mobile-app-development", 
    items: [
      { name: "Android App Development", link: "/mobile-app-development/android-app-development" },
      { name: "iOS App Development", link: "/mobile-app-development/ios-app-development" },
      { name: "Cross-Platform App Development", link: "/mobile-app-development/cross-platform-app-development" }, 
      { name: "E-Commerce App Development ", link: "/mobile-app-development/ecommerce-app-development" },
      { name: "Flutter App Development", link: "/mobile-app-development/flutter-app-development" },
      { name: "React Native App Development", link: "/mobile-app-development/react-native-app-development" }, 
      { name: "On-Demand App Development", link: "/mobile-app-development/on-demand-app-development" }
    ]
  }
];

const hiringPoints = [
  "Pre-Vetted & Skilled IT Professionals",
  "Flexible Hiring Models (Hourly, Dedicated, Project-Based)",
  "Quick Onboarding & Seamless Integration",
  "Cost-Effective Resource Engagement",
  "Transparent Communication & Full Control"
];

export default function MegaMenu() {
  return (
    <div className="absolute top-full left-1/2 translate-x-1/2 w-[98.5vw] md:left-1/2 md:-translate-x-1/2  lg:left-[42%] lg:translate-x-1/4  lg:max-w-[1445px] pointer-events-auto z-[50]">
      <div className="w-full">
        <div className="max-w-auto bg-gradient-to-b from-[#0e1626]/75 via-[#060b14]/85 to-[#02050a]/90 backdrop-blur2xl p-4 md:p-6 lg:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] rounded-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            
            {serviceData.map((service, index) => (
              <div 
                key={index} 
                className="bg-transparent border-none rounded-xl p-4 md:p-4 lg:p-5 transition-all duration-300 flex flex-col h-auto group"
              >
                <Link href={service.path} className="flex items-center gap-3 mb-3 cursor-pointer group/title">
                  <div className="w-[38px] h-[38px] md:w-[44px] md:h-[44px] bg-white rounded-lg flex items-center justify-center p-2.5 shrink-0 group-hover/title:scale-110 transition-transform">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <h3 className="text-[15px] md:text-[16px] lg:text-[17px] font-bold leading-tight text-white hover:text-[#F7A400] transition-colors">
                    {service.title}
                  </h3>
                </Link>

                <div className="w-full h-[1px] bg-[#8C9096]/15 mb-3"></div>

                <ul className="space-y-4.5">
                  {service.items.map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        href={item.link} 
                        className="flex items-center gap-2.5 text-white hover:text-[#F7A400] cursor-pointer group/item transition-all"
                      >
                        <span className="text-[#F7A400] text-[13px] md:text-[14px] lg:text-[14px] font-black transition-transform group-hover/item:translate-x-1">
                          →
                        </span>
                        <span className="text-[13px] md:text-[14px] lg:text-[14px] font-medium leading-snug transition-colors">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ডান দিকের ৫ নম্বর কার্ড (Hiring Made Easy) */}
            <div className="bg-transparent border-none rounded-xl p-4 md:p-5 lg:p-6 flex flex-col justify-between h-auto text-white relative overflow-hidden">
              <div>
                {/* হেডিং */}
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[11px] md:text-[12px] lg:text-[14px] font-semibold  text-[#F7A400] ">
                    Hiring Made Easy
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] lg:text-[11px] font-semibold bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-full">
                    <HelpCircle className="w-[12px] h-[12px] md:w-[13px] md:h-[13px] text-[#FFDDA1]" /> Why Choose Us
                  </span>
                </div>
                
                {/* পয়েন্টসমূহ */}
                <div className="space-y-3">
                  {hiringPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 pb-2.5 border-b border-white/10 last:border-none group/point">
                      <CheckCircle2 className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[16px] lg:h-[16px] text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[12px] md:text-[13px] lg:text-[13px] font-medium leading-snug text-white transition-colors group-hover/point:text-[#F7A400]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* অ্যাকশন বাটনসমূহ (Start Hiring & WhatsApp) */}
              <div className="pt-4 flex flex-col gap-2.5">
                <Link 
                  href="/start-hiring" 
                  className="w-full block text-center bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-bold py-2.5 px-4 rounded-full text-[13px] md:text-[14px] lg:text-[14px] hover:opacity-90 transition-all shadow-md"
                >
                  Start Hiring
                </Link>

                <a 
                  href="https://wa.me/your-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-full text-[13px] md:text-[14px] lg:text-[14px] transition-colors shadow-md"
                >
                  <FaWhatsapp className="w-[15px] h-[15px] md:w-[17px] md:h-[17px]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}