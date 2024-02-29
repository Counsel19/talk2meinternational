"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, useEffect, useState } from "react";
import Bullet from "./Bullet";
import { motion } from "framer-motion";

interface HeroCaroselProps {}

const heroData = [
  {
    id: "1",
    content: `A happy and stable relationship is possible with the right mentoring`,
    image: "bg-[url('/assets/excited-partners.jpg')]",
    bgPosition: "bg-center",
  },
  {
    id: "2",
    content: `With Talk2Me International, you will never have to navigate the complexities of relationships alone. `,
    image: "bg-[url('/assets/teenage-fun-and-excitment.jpg')]",
    bgPosition: "bg-center",
  },
  {
    id: "3",
    content: `Let us walk alongside you on the journey towards building a godly and Bible-based relationship. `,
    image: "bg-[url('/assets/happy-love-holding-hands.jpg')]",
    bgPosition: "bg-center",
  },
];

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
  exit: {
    opacity: 0,
  },
};

const HeroCarosel: FC<HeroCaroselProps> = ({}) => {
  const [current, setCurrent] = useState(0);
  const [progressWidth, setProgressWidth] = useState("w-[100px]");

  useEffect(() => {
    // Auto-slide every 3 seconds (adjust as needed)
    const slideInterval = setInterval(() => {
      setCurrent((current) => (current + 1) % heroData.length);
    }, 7000);

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    handleSelect(current);
  }, [current]);

  const handleNext = () => {
    setCurrent((current + 1) % heroData.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + heroData.length) % heroData.length);
  };

  const handleSelect = (index: number) => {
    setCurrent(index);
    if (index === 0) setProgressWidth("w-[100px]");
    else if (index === 1) setProgressWidth("w-[200px]");
    else if (index === 2) setProgressWidth("w-[300px]");
  };

  return (
    <div id="#top" className=" relative">
      {heroData.map(
        (hero, index) =>
          current === index && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={childVariant}
              key={hero.id}
              className={`relative vh-subtract-40 lg:h-screen ${hero.image} bg-no-repeat ${hero.bgPosition} bg-cover`}
            >
              <button
                onClick={() => handlePrev()}
                className="bg-white z-10 w-20 md:w-[100px] h-16 md:h-[80px] absolute top-[35%]  left-0  grid place-content-center"
              >
                <ChevronLeft size={45} className="text-gray-900" />
              </button>
              <div className="absolute lg:right-10 bottom-24 z-10 lg:w-[600px] mx-4 font-semibold text-white text-2xl lg:text-3xl lg:p-6 p-4 bg-gray-900 bg-opacity-50">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="w-fit">
                    <Bullet />
                  </div>

                  <h4 className="grid leading-8 lg:leading-10">
                    {hero.content}
                  </h4>
                </div>
              </div>

              <div className="absolute left-10 bottom-7 lg:bottom-20 z-10">
                <div className=" grid grid-cols-3 text-white text-lg md:text-2xl mb-2">
                  <button onClick={() => handleSelect(0)}>01</button>
                  <button onClick={() => handleSelect(1)}>02</button>
                  <button onClick={() => handleSelect(2)}>03</button>
                </div>
                <div className="w-[300px] h-2 bg-white rounded-md">
                  <div
                    className={`h-full rounded-md ${progressWidth} transition duration-500 bg-primary-color`}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => handleNext()}
                className="bg-white z-10 w-20 md:w-[100px] h-16 md:h-[80px] absolute bottom-[35%]  right-0 grid place-content-center"
              >
                <ChevronRight size={45} className="text-gray-900" />
              </button>
            </motion.div>
          )
      )}

      <div className="h-[700px] w-full absolute top-0 bg-hero-gradient" />
    </div>
  );
};

export default HeroCarosel;
