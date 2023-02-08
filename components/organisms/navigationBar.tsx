import React, { useState } from "react";
import { NavigationItems } from "@/constants/navigationItems";
import Link from "next/link";
import BurgerToggle from "../atoms/burgerToggle";

const NavigationBar = ({}): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <BurgerToggle toggle={toggle} setToggle={setToggle} />
      <div
        className={`absolute flex lg:hidden  flex-col justify-center items-center w-full gap-36 h-screen  top-0 bottom-0  bg-white dark:bg-black dark:text-white transition-all duration-700 ease-in-out ${
          toggle ? "translate-x-0 right-0 left-0" : "-translate-x-[1000px]"
        }`}
      >
        {NavigationItems.map((item, index) => (
          <Link href={`#${item.label}`} key={index}>
            {item.label}
          </Link>
        ))}
      </div>
      <div
        className={`hidden lg:flex items-center justify-center gap-36 my-8 uppercase`}
      >
        {NavigationItems.map((item, index) => (
          <Link href={`#${item.label}`} key={index}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavigationBar;
