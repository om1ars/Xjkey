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
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero title="You have questions?" subtitle="We have answers" />
      <div className="">
        <div className="flex items-center justify-center">
          <div
            className="flex w-9/12 flex-wrap items-center justify-center gap-4 p-6 "
            style={{ fontFamily: '"Muli", sans-serif' }}
          >
            <div className=" flex flex-col items-center justify-center rounded border bg-white pl-14 pr-14 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={product}
              />
              <p className="mt-3 text-lg text-gray-700">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded border bg-white pl-14 pr-14 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={purchasing}
              />
              <p className="mt-3 text-lg text-gray-700">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded border bg-white pl-14 pr-14 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={issues}
              />
              <p className="mt-3 text-lg text-gray-700">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded border bg-white pl-14 pr-14 pt-9 pb-9 shadow">
              <Image width={60} height={60} className="mb-4 mt-0  " src={bug} />
              <p className="mt-3 text-lg text-gray-700">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded border bg-white pl-14 pr-14 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={featureReq}
              />
              <p className="mt-3 text-lg text-gray-700">Content goes here</p>
            </div>
            <div className=" flex flex-col items-center justify-center rounded border bg-white pl-14 pr-14 pt-9 pb-9 shadow">
              <Image
                width={60}
                height={60}
                className="mb-4 mt-0  "
                src={bussinessReq}
              />
              <p className="mt-3 text-lg text-gray-700">Content goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
