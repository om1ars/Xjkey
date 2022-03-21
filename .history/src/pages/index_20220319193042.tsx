import React from "react";
import SEO from "@/components/SEO";
import AboutUs from "@/components/HomeComponents/AboutUs";
import Hero from "@/components/HomeComponents/Hero";
import AlgoFlipCard from "@/components/HomeComponents/FlipCard";
import VideosComponents from "@/components/HomeComponents/VideosComponents";
import CompareTable from "@/components/HomeComponents/CompareTable";
import { WhyUs } from "@/components/HomeComponents/WhyUs";
export default function Home() {
  return (
    <>
      <SEO />
      <Hero
        title=" The ultimate resource to prepare for coding interviews."
        subtitle="Everything you need, in one streamlined platform"
      />
      <div className="bg-da">
        <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
          <div className="mt-16 space-y-20">
            <WhyUs />
          </div>
        </main>
        <main
          className="mx-auto max-w-screen-xl bg-whiteBg px-6 sm:px-8 "
          id="video-explanation"
        >
          <div className="mt-16 space-y-20">
            <CompareTable />
          </div>
        </main>
        <div className="mt-10 " id="flipCard">
          <AlgoFlipCard />
        </div>
        <main
          className="mx-auto max-w-screen-xl px-6 sm:px-8 "
          id="video-explanation"
        >
          <div className="mt-16 space-y-20">
            <VideosComponents />
          </div>
        </main>
      </div>
    </>
  );
}
