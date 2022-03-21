import React from "react";
import SEO from "@/components/SEO";
import AboutUs from "@/components/HomeComponents/AboutUs";
import Hero from "@/components/HomeComponents/Hero";
import { FeaturedJobs } from "@/components/HomeComponents/FeaturedJobs";
import AlgoFlipCard from "@/components/HomeComponents/FlipCard";
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
    </>
  );
}
