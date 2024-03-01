import Image from "next/image";
import { FC } from "react";
import Bullet from "./Bullet";
import { motion } from "framer-motion";

interface TeamProps {}

const leftVarProps = {
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

const rightVarProps = {
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

const Team: FC<TeamProps> = ({}) => {
  return (
    <div className="md:px-[10%] px-4 mb-24">
      <div className="mb-8">
        <div className="w-fit">
          <Bullet />
        </div>
        <h2 className="text-black text-2xl md:text-3xl font-semibold">Team</h2>
      </div>
      <div className="flex w-full gap-20 md:gap-28 flex-col md:flex-row">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={leftVarProps}
          className="flex-1 "
        >
          <div className="w-full h-[300px] md:h-[500px] overflow-hidden flex justify-center rounded-tl-2xl rounded-tr-2xl ">
            <Image
              width={700}
              height={600}
              src={"/assets/OluAwopetu.jpg"}
              alt="Olu Awopetu"
              className="object-cover"
            />
          </div>
          <div className="bg-primary-color p-6 ">
            <h4 className="font-semibold leading-8 text-lg text-white ">
              Olu Awopetu
            </h4>
            <span className="font-light text-sm text-slate-100">
              Co-Founder
            </span>
          </div>
          <div className=" bg-gray-100 p-4">
            <p className="font-light leading-8 mb-2">
              Olu Awopetu is a pastor, mentor, author, keynote speaker, and co-
              founder of Talk2me International.
            </p>
            <p className="font-light leading-8 mb-2">
              As a Chartered Accountant, he has many years of experience working
              in the technology field and enjoys empowering and educating people
              on business and entrepreneurship.
            </p>
            <p className="font-light leading-8 mb-2">
              Olu is passionate about relationships and marriages. He and his
              wife have been mentoring youths and young adults for more than 15
              years. He has also written a book a relationship, tittled
              &apos;Yes You Can Move On.&apos; The book is listed on Amazon.
            </p>
            <p className="font-light leading-8 mb-2">
              He also has one of his lectures listed on Udemy, a renowned
              training and career plartfom.
            </p>
            <p className="font-light leading-8 mb-2">
              Olu&apos;s love for knowledge and technology inspired him to
              become a certified Scrum Master and a Product Owner. He is a also
              cryptocurrency investor and coach
            </p>
            <p className="font-light leading-8 mb-2">
              He is the co-founder of Talk2me International, a charity
              organisation that was established over 15 years ago.
            </p>
            <p className="font-light leading-8 mb-2">
              He is married to his beautiful wife of over 23 years with 3
              children.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={rightVarProps}
          className="flex-1"
        >
          <div className="w-full h-[300px] md:h-[500px] overflow-hidden flex justify-center rounded-tl-2xl rounded-tr-2xl ">
            <Image
              width={700}
              height={600}
              src={"/assets/ToluAwopetu.jpg"}
              alt="Tolu Awopetu"
              className="object-cover"
            />
          </div>
          <div className="bg-primary-color p-6 ">
            <h4 className="font-semibold leading-8 text-lg text-white ">
              Tolu Awopetu
            </h4>
            <span className="font-light text-sm text-slate-100">Founder</span>
          </div>
          <div className="bg-gray-100 p-4">
            <p className="font-light leading-8 mb-2">
              Tolu Awopetu is a highly accomplished relationship coach, speaker,
              and author, known for her passion for helping young adults
              discover their purpose, while preparing them for marital success.
              She is also renowned for helping married couples improve their
              relationships towards achieving lasting marital bliss. With over
              15 years of experience in the field, Tolu has become a trusted
              name in the premarital and marital coaching industry, empowering
              countless clients to unlock their full potential and make tangible
              change in their relationships.
            </p>
            <p className="font-light leading-8 mb-2">
              Tolu&apos;s journey into coaching began with her own personal
              experiences of transformation and growth. Through her marital
              journey, she discovered the power of self-awareness, resilience,
              and intentional living. Motivated by this life-changing encounter,
              Tolu dedicated herself to guiding others on their own journeys of
              self-discovery, growth, and marital success.
            </p>
            <p className="font-light leading-8 mb-2">
              Tolu&apos;s expertise extends to a wide range of areas, including
              personal growth, leadership development and mentoring. Through her
              coaching programs and communities, she has helped many singles
              reach their full potential while making informed marital choices
              towards happily ever after. She has also helped many married
              people build purposeful and fulfilling marriages.
            </p>
            <p className="font-light leading-8 mb-2">
              The evidence of her practical coaching strategies abound in the
              many success stories of her happy clients all over the world
            </p>
            <p className="font-light leading-8 mb-2">
              In addition to her coaching work, Tolu is a published author,
              whose insights and teachings have been highly valued, making her a
              sought-after speaker at relationship conferences around the world.
              She is a co-pastor at RCCG, Power of Jehovah, Essex, UK, where she
              pastors with her beloved husband of 26yrs, Oluwagbenga
            </p>
            <p className="font-light leading-8 mb-2">
              She is the founder of Talk2Me International, a charity dedicated
              to empowering and mentoring young adults for successful
              relationships.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
