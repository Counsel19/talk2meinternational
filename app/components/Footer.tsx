import { FC } from "react";
import Brand from "./Brand";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {}
const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="p-4 md:px-[10%] flex flex-col md:flex-row justify-between items-center gap-6">
      <Brand />

      <div className="flex gap-4 items-center">
        <Link
          href="https://www.facebook.com/T2MGLOBAL"
          className="grid place-content-center w-10 h-10 p-2 rounded-lg bg-gray-800"
        >
          <Image
            src="/assets/facebook.svg"
            width={10}
            height={10}
            alt="face-book-icon"
          />
        </Link>

        <Link
          href="https://www.instagram.com/talk2meinternational?igsh=MWFwdXlmN2RqdTk2aA=="
          className="grid place-content-center p-2 rounded-lg w-10 h-10 bg-gray-800"
        >
          <Image
            src="/assets/instagram.svg"
            width={16}
            height={16}
            alt="instagram-icon"
          />
        </Link>
      </div>

      <div className="text-gray-500 text-sm">
        &copy; Copyright Talk2Me International 2024
      </div>
    </div>
  );
};

export default Footer;
