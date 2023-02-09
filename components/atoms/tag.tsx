import React from "react";

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps): JSX.Element => {
  return (
    <div
      className={`px-4 rounded-sm bg-black text-white dark:bg-white dark:text-black`}
    >
      {label}
    </div>
  );
};

export default Tag;
