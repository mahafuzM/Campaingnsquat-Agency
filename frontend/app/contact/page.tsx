import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContuctMap from "../components/Contact/ContactMap";



export default function ServicePage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
      <ContactHero />
      <ContuctMap />
    </main>
  );
}