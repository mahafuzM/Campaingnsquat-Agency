import React from "react";
import PricingHero from "../components/Pricing/PricingHero";
import TechnicalEdge from "../components/Pricing/TechnicalEdge";
import AllCreativeServices from "../components/Pricing/AllCreativeServices";
import AgencyComication from "../components/Pricing/AgencyComication";




export default function PricingPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
    <PricingHero />
    <TechnicalEdge />
    <AllCreativeServices />
    <AgencyComication />
    </main>
  );
}