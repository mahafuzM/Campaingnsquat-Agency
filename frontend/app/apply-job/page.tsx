"use client";

import React, { useEffect, useState, useRef } from "react";
import { FaUpload, FaChevronLeft, FaCheckCircle, FaSpinner } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ApplyjobPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [fileName, setFileName] = useState("No file selected");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setFileName("No file selected");
        formRef.current?.reset();
      })
      .catch((error: any) => {
        setLoading(false);
        console.log("Error:", error?.text);
        alert("EmailJS Keys gulo thik moto bosaite hobe, naile Success hobe na!");
      });
  };

  const labelStyle = "block text-white text-[14px] md:text-[18px] font-medium mb-2 md:mb-3";
  const inputStyle = "w-full bg-[#121212] border border-white/10 rounded-[5px] px-5 py-2 md:py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F7A400] transition-all text-[12px] md:text-[15px]";

  // Requested card background style with backdrop blur, border, and hover gradient overlay added
  const cardInner = "w-full max-w-5xl mx-auto mb-0 md:mb-10 bg-[#02050a]/15 backdrop-blur-[2px] p-4 sm:p-5 md:p-8 rounded-[10px] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group";

  return (
    <main className="bg-[#02050a] font-poppins min-h-screen pt-28 pb-20 relative overflow-hidden text-white">
      {/* Full Page Ambient Multi-Layer Glow & Grid Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1600px] h-[500px] sm:h-[700px] lg:h-[900px] bg-gradient-to-r from-[#ff7a33]/15 via-[#3b82f6]/15 to-[#00ffff]/10 rounded-full blur-[140px] sm:blur-[190px] lg:blur-[240px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_2px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] pointer-events-none z-0" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent pointer-events-none" />

      <style jsx global>{`
        @keyframes zoomIn { 
          from { transform: scale(0.8); opacity: 0; } 
          to { transform: scale(1); opacity: 1; } 
        }
      `}</style>

      {/* --- FULL SCREEN SUCCESS OVERLAY --- */}
      {status === "success" && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
          <div className="bg-[#0a0a0a] border-2 border-[#F7A400] p-10 rounded-[40px] max-w-[450px] w-full text-center shadow-[0_0_80px_rgba(247,164,0,0.4)] animate-[zoomIn_0.3s_ease-out]">
            <div className="w-24 h-24 bg-[#F7A400] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(247,164,0,0.5)]">
              <FaCheckCircle className="text-black" size={55} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Application Sent!</h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We have received your application. Our team will get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus(null)}
              className="w-full bg-[#F7A400] text-black font-bold py-5 rounded-[5px] hover:bg-white transition-all transform active:scale-95 text-xl"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[850px] mx-auto px-6 relative z-20">
        <Link href="/jobs/key-account-manager" className="inline-flex items-center gap-2 text-white hover:text-[#f7a400] transition-colors mb-10 group/link">
          <FaChevronLeft size={14} className="group-hover/link:-translate-x-1 transition-transform" />
          <span>Back to Job Details</span>
        </Link>

        <div className={cardInner}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a33]/5 via-transparent to-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="mb-12 border-b border-white/10 pb-6 relative z-10">
            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-white mb-4">Job Application Form</h1>
            <p className="text-white text-[18px] md:text-[20px]">Provide your details to join Campaignsquat.Ltd</p>
          </div>

          <form ref={formRef} className="space-y-10 relative z-10" onSubmit={handleSubmit}>
            <div>
              <label className={labelStyle}>Full Name <span className="text-[#F7A400]">*</span></label>
              <input name="full_name" type="text" placeholder="Enter your full name" required className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Email Address <span className="text-[#F7A400]">*</span></label>
              <input name="email" type="email" placeholder="example@mail.com" required className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Phone Number <span className="text-[#F7A400]">*</span></label>
              <input name="phone" type="tel" placeholder="Your answer" required className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Total Year of Experience <span className="text-[#F7A400]">*</span></label>
              <input name="total_exp" type="text" placeholder="e.g. 2+ years" required className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Current Salary <span className="text-[#F7A400]">*</span></label>
              <input name="current_salary" type="text" placeholder="Your answer" required className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Expected Salary <span className="text-[#F7A400]">*</span></label>
              <input name="expected_salary" type="text" placeholder="Your answer" required className={inputStyle} />
            </div>

            <div>
              <label className={labelStyle}>Cover Letter <span className="text-[#F7A400]">*</span></label>
              <textarea name="cover_letter" placeholder="Why should we hire you?" required className={`${inputStyle} h-40 resize-none`} />
            </div>

            {/* CV Upload */}
            <div>
              <label className={labelStyle}>CV or Resume <span className="text-[#F7A400]">*</span></label>
              <div className="relative">
                <input type="file" id="cv-upload" name="cv_file" onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" required />
                <label htmlFor="cv-upload" className="flex flex-col items-center justify-center gap-4 w-full border-2 border-dashed border-white/10 hover:border-[#F7A400] rounded-[5px] px-6 py-12 cursor-pointer transition-all group/upload bg-[#121212] hover:bg-[#F7A400]/5 text-center">
                  <div className="w-16 h-16 rounded-[5px] bg-white/5 flex items-center justify-center group-hover/upload:bg-[#F7A400]/10 transition-colors">
                    <FaUpload className="text-[#F7A400]" size={24} />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-lg block">Upload a file or drag and drop here</span>
                    <p className="text-white/60 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                      Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.
                    </p>
                  </div>
                  {fileName !== "No file selected" && (
                    <span className="mt-4 px-4 py-1.5 bg-[#F7A400]/20 text-[#F7A400] rounded-[5px] text-sm font-medium border border-[#F7A400]/30 animate-pulse">
                      Selected: {fileName}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center gap-6">
              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#F7A400] border-2 text-black font-semibold px-8 md:px-10 py-2 md:py-3.5 rounded-full text-[12px] md:text-[15px] hover:bg-transparent hover:text-white transition-all transform active:scale-95 flex items-center justify-center gap-3"
              >
                {loading && <FaSpinner className="animate-spin" />}
                {loading ? "Submitting..." : "Submit Application"}
              </button>
              
              <button 
                type="reset" 
                onClick={() => { setFileName("No file selected"); setStatus(null); }} 
                className="text-white hover:text-[#f7a400] transition-colors text-[12px] md:text-[15px]"
              >
                Clear form
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-white/50 text-sm mt-10">
          Form created for Campaignsquat.Ltd. All rights reserved.
        </p>
      </div>
    </main>
  );
}