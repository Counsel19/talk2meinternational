"use client";

import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import Bullet from "./Bullet";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setContactOffset } from "@/lib/redux/slices/appSlice";
import axios, { AxiosError } from "axios";
// @ts-ignore
import { TailSpin } from "react-loader-spinner";

const init = {
  firstname: "",
  lastname: "",
  email: "",
  subjectLine: "",
  message: "",
};

interface ContactProps {}
const Contact: FC<ContactProps> = ({}) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState(init);

  const contactRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactRef.current) {
      dispatch(setContactOffset(contactRef.current.offsetTop));
    }
  }, [contactRef.current]);

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("/api/send-email", input);
      setInput(init);
      return setSuccess(res.data?.message || "Message Sent Succesfully!");
    } catch (error) {
      if (error instanceof AxiosError) {
        return setError(error.response?.data);
      }
      // setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      initial="hidden"
      whileInView="show"
      variants={variantProps}
      ref={contactRef}
      className="bg-gradient lg:px-[10%] md:p-10 mb-24 md:my-0 py-10 p-4"
    >
      <div className="flex flex-col mb-6 ">
        <div className="w-fit">
          <Bullet />
        </div>
        <h3 className="text-gray-800 text-3xl font-semibold">Contact Us</h3>
      </div>

      <div className=" flex gap-8 flex-col lg:flex-row ">
        <div className="space-y-6">
          <p className=" text-lg font-light text-gray-800 leading-8  ">
            If you have any questions, suggestions, or would like to get
            involved with{" "}
            <span className="text-primary-color font-semibold">
              Talk2Me&nbsp;International
            </span>
            , please don&apos;t hesitate to reach out to us.
          </p>
          <div className="text-lg font-light text-gray-800 leading-8 flex flex-col  ">
            <p>You can contact us through:</p>
            <div className="flex  gap-4 items-center ">
              <div className="bg-white border border-black p-3 grid place-content-center rounded-lg">
                <Mail size={20} className="text-black" />
              </div>
              <span className="text-base font-semibold text-gray-800">
                info@talk2meinternational.com
              </span>
            </div>
          </div>
          <p className="text-lg font-light text-gray-800 leading-8">
            We look forward to hearing from you!
          </p>
        </div>

        <div className="w-full">
          <div className="mb-3">
            {error && (
              <div className="p-4 grid place-content-center bg-rose-200 text-rose-700">
                {error}
              </div>
            )}
            {success && (
              <div className="p-4 grid place-content-center bg-emerald-200 text-emerald-700">
                {success}
              </div>
            )}
          </div>
          <form onSubmit={sendEmail} className="w-full flex flex-col space-y-6">
            <div className="w-full flex flex-col lg:flex-row gap-6">
              <input
                name="firstname"
                value={input.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="h-16 py-4 px-8 flex-1 rounded-md  outline-none border border-gray-600"
              />
              <input
                name="lastname"
                value={input.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-16 py-4 px-8 flex-1 rounded-md  outline-none border border-gray-600"
              />
            </div>
            <input
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="name@mail.com"
              className="w-full h-16 py-4 px-8 rounded-md  outline-none border border-gray-600"
            />
            <input
              name="subjectLine"
              value={input.subjectLine}
              onChange={handleChange}
              placeholder="Subject Line"
              className="w-full h-16 py-4 px-8 rounded-md  outline-none border border-gray-600"
            />
            <textarea
              name="message"
              value={input.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="w-full min-h-[200px] py-4 px-8 rounded-md border border-gray-600"
            />

            <button
              disabled={isLoading}
              className="md:w-[200px] p-4 bg-primary-color  text-white flex justify-center items-center gap-2 font-semibold h-12 rounded-lg disabled:bg-rose-200"
            >
              {isLoading && <TailSpin width={20} height={20} />}
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
