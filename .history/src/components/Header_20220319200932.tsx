import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Button, IconButton } from "./Button";
import { ThemeSelect, ThemeToggle } from "./ThemeToggle";
import Logo from "./Logo";
import { AuthenticationDialog } from "./HomeComponents/AuthenticationDialog";
import { Menu } from "@headlessui/react";
import { useEffect, useRef } from "react";

export const Header: React.FC = () => {
  const [showAuth, setShowAuth] = useState(true);
  return (
    <>
      <header className="dark:bg-slate-900/75  sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg sm:py-3 sm:px-8">
        <MenuPopOver
          className="grow-0 basis-1/3"
          display="md:hidden"
          setShowAuth={setShowAuth}
        />
        <Link href="/">
          <a className="my-auto flex w-[140px] md:ml-0">
            <Logo />
          </a>
        </Link>
        <div className="flex shrink-0 grow-0  items-center justify-center md:justify-start">
          <div className="hidden gap-2 md:ml-2 md:flex">
            <div className="mr-2 ml-2">
              <Link href="/#" passHref>
                Purchase
              </Link>
            </div>
            <div>
              <div className="ml-2 mr-2 text-right">
                <Menu as="div" className="relative ">
                  <div>
                    <Menu.Button className="text-black inline-flex w-full  justify-center font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <Link href="/#" passHref>
                        Products
                      </Link>{" "}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="divide-gray-100 ring-black  absolute top-12 left-1 w-80 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <ul className="dropdown-menu    items-center  justify-center rounded-xl      text-lg ">
                        <div className="items-center justify-center bg-whiteBg  text-left shadow-xl">
                          <li className=" hover flex flex-col  pt-5 pl-5 pr-16  pb-7  hover:bg-textColor hover:text-whiteBg">
                            <span className="">AlgoExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the coding interview
                            </span>
                          </li>
                          <li className=" front_main_drop relative flex flex-col pt-5  pl-5 pr-16 pb-7  text-mainBg hover:bg-fColor  hover:text-white">
                            <span className="">FrontendExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the frontend interview
                            </span>
                            <div className="front_sub_drop absolute left-80 top-0 hidden w-64 items-center rounded-tr rounded-br bg-white pt-5  pb-5 pl-1     text-left  ">
                              <ul className="flex flex-wrap items-center">
                                <li className="bg-sky-100 text-sky-500 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-4xl  devicon-react-original colored"></i>
                                </li>
                                <li className="bg-gray-200 text-black rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-4xl  devicon-nextjs-original colored"></i>
                                </li>
                                <li className="bg-green-100 text-green-500 mt-2 mb-2 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className=" text-4xl  devicon-vuejs-plain colored"></i>
                                </li>
                                <li className="bg-red-100 text-red-500 mt-2 mb-2 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-4xl  devicon-angularjs-plain colored"></i>
                                </li>
                                <li className="bg-violet-100 text-violet-500 mt-2 mb-2 ml-2 mr-2 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-4xl  devicon-gatsby-plain colored"></i>
                                </li>
                                <li className="bg-yellow-100 text-yellow-500 mt-2 mb-2 ml-2 mr-2 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-4xl devicon-javascript-plain colored"></i>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className=" back_main_drop  flex flex-col pt-5  pl-5 pr-16 pb-7  text-mainBg hover:bg-beColor  hover:text-white">
                            <span className="">BackendExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the backend interview
                            </span>
                            <div className="back_sub_drop absolute left-80 top-48  hidden w-40 items-center rounded-tr rounded-br bg-white    pl-1     text-left  ">
                              <ul className="flex flex-wrap items-center">
                                <li className="bg-yellow-100 text-yellow-500 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-2xl devicon-python-plain colored"></i>
                                </li>
                                <li className="bg-green-200 text-green-500 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-2xl  devicon-spring-plain colored"></i>
                                </li>
                                <li className="bg-green-100 text-green-500 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-2xl  devicon-nodejs-plain colored"></i>
                                </li>
                                <li className="bg-red-100 text-red-500  rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-2xl  devicon-laravel-plain colored"></i>
                                </li>
                                <li className="bg-red-200 text-red-500  items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-2xl  devicon-rails-plain colored"></i>
                                </li>
                                <li className="bg-blue-100 text-blue-500 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  <i className="text-4xl  devicon-dot-net-plain colored"></i>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className=" flex flex-col pt-5  pl-5 pr-16 pb-7  text-mainBg hover:bg-seColor  hover:text-white">
                            <span className="">SystemExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the system design interview
                            </span>
                          </li>
                        </div>
                      </ul>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <div>
              <div className="ml-2 mr-2 text-right">
                <Menu as="div" className="relative ">
                  <div className="mr-2 ml-2">
                    <Menu.Button className="text-black inline-flex w-full  justify-center font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <Link href="/#" passHref>
                        Contents
                      </Link>{" "}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="divide-gray-100 ring-black  absolute top-12 left-1 w-80 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <ul className="dropdown-menu   items-center  justify-center rounded-xl      text-lg ">
                        <div className="items-center justify-center bg-whiteBg  text-left shadow-xl">
                          <li className=" hover:bg-sky-400 flex flex-col  pt-5 pl-5 pr-16  pb-7 text-textBold hover:text-whiteBg hover:text-white">
                            <span className="">AlgoExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the coding interview
                            </span>
                          </li>
                          <li className=" front_main_drop hover:bg-yellow-500 relative flex flex-col  pt-5 pl-5 pr-16  pb-7 text-textBold hover:text-whiteBg hover:text-white">
                            <span className="">FrontendExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the frontend interview
                            </span>
                            <div className="front_sub_drop absolute left-80 top-0 hidden w-64 items-center rounded-tr rounded-br bg-white pt-5  pb-5 pl-1     text-left  ">
                              <ul className="flex flex-wrap items-center">
                                <li className="bg-sky-100 text-sky-500 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  React.js
                                  <i className="devicon-react-original colored"></i>
                                </li>
                                <li className="bg-gray-200 text-black rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Next.js
                                  <i className="devicon-nextjs-original colored"></i>
                                </li>
                                <li className="bg-green-100 text-green-500 mt-2 mb-2 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Vue.js
                                  <i className="devicon-vuejs-plain colored"></i>
                                </li>
                                <li className="bg-red-100 text-red-500 mt-2 mb-2 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Angular.js
                                  <i className="devicon-angularjs-plain colored"></i>
                                </li>
                                <li className="bg-violet-100 text-violet-500 mt-2 mb-2 ml-2 mr-2 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Gatsby.js
                                  <i className="devicon-gatsby-plain colored"></i>
                                </li>
                                <li className="bg-yellow-100 text-yellow-500 mt-2 mb-2 ml-2 mr-2 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  JavaS
                                  <i className="devicon-javascript-plain colored"></i>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className=" back_main_drop hover:bg-red-700 flex flex-col  pt-5 pl-5 pr-16  pb-7 text-textBold hover:text-whiteBg hover:text-white">
                            <span className="">BackendExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the backend interview
                            </span>
                            <div className="back_sub_drop absolute left-80 top-48 hidden w-64 items-center rounded-tr rounded-br bg-white pt-5  pb-5 pl-1     text-left  ">
                              <ul className="flex flex-wrap items-center">
                                <li className="bg-yellow-100 text-yellow-500 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Django
                                  <i className="devicon-python-plain colored"></i>
                                </li>
                                <li className="bg-green-200 text-green-500 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Spring
                                  <i className="devicon-spring-plain colored"></i>
                                </li>
                                <li className="bg-green-100 text-green-500 mt-2 mb-2 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Node
                                  <i className="devicon-nodejs-plain colored"></i>
                                </li>
                                <li className="bg-red-100 text-red-500 mt-2 mb-2 ml-2 mr-2 rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Laravel
                                  <i className="devicon-laravel-plain colored"></i>
                                </li>
                                <li className="bg-red-200 text-red-500 mt-2 mb-2 ml-2 mr-2 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  Rails
                                  <i className="devicon-rails-plain colored"></i>
                                </li>
                                <li className="bg-blue-100 text-blue-500 mt-2 mb-2 ml-2 mr-2 items-center rounded-2xl pl-3 pr-3 pt-1 pb-1">
                                  ASP .NET
                                  <i className="devicon-dot-net-plain colored"></i>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className=" hover:bg-green-500 flex flex-col  pt-5 pl-5 pr-16  pb-7 text-textBold hover:text-whiteBg hover:text-white">
                            <span className="">SystemExpert</span>
                            <span className="text-textSmColor text-sm">
                              Ace the system design interview
                            </span>
                          </li>

                          <li className=" hover:bg-orange-400 flex flex-col  pt-5 pl-5 pr-16  pb-7 text-textBold hover:text-whiteBg hover:text-white">
                            <span className="">ProgrammingExpert</span>
                            <span className="text-textSmColor text-sm">
                              Learn to code
                            </span>
                          </li>
                        </div>
                      </ul>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex  items-center ">
          <button
            className="hidden md:inline-flex"
            onClick={() => setShowAuth(true)}
          >
            Sign In
          </button>
          <ThemeToggle />
        </div>
      </header>
      <AuthenticationDialog
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
      />
    </>
  );
};

