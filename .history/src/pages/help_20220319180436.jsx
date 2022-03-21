import Hero from "@/components/HomeComponents/Hero";
import React from "react";
import product from "../../public/flaticons/product.png";
import purchasing from "../../public/flaticons/credit-cards-payment.png";
import issues from "../../public/flaticons/settings.png";
import bug from "../../public/flaticons/bug.png";
// import featureReq from "../../public/flaticons/lightbuld.png";
import bussinessReq from "../../public/flaticons/handshake.png";
import Image from "next/image";

export default function Help() {
  return (
    <div>
      <Hero title="You have questions?" subtitle="We have answers" />
      <div className="">
        <div
          className="flex  items-center bg-indigo-100 p-6"
          style={{ fontFamily: '"Muli", sans-serif' }}
        >
          <div className=" flex flex-col items-center justify-center rounded border bg-white pl-16 pr-16 pt-9 pb-9 shadow">
            <Image
              width={60}
              height={60}
              className="mb-4 mt-0  "
              src={product}
            />
            <p className="text-sm mt-6 text-gray-700">Content goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
