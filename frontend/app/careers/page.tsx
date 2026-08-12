import React from "react";
import CareerHero from "../components/Careers/CareerHero";
import CurrentOpenings from "../components/Careers/CurrentOpenings";
import OurCulture from "../components/Careers/OurCulture";




export default function CareersPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
     <CareerHero />
     <CurrentOpenings />
     <OurCulture />
    </main>
  );
}