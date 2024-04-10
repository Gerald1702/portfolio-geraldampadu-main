import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Creative Developer.",
      "Marketer.",
      "Content Creator.",
      "Graphic Designer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize" color="primary">
            GERALD NANA KWAME AMPADU
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#2691F5"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          A versatile professional with a passion for creativity and innovation.
          With a background in graphic design, web development, content
          creation, and marketing, I bring a unique blend of skills to every
          project. Whether it's designing captivating visuals, developing
          engaging websites, creating compelling content, or crafting effective
          marketing strategies.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
