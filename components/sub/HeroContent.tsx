"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-center px-10 mt-40 w-full z-10">
      <div className="h-full w-full m-auto text-start">
        <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[9px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
          I&apos;m a Full Stack Software Engineer with experience in Web Applications,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a variants={slideInFromLeft(1)} className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          See Resume
        </motion.a>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={620}
          width={620}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
