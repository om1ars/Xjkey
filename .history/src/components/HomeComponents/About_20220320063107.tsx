import React, { useState } from "react";
import { GiBiplane, GiPlayButton } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";
// import ModalVideo from "react-modal-video";

export default function About() {
    const [isOpen, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-2 mb-2 text-4xl font-medium  text-mainBg ">
            What is Central Code?
          </h1>
          <div>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="L61p2uyiMSo"
              onClose={() => setOpen(false)}
            />
            <button className="btn-primary" onClick={() => setOpen(true)}>
              <div className="mt-3 flex items-center justify-center border-2 border-mainBg pl-4 pr-4 pt-2 pb-2 transition-all hover:bg-mainBg hover:text-white">
                <AiFillPlayCircle className="mr-3 text-2xl" />
                What is Central Code
              </div>
            </button>{" "}
          </div>
        </div>
        <div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-center">
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
            <div className="white flex w-80 flex-col  items-center justify-center pt-5 pb-5 pl-5 pr-5 transition hover:bg-white hover:shadow-xl">
              <GiBiplane />
              <h2 className="mt-2 mb-2 text-xl font-medium  text-mainBg">
                160 Hand-picked questions
              </h2>
              <p className="text-sm text-textColor">
                Coding interview prep is a numbers game that many candidates lose.
                Wee hand-picked 160 of the best coding interview questions to
                prepare you for every interview you could encounter.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
