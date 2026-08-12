"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SubService {
  title: string;
  description: string;
}

interface ServiceSectionData {
  id: string;
  heading: string;
  description: string;
  image: string;
  layout: "image-right" | "image-left";
  items: SubService[];
}

const serviceSections: ServiceSectionData[] = [
  {
    id: "ui-ux",
    heading: "UI/UX Design",
    description: "Creating intuitive, user-centric interfaces that blend aesthetics with seamless functionality.",
    image: "/assets/images/heroimage.webp",
    layout: "image-right",
    items: [
      { title: "App Interfaces", description: "Creating intuitive, user-centric interfaces that blend aesthetics with seamless functionality for mobile and desktop applications." },
      { title: "Landing Page UI", description: "Designing high-converting, visually striking landing pages tailored to captivate your audience and maximize conversions." },
      { title: "Design Systems", description: "Building robust, scalable design systems and UI component libraries ensuring consistency across all brand touchpoints." },
      { title: "SaaS & Dashboards", description: "Transforming complex data metrics into clean, user-friendly SaaS dashboards with streamlined navigation and UX workflow." },
      { title: "Interactive Prototype", description: "Bringing concepts to life with click-through, high-fidelity prototypes that validate user journeys before development." },
      { title: "UX & Wireframing", description: "Mapping out user flows, low-fidelity wireframes, and deep architectural research to secure optimal user experience." },
      { title: "Web & Mobile UI", description: "Crafting fully responsive, modern web and mobile application interfaces optimized for all device viewports." },
    ],
  },
  {
    id: "web-dev",
    heading: "Web Design & Development",
    description: "Building high-performance, responsive websites tailored to your business goals.",
    image: "/assets/images/videoimage.jpeg",
    layout: "image-left",
    items: [
      { title: "E-commerce Development", description: "Building secure, high-conversion online stores with seamless checkout workflows and robust product management catalogs." },
      { title: "Site Optimization", description: "Enhancing core web vitals, page load speeds, and technical SEO structure for superior search engine visibility." },
      { title: "Personal Branding", description: "Crafting distinct, high-impact digital portfolios and personal websites that elevate professional authority." },
      { title: "Corporate Sites", description: "Developing secure, scalable multi-page corporate portals reflecting brand integrity and enterprise excellence." },
      { title: "Landing Pages", description: "Executing conversion-focused single-page layouts optimized for product launches and targeted marketing campaigns." },
      { title: "WordPress Dev", description: "Designing custom, easy-to-manage WordPress themes and plugins tailored to unique operational workflows." },
      { title: "Custom Websites", description: "Engineering bespoke web platforms from scratch using modern frameworks ensuring top-tier performance." },
    ],
  },
  {
    id: "software-dev",
    heading: "Software Development",
    description: "Scalable and secure custom software solutions to automate and grow your business.",
    image: "/assets/images/heroimage.webp",
    layout: "image-right",
    items: [
      { title: "API Integration", description: "Connecting third-party services and payment gateways smoothly to extend application capabilities." },
      { title: "HRM Systems", description: "Streamlining employee lifecycle tracking, attendance management, and payroll systems." },
      { title: "Inventory & Billing", description: "Automating stock management, invoicing, and transactional logs in real-time." },
      { title: "Business Automation", description: "Eliminating manual redundancies through bespoke software scripts and automated workflow pipelines." },
      { title: "ERP Systems", description: "Centralizing core business processes across finance, supply chain, manufacturing, and operations." },
      { title: "SaaS Solution", description: "Developing robust, multi-tenant software-as-a-service products ready for global scalability." },
      { title: "Custom CRM", description: "Building tailored customer relationship management platforms to track leads, sales funnels, and retention." },
    ],
  },
  {
    id: "mobile-dev",
    heading: "Mobile App Development",
    description: "Innovative mobile applications designed for seamless performance across iOS and Android.",
    image: "/assets/images/videoimage.jpeg",
    layout: "image-left",
    items: [
      { title: "On-Demand Apps", description: "Building fast, reliable service-booking and delivery applications with real-time tracking features." },
      { title: "Food Delivery", description: "Developing complete restaurant and food aggregator ecosystems with live order routing and payment integrations." },
      { title: "Booking Apps", description: "Creating friction-free reservation and scheduling applications for hospitality, travel, and appointments." },
      { title: "E-commerce Apps", description: "Designing native-feel mobile shopping applications optimized for high retention and push-notification marketing." },
      { title: "Cross-Platform", description: "Leveraging modern frameworks like React Native and Flutter to build cost-effective cross-platform mobile apps." },
      { title: "iOS Apps", description: "Engineering high-performance native iOS applications adhering strictly to Apple's Human Interface Guidelines." },
      { title: "Android Apps", description: "Creating robust, scalable Android applications optimized for a wide spectrum of device resolutions." },
    ],
  },
];

