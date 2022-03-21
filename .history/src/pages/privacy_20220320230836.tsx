import Hero from "@/components/HomeComponents/Hero";
import React from "react";

export default function Privacy() {
  return (
    <div>
     <Hero title='Boring Privacy Policy'  />
     <div className="rounded border-l-4 border-buttonBg bg-white py-3 px-5 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
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
              Accusantium quod asperiores quam, quos, magnam temporibus neque
              facere maiores harum optio quaerat mollitia similique repellat
              omnis adipisci laborum eius eum tempora.{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
