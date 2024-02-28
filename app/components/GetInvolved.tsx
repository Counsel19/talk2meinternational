"use client";

import { FC } from "react";
import Bullet from "./Bullet";
import Image from "next/image";
import { motion } from "framer-motion";

interface GetInvolvedProps {}
const GetInvolved: FC<GetInvolvedProps> = ({}) => {
  const variantProps = {
    hidden: {
      opacity: 0,
      x: 50,
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
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={variantProps}
      className="md:px-[10%] px-4 my-36"
    >
      <div className="  mb-6 ">
        <div className="w-fit">
          <Bullet />
        </div>

        <h3 className="text-gray-800 text-3xl font-semibold">Get Involved</h3>
      </div>

      <div className="flex gap-20 items-center justify-between ">
        <div className="space-y-6 lg:w-1/2 relative">
          <div className="absolute right-0 h-[50px] lg:h-[100px] w-[50px] lg:w-[100px] bg-gray-200 top-0 lg:-top-20 rounded-tr-full" />
          <p className=" text-lg font-light text-gray-800 leading-8">
            We welcome anyone who shares our passion for godly relationships to
            join us in our mission. Whether you are seeking mentorship,
            interested in attending workshops, or simply want to engage with our
            online resources and community,{" "}
            <span className="text-primary-color font-semibold">
              Talk2Me&nbsp;International
            </span>{" "}
            is here for you.
          </p>
          <p className="text-lg font-light text-gray-800 leading-8">
            Together, let us create a culture of healthy and thriving
            relationships, guided by God&apos;s Word.
          </p>
          <div className="absolute left-0 h-[50px] lg:h-[100px] w-[50px] lg:w-[100px] bg-black lg:-bottom-28 rounded-bl-full" />
        </div>

        <div className="relative hidden w-[440px] h-[440px] lg:flex justify-center items-center ">
          <div className="absolute grid  w-[240px] h-[240px]  bg-white border-4 border-primary-color rounded-full animate-ping " />
          <div className="absolute grid w-[220px] h-[220px]  bg-white border-4 border-primary-color rounded-full animate-ping " />

          <div className="absolute grid w-[400px] h-[400px] overflow-hidden rounded-full shadow-xl border-2 border-rose-900 ">
            <Image
              src="/assets/young-love-on-grass.jpg "
              alt="teenage-fun-and-excitment"
              width={600}
              height={400}
              className="object-cover z-10 object-center w-full h-full  "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInvolved;
