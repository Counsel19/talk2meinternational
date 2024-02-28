"use client"

import { FC, useEffect, useRef } from "react";
import Bullet from "./Bullet";
import ValueCard from "./ValueCard";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setValuesOffset } from "@/lib/redux/slices/appSlice";

interface CoreValuesProps {}
const CoreValues: FC<CoreValuesProps> = ({}) => {
  const valueRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (valueRef.current) {
      dispatch(setValuesOffset(valueRef.current.offsetTop))
    }
  }, [valueRef.current]);

  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  

  return (
    <div id="values" ref={valueRef} className="lg:px-[10%] px-4 md:px-6 my-20">
      <div className="mb-6">
        <div className="w-fit">
          <Bullet />
        </div>

        <h3 className="text-gray-800 text-3xl font-semibold">Core Values</h3>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={parentVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {valuesData.map((item) => (
          <ValueCard key={item.id} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

const valuesData = [
  {
    id: "01",
    bgColor: "bg-black",
    iconColor: "text-white",
    title: "Faith",
    content:
      "We are promoting a strong Faith in God and the teachings of the Bible as a foundation for healthy relationships.",
  },
  {
    id: "02",
    bgColor: "bg-white",
    iconColor: "text-black",
    title: "Integrity",

    content: "We uphold Integrity in our teachings and interactions.",
  },
  {
    id: "03",
    bgColor: "bg-black",
    iconColor: "text-white",
    title: "Empathy",
    content:
      "We show Empathy towards those seeking guidance, providing them with a safe and non-judgmental space to share their struggles and receive support.",
  },
  {
    id: "04",
    bgColor: "bg-white",
    iconColor: "text-black",
    title: "Growth",
    content:
      "We foster Growth and personal development in the individuals we support.",
  },
];

export default CoreValues;
