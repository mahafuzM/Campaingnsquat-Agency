import React from "react";
import ProjectHero from "../components/Our Project/ProjectHero";
import AllProject from "../components/Our Project/AllProject";



export default function OurProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
        <ProjectHero />
        <AllProject />
     
    </main>
  );
}