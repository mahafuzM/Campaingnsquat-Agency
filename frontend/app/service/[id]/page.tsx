"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Check, Plus, Minus } from 'lucide-react';


const UXWireframing = () => {
    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "UX Wireframing & Strategic UX Architecture | Campaignsquat Ltd";
    }, []);

    // High-Authority Content Implementation with Stable Image URLs (No Missing Asset Errors)
    const expertiseData = [
        { id: "01", title: "Information Architecture", desc: "We organize complex data into logical hierarchies, ensuring users find what they need in under three clicks.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop" },
        { id: "02", title: "Low-Fidelity Wireframes", desc: "Rapid skeletal layouts that prioritize core functionality over aesthetics to validate the user journey early.", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop" },
        { id: "03", title: "User Flow Mapping", desc: "Visualizing every touchpoint to ensure a frictionless transition from landing to conversion for every persona.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
        { id: "04", title: "Usability Testing", desc: "Validating structural concepts with real users to identify and fix navigation bottlenecks before coding.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" }
    ];

    const featureData = [
        {
            title: ["Blueprinting for", "Seamless Scalability"],
            desc: "Before colors and fonts, we define the logic. Our UX Audit removes distractions, focusing on how a user moves from point A to B. By establishing a solid Information Architecture early on, we prevent costly redesigns during development. We ensure every button, link, and content block serves a specific purpose in your user’s journey, creating a product that is logically sound and incredibly easy to use.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
            alt: "Strategic Information Architecture and UX Audit Blueprint for Scalable Tech Products",
            reverse: false,
        },
        {
            title: ["Empathy-Driven", "User Journey Mapping"],
            desc: "We don't just design pages; we engineer experiences. Our process involves creating detailed User Journey Maps that reflect the emotional and functional state of your users at every touchpoint. We identify 'pain points' and 'moments of truth' to ensure the final product supports the user exactly when they need it, resulting in higher retention rates and a much more satisfying overall experience.",
            img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
            alt: "Empathy-Driven User Journey Mapping and Visual Experience Design",
            reverse: true,
        },
        {
            title: ["Rapid Iteration with", "Low-Fid Sketches"],
            desc: "Speed and clarity are key in the early stages of design. We use low-fidelity wireframing to rapidly iterate on ideas and explore multiple layouts in a short amount of time. This 'fail-fast' approach allows us to test different interaction models without getting bogged down in visual details. It provides a clear platform for stakeholders to give feedback on functionality and flow, ensuring everyone is aligned before moving into high-fidelity UI.",
            img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1000&auto=format&fit=crop",
            alt: "Low-Fidelity Wireframing and Rapid UX Prototyping Sketches",
            reverse: false,
        },
        {
            title: ["Data-Driven UX", "Logic Validation"],
            desc: "Intuition is good, but data is better. We validate our wireframes through rigorous UX testing and behavioral analysis. By observing how users interact with our structural layouts, we gain insights into cognitive load and decision-making patterns. This evidence-based approach allows us to refine the navigation, simplify complex forms, and optimize the overall conversion path before high-fidelity design begins.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            alt: "Data-Driven UX Logic Validation and Wireframe Usability Testing",
            reverse: true,
        },
    ];

    const processSteps = [
        { title: "Deep-Dive Research", description: "We analyze user personas and competitor landscapes to define a UX strategy that aligns with your business goals.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop", alt: "UX Deep-Dive Research Icon" },
        { title: "Logical Ideation", description: "Brainstorming structural flows and mapping the site architecture to ensure seamless navigation across all device types.", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop", alt: "Logical Ideation Icon" },
        { title: "Rapid Wireframing", description: "Creating the skeletal layout of the application’s key screens, focusing strictly on hierarchy, placement, and interaction.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=400&auto=format&fit=crop", alt: "Rapid Wireframing Icon" },
        { title: "Expert Validation", description: "Testing the flows against usability heuristics to ensure the experience is intuitive, accessible, and ready for high-fidelity UI.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop", alt: "UX Expert Validation Icon" }
    ];

    const points = ["User-Centric Architecture", "Frictionless Navigation", "Logical Content Strategy", "Rapid Structural Iteration", "Evidence-Based UX Logic"];

    const industryData = [
        { title: "Banking UX", desc: "Simplifying complex financial data for easy user understanding.", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop", alt: "Banking UX Design" },
        { title: "Retail Flows", desc: "Optimizing checkout processes to reduce cart abandonment.", img: "https://images.unsplash.com/photo-1556742049-0a67d553c2a3?q=80&w=600&auto=format&fit=crop", alt: "Retail Flows" },
        { title: "Medical Portals", desc: "Clear information hierarchy for critical healthcare data.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop", alt: "Medical Portals" },
        { title: "LMS Structure", desc: "Mapping logical learning paths for educational platforms.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop", alt: "LMS Structure" },
        { title: "SaaS Workflows", desc: "Decoupling complex business tools into manageable tasks.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", alt: "SaaS Workflows" },
        { title: "Property Search", desc: "Intuitive filtering and navigation for real estate platforms.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop", alt: "Property Search" },
        { title: "Booking Logic", desc: "Streamlining multi-step travel booking user journeys.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop", alt: "Booking Logic" },
        { title: "Logistic UX", desc: "Optimizing dashboard flows for fast-paced delivery tracking.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop", alt: "Logistic UX" },
    ];

    const gradientTextStyle = {
        backgroundImage: "linear-gradient(90deg, #FFDDA1 0%, #F7A400 50%, #FFDDA1 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    return (
        <main className="overflow-hidden font-poppins bg-[#02050a]">
            {/* 1. Hero Section */}
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
                                    <button className="w-full sm:w-auto bg-[#F7A400] border-[#f7a400] border-2 text-black font-bold py-3 px-8 md:px-10 text-[14px] md:text-[16px] rounded-[5px] transition-all duration-300 transform hover:bg-transparent hover:text-white active:scale-95 shadow-lg shadow-[#F7A400]/25">
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

            {/* Slider Section */}
            <section className="w-full overflow-hidden pt-10 md:pt-10">

            </section>

            {/* 2. Expertise Section */}
            <section className="bg-[#0A0A0A] py-24 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full text-center -mt-10 md:-mt-16 lg:-mt-24">
                    <div className="mb-20">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-6">Our Framework for <span style={gradientTextStyle}>Conversion-Focused UX</span></h2>
                        <p className="text-white text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed font-medium">We strip away visual noise to focus on the skeletal logic that drives user engagement and product-market fit.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertiseData.map((item, index) => (
                            <div key={index} className="group relative bg-[#02050A] border border-white/30 p-10 rounded-[5px] transition-all duration-500 hover:border-[#F7A400]/40 flex flex-col items-start text-left overflow-hidden hover:-translate-y-2">
                                <span className="absolute -top-2 -right-2 text-white opacity-[0.03] text-5xl font-bold group-hover:opacity-10 transition-all">{item.id}</span>
                                <div className="mb-8 w-14 h-14 flex items-center justify-start relative z-10">
                                    <img src={item.img} alt={`${item.title} Expertise Icon`} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 origin-left" style={{ filter: 'invert(71%) sepia(85%) saturate(945%) hue-rotate(354deg) brightness(102%) contrast(101%)' }} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-[20px] md:text-[22px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="flex flex-col gap-24 md:gap-44">
                        {featureData.map((item, index) => (
                            <div key={index} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12 md:gap-24`}>
                                <div className="w-full md:w-1/2 pt-4 md:pt-6">
                                    <h3 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-8">
                                        {item.title.map((line, i) => (
                                            <span key={i} className="block leading-[1.3] mb-1 last:mb-0">{line}</span>
                                        ))}
                                    </h3>
                                    <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light text-left max-w-[580px]">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="relative group overflow-hidden rounded-[5px]">
                                        <img 
                                            src={item.img} 
                                            alt={item.alt} 
                                            className="relative z-10 w-full aspect-[16/10] object-cover border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] rounded-[5px]" 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="w-full bg-[#02050A] py-24 md:py-32">
                <div className="max-w-[1445px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
                    <div className="flex flex-col items-center text-center mb-20 md:mb-28 pt-4 md:pt-4">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold tracking-tight mb-6">Our Strategic UI/UX Design Process</h2>
                        <p className="text-white text-[16px] md:text-[18px] max-w-2xl font-light">A systematic, authority-driven approach to define, design, and validate the core structural logic of your digital product.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                                <div className="relative mb-10 w-40 h-40 md:w-44 lg:w-48 md:h-44 lg:h-48 flex items-center justify-center">
                                    <div className="absolute top-0 left-[-15px] w-full h-full rounded-full border-[3px] border-[#F7A400] transition-all duration-700 ease-in-out group-hover:left-0 group-hover:rotate-[360deg] z-0"></div>
                                    <div className="relative w-full h-full rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center z-10 transition-all duration-500 group-hover:border-[#F7A400]/50 shadow-xl">
                                        <img src={step.image} alt={step.alt} className="w-16 h-16 md:w-20 lg:w-24 object-contain brightness-0 invert transition-all duration-500 group-hover:scale-110 z-20" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-center -mt-4">
                                    <h3 className="text-white text-[22px] md:text-[24px] lg:text-[26px] font-bold mb-4 group-hover:text-[#F7A400] transition-colors">{step.title}</h3>
                                    <p className="text-white text-[15px] md:text-[16px] leading-relaxed font-light max-w-[280px]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Section */}
            <section className="py-20 md:py-32 lg:py-40 relative z-[1]">
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32 pt-4 md:pt-6">
                        
                        <div className="w-full lg:w-1/2 flex flex-col text-left order-2 lg:order-1 relative z-50"> 
                            <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[1.3] mb-8">Logic-First Design That Eliminates Friction</h2>
                            <p className="text-white text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-[580px]">We specialize in turning complex user requirements into simple, skeletal wireframes that prioritize task completion and ease of use.</p>
                            
                            <div className="flex flex-col gap-3 md:gap-4 mb-12">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 md:w-7 md:h-7 shrink-0 rounded-full border-2 border-[#F7A400] flex items-center justify-center">
                                            <Check className="text-[#F7A400] w-3.5 h-3.5 md:w-4 md:h-4 stroke-[4px]" />
                                        </div>
                                        <span className="text-white text-[18px] md:text-[20px] font-medium leading-none">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-start relative z-[100]">
                                <Link href="/contact" className="inline-block w-full sm:w-auto cursor-pointer pointer-events-auto">
                                    <button className="bg-[#F7A400] text-black hover:text-white border-2 border-[#F7A400] text-[12px] md:text-[15px] rounded-[5px] px-6 py-2 font-semibold hover:bg-[#0a0a0a] transition-all duration-500 active:scale-95 group pointer-events-auto">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                            <div className="relative flex justify-center lg:justify-end">
                                <img 
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Advanced UX Planning Excellence" 
                                    className="w-full h-auto max-h-[750px] lg:max-h-[850px] object-contain rounded-[10px] border border-white/5 shadow-2xl scale-105 lg:scale-110" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Industries Section */}
            <section className="py-24 md:py-36 relative z-10 overflow-hidden">
                <style>{`
                    @keyframes rotate-border { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    .border-run-container { position: relative; padding: 2px; overflow: hidden; background: rgba(255, 255, 255, 0.05); border-radius: 7px; }
                    .border-run-container:hover .running-border { opacity: 1; }
                    .running-border { position: absolute; width: 250%; height: 250%; top: -75%; left: -75%; background: conic-gradient(transparent, transparent, transparent, #F7A400); animation: rotate-border 3s linear infinite; opacity: 0; transition: opacity 0.3s; z-index: 0; }
                    .card-content { position: relative; background: #0a0a0a; border-radius: 5px; z-index: 1; height: 100%; }
                `}</style>
                <div className="max-w-[1445px] mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <h2 className="text-white text-[26px] md:text-[32px] lg:text-[40px] font-bold mb-4">Sector-Specific UX Strategy</h2>
                        <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-light">Custom structural logic for diverse industry requirements.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6">
                        {industryData.map((item, index) => (
                            <div key={index} className="border-run-container group">
                                <div className="running-border"></div>
                                <div className="card-content flex flex-col">
                                    <div className="w-full aspect-[4/3] overflow-hidden border-b border-white/5 rounded-t-[5px]">
                                        <img src={item.img} alt={item.alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col text-left">
                                        <h3 className="text-white text-xl md:text-[22px] font-bold mb-3 group-hover:text-[#F7A400] transition-colors">{item.title}</h3>
                                        <p className="text-white text-[14px] md:text-[15px] font-light">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Questions />
        </main>
    );
};

const Questions = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const faqs = [
        {
            question: "Why is UX & Wireframing important before development?",
            answer: "Wireframing acts as the architectural blueprint. It allows us to focus on logic and user flow without visual distractions, preventing costly redesigns and ensuring the product is intuitive from day one."
        },
        {
            question: "How long does the UX wireframing phase usually take?",
            answer: "Depending on complexity, it typically takes 2–4 weeks. This includes deep research, mapping out all user journeys, and creating skeletal layouts for every core screen to prevent technical debt."
        },
        {
            question: "Do you perform usability testing on wireframes?",
            answer: "Yes. We validate our structural logic through early testing to ensure the navigation is frictionless before we even start the visual UI design phase. This ensures evidence-based UX logic."
        },
        {
            question: "What tools do you use for UX and Wireframing?",
            answer: "We primarily use Figma and FigJam for rapid wireframing and interactive prototyping, allowing for real-time collaboration and seamless handoff to development teams."
        },
        {
            question: "Can I request changes during the wireframing stage?",
            answer: "Absolutely. In fact, this is the best time for changes as it is the most cost-effective stage to pivot. We iterate quickly to ensure the logic perfectly matches your business goals."
        }
    ];

    return (
        <section className="w-full bg-[#02050A] py-8 md:py-10 overflow-hidden font-poppins">
            <div className="max-w-[1445px] mx-auto px-5 sm:px-10 md:px-16">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-semibold text-white mb-4 md:mb-8 leading-[1.2]">
                        Expert Insights: UX & Wireframing
                    </h2>
                    <p className="text-white text-[15px] md:text-[20px] max-w-2xl mx-auto font-light">
                        Quick answers to our professional UX & wireframing process
                    </p>
                </div>

                <div className="space-y-4 md:space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border transition-all duration-300 rounded-[5px] md:rounded-[5px] ${
                                openIndex === index 
                                    ? 'border-[#f7a400] bg-[#0A0A0A]' 
                                    : 'border-[#02050a] bg-[#0A0A0A] hover:border-[#f7a400]'
                            }`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="text-[15px] md:text-[18px] font-semibold leading-tight transition-colors duration-300 pr-4 text-white">
                                    {faq.question}
                                </span>
                                <span className="shrink-0">
                                    {openIndex === index ? (
                                        <div className="bg-[#f7a400] p-1 md:p-1.5 rounded-full">
                                            <Minus size={18} className="md:w-[22px] md:h-[22px]" strokeWidth={3} color="black" />
                                        </div>
                                    ) : (
                                        <div className="bg-white/10 p-1 md:p-1.5 rounded-full">
                                            <Plus size={18} className="md:w-[18px] md:h-[18px]" strokeWidth={3} color="white" />
                                        </div>
                                    )}
                                </span>
                            </button>

                            <div 
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-5 md:px-8 pb-6 md:pb-8 text-white text-[14px] md:text-[16px] leading-relaxed font-normal">
                                    <div className="h-[1px] w-full bg-gray-800/50 mb-5 md:mb-6"></div>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UXWireframing;