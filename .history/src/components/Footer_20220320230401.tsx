import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-whiteBg mt-10 text-textBold flex flex-col items-center justify-center pl-48 pr-48 pt-8 pb-10">
        <div className="sm:flex sm:flex-wrap md:flex md:flex-wrap lg:flex ">
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">
              <Link href="/help">Contact us</Link>
            </span>
            <div className=" ml-2 w-0.5 bg-textColor"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">
              <Link href='/help'>
                FAQ
              </Link>
            </span>
            <div className=" ml-2 w-0.5 bg-textColor"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">Reviews</span>
            <div className=" ml-2 w-0.5 bg-textColor"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">
              <Link href='/blog'>
                Blogs
              </Link>
            </span>
            <div className=" ml-2 w-0.5 bg-textColor"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2">Jobs</span>
            <div className=" ml-2 w-0.5 bg-textColor"></div>
          </div>
          <div className="ml-4 flex ">
            <span className="mr-2 ml-2 ">
              <Link>
            </span>
          </div>
        </div>
        <div className="mt-6">
          <span>Copyright © 2017-2022 Centrol Code LLC. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
