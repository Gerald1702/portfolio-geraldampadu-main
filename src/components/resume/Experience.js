import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gamp Grafix"
            subTitle="Freelancer (2023 - Present)"
            result= "Virtual"
            des="Freelance Content Creator and Graphic Designer who designs appealing visuals to meet clients needs"
          />
          
          <ResumeCard
            title="Account Officer"
            subTitle=" National Service Secretariat November-February(2022)"
            result="Airport"
            des="Organized financial documents and assisted with bookkeeping."
          />
          <ResumeCard
            title="Marketing Manager"
            subTitle=" BeautyRave Gh(2020-2022)"
            result="American House- East Legon"
            des="Successfully launched and managed digital marketing campaigns that increased in customer enquiries and sales by almost 40% within the year."
          />
          <ResumeCard
            title="Personal Assistant"
            subTitle=" PA October 2023-March 2024"
            result="East Legon"
            des="Utilized Photoshopn and Canva for creating eye catching presentations and documents for meetings and proposals."
          />
           <ResumeCard
            title="Graphic Designer"
            subTitle=" Wilkua Constructions (Present)"
            result="W&A Residence"
            des="Produced visually appealing graphics for promotional materials, contributing to 30% increase in customer inquiries and sales. "
          />
          <ResumeCard
            title="Teaching Assistant"
            subTitle=" Ashongman Basic 2 (2022 February-2023 September)"
            result="Ashongman"
            des="Planned and delivered lessons, maintained a safe and inclusive learning environment  for students of all abilities and lastly, I maintained accurate records of attendence and grades for students."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;