"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Map, PenTool, Code2, TestTube2, LifeBuoy, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiActivity, FiShoppingBag, FiFilm, FiDollarSign, FiTruck, 
  FiCpu, FiRadio, FiSettings, FiUsers, FiHome, FiZap, 
  FiCompass, FiBookOpen, FiShield, FiBox, FiArrowRight, FiArrowUpRight 
} from "react-icons/fi";

const industries = [
  { icon: <FiActivity className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Healthcare", description: "Custom healthcare software development for secure, compliant digital platforms" },
  { icon: <FiShoppingBag className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Retail & E-Commerce", description: "End-to-end retail & ecommerce software development solutions that drive conversions" },
  { icon: <FiFilm className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Media & Entertainment", description: "Scalable media and entertainment software development for seamless content delivery" },
  { icon: <FiDollarSign className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Finance & Banking", description: "Robust finance & banking software development for secure financial infrastructure" },
  { icon: <FiTruck className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Automotive", description: "Advanced automotive software engineering for intelligent connected mobility" },
  { icon: <FiCpu className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Agriculture", description: "Smart agriculture software development for agri-tech automation & precision farming" },
  { icon: <FiRadio className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Telecommunication", description: "Scalable telecom software development for robust network management platforms" },
  { icon: <FiSettings className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Manufacturing", description: "Custom manufacturing software development for automated production optimization" },
  { icon: <FiUsers className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Public Sector & Government", description: "Trusted government software development for secure digital governance platforms" },
  { icon: <FiHome className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Real Estate", description: "Custom PropTech & real estate software development for smart property management platforms" },
  { icon: <FiZap className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Energy & Utilities", description: "Intelligent energy software development for real-time monitoring & utility management" },
  { icon: <FiCompass className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Travel & Hospitality", description: "Custom travel & hospitality software development for seamless booking experiences" },
  { icon: <FiBookOpen className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Education & E-Learning", description: "Scalable education & eLearning software development for modern digital classrooms" },
  { icon: <FiShield className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Insurance", description: "Custom insurance software development for automated policy & claims management" },
  { icon: <FiBox className="w-4 h-4 sm:w-6 sm:h-6" />, title: "Logistics & Supply Chain", description: "End-to-end logistics & supply chain software development for real-time visibility" },
];

const projects = [
  {
    title: "farmercare",
    tag: "Agri-Tech",
    description: "Integrated Agri-FinTech Ecosystem – Transforming The Agricultural Value Chain With A Data-Driven Financial Platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "humanity of bangladesh",
    tag: "Social Impact",
    description: "Scalable NGO Management Ecosystem – Streamlining Nationwide Relief Operations And Donation Transparency For Maximum Social.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "amar vote kendra",
    tag: "GovTech",
    description: "A High-Performance GovTech Mobile Application That Handled 100,000 Requests Per Second To Help Citizens Find Polling Stations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "digital health platform",
    tag: "HealthTech",
    description: "Next-Gen Telemedicine And Patient Management System Connecting Rural Patients With Specialized Doctors Instantly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Project Analysis",
    icon: Search,
    description: "Project analysis involves carefully examining the project to understand its objectives, requirements, and overall feasibility. This stage focuses on identifying the problem, analyzing available resources, estimating time and cost, and recognizing possible risks.",
  },
  {
    id: "02",
    title: "Strategy & Planning",
    icon: Map,
    description: "Developing a comprehensive roadmap tailored to your business goals. We define tech stacks, milestones, architecture, and resource allocation to ensure smooth execution from start to finish.",
  },
  {
    id: "03",
    title: "UX/UI Designing",
    icon: PenTool,
    description: "UX/UI designing focuses on creating an interface that is both user-friendly and visually appealing. User Experience (UX) design ensures that the product is easy to use, efficient, and meets user needs, while User Interface (UI) design concentrates on the layout, colors, fonts, and overall visual elements.",
  },
  {
    id: "04",
    title: "App Development",
    icon: Code2,
    description: "Writing clean, scalable, and optimized code. We build robust frontend and backend architectures ensuring high performance, security, and seamless cross-platform compatibility.",
  },
  {
    id: "05",
    title: "App Testing & Launch",
    icon: TestTube2,
    description: "Rigorous quality assurance testing to eliminate bugs, security vulnerabilities, and performance bottlenecks. Once perfected, we handle smooth deployment to production.",
  },
  {
    id: "06",
    title: "Support & Maintenance",
    icon: LifeBuoy,
    description: "Support and maintenance involve providing ongoing assistance and updates after the app is launched. This stage includes fixing bugs, improving performance, adding new features, and ensuring compatibility with updates.",
  },
];

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

const gradientTextStyle = {
  backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function CombinedPageSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const goTo = (index: number) => {
    setActiveStep((index + processSteps.length) % processSteps.length);
  };

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
    <div className="w-full bg-[#02050a] text-white relative overflow-hidden font-poppins">
      
      {/* 1st Part: Hero Section */}
      <section className="relative w-full flex items-center pt-4 md:pt-6 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#F7A400]/10 blur-[120px] rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full opacity-30"></div>
        <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full pt-4 md:pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
              <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white leading-[1.15]">
                Strategic <span style={gradientTextStyle}>UX Wireframing Services</span> for Scalable Tech Products
              </h1>
              
              <p className="text-white/90 text-[16px] md:text-[20px] max-w-[580px] mx-auto lg:mx-0 leading-relaxed font-light">
                Stop wasting development hours on unproven logic. Campaignsquat Ltd. engineers data-driven user flows and low-fidelity prototypes that eliminate friction, reduce churn, and turn complex ideas into intuitive digital interfaces.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-[#F7A400] border-[#f7a400] border-2 text-black font-bold py-3 px-8 md:px-10 text-[14px] md:text-[16px] rounded-[5px] transition-all duration-300 transform hover:bg-transparent hover:text-white active:scale-95 shadow-lg shadow-[#F7A400]/25 cursor-pointer">
                    Architect Your Product
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="absolute w-[70%] h-[70%] bg-[#F7A400]/5 blur-[80px] rounded-[5px]"></div>
              <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop" alt="Professional UX Wireframing" className="relative z-10 w-full h-auto max-w-[550px] rounded-[10px] transition-transform duration-700 hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Part: Featured Projects */}
      <section className="w-full bg-[#02050a] py-4 sm:py-12 md:py-16 lg:py-20 overflow-hidden relative text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[140px] md:blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

        <div className="max-w-[1445px] mx-auto px-2 sm:px-6 md:px-10 lg:px-[40px] relative z-10">
          <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-16 lg:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-bold tracking-tight text-transparent bg-clip-text mb-3 sm:mb-4 inline-block bg-[length:200%_auto]"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shine 6s linear infinite",
              }}
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[720px] mx-auto leading-relaxed font-normal px-2 sm:px-0"
            >
              Where High-End UI/UX Design Meets Scalable Software Development.
              We Build Digital Products Engineered To Accelerate Your Business Growth.
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="h-[3px] mx-auto mt-4 sm:mt-6 rounded-full bg-gradient-to-r from-[#FFDDA1] to-[#F7A400]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 lg:mb-32">
            {projects.map((project, index) => {
              const cardBgs = [
                "bg-gradient-to-br from-[#73A917]",
                "bg-gradient-to-br from-[#17649A]",
                "bg-gradient-to-br from-[#FFC547]",
                "bg-gradient-to-br from-[#005B3E]",
              ];

              const isRightColumn = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: isRightColumn ? 20 : -10, scale: 1.01 }}
                  className={`${cardBgs[index]} rounded-[10px] p-5 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group relative overflow-hidden ${
                    isRightColumn ? "lg:translate-y-16" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -inset-px rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#F7A400]/40 via-transparent to-transparent" />

                  <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[320px] rounded-[10px] overflow-hidden bg-black/10 flex items-center justify-center mb-5 sm:mb-6 border border-black/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                    />

                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-[8px] sm:rounded-[10px] bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-[#FFDDA1] shadow-lg">
                      {project.tag}
                    </div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F7A400] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <FiArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow justify-between relative z-10">
                    <div>
                      <h3 className="text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight capitalize mb-2 sm:mb-3 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-5 sm:mb-6 opacity-90">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-1 sm:pt-2">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-black text-white font-semibold text-[12px] sm:text-[13px] md:text-[14px] hover:bg-black/80 shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 group/btn w-fit"
                      >
                        <span>Explore</span>
                        <FiArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3rd Part: Industries We Serve */}
      <section className="w-full py-8 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/10 via-[#3b82f6]/10 to-[#00ffff]/5 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

        <div className="max-w-[1445px] w-full mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-[800px] mx-auto mb-8 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-5 sm:py-2 rounded-full bg-[#0d1117] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-3 sm:mb-6"
            >
              <span 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#F7A400" }}
              />
              <span className="text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-wider text-white uppercase">
                INDUSTRIES WE SERVE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[22px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tight text-transparent bg-clip-text leading-tight"
              style={{
                backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
              }}
            >
              Tailored solutions for diverse industries
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-12 gap-y-6 sm:gap-y-10">
            {industries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                className="relative pl-3 sm:pl-6 flex flex-col justify-between group"
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[2px] sm:w-[2.5px] rounded-full transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(247,164,0,0.8)]"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                  }}
                />

                <div>
                  <div 
                    className="mb-1.5 sm:mb-3 transition-transform duration-300 w-fit group-hover:scale-110"
                    style={{ color: "#F7A400" }}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-[14px] sm:text-[20px] font-bold tracking-tight mb-1 sm:mb-2 text-white group-hover:text-indigo-200 transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-[15px] text-white leading-snug sm:leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4th Part: Development Process Section */}
      <section className="w-full bg-[#02050a] py-8 sm:py-16 lg:py-20 overflow-hidden relative text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[400px] sm:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[120px] sm:blur-[200px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none" />

        <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-8">
            <div className="max-w-[750px]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[#0d1117] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-3 sm:mb-6"
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#F7A400" }} />
                <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-wider text-white uppercase">
                  Process
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[24px] sm:text-[38px] md:text-[50px] font-extrabold tracking-tight leading-[1.25] sm:leading-[1.15] text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(to right, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)" }}
              >
                Our Simple & Transparent App Development Process
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[480px]"
            >
              <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/90 sm:text-white leading-relaxed">
                Our app development process is designed to be simple, clear, and transparent at every stage. We begin by understanding the project requirements and planning the strategy, followed by user-friendly UX/UI design and efficient app development.
              </p>
            </motion.div>
          </div>

          <div className="w-full backdrop-blur-[20px] rounded-[10px] sm:rounded-[10px] border border-white/15 p-2.5 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row gap-2.5 sm:gap-4 items-stretch lg:h-[540px]">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.id}
                  onClick={() => goTo(index)}
                  layout={false}
                  className={`cursor-pointer rounded-[10px] border relative overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    isActive
                      ? "lg:flex-[3.5] bg-[#02050a] border-white/25 p-4 sm:p-6 lg:p-8 shadow-2xl"
                      : "lg:flex-[0.5] bg-[#02050a]/70 border-white/10 hover:border-white/25 hover:bg-[#02050a] p-3.5 sm:py-5 lg:py-6 sm:px-3 lg:items-center"
                  }`}
                >
                  {isActive ? (
                    <div className="flex flex-col h-full justify-between gap-3.5 sm:gap-5 relative z-10 w-full">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-[8px] sm:rounded-[10px] bg-[#F7A400] text-black font-black flex items-center justify-center text-[12px] sm:text-[14px] shadow-md shrink-0">
                            {step.id}
                          </div>
                          <h3 className="text-[16px] sm:text-[19px] md:text-[21px] font-bold text-white tracking-tight">
                            {step.title}
                          </h3>
                        </div>
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F7A400] shrink-0">
                          <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </div>
                      </div>

                      <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[230px] rounded-[8px] sm:rounded-[10px] overflow-hidden border border-white/10 shadow-lg shrink-0">
                        <Image
                          src="/assets/images/proces.png"
                          alt={step.title}
                          fill
                          className="object-cover select-none transition-transform duration-700 hover:scale-105"
                        />
                      </div>

                      <p className="text-[12px] sm:text-[13px] md:text-[14px] text-white/90 sm:text-white leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-white/10 mt-auto">
                        <span className="text-[9px] sm:text-[11px] font-bold tracking-widest text-[#F7A400]/80 uppercase">
                          STEP {activeStep + 1} OF {processSteps.length}
                        </span>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <button
                            onClick={(e) => { e.stopPropagation(); goTo(activeStep - 1); }}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-black hover:bg-[#F7A400] hover:border-[#F7A400] transition-all duration-300"
                            aria-label="Previous step"
                          >
                            <ChevronLeft size={14} className="sm:w-[16px] sm:h-[16px]" />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); goTo(activeStep + 1); }}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-white hover:text-black hover:bg-[#F7A400] hover:border-[#F7A400] transition-all duration-300"
                            aria-label="Next step"
                          >
                            <ChevronRight size={14} className="sm:w-[16px] sm:h-[16px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row lg:flex-col items-center justify-between h-full select-none w-full gap-3 lg:gap-0">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-[8px] sm:rounded-[10px] flex items-center justify-center font-black text-[11px] sm:text-[13px] bg-white/5 text-white/60 shrink-0">
                        {step.id}
                      </div>

                      <div className="my-auto py-1 lg:py-4 flex items-center justify-center">
                        <h4
                          className="text-[13px] sm:text-[15px] lg:text-[16px] font-bold tracking-wider text-white group-hover:text-white/90 whitespace-nowrap block lg:[writing-mode:vertical-rl] lg:[transform:rotate(180deg)]"
                        >
                          {step.title}
                        </h4>
                      </div>

                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-white/5 text-white shrink-0">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:transform lg:-rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5th Part: FAQ Section */}
      <section className="w-full py-8 sm:py-20 lg:py-28 relative overflow-hidden bg-[#02050A]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050A_0%,#02050A_50%,#02050A_100%)] pointer-events-none" />

        <div className="max-w-[1445px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] xl:text-[42px] font-semibold tracking-tight leading-[1.25] lg:leading-[1.1] mb-4 sm:mb-6 bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>

              <p className="text-white text-[15px] sm:text-[18px] md:text-[20px] leading-relaxed mb-6 sm:mb-8 max-w-5xl">
                We are here to help you with any questions you may have.
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

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4 text-[12px] sm:text-[13px] md:text-[15px]">
                <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center">
                  <span>Speak to an expert</span>
                </button>

                <button className="bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_100%)] text-gray-950 font-bold px-3.5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:opacity-95 transition-all shadow-[0_10px_25px_rgba(247,164,0,0.25)] flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer text-center">
                  <span>Read more FAQs</span>
                </button>
              </div>
            </div>

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

      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  );
}