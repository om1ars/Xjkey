import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="mt-6 rounded-lg bg-whiteBg p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Centrol Code™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <div className="mr-4 hover:underline md:mr-6 ">
              <Link href="/help">Contact Us</Link>
            </div>
          </li>
          <li>
            <div className="mr-4 hover:underline md:mr-6 ">
              <Link href="/help">FAQ</Link>
            </div>
          </li>
          <li>
            <div className="mr-4 hover:underline md:mr-6 ">
              <Link href="/blog">Blogs</Link>
            </div>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              <Link href="/privacy">Privacy Policy</Link>
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Legal Stuff
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
