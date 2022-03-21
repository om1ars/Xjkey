import Hero from "@/components/HomeComponents/Hero";
import React from "react";
import product from "../../public/flaticons/product.png";
import purchasing from "../../public/flaticons/credit-card-payment.png";
import issues from "../../public/flaticons/settings.png";
import bug from "../../public/flaticons/bug.png";
import featureReq from "../../public/flaticons/lightbuld.png";
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
          <div className="container ml-auto mr-auto flex flex-wrap items-start">
            <div className="mb-4 mt-4 w-full pl-5 lg:pl-2">
              <h1 className="text-3xl font-extrabold text-gray-700 lg:text-4xl">
                Best Sellers
              </h1>
            </div>
            <div className="mb-5 w-full pl-5 pr-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
              <div className="m-h-64 transform rounded-lg bg-white p-2 transition duration-300 hover:translate-y-2 hover:shadow-xl">
                <figure className="mb-2">
                  <img src={product} alt="" className="ml-auto mr-auto h-64" />
                </figure>
              </div>
            </div>
            <div className="mb-5 w-full pl-5 pr-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
              <div className="m-h-64 transform rounded-lg bg-white p-2 transition duration-300 hover:translate-y-2 hover:shadow-xl">
                <figure className="mb-2">
                  <img
                  src={purchasing}
                    alt=""
                    className="ml-auto mr-auto h-64"
                  />
                </figure>
                <div className="flex flex-col rounded-lg bg-purple-600 p-4">
                  <div>
                    <h5 className="text-2xl font-bold leading-none text-white">
                      iPhone 11
                    </h5>
                    <span className="text-xs leading-none text-gray-400">
                      Just the right amount of everything.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg font-light text-white">$699,00</div>
                    <button
                      // href="javascript:;"
                      className="ml-auto flex h-10 w-10 rounded-full bg-purple-800 text-white transition duration-300 hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="m-auto stroke-current"
                      >
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 w-full pl-5 pr-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
              <div className="m-h-64 transform rounded-lg bg-white p-2 transition duration-300 hover:translate-y-2 hover:shadow-xl">
                <figure className="mb-2">
                  <img
                    src="https://srv-cdn.onedio.com/store/988bccbdb9ca395f581f98faa9ce3a55123f12bfcef608c838532b813646e557.png"
                    alt=""
                    className="ml-auto mr-auto h-64"
                  />
                </figure>
                <div className="flex flex-col rounded-lg bg-gray-700 p-4">
                  <div>
                    <h5 className="text-2xl font-bold leading-none text-white">
                      iPhone XR
                    </h5>
                    <span className="text-xs leading-none text-gray-400">
                      Brilliant. In every way.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg font-light text-white">$599,00</div>
                    <button
                      // href="javascript:;"
                      className="ml-auto flex h-10 w-10 rounded-full bg-gray-900 text-white transition duration-300 hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="m-auto stroke-current"
                      >
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 w-full pl-5 pr-5 md:w-1/2 lg:w-1/4 lg:pl-2 lg:pr-2">
              <div className="m-h-64 transform rounded-lg bg-white p-2 transition duration-300 hover:translate-y-2 hover:shadow-xl">
                <figure className="mb-2">
                  <img
                    src="https://srv-cdn.onedio.com/store/cfdd8ebc1b39e215c44c7c9a02bfaa49287f79b806ec5743124d0aea25c2b0c3.png"
                    alt=""
                    className="ml-auto mr-auto h-64"
                  />
                </figure>
                <div className="flex flex-col rounded-lg bg-gray-600 p-4">
                  <div>
                    <h5 className="text-2xl font-bold leading-none text-white">
                      iPhone SE
                    </h5>
                    <span className="text-xs leading-none text-gray-400">
                      Lots to love. Less to spend.
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg font-light text-white">$399,00</div>
                    <button
                      // href="javascript:;"
                      className="ml-auto flex h-10 w-10 rounded-full bg-gray-800 text-white transition duration-300 hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="m-auto stroke-current"
                      >
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
