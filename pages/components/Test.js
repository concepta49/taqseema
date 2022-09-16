import React, { useState } from "react";
import Link from "next/link";

export default function Test() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-[#c026d3] shadow lg:p-5 p-1">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-left py-5 ">
          
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center mr-12 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-left font-bold justify-left space-y-8 md:flex md:space-x-12 md:space-y-0">
              <li className="text-white cursor-pointer  hover:text-[black] duration-500">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xl hover:text-[black] text-bold duration-500 text-white"
                  >
                    HOME
                  </a>
                </Link>{" "}
              </li>
              <li className="text-white cursor-pointer  hover:text-[black] duration-500">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xl hover:text-[black] text-bold duration-500 text-white"
                  >
                    ABOUT US
                  </a>
                </Link>{" "}
              </li>
              <li className="text-white cursor-pointer  hover:text-[black] duration-5000">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xl hover:text-[black] text-bold duration-500 text-white"
                  >
                    FEATURES
                  </a>
                </Link>{" "}
              </li>
              <li className="text-white cursor-pointer  hover:text-[black] duration-500">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xl hover:text-[black] text-bold duration-500 text-white"
                  >
                    PLANS
                  </a>
                </Link>{" "}
              </li>
              <li className="text-white cursor-pointer  hover:text-[black] duration-500">
                <Link href="/">
                  <a
                    href="#"
                    className="text-xl hover:text-[black] text-bold duration-500 text-white"
                  >
                    FAQ
                  </a>
                </Link>{" "}
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center font-bold text-black bg-[#fff]  rounded-lg border-[#c026d3] shadow hover:bg-[#c026d3] border-2"
              >
               SIGN IN
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center font-bold text-black bg-[#fff]  rounded-lg border-[#c026d3] shadow hover:bg-[#c026d3] border-2"
              >
                SING UP
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-10 py-2 text-black bg-[#fff] font-bold rounded-lg border-[#c026d3] shadow hover:bg-[#c026d3] border-2"
          >
            SIGN IN
          </a>
          <a
            href="javascript:void(0)"
            className="px-10 py-2 text-black bg-[#fff] font-bold rounded-lg shadow border-[#c026d3] hover:bg-[#c026d3] border-2"
          >SIGN UP
          </a>
        </div>
      </div>
    </nav>
  );
}
