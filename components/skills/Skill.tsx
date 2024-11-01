import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
    name: string;
    image: string;
    proficiency: number;
    directionLeft?: boolean;
};

function Skill({ name, image, proficiency, directionLeft = false }: SkillProps) {
    return (
        <div className="group relative flex cursor-pointer items-center justify-center">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                src={image}
                alt={name}
                className="rounded-full bg-white border border-gray-500 object-contain w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-full z-0 flex items-center justify-center">
                <p className="text-xs md:text-sm xl:text-lg font-bold text-black opacity-100">{proficiency}%</p>
            </div>
        </div>
    );
}

export default Skill;
