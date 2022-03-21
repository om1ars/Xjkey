import Hero from "@/components/HomeComponents/Hero";
import React from "react";

export default function Privacy() {
  return (
    <div>
      <Hero title="Boring Privacy Policy" subtitle="Because we gotta have it" />
    
      <main
        className="mx-auto max-w-screen-xl bg-whiteBg px-6 sm:px-8 "
        id="video-explanation"
      >
        <div className="mt-28 mb-28 space-y-20">
          <BlogsCards />
        </div>
      </main>
    </div>
  );
}
