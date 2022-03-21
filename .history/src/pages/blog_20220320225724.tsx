import BlogsCards from "@/components/BlogsComponents/BlogsCards";
import Hero from "@/components/HomeComponents/Hero";
import Head from "next/head";
import React from "react";

export default function Blog() {
  return (
    <div className="bg-whiteBg">
      <Head>
        <link rel="stylesheet" href="" />
        <title></title>
      </Head>
      <Hero
        title="Central Code Blog"
        subtitle="Insights and learnings from 5+ years of running a tech business."
      />
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
