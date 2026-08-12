"use client";

import React, { useState, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const allServicesSections = [
  {
    sectionTitle: "UI/UX Design",
    sectionDesc: "Creating intuitive, engaging, and user-centric digital experiences that captivate your audience.",
    cards: [
      {
        id: 1,
        step: "01",
        title: "User Research & Wireframing",
        subtitle: "Laying a solid foundation with deep user insights, structured wireframes, and interactive low-fidelity prototypes.",
        description: "User Research, Wireframing, User Journey Mapping, Low-fi Prototyping.",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#B4FCB0]",
        accent: "#B4FCB0",
        glow: "hover:shadow-[0_0_50px_rgba(180,252,176,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
      {
        id: 2,
        step: "02",
        title: "High-Fidelity UI & Systems",
        subtitle: "Crafting stunning modern interfaces, comprehensive design systems, and seamless cross-platform user journeys.",
        description: "UI Design, Design Systems, High-fi Prototyping, Interaction Design.",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#B4FCB0]",
        accent: "#B4FCB0",
        glow: "hover:shadow-[0_0_50px_rgba(180,252,176,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
    ],
  },
  {
    sectionTitle: "Web Design & Development",
    sectionDesc: "High-performance scalable web architectures built with cutting-edge technologies.",
    cards: [
      {
        id: 3,
        step: "01",
        title: "Full-Stack Web Apps",
        subtitle: "Building lightning-fast web applications using Next.js and React with robust backend integration.",
        description: "Next.js, React, Full-Stack Architecture, Responsive Layouts, SEO.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#FEC286]",
        accent: "#FEC286",
        glow: "hover:shadow-[0_0_50px_rgba(254,194,134,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
      {
        id: 4,
        step: "02",
        title: "E-Commerce & Portals",
        subtitle: "Scalable online stores and secure enterprise web portals optimized for high conversion rates.",
        description: "E-Commerce, Secure Portals, Payment Gateways, Performance Optimization.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#FEC286]",
        accent: "#FEC286",
        glow: "hover:shadow-[0_0_50px_rgba(254,194,134,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
    ],
  },
  {
    sectionTitle: "Software Development",
    sectionDesc: "Custom enterprise and cloud-native software solutions designed to streamline operations.",
    cards: [
      {
        id: 5,
        step: "01",
        title: "Cloud-Native Architecture",
        subtitle: "Developing resilient, microservices-based backend architectures built for infinite scalability.",
        description: "Microservices, Cloud Infrastructure, Backend Architecture, API Integration.",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#A1D1FF]",
        accent: "#A1D1FF",
        glow: "hover:shadow-[0_0_50px_rgba(161,209,255,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
      {
        id: 6,
        step: "02",
        title: "Enterprise Automation",
        subtitle: "Automating workflows, CRM integrations, and customized internal business intelligence software.",
        description: "Workflow Automation, CRM Integration, BI Software, Custom Tools.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#A1D1FF]",
        accent: "#A1D1FF",
        glow: "hover:shadow-[0_0_50px_rgba(161,209,255,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
    ],
  },
  {
    sectionTitle: "Mobile App Development",
    sectionDesc: "Cross-platform and native iOS/Android applications built with fluid animations.",
    cards: [
      {
        id: 7,
        step: "01",
        title: "Cross-Platform Apps",
        subtitle: "High-performance applications built using Flutter and React Native for both iOS and Android.",
        description: "Flutter, React Native, Cross-Platform UI, Fluid Animations.",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#FF9194]",
        accent: "#FF9194",
        glow: "hover:shadow-[0_0_50px_rgba(255,145,148,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
      {
        id: 8,
        step: "02",
        title: "Native Mobile Solutions",
        subtitle: "Powerful, feature-rich native mobile applications optimized for maximum device performance.",
        description: "Native iOS, Android, Swift, Kotlin, High Performance.",
        img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1000&auto=format&fit=crop",
        bgColor: "bg-[#FF9194]",
        accent: "#FF9194",
        glow: "hover:shadow-[0_0_50px_rgba(255,145,148,0.35)]",
        badgeBg: "bg-black/10 text-black border-black/20",
      },
    ],
  },
];

const getTags = (description: string) =>
  description
    .split(",")
    .map((t) => t.replace(/^and\s+/i, "").trim().replace(/\.$/, ""))
    .filter(Boolean)
    .slice(0, 3);

function ServiceCard({ item }: { item: typeof allServicesSections[0]["cards"][0] }) {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, active: false });
  const tags = getTags(item.description);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y, active: true });
  };

  const onMouseLeave = () => setPos((p) => ({ ...p, active: false }));

  return (
    <div className="relative rounded-[10px] p-[1.5px] group/border h-full">
      <div className="absolute inset-0 rounded-[10px] overflow-hidden opacity-0 group-hover/border:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-[-60%] animate-[spin_5s_linear_infinite]"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${item.accent}, transparent 35%)`,
          }}
        />
      </div>

      <div
        className={`${item.bgColor} relative flex flex-col justify-between overflow-hidden rounded-[10px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-1.5 h-full ${item.glow} border border-white/20`}
      >
        <span
          className="absolute -bottom-6 -right-2 text-[120px] sm:text-[180px] font-black select-none pointer-events-none leading-none opacity-15"
          style={{
            WebkitTextStroke: "1px rgba(0,0,0,0.2)",
            color: "transparent",
          }}
        >
          {item.step}
        </span>

        <div>
          <div
            ref={spotlightRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="h-[200px] sm:h-[280px] w-full rounded-[10px] overflow-hidden bg-[#0d1322] mb-6 relative group shadow-inner"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div
              className="absolute inset-0 transition-opacity duration-300 mix-blend-overlay"
              style={{
                opacity: pos.active ? 1 : 0,
                background: `radial-gradient(180px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.6), transparent 70%)`,
              }}
            />

            <div className={`absolute top-4 right-4 backdrop-blur-md px-4 py-1.5 rounded-full border text-xs font-bold tracking-wider shadow-lg ${item.badgeBg}`}>
              STEP {item.step}
            </div>
          </div>

          <h4 className="text-[22px] sm:text-[30px] font-extrabold text-black tracking-tight leading-snug mb-2">
            {item.title}
          </h4>
          <p className="text-black/80 text-[15px] sm:text-[17px] font-medium leading-relaxed mb-5">
            {item.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full bg-black/10 text-black border border-black/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold text-sm sm:text-base hover:bg-black/80 shadow-md transition-all duration-300 group/btn w-fit"
          >
            <span>Explore</span>
            <FiArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AllServicesPage() {
  return (
    <div className="bg-[#02050a] w-full min-h-screen text-white relative overflow-hidden">
      
      {allServicesSections.map((sec, index) => (
        <section key={index} className="py-16 sm:py-24 w-full relative border-b border-white/10 overflow-hidden">
          
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

          <div className="max-w-[1445px] w-full mx-auto px-4 md:px-8 lg:px-12 relative z-20">
            
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-semibold tracking-tight text-white leading-tight mb-4">
                <span 
                  className="text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(247,164,0,0.3)] inline-block"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
                  }}
                >
                  {sec.sectionTitle}
                </span>
              </h2>
              <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
                {sec.sectionDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              {sec.cards.map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}