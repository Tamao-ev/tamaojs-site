import React, { Dispatch } from "react";

interface BurgerToggleProps {
  toggle: boolean;
  setToggle: Dispatch<boolean>;
}

const BurgerToggle = ({
  toggle,
  setToggle,
}: BurgerToggleProps): JSX.Element => {
  return (
    <div className={`h-20 lg:hidden`}>
      <div
        className={`absolute flex flex-col items-center w-fit gap-1.5 my-4 p-3 bg-white shadow-sm rounded-sm hover:cursor-pointer transition-all duration-700 ease-in-out z-20`}
        onClick={() => setToggle(!toggle)}
      >
        <span
          className={`${
            toggle ? `w-3` : `w-9`
          }  h-1 bg-black rounded-[1px] transition-all duration-700 ease-in-out`}
        ></span>
        <span
          className={`${
            toggle ? `w-9` : `w-3`
          } h-1 bg-black rounded-[1px] transition-all duration-700 ease-in-out`}
        ></span>
      </div>
    </div>
  );
};

export default BurgerToggle;