export default function ComprehensiveServicesSection() {
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: number }>({
    "ui-ux": 0,
    "web-dev": 0,
    "software-dev": 0,
    "mobile-dev": 0,
  });

  const handleTabChange = (sectionId: string, index: number) => {
    setActiveTabs((prev) => ({ ...prev, [sectionId]: index }));
  };

  return (
    <section className="w-full bg-[#02050A] py-[50px] sm:py-[70px] lg:py-[90px] relative text-white overflow-hidden font-poppins">
      
      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[300px] sm:h-[450px] lg:h-[550px] bg-gradient-to-r from-[#FFDDA1]/10 via-[#F7A400]/20 to-[#ff7a33]/15 rounded-full blur-[100px] sm:blur-[180px] lg:blur-[220px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-[#3b82f6]/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#F7A400]/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* Main Container bounded safely with compact gaps */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-10 flex flex-col gap-[36px] sm:gap-[50px] lg:gap-[64px]">

        {serviceSections.map((section) => {
          const activeIdx = activeTabs[section.id] ?? 0;
          const currentItem = section.items[activeIdx] || section.items[0];
          const isImageLeft = section.layout === "image-left";

          return (
            <div
              key={section.id}
              className="bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 rounded-[16px] sm:rounded-[24px] p-[18px] sm:p-[28px] lg:p-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group/outer transition-all duration-500 hover:border-[#F7A400]/60"
            >
              {/* Creative Corner Glow Effect */}
              <div className="absolute -top-20 -right-20 sm:-top-24 sm:-right-24 w-36 sm:w-48 h-36 sm:h-48 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover/outer:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Grid Layout with compact responsive column gaps */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] sm:gap-[40px] lg:gap-[56px] items-center relative z-10">
                
                {/* Content Column */}
                <div className={`lg:col-span-6 flex flex-col ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                  
                  {/* Section Header */}
                  <div className="mb-[18px] sm:mb-[24px]">
                    <h2 className="text-[24px] sm:text-[34px] lg:text-[42px] font-extrabold tracking-tight leading-[115%] mb-2 text-white">
                      {section.heading.includes(" ") ? (
                        <>
                          {section.heading.split(" ")[0]}{" "}
                          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">
                            {section.heading.split(" ").slice(1).join(" ")}
                          </span>
                        </>
                      ) : (
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">
                          {section.heading}
                        </span>
                      )}
                    </h2>
                    <p className="text-white/80 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Interactive List Items */}
                  <div className="flex flex-col">
                    {section.items.map((subItem, index) => {
                      const isActive = activeIdx === index;

                      return (
                        <div key={index} className="group/item">
                          <button
                            onClick={() => handleTabChange(section.id, index)}
                            className={`w-full py-[10px] sm:py-[14px] lg:py-[16px] flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                              isActive ? "translate-x-2 sm:translate-x-3" : "hover:translate-x-1.5 sm:hover:translate-x-2"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 sm:gap-3">
                              <ArrowRight 
                                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 shrink-0 ${
                                  isActive ? "text-[#F7A400]" : "text-white/40 group-hover/item:text-[#F7A400]"
                                }`} 
                              />
                              <span 
                                className={`text-[15px] sm:text-[18px] lg:text-[20px] font-semibold tracking-tight transition-all duration-300 ${
                                  isActive 
                                    ? "text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]" 
                                    : "text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]"
                                }`}
                              >
                                {subItem.title}
                              </span>
                            </div>
                          </button>

                          {/* Divider Line */}
                          {index !== section.items.length - 1 && (
                            <div className={`w-full h-[1px] transition-colors duration-300 ${
                              isActive ? "bg-[#F7A400]/40" : "bg-white/10 group-hover/item:bg-[#F7A400]/30"
                            }`} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Media Column */}
                <div className={`lg:col-span-6 flex flex-col ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                  
                  <div className="relative w-full aspect-[16/10] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#02050A] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                    
                    {/* Glow Backdrop */}
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F7A400]/15 rounded-full blur-2xl pointer-events-none" />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${section.id}-${activeIdx}`}
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={section.image}
                          alt={currentItem.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/80 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </AnimatePresence>

                  </div>

                  {/* Dynamic Description Box matching the active tab */}
                  <div className="mt-3 sm:mt-4 p-3.5 sm:p-5 rounded-xl bg-[#02050a]/40 border border-white/10 backdrop-blur-md">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${section.id}-desc-${activeIdx}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/80 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-normal"
                      >
                        {currentItem.description}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}