import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './experience/ExperienceCard';
import ExperienceCard_2 from './experience/ExperienceCard_2';

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 sm:px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-16 sm:top-20 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-5 sm:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* Experience cards */}
        <ExperienceCard />
        <ExperienceCard_2 />
        {/* <ExperienceCard /> */}
      </div>
    </motion.div>
  );
}

export default Experience;
