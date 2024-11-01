import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 md:px-20 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 sm:top-20 md:top-24 uppercase tracking-[12px] sm:tracking-[15px] text-gray-500 text-xl sm:text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src='About.png'
        className='flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 md:w-56 md:h-[18rem] lg:w-[350px] lg:h-[450px] xl:w-[450px] xl:h-[550px] rounded-full md:rounded-lg object-cover mt-8 md:mt-0'
      />

      <div className="space-y-4 sm:space-y-5 md:space-y-8 px-3 sm:px-5 md:px-10 max-w-xl md:max-w-3xl">
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Here is a{" "}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed'>
        As a passionate MERN stack developer, I have a solid foundation in building dynamic web applications using MongoDB, Express.js, React, and Node.js. With one year of experience as a React developer, I have honed my skills in creating user-friendly interfaces and optimizing performance. Additionally, I completed a 5-month internship as a front-end developer, where I collaborated on various projects, enhancing my understanding of responsive design and best practices in web development. My goal is to leverage my expertise to create innovative solutions that deliver seamless user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
