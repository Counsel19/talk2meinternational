"use client";

import React, { FC, useEffect, useState } from "react";
import Brand from "./Brand";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

interface NavbarProps {
  target: React.RefObject<HTMLElement>;
}
const Navbar: FC<NavbarProps> = ({ target }) => {
  const [scrolling, setScrolling] = useState(false);
  const { aboutOffset, whatWeDoOffset, valueOffset, contactOffset } = useSelector(
    (store: RootState) => store.app
  );
  const [currentScroll, setCurrentScroll] = useState(0);
const [ refReady, setRefReady] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);

        setCurrentScroll(
          window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop
        );
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if(aboutOffset && whatWeDoOffset && valueOffset) setRefReady(true)
    }, [aboutOffset, whatWeDoOffset, valueOffset])

  return (
    <div
      className={`max-w-full  ${
        scrolling ? "bg-white bg-opacity-90 shadow-lg" : "bg-transparent "
      } fixed top-0 py-0 md:py-4 z-20 w-full`}
    >
      <div className="px-4 lg:px-[10%] mx-auto flex justify-between gap-6  items-center">
        <Brand />

        <div className=" flex lg:gap-8 justify-between items-center uppercase text-slate-900  ">
          <Link
            href="#about"
            className={`hidden lg:flex transition-all duration-500 ease-in-out py-3 px-4 hover:bg-gray-200  font-semibold border-b-2  hover:border-primary-color ${
              aboutOffset &&
              whatWeDoOffset &&
              valueOffset &&
              currentScroll >= aboutOffset &&
              currentScroll < whatWeDoOffset &&
              currentScroll < valueOffset
                ? "bg-gray-200 border-primary-color"
                : "border-transparent"
            }  `}
          >
            About
          </Link>
          <Link
            href="#what-we-do"
            className={`hidden lg:flex transition-all duration-500 ease-in-out py-3 px-4 font-semibold hover:bg-gray-200  border-b-2  hover:border-primary-color ${
              aboutOffset &&
              whatWeDoOffset &&
              valueOffset &&
              currentScroll > aboutOffset &&
              currentScroll >= whatWeDoOffset &&
              currentScroll < valueOffset
                ? "bg-gray-200 border-primary-color"
                : "border-transparent"
            } `}
          >
            What We do
          </Link>
          <Link
            href="#values"
            className={`hidden lg:flex transition-all duration-500  ease-in-out font-semibold  py-3 px-4 hover:bg-gray-200  border-b-2  hover:border-primary-color ${
              aboutOffset &&
              whatWeDoOffset &&
              valueOffset &&
              contactOffset &&
              currentScroll > aboutOffset &&
              currentScroll > whatWeDoOffset &&
              currentScroll >= valueOffset &&
              currentScroll < contactOffset
                ? "bg-gray-200 border-primary-color"
                : "border-transparent"
            } `}
          >
            Values
          </Link>
          <Link
          
            href="#contact"
            className="transition-all duration-500 ease-in-out text-sm md:text-normal bg-primary-color py-3 px-4 rounded-lg text-secondary-color font-semibold hover:bg-rose-800 hover:text-white"
          >
           Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
