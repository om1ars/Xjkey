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
      <main
        className="mx- max-w-screen-xl bg-whiteBg px-6 sm:px-8 "
        id="video-explanation"
      >
        <div className="mt space-y-20">
          <BlogsCards />
        </div>
      </main>
    </div>
  );
}
