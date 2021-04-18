import React from "react";
import { useRouter } from "next/router";

import LogoFull from "../svg/TEC-Logo-Full-Light.svg";
import LogoCompact from "../svg/TEC-Logo-Compact-Light.svg";

const navItems = [
  ["About", "#about"],
  ["Mission", "#mission"],
  ["Community", "#community"],
  ["Ecosystem", "#ecosystem"],
  ["Forum", "https://forum.tecommons.org/"],
];

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="tec-bg-gradient-1">
      <div className="px-2 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-6 lg:py-8">
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-tec-blue hover:bg-tec-yellow focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleOpen}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0">
              <div className="block lg:hidden">
                <a href="/">
                  <LogoCompact className="w-20" />
                </a>
              </div>
              <div className="hidden lg:block">
                <a href="/">
                  <LogoFull className="w-52" />
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6 sm:w-full">
              <div className="flex items-center justify-end h-full">
                {navItems.map((item) => (
                  <a
                    key={item[0]}
                    href={item[1]}
                    className="px-3 py-2 text-base font-semibold text-white uppercase bai-jamjuree hover:text-tec-yellow"
                  >
                    {item[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="hidden lg:block bai-jamjuree font-semibold uppercase semibold bg-tec-yellow focus:outline-none text-black text-base py-2.5 px-5"
              onClick={() => router.push("/join")}
            >
              Get involved
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item[0]}
                href={item[1]}
                className="block px-3 py-2 text-base font-semibold text-white uppercase rounded-md bai-jamjuree hover:text-tec-yellow"
              >
                {item[0]}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
