import React from "react";

export default function Testimonials() {
  return (
    <div>
      <div className="min-h-screen w-full bg-blue-50 p-6">
        <h1 className="mb-4 text-center text-xl font-bold md:mt-12 md:text-3xl">
          Check out the <span className="text-red-500">Features</span> of our
          App
        </h1>
        {/* Card Container Start */}
        <div className="flex flex-wrap justify-center">
          <div className="m-6 flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md sm:w-52">
            <img src="images/database-icon.svg" alt="" className="m-6 h-20" />
            <h2 className="px-2 pb-5 text-center">Database Support</h2>
            <a
              href="#"
              className="bg-blue-500 p-3 text-center text-white transition-all duration-500 hover:bg-blue-800"
            >
              Know More
            </a>
          </div>
          <div className="m-6 flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md sm:w-52">
            <img src="images/email-icon.svg" alt="" className="m-6 h-20" />
            <h2 className="px-2 pb-5 text-center">Email Support</h2>
            <a
              href="#"
              className="bg-blue-500 p-3 text-center text-white transition-all duration-500 hover:bg-blue-800"
            >
              Know More
            </a>
          </div>
          <div className="m-6 flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md sm:w-52">
            <img src="images/chat-icon.svg" alt="" className="m-6 h-20" />
            <h2 className="px-2 pb-5 text-center">Chat Support</h2>
            <a
              href="#"
              className="bg-blue-500 p-3 text-center text-white transition-all duration-500 hover:bg-blue-800"
            >
              Know More
            </a>
          </div>
          <div className="m-6 flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md sm:w-52">
            <img src="images/terminal-icon.svg" alt="" className="m-6 h-20" />
            <h2 className="px-2 pb-5 text-center">Terminal Commands</h2>
            <a
              href="#"
              className="bg-blue-500 p-3 text-center text-white transition-all duration-500 hover:bg-blue-800"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
