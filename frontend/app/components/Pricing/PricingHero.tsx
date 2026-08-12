"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Layers } from "lucide-react";

interface PricingFeature {
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

interface CategoryPricing {
  category: string;
  tiers: PricingTier[];
}

const pricingData: Record<string, CategoryPricing> = {
  "ui-ux": {
    category: "UI/UX Design",
    tiers: [
      {
        name: "Essential Pack",
        price: "$450",
        period: "per project",
        features: [
          { title: "Single-Page", description: "Layout High-conversion landing page or 3-screen MVP design." },
          { title: "Modern Aesthetics", description: "Focus on clean, high-contrast, and professional layouts." },
          { title: "Responsive Design", description: "Fully optimized for Mobile, Tablet, and Desktop views." },
          { title: "Design Assets", description: "Full delivery of high-fidelity icons and image assets." },
          { title: "Style Guide", description: "Fundamental guide including brand colors and 'Outfit' typography." },
          { title: "Wireframing", description: "Low-fidelity sketches to define structural hierarchy." },
          { title: "User-Centric Navigation", description: "Logical menu structures for seamless browsing." },
          { title: "Support", description: "1 week of post-delivery support for minor refinements." },
        ],
      },
      {
        name: "Growth Pack",
        price: "$1,200",
        period: "per project",
        highlighted: true,
        features: [
          { title: "Multi-Page Architecture", description: "Full website design covering up to 10 unique pages." },
          { title: "Complete Design System", description: "Reusable UI components for consistent branding." },
          { title: "Interactive Prototype", description: "Clickable Figma prototype to simulate the user journey." },
          { title: "Custom Iconography", description: "Bespoke vector icons tailored to your brand identity." },
          { title: "User Flow Mapping", description: "Strategic planning of user paths and information architecture." },
          { title: "Visual Hierarchy", description: "Advanced layout techniques to prioritize key call-to-actions." },
          { title: "Competitor Analysis", description: "Design research based on industry-leading standards." },
          { title: "Support", description: "1 month of priority design support for layout adjustments." },
        ],
      },
      {
        name: "Elite SaaS Pack",
        price: "$2,500",
        period: "per project",
        features: [
          { title: "Extensive Dashboard UI", description: "40+ detailed screens for complex data-heavy applications." },
          { title: "Dual-Theme Adaptation", description: "Full Dark Mode and Light Mode interface designs." },
          { title: "Data Visualization", description: "Custom charts, graphs, and advanced data-entry tables." },
          { title: "Mobile App UI", description: "Comprehensive interface design for both iOS and Android." },
          { title: "Developer Handover Kit", description: "Detailed UI Kit with spacing, CSS properties, and assets." },
          { title: "Micro-Interactions", description: "Detailed animation guides for buttons and transitions." },
          { title: "Accessibility Compliance", description: "Designs meeting global web accessibility standards (WCAG)." },
          { title: "Support", description: "3 months of dedicated design consulting and iterative updates." },
        ],
      },
    ],
  },
  "web-dev": {
    category: "Web Development",
    tiers: [
      {
        name: "Starter Web",
        price: "$600",
        period: "per project",
        features: [
          { title: "Custom Development", description: "Built from scratch with clean, modern Next.js/React code." },
          { title: "Fully Responsive", description: "Flawless adaptation across all screen sizes and devices." },
          { title: "Speed Optimization", description: "Optimized asset loading and clean DOM structure." },
          { title: "Basic SEO Setup", description: "Meta tags, OpenGraph data, and sitemap configuration." },
          { title: "Contact Forms", description: "Integrated lead capture forms with email notifications." },
          { title: "CMS Integration", description: "Easy content management setup for blog or portfolio." },
          { title: "Security Baseline", description: "SSL setup and secure asset handling protocols." },
          { title: "Support", description: "2 weeks of post-launch maintenance." },
        ],
      },
      {
        name: "Business Growth",
        price: "$1,500",
        period: "per project",
        highlighted: true,
        features: [
          { title: "Advanced Web App", description: "Up to 10 fully custom interactive pages & dynamic routes." },
          { title: "Animations & Motion", description: "Smooth micro-interactions powered by Framer Motion." },
          { title: "Advanced Integrations", description: "CRM sync, newsletter signups, and third-party APIs." },
          { title: "E-Commerce Ready", description: "Stripe/PayPal checkout integration with cart management." },
          { title: "Core Web Vitals", description: "Guaranteed 90+ Google Lighthouse performance score." },
          { title: "Multi-Language Support", description: "Localization ready structural layout architecture." },
          { title: "Analytics Setup", description: "Google Analytics 4 and conversion tracking pixels." },
          { title: "Support", description: "1 month of dedicated technical support." },
        ],
      },
      {
        name: "Enterprise Platform",
        price: "$3,500+",
        period: "per project",
        features: [
          { title: "Custom Architecture", description: "Scalable microservices or headless CMS infrastructure." },
          { title: "High-Traffic Ready", description: "Load balancing and edge caching optimization." },
          { title: "Advanced Auth", description: "Role-based access control, SSO, and secure user portals." },
          { title: "Real-time Features", description: "WebSockets integration for live data updates and alerts." },
          { title: "Automated Testing", description: "End-to-end QA testing scripts and deployment pipelines." },
          { title: "Custom Dashboards", description: "Admin reporting panels with data filtering & exports." },
          { title: "Compliance Ready", description: "GDPR, HIPAA, or enterprise security standard alignment." },
          { title: "Support", description: "6 months of priority retainer & code maintenance." },
        ],
      },
    ],
  },
  "software-dev": {
    category: "Software Development",
    tiers: [
      {
        name: "MVP Starter",
        price: "$1,800",
        period: "per project",
        features: [
          { title: "Core Feature Set", description: "Essential backend and frontend logic for your core MVP." },
          { title: "REST / GraphQL API", description: "Scalable API design for data retrieval and actions." },
          { title: "Database Architecture", description: "PostgreSQL/MongoDB schema design optimized for queries." },
          { title: "User Authentication", description: "Secure signup, login, and password recovery workflows." },
          { title: "Cloud Deployment", description: "Setup on AWS, Vercel, or DigitalOcean production servers." },
          { title: "Version Control", description: "Clean GitHub repository setup with CI/CD baseline." },
          { title: "API Documentation", description: "Basic Swagger/Postman documentation endpoints." },
          { title: "Support", description: "2 weeks of bug fixing post-deployment." },
        ],
      },
      {
        name: "Scale SaaS",
        price: "$4,200",
        period: "per project",
        highlighted: true,
        features: [
          { title: "Full-Stack System", description: "Robust multi-tenant architecture for scalable SaaS apps." },
          { title: "Subscription Billing", description: "Stripe billing portals, tier management, and invoices." },
          { title: "Advanced Workflows", description: "Automated background job processing and triggers." },
          { title: "Third-Party Connectors", description: "Integrations with major enterprise SaaS platforms." },
          { title: "Data Security", description: "Data encryption at rest and in transit, rate limiting." },
          { title: "Performance Tuning", description: "Query optimization and caching layer implementation." },
          { title: "Audit Logging", description: "Detailed activity tracking for user security logs." },
          { title: "Support", description: "2 months of dedicated engineering maintenance." },
        ],
      },
      {
        name: "Enterprise Engine",
        price: "$8,500+",
        period: "per project",
        features: [
          { title: "Custom Microservices", description: "Decoupled architecture built for high availability." },
          { title: "AI/ML Integration", description: "Custom LLM pipelines, vector embeddings, or analytics." },
          { title: "High-Volume Scaling", description: "Auto-scaling infrastructure handling millions of requests." },
          { title: "Advanced DevOps", description: "Dockerized containerization and automated cluster scaling." },
          { title: "Disaster Recovery", description: "Automated backups and failover replication strategies." },
          { title: "Dedicated Team", description: "Senior engineers assigned exclusively to your product roadmap." },
          { title: "SLA Guarantee", description: "99.9% uptime architecture design standards." },
          { title: "Support", description: "12 months of round-the-clock engineering support." },
        ],
      },
    ],
  },
  "mobile-dev": {
    category: "Mobile App Development",
    tiers: [
      {
        name: "Cross-Platform MVP",
        price: "$2,200",
        period: "per project",
        features: [
          { title: "React Native / Flutter", description: "Single codebase solution for both iOS and Android." },
          { title: "Core Navigation", description: "Intuitive tab-based and stack routing architecture." },
          { title: "Local Database", description: "Offline caching and state management persistence." },
          { title: "Push Notifications", description: "Firebase cloud messaging integration for user alerts." },
          { title: "Native Device Access", description: "Camera, geolocation, and device storage integration." },
          { title: "App Store Prep", description: "Configuration for Apple App Store and Google Play." },
          { title: "UI Components", description: "Clean, native-feel custom component library." },
          { title: "Support", description: "1 month of post-launch stabilization." },
        ],
      },
      {
        name: "Advanced Mobile",
        price: "$4,800",
        period: "per project",
        highlighted: true,
        features: [
          { title: "High-Performance App", description: "Complex animations, maps, and real-time socket updates." },
          { title: "Payment Gateways", description: "In-App Purchases (IAP) and mobile wallet integration." },
          { title: "Social Integrations", description: "Apple, Google, and phone number social authentications." },
          { title: "Media Processing", description: "In-app image/video compression, upload, and streaming." },
          { title: "Advanced Offline Mode", description: "Robust data synchronization when internet reconnects." },
          { title: "Analytics & Crashlytics", description: "Real-time error reporting and usage metrics tracking." },
          { title: "App Store Optimization", description: "Metadata and keyword structuring for store rankings." },
          { title: "Support", description: "3 months of dedicated mobile support and updates." },
        ],
      },
      {
        name: "Enterprise Ecosystem",
        price: "$9,500+",
        period: "per project",
        features: [
          { title: "Native Performance", description: "Swift (iOS) and Kotlin (Android) custom core modules." },
          { title: "Hardware Integration", description: "Bluetooth BLE, IoT device syncing, or NFC features." },
          { title: "Enterprise Security", description: "Certificate pinning, biometrics, and secure keychains." },
          { title: "Scalable Backend", description: "Dedicated cloud API infrastructure built for millions." },
          { title: "Continuous CI/CD", description: "Automated over-the-air (OTA) updates and builds." },
          { title: "Rigorous QA Testing", description: "Automated device lab testing across 50+ phone models." },
          { title: "Regulatory Compliance", description: "App store policy compliance and data privacy standards." },
          { title: "Support", description: "12 months of enterprise maintenance and feature growth." },
        ],
      },
    ],
  },
  "cms-packages": {
    category: "CMS Packages",
    tiers: [
      {
        name: "Standard CMS",
        price: "$800",
        period: "per project",
        features: [
          { title: "WordPress / Webflow", description: "Custom theme setup tailored to your exact brand guidelines." },
          { title: "Visual Editor", description: "Drag-and-drop page builder configuration for easy edits." },
          { title: "Blog & Portfolio", description: "Structured content types for dynamic article publishing." },
          { title: "Contact Forms", description: "Spam-protected contact forms connected to CRM or email." },
          { title: "On-Page SEO", description: "Yoast/RankMath configuration and clean semantic HTML." },
          { title: "Speed Essentials", description: "Image compression and caching plugin setup." },
          { title: "Training Session", description: "1-hour video walkthrough on how to update your site." },
          { title: "Support", description: "2 weeks of post-launch editorial support." },
        ],
      },
      {
        name: "Advanced CMS Store",
        price: "$1,800",
        period: "per project",
        highlighted: true,
        features: [
          { title: "Headless / Custom CMS", description: "Strapi, WordPress, or Sanity custom content models." },
          { title: "E-Commerce Integration", description: "WooCommerce, Shopify, or Snipcart full setup." },
          { title: "Advanced Filtering", description: "Dynamic product search, tags, and category sorting." },
          { title: "Multi-Currency", description: "Automatic geo-IP currency detection and checkout." },
          { title: "Automated Emails", description: "Abandoned cart recovery and customer receipts setup." },
          { title: "Security Hardening", description: "Firewalls, malware scanning, and regular backups." },
          { title: "Team Permissions", description: "Role-based access control for editors and admins." },
          { title: "Support", description: "1 month of priority CMS maintenance and updates." },
        ],
      },
      {
        name: "Enterprise Portal",
        price: "$4,000+",
        period: "per project",
        features: [
          { title: "Multi-Site Network", description: "Manage multiple regional domains from a single dashboard." },
          { title: "Custom Plugin Dev", description: "Bespoke extensions written for specialized functionality." },
          { title: "Enterprise Integrations", description: "ERP, SAP, or Salesforce CRM data synchronization." },
          { title: "High Security", description: "Enterprise-grade DDoS protection and SSO login." },
          { title: "Automated Scaling", description: "Cloud server architecture handling extreme traffic spikes." },
          { title: "Localization Workflow", description: "Multi-language translation management system." },
          { title: "SLA Documentation", description: "Detailed uptime and performance guarantee contracts." },
          { title: "Support", description: "6 months of dedicated CMS administration retainer." },
        ],
      },
    ],
  },
};

const tabs = [
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "web-dev", label: "Web Development" },
  { id: "software-dev", label: "Software Development" },
  { id: "mobile-dev", label: "Mobile App Development" },
  { id: "cms-packages", label: "CMS Packages" },
];

