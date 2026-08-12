import React from "react";
import ProductHero from "../components/Our Product/ProductHero";
import AllProduct from "../components/Our Product/AllProduct";



export default function OurProductPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
        <ProductHero />
        <AllProduct />
    
    </main>
  );
}