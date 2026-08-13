"use client";

import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function JobdetailsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sectionPadding = "max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 relative z-20";

  return (
    <main className="bg-[#02050a] font-poppins min-h-screen pt-28 pb-20 text-white relative overflow-hidden">
      {/* Full Page Ambient Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] h-[500px] sm:h-[700px] lg:h-[900px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[140px] sm:blur-[190px] lg:blur-[240px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      <div className={sectionPadding}>
        {/* --- Header Section --- */}
        <div className="border-b border-white/10 pb-10 mb-12">
          <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white mb-8">Key Account Manager</h1>

          <div className="flex flex-wrap gap-6 md:gap-8 text-white/90">
            <div className="flex items-center gap-3 text-[14px] md:text-[16px]">
              <FaMapMarkerAlt className="text-[#F7A400]" />
              <span>Location: On-site</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] md:text-[16px]">
              <FaBriefcase className="text-[#F7A400]" />
              <span>Type: Full Time</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] md:text-[16px]">
              <FaMoneyBillWave className="text-[#F7A400]" />
              <span>Salary: Negotiable</span>
            </div>
            <div className="flex items-center gap-3 text-[14px] md:text-[16px]">
              <FaClock className="text-[#F7A400]" />
              <span>Shift: Night Shift (North America)</span>
            </div>
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-16">
            {/* Intro */}
            <section>
              <h2 className="text-[20px] md:text-[22px] font-bold text-[#F7A400] mb-6">What do we look for:</h2>
              <div className="text-white text-[16px] md:text-[18px] leading-relaxed space-y-6">
                <p>
                  We’re looking for a highly motivated <span className="text-white font-bold underline decoration-[#F7A400]">Key Account Manager</span> to join our dynamic sales team. The best part? No prior experience or internships are required. If you have excellent English communication skills and come from a business or tech (CSE) background and have a passion for sales, this opportunity is made for you.
                </p>
                <p>
                  Global sales is one of the fastest-growing and most in-demand industries today, and very few are stepping up to lead. You can be one of the few — the superheroes of this space.
                </p>
                <div className="bg-[#F7A400]/10 border-l-8 border-[#F7A400] p-6 italic text-white text-[14px] md:text-[16px] rounded-[5px]">
                  &quot;If you're in your final semester with just 1–2 months left before graduation, you're highly welcome — and will be given priority for this position.&quot;
                </div>
              </div>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-[18px] md:text-[20px] font-bold text-[#F7A400] mb-8">Core Responsibilities:</h2>
              <ul className="grid gap-4 md:gap-5">
                {[
                  "Engage with international clients (USA, Europe, Middle East) through professional English communication.",
                  "Understand client needs and effectively present relevant service solutions.",
                  "Conduct industry and competitor research to understand global market trends.",
                  "Identify potential opportunities aligned with our services and target industries.",
                  "Develop and maintain strong, long-term relationships with international clients.",
                  "Provide consistent follow-up and support to move prospects through the sales funnel.",
                  "Track communications, meetings, and deal progress using CRM tools.",
                  "Participate in training sessions and stay updated on global business practices.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-white text-[14px] md:text-[16px] leading-snug">
                    <FaCheckCircle className="text-[#F7A400] mt-1 shrink-0 text-2xl" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <h2 className="text-[18px] md:text-[20px] font-bold text-[#F7A400] mb-8">Core Requirements:</h2>
              <div className="space-y-6 text-white text-[16px] md:text-[18px]">
                <p>
                  • <span className="text-[#F7A400] font-bold">English Fluency:</span> You must be a clear, confident, and fluent communicator—both written and spoken. This is the most important skill.
                </p>
                <p>
                  • <span className="text-[#F7A400] font-bold">Background:</span> Foundational knowledge in business or computer science/technology.
                </p>
                <p>
                  • <span className="text-[#F7A400] font-bold">Education:</span> We don’t care about your CGPA. Dropouts or final semester students are encouraged.
                </p>
                <p>
                  • <span className="text-[#F7A400] font-bold">Essential:</span> Applicants must be open to working <span className="underline decoration-2 underline-offset-4">night shifts</span> (North American Time).
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar / Benefits */}
          <div className="lg:col-span-1">
            <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/20 p-10 rounded-3xl sticky top-32 shadow-2xl">
              <h2 className="text-[18px] md:text-[20px] font-bold text-white mb-8 border-b border-white/10 pb-4">Benefits & Perks</h2>
              <ul className="space-y-4 md:space-y-5 mb-10">
                {[
                  "Negotiable Salary + Commission",
                  "Two Weekly Holidays",
                  "Subsidized Lunch & Snacks",
                  "Two Festival Bonuses",
                  "Yearly Salary Review",
                  "Health Insurance (After 1 Year)",
                  "Indoor Games (Table Tennis, Foosball)",
                  "Long Service Benefit",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-[14px] md:text-[16px] text-white font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F7A400] shadow-[0_0_10px_#F7A400]"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link href="/apply-job" className="w-full block">
                <button className="w-full bg-gradient-to-r from-[#FFDDA1] via-[#F7A400] to-[#f59e0b] text-black font-semibold py-3 px-8 md:px-10 rounded-full border border-[#FFDDA1]/40 transition-all duration-300 text-[14px] md:text-[16px] shadow-[0_0_20px_rgba(247,164,0,0.3)] hover:shadow-[0_0_25px_rgba(247,164,0,0.5)] hover:scale-[1.02]">
                  Apply for this job &raquo;&raquo;
                </button>
              </Link>

              <p className="text-center text-white/50 mt-6 text-sm">
                Send your CV to: careers@campaignsquat.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}