export default function PricingHeroSection() {
  const [activeTab, setActiveTab] = useState("ui-ux");

  const currentPricing = pricingData[activeTab] || pricingData["ui-ux"];

  return (
    <section className="w-full bg-[#02050A] py-[80px] sm:py-[100px] lg:py-[140px] relative text-white overflow-hidden font-poppins">
      
      {/* Background Gradient Fade (নিচ থেকে ওপরের দিকে গাঢ় থেকে হালকা ফেড) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      {/* Background Creative Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[350px] sm:h-[500px] lg:h-[650px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[100px] sm:blur-[160px] lg:blur-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />

      {/* Main Container bounded to max-w-[1445px] */}
      <div className="max-w-[1445px] mx-auto px-[16px] sm:px-[32px] lg:px-[80px] relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-[40px] sm:mb-[50px] lg:mb-[60px]">
          <h2 className="text-[32px] sm:text-[44px] lg:text-[54px] font-extrabold tracking-tight leading-[115%] mb-4 sm:mb-6">
            Discover the Best Pricing for Elite{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">
              Performance
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-[15px] sm:text-[17px] lg:text-[19px] leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
            Transparent pricing for elite UI/UX design and full-stack development. From high-conversion MVPs to massive SaaS ecosystems, we deliver the technical edge your brand deserves. No bloat, no shortcuts—just pure performance.
          </p>
        </div>

        {/* Interactive Category Switcher / Tabs */}
        <div className="flex items-center justify-center mb-[50px] sm:mb-[70px]">
          <div className="bg-[#02050a]/40 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-white/15 flex flex-wrap items-center justify-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[13px] sm:text-[15px] font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive ? "text-black" : "text-white/80 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePricingTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] rounded-xl shadow-[0_0_20px_rgba(247,164,0,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] sm:gap-[32px] items-stretch mb-[40px] sm:mb-[60px]"
          >
            {currentPricing.tiers.map((tier, index) => {
              const isHighlighted = tier.highlighted;

              return (
                <div
                  key={index}
                  className={`relative rounded-[24px] p-[28px] sm:p-[36px] flex flex-col justify-between transition-all duration-500 group overflow-hidden ${
                    isHighlighted
                      ? "bg-[#02050a]/40 border-2 border-[#F7A400]/80 shadow-[0_0_50px_rgba(247,164,0,0.25)] lg:-translate-y-2"
                      : "bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 hover:border-[#F7A400]/60 shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {/* Creative Corner Glow Effect */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl group-hover:bg-[#F7A400]/20 transition-all duration-500 pointer-events-none z-0" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/5 via-transparent to-[#F7A400]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                  {/* Highlighted Badge if applicable */}
                  {isHighlighted && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black text-[11px] font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl z-20 shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="relative z-20">
                    {/* Header info */}
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-white mb-3">
                      {tier.name}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                      <span className="text-[36px] sm:text-[44px] font-extrabold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFDDA1_0%,#F7A400_50%,#FFDDA1_100%)]">
                        {tier.price}
                      </span>
                      <span className="text-[14px] text-[#A1A1AA] font-medium">
                        {tier.period}
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#F7A400]/10 border border-[#F7A400]/40 flex items-center justify-center text-[#F7A400] shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <div className="text-[14px] sm:text-[15px] leading-snug">
                            <strong className="text-white font-semibold">{feature.title}:</strong>{" "}
                            <span className="text-[#A1A1AA] font-normal">{feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="relative z-20 pt-4">
                    <a
                      href="#book-call"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-xl font-extrabold text-[15px] transition-all duration-300 cursor-pointer group/btn ${
                        isHighlighted
                          ? "bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black shadow-[0_0_25px_rgba(247,164,0,0.4)] hover:shadow-[0_0_35px_rgba(247,164,0,0.6)] hover:scale-[1.02]"
                          : "bg-[#02050a]/30 border border-white/20 text-white hover:border-[#F7A400]/60 hover:bg-[#F7A400]/10"
                      }`}
                    >
                      <span>Book a Call</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Custom Enterprise Stacks Banner */}
        <div className="bg-[#02050a]/15 backdrop-blur-[2px] border border-white/15 rounded-[20px] p-[24px] sm:p-[32px] lg:p-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-[#F7A400]/60 transition-all duration-500">
          
          {/* Creative Corner Glow Effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F7A400]/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFDDA1]/5 via-transparent to-[#F7A400]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          <div className="flex items-center gap-5 relative z-20">
            <div className="w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-2xl bg-[#02050A] border border-white/15 flex items-center justify-center text-[#F7A400] shrink-0 shadow-inner group-hover:border-[#F7A400] group-hover:scale-105 transition-all duration-300">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-[18px] sm:text-[22px] font-bold text-white mb-1">
                Custom Enterprise Stacks
              </h4>
              <p className="text-[#A1A1AA] text-[14px] sm:text-[16px] font-normal">
                Need something bespoke? We engineer digital ecosystems from the ground up.
              </p>
            </div>
          </div>

          <div className="relative z-20 shrink-0 w-full md:w-auto">
            <a
              href="#custom-quote"
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black font-extrabold text-[15px] rounded-xl shadow-[0_0_25px_rgba(247,164,0,0.4)] hover:shadow-[0_0_35px_rgba(247,164,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Get Custom Quote
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}