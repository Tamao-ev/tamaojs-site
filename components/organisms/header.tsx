import React from "react";
import Image from "next/image";
import profilPicture from "../../public/images/profilPicture.jpg";
import { TechnoItems } from "@/constants/technoItems";
import Tag from "@/components/atoms/tag";

const Header = ({}): JSX.Element => {
  return (
    <header>
      <div
        className={`flex flex-col justify-center items-start lg:items-start gap-2 lg:gap-0 mb-8`}
      >
        <h1 className="w-full text-start lg:text-start text-3xl lg:text-7xl font-bold">
          Tamao
        </h1>
        <p className={`italic font-paragraph`}>@Maxime Morfin</p>
      </div>
      <div
        className={`flex flex-col justify-center items-start lg:items-start`}
      >
        <h2>React fullstack developer,</h2>
        <p className={`text-lg font-semibold`}>
          Learn , Practice, Master ... Reapeat <span>🔁</span>
        </p>
        <div className={`flex flex-col lg:flex-row gap-x-10`}>
          <Image
            src={profilPicture}
            width={150}
            height={150}
            alt={`une photo de moi sur la plage`}
            className={`w-32 h-32 flex justify-center items-center lg:justify-start my-8 rounded-full`}
          />
          <div
            className={`flex justify-start items-center lg:h-fit my-8 lg:my-auto gap-3 flex-wrap lg:max-w-sm`}
          >
            {TechnoItems.map((item, index) => (
              <Tag label={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
