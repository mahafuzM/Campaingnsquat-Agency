"use client";

import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "As a lazy entrepreneur who got out of bed at 11, I managed to build my SaaS MVP in 3 days. Never looked back since then.",
    name: "Azunyan U. Wu",
    role: "CEO, fintechwin.ai",
    avatar: "https://i.pravatar.cc/200?img=12",
    companyLogo: "bg-white/80",
    companyName: "fintechwin",
    size: "md",
    cardBg: "bg-[linear-gradient(145deg,#00875A_0%,#00593D_45%,#003321_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "I have waited my entire life for a design tool like this — nearly my entire life. With this, less is truly more.",
    name: "Vermillion D. Gray",
    role: "CEO, hacklife.ai",
    avatar: "https://i.pravatar.cc/200?img=32",
    companyLogo: "bg-white/80",
    companyName: "hacklife",
    size: "sm",
    cardBg: "bg-[linear-gradient(145deg,#4F46E5_0%,#4338CA_45%,#312E81_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "With this workflow, everything just seems easier. Just my life in general feels easier, really. Truly a game changer for teams looking to scale fast without friction.",
    name: "Blake Star",
    role: "COO, blackstar.com",
    avatar: "https://i.pravatar.cc/200?img=51",
    companyLogo: "bg-black/80",
    companyName: "blackstar",
    size: "xl",
    cardBg: "bg-[linear-gradient(145deg,#FFF3A0_0%,#FFEA6C_45%,#c9b438_100%)]",
    textColor: "text-black",
    subTextColor: "text-black/70",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis.",
    name: "X_AE_A-13",
    role: "Product Designer, slothUI",
    avatar: "https://i.pravatar.cc/200?img=15",
    companyLogo: "bg-white/80",
    companyName: "slothUI",
    size: "md",
    cardBg: "bg-[linear-gradient(145deg,#A6B4FF_0%,#8494FF_45%,#4f5ec9_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo, arcu non odio euismod.",
    name: "Oarack Babama",
    role: "Former President of US",
    avatar: "https://i.pravatar.cc/200?img=60",
    companyLogo: "bg-white/80",
    companyName: "usgov",
    size: "sm",
    cardBg: "bg-[linear-gradient(145deg,#5CFFE3_0%,#00EAC1_45%,#008a72_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
    name: "Boe Jiden",
    role: "Former President Of Canada",
    avatar: "https://i.pravatar.cc/200?img=8",
    companyLogo: "bg-white/80",
    companyName: "cagov",
    size: "lg",
    cardBg: "bg-[linear-gradient(145deg,#38BDF8_0%,#0284C7_45%,#0369A1_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "Never thought a tool this simple could replace our entire design pipeline. Genuinely impressive work from the core team.",
    name: "Marina Solvig",
    role: "Founder, driftlabs.io",
    avatar: "https://i.pravatar.cc/200?img=45",
    companyLogo: "bg-white/80",
    companyName: "driftlabs",
    size: "xl",
    cardBg: "bg-[linear-gradient(145deg,#C084FC_0%,#A855F7_45%,#7E22CE_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "Clean, fast, and it just works. Our team shipped twice as fast in the first month alone.",
    name: "Theo Bramwell",
    role: "CTO, northgate.dev",
    avatar: "https://i.pravatar.cc/200?img=22",
    companyLogo: "bg-white/80",
    companyName: "northgate",
    size: "sm",
    cardBg: "bg-[linear-gradient(145deg,#34D399_0%,#10B981_45%,#047857_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "Incredible attention to detail. This has completely transformed how our engineering and design teams collaborate.",
    name: "Sarah Jenkins",
    role: "Lead PM, hyperflow.io",
    avatar: "https://i.pravatar.cc/200?img=68",
    companyLogo: "bg-white/80",
    companyName: "hyperflow",
    size: "md",
    cardBg: "bg-[linear-gradient(145deg,#334155_0%,#1E293B_45%,#0F172A_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "The speed and modular flexibility are unmatched. We built our entire customer portal in record time.",
    name: "Marcus Vance",
    role: "VP of Product, vancetech.com",
    avatar: "https://i.pravatar.cc/200?img=53",
    companyLogo: "bg-white/80",
    companyName: "vancetech",
    size: "lg",
    cardBg: "bg-[linear-gradient(145deg,#4F46E5_0%,#4338CA_45%,#312E81_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
  {
    quote: "Absolute game changer. If you're not using this workflow yet, you are wasting valuable hours every single week.",
    name: "Elena Rostova",
    role: "Design Director, vector.ai",
    avatar: "https://i.pravatar.cc/200?img=40",
    companyLogo: "bg-white/80",
    companyName: "vectorai",
    size: "sm",
    cardBg: "bg-[linear-gradient(145deg,#334155_0%,#1E293B_45%,#0F172A_100%)]",
    textColor: "text-white",
    subTextColor: "text-white/70",
  },
];

