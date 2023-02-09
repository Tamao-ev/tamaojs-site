import React from "react";
import SocialLink from "../atoms/socialLink";

const TSAbout = ({}): JSX.Element => {
  return (
    <section>
      <p className={`font-paragraph text-sm my-8 lg:max-w-lg lg:text-base`}>
        Hi ! <span>👋</span> I am Maxime Morfin, a talented fullstack developer
        with 5 years of experience in the industry. I am a self-taught expert in{" "}
        <span className={`font-semibold`}>React</span> and{" "}
        <span className={`font-semibold`}>Next.js</span> and have a passion for
        sharing my knowledge with others. My goal is to educate and inspire
        others by offering courses and sharing valuable information about the
        cutting-edge field of <span className={`font-semibold`}>Web 3</span> and{" "}
        <span className={`font-semibold`}>JavaScript</span>. With my skills and
        passion for technology, I am poised to make a significant impact in the
        tech community.
      </p>
      <div className={`flex flex-col justify-center items-start gap-1`}>
        <SocialLink
          value="Me suivre sur Twitter"
          url="https://twitter.com/Tamao_ev"
        />
        <SocialLink
          value="Mes projets sur GitHub"
          url="https://github.com/Tamao-ev"
        />
      </div>
    </section>
  );
};

export default TSAbout;
