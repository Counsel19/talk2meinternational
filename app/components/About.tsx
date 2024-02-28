"use client";

import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import Bullet from "./Bullet";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setAboutOffset } from "@/lib/redux/slices/appSlice";

const variantProps = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (aboutRef.current) {
      dispatch(setAboutOffset(aboutRef.current.offsetTop));
    }
  }, [aboutRef.current]);

  return (
    <div ref={aboutRef} id="about" className=" relative  ">
      <div className="bg-gray-200 h-[400px] pt-[100px]">
        <div className="lg:w-4/5 mx-auto px-4 md:px-6">
          <div className="w-fit">
            <Bullet />
          </div>
          <h2 className="text-black text-3xl font-semibold">
            About <br /> Talk2Me International
          </h2>
        </div>
      </div>

      <div className="absolute lg:left-[10%] left-6 top-[65%] right-0  bg-white p-4 md:p-10 lg:p-16 shadow-md">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={variantProps}
          className="max-w-[510px]"
        >
          <h4 className="text-xl mb-4 font-semibold text-gray-900 uppercase">
            Get to know us
          </h4>
          <p className="leading-7 text-lg text-gray-500">
            Talk2Me International is a non-profit organisation committed to
            mentoring teens, youths, and adults in embracing Godly and
            Bible-based relationships. We believe that healthy relationships are
            the foundation for a thriving society, and we are here to support
            individuals in their pursuit of such relationships.
          </p>
        </motion.div>

        <div className="absolute hidden md:flex  top-[-50%] lg:right-[15%] right-4   justify-center items-center">
          <div className=" animate-spin-slow transition duration-700 lg:w-[430px] md:w-[300px] lg:h-[430px] md:h-[300px] rounded-full border-b-4 border-primary-color  justify-center items-center" />
          <div className="absolute lg:w-[400px] md:w-[280px]  w-[100px] lg:h-[400px] md:h-[280px] h-[100px] rounded-full overflow-hidden flex justify-center items-center shadow-lg ">
            <Image
              fill
              src="/assets/love-fix.jpg"
              alt="love-fix"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
