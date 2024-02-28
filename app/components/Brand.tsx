import Image from "next/image";
import { FC } from "react";

interface BrandProps {}
const Brand: FC<BrandProps> = ({}) => {
  return (
    <div>
      <Image
        height={150}
        width={150}
        src="/assets/websiteIcon.png"
        alt="Brand Logo"
        className="w-[120px] h-[120px] object-contain md:w-fit md:h-fit"
      />
    </div>
  );
};

export default Brand;
