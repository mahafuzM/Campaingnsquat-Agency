import React from "react";
import BlogHero from "../components/Blog/BlogHero";
import AllBlog from "../components/Blog/AllBlog";



export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A]">
    <BlogHero />
    <AllBlog />
    </main>
  );
}