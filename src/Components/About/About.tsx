import React from 'react'
import {IoArrowForward} from "react-icons/io5"
import image from '../../public/image/image.coding1.png'


const about = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-10'>
        <h2 className=' text-2xl md:text-4xl font-bold'> About Me</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='md:h-80' src={image.src} alt="coding image" height={500} width={400}/>

            <ul>
              <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className='mt-1' />

                <span className='w-96'>

                  <h1 className='text-xl md:text-2xl font-semibold leading-normal p-1'>My Journey</h1>
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-left">I'm a student deeply engaged in the world of software development. My journey began with a curiosity about how websites are built, and over time, I’ve expanded my skill set to include a variety of tools and technologies to bring ideas to life. 
                    I’m always eager to tackle new challenges and improve my craft..</p>
                </span>
              </div>

              <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className='mt-1' />

                <span className='w-96'>

                  <h1 className='text-xl md:text-2xl font-semibold leading-normal p-1'>My Goal</h1>
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-semibold text-left">My ultimate goal is to become a versatile software developer with expertise in both front-end and back-end development. I'm excited about creating innovative web and mobile applications that make a difference, whether it's a tool to simplify everyday tasks or a creative project to inspire others.

                  </p>
                </span>
              </div>
            </ul>
       
        </div>
      
    </div>
  )
}

export default about
