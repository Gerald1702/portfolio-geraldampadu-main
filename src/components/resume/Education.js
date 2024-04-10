import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Marketing"
            subTitle="University of Professional Studies, Accra (2018 - 2022)"
            result="UPSA"
            des=" My expertise spans across various marketing channels, including digital, social media, and traditional mediums, allowing me to develop integrated marketing strategies tailored to meet specific objectives.."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St.Augustines College (2015 - 2018)"
            result="Cape-Coast"
            des="Specialized in General Arts."
          />

          <ResumeCard
            title="Graphic Design "
            subTitle="Aditech Graphics Academy (2023 - 2023)"
            result="Accra"
            des="Specialized in Graphic design and Motion design."
          />
          <ResumeCard
            title="Web Developer Trainee"
            subTitle="MEST Africa - (2024 )"
            result="East Legon"
            des="Gained a strong foundational knowledge into various programming languages."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
