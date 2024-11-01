import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import skillsData from './skillsData.json'; // Import the JSON data

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 justify-center mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-sm text-gray-500'>
        Hover over for current proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skillsData.map((skill, i) => (
          <Skill 
            key={i}
            name={skill.name}
            image={skill.image}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
