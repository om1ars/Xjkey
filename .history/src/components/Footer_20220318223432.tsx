import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-darkBg text-whiteBg flex flex-col items-center justify-center pl-48 pr-48 pt-16 pb-10">
        <div className="flex ">
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">Contact us</span>
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">FAQ</span>
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">Reviews</span>
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">Blog</span>
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">Jobs</span>
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2 ">Legal stuff</span>
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
          <div className="ml-4 flex ">
            <div className=" bg-gray-500 ml-2 w-0.5"></div>
          </div>
        </div>
        <div className="mt-6">
          <span>Copyright © 2017-2022 EzCode LLC. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
