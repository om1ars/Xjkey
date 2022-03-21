import React from "react";
import SEO from "@/components/SEO";
import AboutUs from "@/components/HomeComponents/AboutUs";
import Hero from "@/components/HomeComponents/Hero";
import { FeaturedJobs } from "@/components/HomeComponents/FeaturedJobs";
import AlgoFlipCard from "@/components/HomeComponents/FlipCard";
import VideosComponents from "@/components/HomeComponents/VideosComponents";
export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <FeaturedJobs />
        </div>
      </main>

      <div className="mt-10 " id="flipCard">
        <AlgoFlipCard />
      </div>
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8 " id="video-explanation">
        <div className="mt-16 space-y-20">
          <VideosComponents />
        </div>
      </main>
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8 " id="video-explanation">
        <div className="mt-16 space-y-20">
          <VideosComponents />
        </div>
      </main>
    </>
  );
}