const MenuPopOver = ({ className, display, setShowAuth }: any) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(className, display)}>
      <IconButton
        variant="ghost"
        aria-label="Navigation Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx("fixed inset-0 z-50 ", display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-black/20 dark:bg-gray-900/80 fixed inset-0 backdrop-blur-sm" />
          </Transition.Child>

          <div className="dark:bg-gray-800 fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg ">
            <a className="mx-auto mt-4 flex w-[140px]">
              <Logo />
            </a>
            <ul className="mt-8 space-y-3">
              <li className="hover:bg-slate-200/50 group relative flex h-9 items-center overflow-hidden rounded-md">
                <span className="bg-indigo-700 absolute h-full w-2 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="/#" passHref>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Companies
                  </a>
                </Link>
              </li>
              <li className="hover:bg-slate-200/50 group relative flex h-9 items-center overflow-hidden rounded-md">
                <span className="bg-indigo-700 absolute h-full w-2 opacity-0 transition-all group-hover:opacity-100" />
                <Link href="/#" passHref>
                  <a className="w-full font-medium transition-all group-hover:pl-3">
                    Jobs
                  </a>
                </Link>
              </li>
            </ul>

            <div className="border-gray-200 dark:border-gray-200/10 mt-6 border-t pt-6">
              <ThemeSelect />
            </div>
            <ul className="border-gray-200 dark:border-gray-200/10 mt-8 space-y-3 border-t">
              <li>
                <Button
                  variant="solid"
                  fullWidth
                  onClick={() => setShowAuth(true)}
                >
                  Sign In
                </Button>
              </li>
              <li>
                <Link href="/#" passHref>
                  <Button as="a" variant="outline" fullWidth>
                    For Employers
                  </Button>
                </Link>
              </li>
            </ul>

            <IconButton
              variant="ghost"
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg
                viewBox="0 0 10 10"
                className="h-2.5 w-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
