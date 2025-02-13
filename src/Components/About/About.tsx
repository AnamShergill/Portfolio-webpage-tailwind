import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import Image from 'next/image';

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-10'>
      <h2 className='text-2xl md:text-4xl text-purple-800 font-bold mb-6'>About Me</h2>

      <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
        <div className="max-w-full md:max-w-[450px] md:mr-8 mb-6 md:mb-0">
          <Image 
            src="/image.coding1.png" 
            alt="Description" 
            width={450} 
            height={300} 
            layout="intrinsic"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        <ul className="flex flex-col w-full md:w-auto">
          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className='mt-1' />
            <span className='w-full md:w-96'>
              <h1 className='text-xl md:text-2xl font-bold text-purple-800 leading-normal p-1'>My Journey</h1>
              <p className='text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-left'>
                I am a student deeply engaged in the world of software development. My journey began with a curiosity about how websites are built, and over time, I’ve expanded my skill set to include a variety of tools and technologies to bring ideas to life. I am always eager to tackle new challenges and improve my craft.
              </p>
            </span>
          </div>

          <div className='flex gap-3 py-4'>
            <IoArrowForward size={30} className='mt-1' />
            <span className='w-full md:w-96'>
              <h1 className='text-xl md:text-2xl font-bold text-purple-800 leading-normal p-1'>My Goal</h1>
              <p className='text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-left'>
                My ultimate goal is to become a versatile software developer with expertise in both front-end and back-end development. I am excited about creating innovative web and mobile applications that make a difference, whether it is a tool to simplify everyday tasks or a creative project to inspire others.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
