"use client"

import { Handshake , Church, HandHeart , Palmtree } from "lucide-react";
import { FC } from "react";
import { motion } from "framer-motion"; 

interface ValueCardProps {
  id: string;
  title: string;
  content: string;
}
const ValueCard: FC<ValueCardProps> = ({
  id,
  title,
  content,
}) => {
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
    variants={variantProps}
      className={`bg-white py-6 px-4 rounded-lg shadow-md hover:shadow-xl  transition duration-200 border-2 border-gray-300 hover:border-rose-300`}
    >
      <div className="flex flex-col gap-20 justify-between">
        <div>
          {id === "01" ? (
            <Church size={40} className="text-primary-color" />
          ) : id === "02" ? (
            <Handshake size={40} className="text-primary-color" />
          ) : id === "03" ? (
            <HandHeart size={40} className="text-primary-color" />
          ) : (
            <Palmtree size={40} className="text-primary-color" />
          )}
        </div>

        <div className=" space-y-3">
          <span className={`font-thin text-lg text-black `}>{id}</span>

          <h3 className={`text-2xl font-normal text-black`}>{title}</h3>
          <hr className="" />
          <p className={` text-gray-800 font-light leading-7`}>{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ValueCard;
