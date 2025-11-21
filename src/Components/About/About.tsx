import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import Image from 'next/image';

const About = () => {
  return (
    <div
      id='About' 
      className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-10 animate-fadeInUp mt-20'
    >
      <h2 className='text-2xl md:text-4xl text-purple-800 font-bold mb-6 animate-fadeInUp'>
        About Me
      </h2>

      <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-6 ml-6'>
        {/* Image Section */}
        <div className="max-w-full md:max-w-[450px] md:mr-8 mb-6 md:mb-0 animate-fadeInUp transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] rounded-lg">
          <Image 
            src="/image.coding1.png" 
            alt="Description" 
            width={450} 
            height={300} 
            layout="intrinsic"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        {/* Info Section */}
        <ul className="flex flex-col w-full md:w-auto gap-4">
          {/* My Journey */}
          <div className='flex gap-3 py-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] rounded-lg'>
            <IoArrowForward size={30} className='mt-1 text-purple-400' />
            <span className='w-full md:w-96'>
              <h1 className='text-xl md:text-2xl font-bold text-purple-800 leading-normal p-1'>
                My Journey
              </h1>
              <p className='text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-left'>
  I have completed my Masters in International Relations, which strengthened my analytical, research, and communication skills. With a keen interest in technology, I am now fully engaged in learning web development, exploring both front-end and back-end technologies to bring ideas to life. I am always eager to tackle new challenges and improve my craft.
</p>
            </span>
          </div>

          {/* My Goal */}
          <div className='flex gap-3 py-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] rounded-lg'>
            <IoArrowForward size={30} className='mt-1 text-purple-400' />
            <span className='w-full md:w-96'>
              <h1 className='text-xl md:text-2xl font-bold text-purple-800 leading-normal p-1'>
                My Goal
              </h1>
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
