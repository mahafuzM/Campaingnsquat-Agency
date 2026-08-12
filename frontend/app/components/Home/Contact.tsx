"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, CheckCircle2, Phone, Circle, CheckCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
  const router = useRouter();
  
  const [budget, setBudget] = useState('');
  const [service, setService] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  const budgetOptions = ["Less than $1K", "$1K - $5K", "$5K - $10K", "$10K - $20K", "More than $20K"];
  const serviceOptions = ["UI/UX Design", "Website Development", "Software Development", "Mobile App Development"];

  return (
    <section className="w-full bg-[#02050a] py-[64px] md:py-[96px] font-poppins text-white overflow-hidden relative">
      
      {/* Background System (আপনার দেওয়া স্টাইল অনুযায়ী ব্লার ও গ্রিড ব্যাকগ্রাউন্ড) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] bg-gradient-to-r from-[#ff7a33]/20 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      <div className="max-w-[1445px] mx-auto px-2 md:px-[30px] lg:px-[50px] relative z-10">
        
        {/* Main Wrapper Box (আপনার দেওয়া নতুন কার্ড ব্যাকগ্রাউন্ড স্টাইল: bg-[#02050a]/15, backdrop-blur, border white/15, shadow) */}
        <div className="w-full bg-[#02050a]/15 backdrop-blur-[2px] p-[20px] sm:p-[32px] md:p-[48px] lg:p-[64px] rounded-[10px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          
          {/* Hover Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-start relative z-10">
            
            {/* LEFT SIDE: INFO & FOUNDER PROFILE */}
            <div className="lg:col-span-5 space-y-[32px]">
              
              <div className="space-y-[24px]">
                <div className="inline-block px-[16px] py-[8px] rounded-[10px]  bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] text-black text-[12px] font-bold  shadow-[0_0_20px_rgba(247,164,0,0.3)]">
                  Ready to Scale? Let’s Talk!
                </div>
                
                {/* Main Heading */}
                <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold leading-[1.2] tracking-tight text-white">
                  Designing and developing high-growth SaaS products and websites
                </h2>

                {/* Checklist Features */}
                <div className="space-y-[16px] pt-[8px]">
                  <div className="flex items-start gap-[12px] text-white text-[16px]">
                    <CheckCircle2 size={20} className="text-[#F7A400] shrink-0 mt-[4px]" />
                    <span><strong className="text-white">Zero-Risk Start:</strong> No long-term contracts.</span>
                  </div>
                  <div className="flex items-start gap-[12px] text-white text-[16px]">
                    <CheckCircle2 size={20} className="text-[#F7A400] shrink-0 mt-[4px]" />
                    <span><strong className="text-white">Full Ownership:</strong> 100% source code & assets.</span>
                  </div>
                  <div className="flex items-start gap-[12px] text-white text-[16px]">
                    <CheckCircle2 size={20} className="text-[#F7A400] shrink-0 mt-[4px]" />
                    <span><strong className="text-white">Reliable Support:</strong> Assistance after go-live.</span>
                  </div>
                </div>
              </div>

              {/* Founder Profile Card */}
              <div className="pt-[8px] space-y-[16px]">
                <div className="w-[176px] h-[176px] sm:w-[192px] sm:h-[192px] rounded-xl overflow-hidden relative shadow-lg">
                  <img 
                    src="/assets/images/Md. Maharab Biswas Api.jpg" 
                    alt="Md Maharab Biswas Api" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div>
                  <h4 className="text-[20px] font-bold text-white tracking-tight">Md Maharab Biswas Api</h4>
                  <p className="text-white/50 text-[14px] font-semibold">Founder & CEO</p>
                </div>

                {/* Direct Contact Links */}
                <div className="space-y-[12px] pt-[4px]">
                  <a 
                    href="tel:+8801330093408" 
                    className="flex items-center gap-[12px] text-white hover:text-[#F7A400] transition-colors font-medium text-[14px] group"
                  >
                    <Phone size={16} className="text-[#F7A400] group-hover:scale-110 transition-transform" /> 
                    <span>+88 01330093408</span>
                  </a>

                  <a 
                    href="https://wa.me/8801626204606" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-[12px] text-[#25D366] transition-colors font-medium text-[14px] group"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      className="group-hover:scale-110 transition-transform shrink-0"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Send Message Directly</span>
                  </a>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE: CONTACT FORM */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-[24px]">
                
                {/* Full Name */}
                <div className="space-y-[8px]">
                  <label className="text-[14px] font-semibold text-white">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Garry A. Leighton" 
                    required 
                    className="w-full bg-[#121212] border border-[#8c9096]/50 rounded-lg px-[16px] py-[14px] text-white focus:border-[#F7A400] outline-none transition-all placeholder:text-white/25 text-[14px]" 
                  />
                </div>

                {/* Email & Whatsapp Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                  <div className="space-y-[8px]">
                    <label className="text-[14px] font-semibold text-white">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="yourmail@gmail.com" 
                      required 
                      className="w-full bg-[#121212] border border-[#8c9096]/50 rounded-lg px-[16px] py-[14px] text-white focus:border-[#F7A400] outline-none transition-all placeholder:text-white/25 text-[14px]" 
                    />
                  </div>
                  <div className="space-y-[8px]">
                    <label className="text-[14px] font-semibold text-white">Whatsapp Number</label>
                    <input 
                      type="tel" 
                      placeholder="1123 1234567" 
                      className="w-full bg-[#121212] border border-[#8c9096]/50 rounded-lg px-[16px] py-[14px] text-white focus:border-[#F7A400] outline-none transition-all placeholder:text-white/25 text-[14px]" 
                    />
                  </div>
                </div>

                {/* Select Service Dropdown */}
                <div className="space-y-[8px]">
                  <label className="text-[14px] font-semibold text-white">Select Service</label>
                  <div className="relative">
                    <div 
                      onClick={() => setIsOpen(!isOpen)}
                      className={`w-full bg-[#121212] border rounded-lg px-[16px] py-[14px] text-white flex justify-between items-center cursor-pointer transition-all ${
                        service || isOpen ? 'border-[#F7A400]' : 'border-[#8c9096]/50 hover:border-white/30'
                      }`}
                    >
                      <span className={service ? "text-white text-[14px]" : "text-white/25 text-[14px]"}>
                        {service || "Choose a service"}
                      </span>
                      <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180 text-[#F7A400]' : 'text-white/50'}`} />
                    </div>

                    {isOpen && (
                      <div className="absolute z-50 w-full mt-[8px] bg-[#121212] border border-[#8c9096]/50 rounded-lg overflow-hidden shadow-2xl">
                        {serviceOptions.map((srv) => (
                          <div
                            key={srv}
                            onClick={() => {
                              setService(srv);
                              setIsOpen(false);
                            }}
                            className="px-[16px] py-[12px] text-[14px] text-white hover:bg-[#F7A400] hover:text-black cursor-pointer transition-colors"
                          >
                            {srv}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Budget Selection */}
                <div className="space-y-[12px]">
                  <label className="text-[14px] font-semibold text-white">Project Budget</label>
                  <div className="flex flex-wrap gap-[12px]">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setBudget(opt)}
                        className={`group flex items-center gap-[10px] px-[16px] py-[10px] rounded-lg border text-[12px] sm:text-[14px] font-semibold transition-all duration-300 ${
                          budget === opt 
                          ? 'border-[#F7A400] text-[#F7A400] bg-[#F7A400]/5 shadow-[0_0_15px_rgba(247,164,0,0.15)]' 
                          : 'border-[#8c9096]/50 bg-[#121212] text-white/80 hover:border-white/30'
                        }`}
                      >
                        {budget === opt ? (
                          <CheckCircle size={16} fill="#F7A400" className="text-black shrink-0" />
                        ) : (
                          <Circle size={16} className="text-white/30 group-hover:text-[#F7A400] shrink-0" />
                        )}
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-[8px]">
                  <label className="text-[14px] font-bold text-white">Project Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="I’m planning a complete redesign for my website and SaaS platform........" 
                    className="w-full bg-[#121212] border border-[#8c9096]/50 rounded-lg p-[16px] text-white focus:border-[#F7A400] outline-none transition-all resize-none placeholder:text-white/25 text-[14px]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-[#FFDDA1] to-[#F7A400] rounded-full font-extrabold text-black text-[12px] md:text-[16px] shadow-[0_0_25px_rgba(247,164,0,0.3)] hover:opacity-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-[8px] group"
                >
                  <span>Sent Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;