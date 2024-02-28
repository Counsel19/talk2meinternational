"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

interface WhatWeDoCardProps {
  image: string;

  title: string;
  content: string;
  isVariant: boolean;
}
const WhatWeDoCard: FC<WhatWeDoCardProps> = ({
  image,
  title,
  content,
  isVariant,
}) => {
  const vX = isVariant ? -50 : 50;

  const leftVarProps = {
    hidden: {
      opacity: 0,
      x: isVariant ? 50 : -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const rightVarProps = {
    hidden: {
      opacity: 0,
      x: isVariant ? -50 : 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div
      className={`lg:px-[10%] px-4 md:px-6 lg:gap-24 gap-10 flex lg:py-24 py-10  flex-col ${
        isVariant ? "bg-gray-200  md:flex-row-reverse" : "bg-white  md:flex-row"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={leftVarProps}
        className=" relative  w-full  md:w-[350px] lg:w-[500px] h-[300px] "
      >
        <Image
          src={image}
          alt={title}
          height={300}
          width={500}
          className="relative rounded-lg object-cover shadow-xl z-10 h-full max-h-full"
        />
        <div
          className={`hidden md:flex absolute rounded-xl w-full h-full   ${
            isVariant ? "bg-gray-400 " : "bg-gray-500"
          } translate-x-[20px] translate-y-[20px] top-2 z-0`}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={rightVarProps}
        className="relative flex-1 "
      >
        <div className="mb-6">
          <h3 className="text-2xl uppercase font-semibold max-w-[200px]">
            {title}
          </h3>
        </div>
        <p className="text-lg leading-8 text-slate-600">{content}</p>

        {isVariant ? (
          <div className="absolute right-0 h-[50px] lg:h-[100px] w-[50px] lg:w-[100px] bg-primary-color top-0 lg:-top-20 rounded-bl-full" />
        ) : (
          <div className="absolute right-0 h-[50px] lg:h-[100px] w-[50px] lg:w-[100px] bg-black top-0 lg:-top-20 rounded-tr-full" />
        )}
      </motion.div>
    </div>
  );
};

export default WhatWeDoCard;
