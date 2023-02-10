import React, { useState } from "react";
import { NavigationItems } from "@/constants/navigationItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

const NavigationBar = ({}): JSX.Element => {
  const [toggle, setToggle] = useState<boolean>(false);
  let pathname = usePathname()!;
  return (
    <>
      {/* <BurgerToggle toggle={toggle} setToggle={setToggle} /> */}
      <aside
        className={`lg:h-screen overflow-hidden lg:w-1/4 lg:flex lg:flex-col lg:justify-center lg:items-center font-paragraph`}
      >
        <div
          className={`my-10 flex lg:flex-col justify-start lg:justify-center items-center gap-7`}
        >
          <div className={`mr-auto`}>Logo</div>
          <nav
            className="flex flex-row md:flex-col items-start relative fade"
            id="nav"
          >
            <div className="flex lg:flex-col  space-x-0 my-2">
              {NavigationItems[pathname] ? (
                <>
                  {/* Desktop version, hidden on mobile, animates y axis */}
                  <div className="hidden lg:block relative ">
                    <motion.div
                      className="absolute bg-neutral-900 dark:bg-neutral-100 bg-opacity-30 h-[14px] top-[15px] rounded-sm z-[-1]"
                      layoutId="test2"
                      initial={{ opacity: 0, y: NavigationItems[pathname].y }}
                      animate={{
                        opacity: 1,
                        y: NavigationItems[pathname].y,
                        width: NavigationItems[pathname].w,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  </div>
                  {/* Mobile version, hidden on desktop, animates x axis */}
                  <div className="block lg:hidden">
                    <motion.div
                      className="absolute bg-neutral-900 dark:bg-neutral-100 bg-opacity-30 dark:bg-opacity-30 h-[14px] top-1/2 rounded-sm z-[-1]"
                      layoutId="test"
                      initial={{ opacity: 0, x: NavigationItems[pathname].x }}
                      animate={{
                        opacity: 1,
                        x: NavigationItems[pathname].x,
                        width: NavigationItems[pathname].w,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  </div>
                </>
              ) : null}

              {Object.entries(NavigationItems).map(([path, { label }]) => {
                const isActive = path === pathname;

                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]",
                      {
                        "text-neutral-500": !isActive,
                        "font-semibold": isActive,
                      }
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>
      {/* <nav className={`lg:w-1/4 flex items-center justify-center`}>
        <div
          className={`absolute flex lg:hidden  flex-col justify-center items-center w-full gap-12 h-screen  top-0 bottom-0  bg-white dark:bg-black dark:text-white transition-all duration-700 ease-in-out ${
            toggle ? "translate-x-0 right-0 left-0" : "-translate-x-[1000px]"
          }`}
        >
          {Object.entries(NavigationItems).map(([path, { label }]) => {
            const isActive = path === pathname;
            return (
              <Link href={path} key={path}>
                {label}
              </Link>
            );
          })}
        </div>

        <aside
          className={`hidden lg:flex flex-col items-center justify-center gap-12`}
        >
          {Object.entries(NavigationItems).map(([path, { label }]) => {
            const isActive = path === pathname;
            return (
              <Link href={path} key={path}>
                {label}
              </Link>
            );
          })}
        </aside>
      </nav> */}
    </>
  );
};

export default NavigationBar;
