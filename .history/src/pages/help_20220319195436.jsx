import Hero from "@/components/HomeComponents/Hero";
import React from "react";
import product from "../../public/flaticons/product.png";
import purchasing from "../../public/flaticons/credit-cards-payment.png";
import issues from "../../public/flaticons/settings.png";
import bug from "../../public/flaticons/bug.png";
import featureReq from "../../public/flaticons/lamp.png";
import bussinessReq from "../../public/flaticons/handshake.png";
import Image from "next/image";
import Head from "next/head";

export default function Help() {
  return (
    <div>
      <Head>
        <title>Help Center</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero title="You have questions?" subtitle="We have answers" />
      <div className="bg-white mt-12 flex flex-col items-center justify-center pl-6 pr-6 ">
        <h1 className="mb-8 flex flex-col  text-4xl">
          <span className="mb-6">Help Center</span>
          <div className="bg-indigo-400 m-auto flex h-0.5 w-6/12 items-center justify-center"></div>
        </h1>
        <p className=" flex items-center justify-center text-center">
          If you have a question or are experiencing an issue, look around
          through our FAQ below.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 mb-8 text-2xl ">What Can We Help You With?</h1>

        <div className="flex items-center justify-center">
          <div
            className="flex w-9/12 flex-wrap items-center justify-center gap-4 p-6  "
            style={{ fontFamily: '"Muli", sans-serif' }}
          >
            <div className=" flex flex-col items-center justify-center rounded  bg-white pl-16 pr-16 pt-9 pb-9 shadow-lg">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0"
                src={product}
              />
              <p className="text-gray-700 mt-3 text-lg">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded  bg-white pl-16 pr-16 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={purchasing}
              />
              <p className="text-gray-700 mt-3 text-lg">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded  bg-white pl-16 pr-16 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={issues}
              />
              <p className="text-gray-700 mt-3 text-lg">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded  bg-white pl-16 pr-16 pt-9 pb-9 shadow">
              <Image width={60} height={60} className="mb-4 mt-0  " src={bug} />
              <p className="text-gray-700 mt-3 text-lg">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded  bg-white pl-16 pr-16 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={featureReq}
              />
              <p className="text-gray-700 mt-3 text-lg">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded  bg-white pl-16 pr-16 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={bussinessReq}
              />
              <p className="text-gray-700 mt-3 text-lg">Content goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
