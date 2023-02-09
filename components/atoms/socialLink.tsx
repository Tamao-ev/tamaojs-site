import Link from "next/link";
import React from "react";
import { ArrowIcon } from "@/utils/icons";

interface SocialLinkProps {
  value: string;
  url: string;
}

const SocialLink = ({ value, url }: SocialLinkProps): JSX.Element => {
  return (
    <div
      className={`flex justify-start items-center gap-2 font-paragraph text-sm`}
    >
      <ArrowIcon />
      <Link href={`${url}`} className={`hover:underline`} target="_blank">
        <span>{value}</span>
      </Link>
    </div>
  );
};

export default SocialLink;
