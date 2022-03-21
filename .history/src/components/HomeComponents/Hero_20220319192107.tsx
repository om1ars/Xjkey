import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Button, IconButton } from "../Button";

const Hero = ({ title, subtitle }: any) => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <div className="relative h-[640px] w-full bg-mainBg text-white sm:h-[55vh] md:h-[440px]">
        {/* <Image
          src="/img/corporate.jpg"
          alt="corporate"
          layout="fill"
          objectFit="cover"
        /> */}
        <div className="absolute inset-0 bg-neutral-900/70">
          <div className="mx-auto max-w-screen-lg">
            <div className="m-6 min-h-[60px]">
           
            </div>
            <div className="mx-4  flex flex-col items-center text-center">
              <h1 className="text-xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-3xl lg:text-4xl">
                {title}
              </h1>
              <span className="mt-6 text-xl text-white sm:text-2xl">
                {subtitle}
              </span>

              <div className="mt-8">
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroBottomCard /> */}
    </>
  );
};

export default Hero;

const HeroInnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative rounded bg-gradient-to-r from-purple-500 to-indigo-800 py-3 px-8 text-center text-white shadow-lg md:rounded-full">
        <p>
          Welcome to <span className="font-bold">HIREDLi</span>. An easier and
          faster job discovery platform.
        </p>
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>
      </div>
    </Transition>
  );
};

const items = [
  "Algorithms adn DSA",
  "Advanced React.js",
  "Interview questions",
];

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      if (!isDirty) {
        let value = items[index >= items.length ? (index = 0) : index];
        setQuery(value);
      }
      index++;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isDirty]);

  return (
    <form
      className="group"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div
        id="form-control"
        className="flex items-center overflow-hidden rounded-full bg-white shadow-md group-focus-within:ring-2 group-focus-within:ring-indigo-400 group-focus-within:ring-offset-2 group-focus-within:ring-offset-transparent"
      >
        <span className="pointer-events-none block px-2 text-slate-400 group-focus-within:text-indigo-800">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          className="w-full appearance-none border-transparent p-2 text-xl leading-6 text-slate-900 placeholder-slate-400 focus:border-transparent focus:ring-0"
          type="text"
          aria-label="Search input"
          placeholder="Search for anything"
          onClick={() => {
            if (!isDirty) {
              setIsDirty(true);
              setQuery("");
            }
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="hidden h-11 shrink-0 bg-textColor px-2 font-semibold text-white transition-colors duration-500 ease-in-out hover:bg-indigo-700 sm:block"
        >
          Discover Now
        </button>
      </div>
      <Button size="lg" type="submit" className="mt-8 sm:hidden">
        Discover Now
      </Button>
    </form>
  );
};
