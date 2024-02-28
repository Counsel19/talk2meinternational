"use client";

import { FC, useEffect, useRef } from "react";
import WhatWeDoCard from "./WhatWeDoCard";
import Bullet from "./Bullet";
import { useDispatch } from "react-redux";
import { setWhatWeDoOffset } from "@/lib/redux/slices/AppSlice";

interface WhatWeDoProps {}
const WhatWeDo: FC<WhatWeDoProps> = ({}) => {
  const whatWeDoRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (whatWeDoRef.current) {
      dispatch(setWhatWeDoOffset(whatWeDoRef.current.offsetTop));
    }
  }, [whatWeDoRef.current]);

  return (
    <div id="what-we-do" ref={whatWeDoRef} className="my-16 ">
      <div className=" mb-6 lg:px-[10%] px-4 md:px-6">
        <div className="w-fit">
          <Bullet />
        </div>

        <h3 className="text-gray-800 text-3xl font-semibold">What We Do</h3>
      </div>

      <div>
        {whatWeDoData.map((data, index) => (
          <WhatWeDoCard
            key={index}
            {...data}
            isVariant={(index + 1) % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

const whatWeDoData = [
  {
    image: "/assets/teens-mentorship-session.jpg",
    title: "Mentorship Programs",
    content: `We offer one-on-one mentorship programs for teens, youths, and adults where our experienced mentors provide guidance tailored to individual needs. Our mentors impart biblical wisdom and provide valuable insights to help individuals navigate the complexities of relationships.`,
  },
  {
    image: "/assets/events.jpg",
    title: "Events",
    content: `We conduct networking sessions, workshops and seminars that dive deep into various aspects of relationships.These sessions cover topics such as communication skills, conflict resolution, building trust, fostering intimacy, and more. Our goal is to equip individuals with practical tools to enhance their relationships.`,
  },
  {
    image: "/assets/couples-looking-at-phone.jpg",
    title: "Online Resources",
    content: `We provide a wealth of online resources, including articles, blogs, videos, and podcasts, designed to educate and inspire individuals on their journey towards godly relationships. Our content covers a wide range of topics, offering practical advice and biblical perspectives.`,
  },
  {
    image: "/assets/mutual-relationship.jpg",
    title: "Supportive Community",
    content: `We believe in the power of community, and we foster a supportive network of individuals who are dedicated to building godly relationships. Our community provides a safe space for discussions, sharing experiences, and seeking advice from like-minded individuals who are passionate about pursuing relationships that honor God.`,
  },
];

export default WhatWeDo;
