"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface VisonMissionProps {}
const VisonMission: FC<VisonMissionProps> = ({}) => {
  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="bg-gradient pb-10 md:h-[1200px] pt-[300px] lg:px-[10%] px-4 md:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={parentVariants}
        className="relative h-full"
      >
        <motion.div
          variants={childVariant}
          className="hidden md:block bg-hero1 w-[450px] h-[350px] bg-no-repeat bg-contain absolute left-[35%] top-[30%] translate-x-[-50%]"
        />
        <motion.div
          variants={childVariant}
          className="hidden md:block bg-hero3 w-[450px] h-[350px] bg-no-repeat bg-contain absolute right-[30%] top-[20%] translate-x-[50%]"
        />

        <motion.div
          variants={childVariant}
          className="hidden md:block bg-hero2 w-[450px] h-[350px]  bg-no-repeat bg-contain absolute left-[45%] top-[62%] translate-x-[-50%]"
        />

        <motion.div
          variants={childVariant}
          className=" w-full md:w-[400px] h-fit md:h-[300px] px-4 py-10 lg:p-10 bg-black md:absolute left-[35%] top-[0%] md:translate-x-[-50%] grid place-content-center text-white"
        >
          <h3 className="text-lg font-semibold mb-2">Vision:</h3>
          <p className="text-sm leading-6 mb-2">
            Our vision is to cultivate a generation that flourishes in their
            relationships, guided by biblical principles and strengthened by
            mentorship.
          </p>
          <p className="text-sm">
            We envision a community where mutual respect, love, and
            understanding are the building blocks of lasting and meaningful
            connections.
          </p>
        </motion.div>
        <motion.div
          variants={childVariant}
          className="w-full md:w-[400px] h-fit md:h-[300px] bg-white px-4 py-10 md:p-10 md:absolute right-[30%] top-[45%] md:translate-x-[50%] grid place-content-center"
        >
          <h3 className="text-lg font-semibold mb-2">Mission:</h3>
          <p className="text-sm leading-6 mb-2 text-gray-500">
            At Talk2Me International, our mission is to provide guidance,
            education, and mentorship to individuals seeking to develop and
            sustain godly relationships. Through informative resources,
            personalised mentoring sessions, and supportive communities, we aim
            to empower individuals to build strong, healthy, and fulfilling
            relationships.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VisonMission;
