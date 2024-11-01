import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

function ExperienceCard({ }: Props) {
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
        className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-[160px] xl:h-[160px] rounded-full object-contain' // Changed to object-contain for full display
        src="clear_greetLabs_logo.png"
        alt="Company Logo"
      />
      <div className='px-4 md:px-6'>
        <h4 className='text-lg sm:text-xl md:text-2xl xl:text-3xl font-light'>React Developer</h4>
        <p className='font-bold text-base sm:text-lg md:text-xl mt-1'>Greet Labs Private Limited</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech used */}
          <Image
            width={24}
            height={24}
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            src="https://www.svgrepo.com/show/354259/react.svg"
            alt="React Logo"
          />
          <Image
            width={24}
            height={24}
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            src="https://www.svgrepo.com/show/349419/javascript.svg"
            alt="Javascript Logo"
          />
          <Image
            width={24}
            height={24}
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            src="https://www.svgrepo.com/show/452093/redux.svg"
            alt="Redux Logo"
          />
          <Image
            width={24}
            height={24}
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            src="https://www.svgrepo.com/show/355140/node.svg"
            alt="Node Logo"
          />
          <Image
            width={24}
            height={24}
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg"
            alt="Bootsetap Logo"
          />
          <Image
            width={24}
            height={24}
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="Git Logo"
          />
        </div>
        <p className='uppercase py-2 sm:py-3 text-gray-300 text-xs sm:text-sm'>Dec/2023 -- Present</p>
        <ul className='list-disc space-y-1 sm:space-y-2 ml-4 text-xs sm:text-sm md:text-base'>
          <li>Develop new user-facing features using React.js and associated libraries (Redux, React Router, etc.).</li>
          <li>Enhanced overall code quality and maintainability of the React applications.</li>
          <li>Ensured cross-browser compatibility for improved user experience.</li>
          <li>Collaborated with backend developers to integrate RESTful APIs.</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard;
