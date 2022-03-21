import BlogsCards from "@/components/BlogsComponents/BlogsCards";
import Hero from "@/components/HomeComponents/Hero";
import React from "react";

export default function Blog() {
  return (
    <div className="bg-whiteBg">
      <Hero
        title="Central Code Blog"
        subtitle="Insights and learnings from 5+ years of running a tech business."
      />
      <BlogsCards />
    </div>
  );
}