// Desktop Columns
const desktopColumns = [
  { items: [testimonials[0], testimonials[1], testimonials[2], testimonials[3]], direction: "down", speed: 34 },
  { items: [testimonials[4], testimonials[5], testimonials[6], testimonials[7]], direction: "up", speed: 30 },
  { items: [testimonials[8], testimonials[9], testimonials[10], testimonials[0]], direction: "down", speed: 38 },
  { items: [testimonials[1], testimonials[3], testimonials[5], testimonials[7]], direction: "up", speed: 32 },
];

// Mobile Tracks
const mobileTrack1 = [testimonials[0], testimonials[1], testimonials[2], testimonials[3], testimonials[4]];
const mobileTrack2 = [testimonials[5], testimonials[6], testimonials[7], testimonials[8], testimonials[9]];

// Reduced vertical padding on mobile while retaining sm+ sizing
function sizeClasses(size: string) {
  if (size === "xl") return "py-[18px] px-4 sm:py-10 sm:px-8";
  if (size === "lg") return "py-4 px-4 sm:py-9 sm:px-7";
  if (size === "sm") return "py-3 px-3.5 sm:py-5 sm:px-4";
  return "py-3.5 px-4 sm:py-7 sm:px-6";
}

// Reduced avatar dimensions on mobile
function avatarSize(size: string) {
  if (size === "xl") return "w-[56px] h-[56px] sm:w-[110px] sm:h-[110px]";
  if (size === "lg") return "w-[52px] h-[52px] sm:w-[96px] sm:h-[96px]";
  if (size === "sm") return "w-[44px] h-[44px] sm:w-[64px] sm:h-[64px]";
  return "w-[48px] h-[48px] sm:w-[80px] sm:h-[80px]";
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <div
      className={`${item.cardBg} rounded-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] flex flex-col items-center text-center border border-white/10 relative overflow-hidden shrink-0 w-[250px] sm:w-auto ${sizeClasses(
        item.size
      )}`}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/15 rounded-full blur-2xl pointer-events-none" />

      <div className={`relative z-10 ${avatarSize(item.size)} rounded-full overflow-hidden mb-2 sm:mb-4 shadow-md shrink-0 border-2 border-white/20`}>
        <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
        <span className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full ${item.companyLogo} shrink-0`} />
        <span className={`text-[11px] sm:text-[13px] font-semibold ${item.textColor}`}>{item.companyName}</span>
      </div>

      <p className={`relative z-10 leading-snug sm:leading-relaxed mb-3 sm:mb-5 ${item.textColor} ${item.size === 'xl' ? 'text-[13px] sm:text-[15px]' : item.size === 'sm' ? 'text-[11.5px] sm:text-[13px]' : 'text-[12px] sm:text-[14px]'}`}>
        {item.quote}
      </p>

      <div className="relative z-10 mt-auto">
        <p className={`text-[11.5px] sm:text-[13.5px] font-bold ${item.textColor}`}>— {item.name}</p>
        <p className={`text-[10px] sm:text-[11.5px] mt-0.5 ${item.subTextColor}`}>{item.role}</p>
      </div>
    </div>
  );
}

// Mobile Auto-scroll Container with Smooth Drag Support
function MobileAutoScrollRow({
  items,
  direction = "left",
  speed = 1,
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  speed?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredOrTouched = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHoveredOrTouched.current && el) {
        if (direction === "left") {
          el.scrollLeft += speed;
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          }
        } else {
          el.scrollLeft -= speed;
          if (el.scrollLeft <= 0) {
            el.scrollLeft = el.scrollWidth / 2;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed]);

  const doubled = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => (isHoveredOrTouched.current = true)}
      onMouseLeave={() => (isHoveredOrTouched.current = false)}
      onTouchStart={() => (isHoveredOrTouched.current = true)}
      onTouchEnd={() => (isHoveredOrTouched.current = false)}
      className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none py-1 touch-pan-x w-full"
      style={{ scrollBehavior: "auto" }}
    >
      {doubled.map((item, i) => (
        <TestimonialCard key={i} item={item} />
      ))}
    </div>
  );
}

// Desktop Vertical Column
function DesktopMarqueeColumn({
  items,
  direction,
  speed,
}: {
  items: typeof testimonials;
  direction: "up" | "down";
  speed: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative h-[500px] sm:h-[840px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-[#02050A] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#02050A] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex flex-col gap-4 sm:gap-6 ${
          direction === "down" ? "animate-marquee-down" : "animate-marquee-up"
        } hover:[animation-play-state:paused] transform-gpu will-change-transform`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="w-full py-8 sm:py-20 lg:py-24 relative overflow-hidden bg-[#02050A]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050A_0%,#02050A_25%,#02050A_50%,#02050A_75%,#02050A_100%)] pointer-events-none" />
      <div className="absolute top-[-10%] left-[5%] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#02050A]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-[#02050A]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-[1445px] w-full mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-[600px] mx-auto mb-6 sm:mb-14">
          <span className="inline-block text-[11px] sm:text-[12px] font-bold tracking-wider text-[#F7A400] bg-[#0d1117] border border-[#F7A400]/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase mb-3 sm:mb-4 shadow-md">
            Testimonials
          </span>
          <h2 className="text-[26px] sm:text-[42px] font-extrabold bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)] bg-clip-text text-transparent tracking-tight">
            What people are saying
          </h2>
        </div>

        {/* --- MOBILE ONLY: JS RequestAnimationFrame Powered Smooth Auto-Scroll + Touch Drag --- */}
        <div className="flex flex-col gap-3 sm:hidden">
          {/* Row 1: Left Direction */}
          <MobileAutoScrollRow items={mobileTrack1} direction="left" speed={0.8} />

          {/* Row 2: Right Direction */}
          <MobileAutoScrollRow items={mobileTrack2} direction="right" speed={0.8} />
        </div>

        {/* --- DESKTOP / LAPTOP ONLY: Original 4 Vertical Columns --- */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {desktopColumns.map((col, i) => (
            <DesktopMarqueeColumn key={i} items={col.items} direction={col.direction as "up" | "down"} speed={col.speed} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        /* Hide Scrollbar */
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Desktop Vertical Animations */
        @keyframes marquee-down {
          from {
            transform: translate3d(0, -50%, 0);
          }
          to {
            transform: translate3d(0, 0%, 0);
          }
        }
        @keyframes marquee-up {
          from {
            transform: translate3d(0, 0%, 0);
          }
          to {
            transform: translate3d(0, -50%, 0);
          }
        }

        .animate-marquee-down {
          animation: marquee-down linear infinite;
        }
        .animate-marquee-up {
          animation: marquee-up linear infinite;
        }
      `}</style>
    </section>
  );
}