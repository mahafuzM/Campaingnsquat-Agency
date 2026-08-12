import React from "react";
import Hero from "@/app/components/Home/Hero";
import TrustedBrands from "./components/Home/TrustedBrands";
import Problem from "./components/Home/Problem";
import TechTicker from "./components/Home/TechTicker";
import Services from "./components/Home/Services";
import Process from "./components/Home/Process";
import FeaturedProjects from "./components/Home/FeaturedProjects";
import SuccessStory from "./components/Home/SuccessStory";
import Faq from "./components/Home/Faq";
import Contact from "./components/Home/Contact";
import Newsletter from "./components/Home/Newsletter";
import Agencyimage from "./components/Home/Agencyimage";
import WorkByIndastry from "./components/Home/WorkByIndastry";
import Blog from "./components/Home/Blog";
import Map from "./components/Home/MAp";
import Indestry from "./components/Home/Indestry";
import TechStack from "./components/Home/TechStack";




export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
      <Hero />
      <TrustedBrands />
      <Problem />
      <TechTicker />
      <Services /> 
      <Indestry />
      <WorkByIndastry />
      <Process />
      <TechStack />
      <Map />
      <Agencyimage />
     
      <FeaturedProjects />
      <SuccessStory />
      <Faq />
      <Contact />
      <Newsletter />
      <Blog />
    </main>
  );
}