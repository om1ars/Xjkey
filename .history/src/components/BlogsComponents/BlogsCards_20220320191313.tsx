import React from "react";

export default function BlogsCards() {
  return (
    <div>
      <div className="flex bg-whiteBg">
        <div className="container mx-auto px-10 align-middle">
          <div className="flex flex-col gap-3 flex-wrap">
                <div className="rounded border-l-4 border-buttonBg bg-white py-3 px-5 shadow">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-2xl">Movies viewed</h6>
                  <h4 className="text-left text-4xl font-bold text-black">
                    33
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-left">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#14B8A6"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </span>
                <p>
                  <span className="font-bold text-teal-500">3%</span> in 7 days
                </p>
              </div>
            </div>
            <div className="rounded border-l-4 border-buttonBg bg-white py-3 px-5 shadow">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h6 className="text-2xl">Serials viewed</h6>
                  <h4 className="text-left text-4xl font-bold text-black">
                    41
                  </h4>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF4444"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-left">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF4444"
                    strokeWidth="{2}"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                    />
                  </svg>
                </span>
                <p>
                  <span className="font-bold text-red-500">12%</span> in 7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
