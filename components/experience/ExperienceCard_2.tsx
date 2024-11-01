import React from 'react';
import { motion } from 'framer-motion';


type Props = {}

export default function ExperienceCard_2({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center flex-shrink-0 space-y-5 w-[250px] sm:w-[350px] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-4 sm:p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-[160px] xl:h-[160px] rounded-full object-contain'
      src="globe.jpg"
      alt="Company Logo"
    />
    <div className='px-4 md:px-6'>
      <h4 className='text-lg sm:text-xl md:text-2xl xl:text-3xl font-light'>Front-end Developer <span>Intern</span></h4>
      <p className='font-bold text-base sm:text-lg md:text-xl mt-1'>Universal Informatics</p>
      <div className='flex space-x-2 my-2'>
        {/* Tech used */}
        <img
          className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
          src="https://www.svgrepo.com/show/452228/html-5.svg"
          alt="HTML Logo"
        />
        <img
          className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
          src="https://www.svgrepo.com/show/452185/css-3.svg"
          alt="CSS Logo"
        />
        <img
          className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
          src="https://www.svgrepo.com/show/349419/javascript.svg"
          alt="Javascript Logo"
        />
        <img
          className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
          src="https://www.svgrepo.com/show/452242/jquery.svg"
          alt="Jquery Logo"
        />
        <img
          className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
          src="https://www.svgrepo.com/show/374118/tailwind.svg"
          alt="Tailwind Logo"
        />
      </div>
      <p className='uppercase py-2 sm:py-3 text-gray-300 text-xs sm:text-sm'>July/2023 -- Dec/2023</p>
      <ul className='list-disc space-y-1 sm:space-y-2 ml-4 text-xs sm:text-sm md:text-base'>
        <li>Assist in the development of responsive and interactive user interfaces using HTML, CSS, and JavaScript.</li>
        <li>Collaborate with designers to turn wireframes and mockups into fully functional features.</li>
        <li>Debug and troubleshoot issues related to frontend performance and cross-browser compatibility.</li>
        <li>Participate in code reviews and learn best practices in code maintenance and documentation.</li>
      </ul>
    </div>
  </article>
  )
}