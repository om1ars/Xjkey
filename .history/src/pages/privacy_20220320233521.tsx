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
          <div className="rounded border-l-4 border-mainBg bg-white py-3 px-5 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h6 className="text-xl font-semibold  text-textBold">
                  Smoothly Rolling Out Pricing Changes Is Hard.
                </h6>
                <h4 className="mt-2 mb-2  text-left text-sm text-textColor">
                  July 14, 2020
                </h4>
              </div>
              <div></div>
            </div>
            <div className="flex flex-row items-center justify-start text-left">
              <span className="mr-1"></span>
              <p>
                <span className="mr-2 text-xs  font-semibold  text-buttonBg">
                  6min read
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium quod asperiores quam, quos, magnam temporibus
                  neque facere maiores harum optio quaerat mollitia similique
                  repellat omnis adipisci laborum eius eum tempora.{" "}
                </span>
              </p>
            </div>
          </div>
         
          <span className="mt">
          <h1 className="text-2xl  font-semibold text-mainBg ">
            Privacy Policy
          </h1>
            <span className="text-mainBg  font-semibold text-lg mt-4">Introduction</span>
            <p className="mt-5 text">
              Protecting your private information is our priority. This
              Statement of Privacy applies to the Site and AlgoExpert LLC and
              governs data collection and usage. For the purposes of this
              Privacy Policy, unless otherwise noted, all references to
              AlgoExpert include the Site and AlgoExpert LLC. The AlgoExpert
              website is a Technical Interview Preparation site. By using the
              AlgoExpert website, you consent to the data practices described in
              this statement.
            </p>
          </span>
        </div>
      </main>
    </div>
  );
}
