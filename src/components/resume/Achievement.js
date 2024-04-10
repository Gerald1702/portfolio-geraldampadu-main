import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Moreton Bay Regional Council Entrepreneurship & Innovation."
            subTitle=" Web Development Job Simulation on Forage - February 2024"
            result="Success"
            des="Completed a job simulation involving website planning and creation."
          />
          {/* <ResumeCard
            title="KPMG AU Data Analytics "
            subTitle="Job Simulation on Forage - November 2023"
            result="Success"
            des="Completed a simulation focused on advising a client on customer targeting with the Data, Analytics & Modelling team"
          /> */}

{/* <ResumeCard
            title="National Service Secretariate"
            subTitle="NSS"
            result="Success"
            des="Gain hands-on experience by organizing financial records, filling documents and assisting witrh bookkeeping!"
          /> */}
          {/* <ResumeCard
            title="JPMorgan Chase & Co. Global Finance and Business Management "
            subTitle="virtual experience program on Forage - August 2022"
            result="Success"
            des="Completed a jo simulation focused on the GFBM internship program at JPMorgan Chase & Co."
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"> */}
          
          
          {/* <ResumeCard
            title="Sololearn"
            subTitle="HTML"
            result="Success"
            des="Gained a strong knowledge in HMTL and practiced coding with the language"
          /> */}
          {/* <ResumeCard
            title="Corporate Finance Institute"
            subTitle="Introduction to Business Intelligence"
            result="Success"
            des="Gained insights into business intelligence and how to use BI tools"
          /> */}
        {/* </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;