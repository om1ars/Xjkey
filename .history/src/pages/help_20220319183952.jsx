import Hero from "@/components/HomeComponents/Hero";
import React from "react";
import product from "../../public/flaticons/product.png";
import purchasing from "../../public/flaticons/credit-cards-payment.png";
import issues from "../../public/flaticons/settings.png";
import bug from "../../public/flaticons/bug.png";
import featureReq from "../../public/flaticons/lamp.png";
import bussinessReq from "../../public/flaticons/handshake.png";
import Image from "next/image";

export default function Help() {
  return (
    <div>
      <Hero title="You have questions?" subtitle="We have answers" />
      <div className="">
        <div
          className="flex flex-wrap items-center justify-center gap-4 bg-indigo-100  p-6 w-6/12"
          style={{ fontFamily: '"Muli", sans-serif' }}
        >
         
      </div>
    </div>
  );
}
