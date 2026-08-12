

import React from "react";

import AgencyPromise from "../components/About/AgencyPromise";
import Gallery from "../components/About/Gallery";
import MissionAndVision from "../components/About/Mission&Vision";
import MarqueeGallery from "../components/About/MarqueeGallery";
import GlobalRecognition from "../components/About/GlobalRecognition";
import AboutHero from "../components/About/AboutHero";

import CeoMessage from "../components/About/CeoMessage";
import Services from "../components/Home/Services";
import Indestry from "../components/Home/Indestry";
import SuccessStory from "../components/Home/SuccessStory";
import Faq from "../components/Home/Faq";
import TechStack from "../components/Home/TechStack";
import Contact from "../components/Home/Contact";
import FeaturedProjects from "../components/Home/FeaturedProjects";


export default function AboutUsPage() {
  return (
    <main className="w-full min-h-screen bg-[#02050A] pt-20 md:pt-24 ">
      <AboutHero />
     
      <AgencyPromise />
      <Gallery />
      <MissionAndVision />
      <MarqueeGallery />
      <Services /> 
      <FeaturedProjects />
      <Indestry />
      <TechStack />
      <SuccessStory />     
      <Faq />
      <GlobalRecognition />
      <CeoMessage />
      <Contact />
    </main>
  );
}