import Hero from "@/components/HomeComponents/Hero";
import React from "react";
import product from "../../public/flaticons/product.png";
import purchasing from "../../public/flaticons/credit-cards-payment.png";
import issues from "../../public/flaticons/settings.png";
import bug from "../../public/flaticons/bug.png";
// import featureReq from "../../public/flaticons/lightbuld.png";
import bussinessReq from "../../public/flaticons/handshake.png";

export default function Help() {
  return (
    <div>
      <Hero title="You have questions?" subtitle="We have answers" />
      <div className="">
        <div
          className="flex  items-center bg-indigo-100 p-6"
          style={{ fontFamily: '"Muli", sans-serif' }}
        >
         </div>
      </div>
    </div>
  );
}
