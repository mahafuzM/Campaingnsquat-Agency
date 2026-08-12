import React from "react";
import ServiceHero from "../components/Service/ServiceHero";
import AllService from "../components/Service/AllService";


export default function ServicePage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
      <ServiceHero />
      <AllService />
    </main>
  );
}