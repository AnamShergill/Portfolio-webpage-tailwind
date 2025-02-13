import React from 'react'
import Image from 'next/image'
import TextChange from '../TextChange'

function Home() {
  return (
    <div className='text-white flex flex-col md:flex-row items-center p-10 md:p-20'>
      <div className='md:w-2/4 w-full md:pt-20'>
        <h1 className='text-3xl md:text-6xl text-indigo-700 font-bold leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <br />
        <p className='text-sm md:text-2xl tracking-tight mt-4'>
          I am a passionate developer currently mastering web technologies and building interactive,
          user-friendly websites and apps.
          <br />
          Want to know more about me? <br />
          Check out my portfolio below!
        </p>
        <a href="#Footer">
          <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-3 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
            Contact me
          </button>
        </a>
      </div>
      
      {/* Image Section */}
      <div className='md:w-2/4 w-full mt-8 md:mt-0'>
        <Image
          src="/image1.png"
          alt="Developer Image"
          width={500}
          height={500}
          layout="responsive"
          className='rounded-xl shadow-lg' // Optional styling for better visuals
        />
      </div>
    </div>
  )
}

export default Home
