import React from 'react';
import { motion } from 'framer-motion';
import projectsData from './projectsData.json'; // Import the JSON data

type Props = {}

function Projects({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-16 sm:top-20 uppercase tracking-[8px] sm:tracking-[15px] text-gray-500 text-lg sm:text-xl z-20'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projectsData.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-3 sm:space-y-5 items-center justify-center p-8 sm:p-16 md:p-24 h-screen'>
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            src={project.image}  // Use dynamic project image
                            alt={`${project.title} image`}
                            className='w-48 sm:w-64 md:w-72 object-cover'
                        />
                        <div className='space-y-5 px-3 sm:px-6 max-w-4xl'>
                            <h4 className='text-lg sm:text-xl md:text-2xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projectsData.length}:</span> {project.title}
                            </h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project.techStack.map((tech, index) => (
                                    <img
                                        key={index}
                                        className='h-8 w-8 rounded-full'
                                        src={tech}  // Use dynamic tech stack images
                                        alt={`Tech ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <p className='text-xs sm:text-sm md:text-base text-center md:text-left'>
                                {project.description}  {/* Use dynamic description */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[20%] sm:top-[25%] bg-[#F7AB0A]/10 left-0 h-[200px] sm:h-[400px] -skew-y-12'></div>
        </motion.div>
    );
}

export default Projects;
