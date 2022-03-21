import React from "react";

export default function BlogsCards() {
  return (
    <div>
      <div className="flex bg-whiteBg">
        <div className="container mx-auto px-10 align-middle">
          <div className="flex flex-col flex-wrap gap-10">
            <div className="rounded border-l-4 border-buttonBg bg-white py-3 px-5 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-xl text-textBold  font-semibold">
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
                  <span className="text-xs font-semibold  mr-2  text-buttonBg">
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
            <div className="rounded border-l-4 border-buttonBg bg-white py-3 px-5 shadow transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-xl text-textBold  font-semibold">
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
                  <span className="text-xs font-semibold  mr-2  text-buttonBg">
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
          </div>
        </div>
      </div>
    </div>
  );
}
