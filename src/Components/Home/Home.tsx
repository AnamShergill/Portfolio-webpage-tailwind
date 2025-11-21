import React from 'react'
import Image from 'next/image'
import TextChange from '../TextChange'

function Home() {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-between p-10 md:p-20 gap-10">
      
      {/* Text Section */}
      <div className="md:w-1/2 w-full md:pt-20">
        <h1 className="text-3xl md:text-6xl text-indigo-700 font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight mt-4">
          I am a passionate developer currently mastering web technologies and building 
          interactive, user-friendly websites and apps.
          <br />
          Want to know more about me? <br />
          Check out my portfolio below!
        </p>

        <a href="#Footer">
          <button className="mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact me
          </button>
        </a>
      </div>

     
      {/* Image Section */}
<div className="md:w-1/2 w-full flex justify-center">
  <div className="w-56 md:w-80">
    <Image
      src="/p1.png"
      alt="Developer Image"
      width={450}
      height={450}
      className="rounded-xl shadow-lg w-full h-auto"
    />
  </div>
</div>


    </div>
  )
}

export default Home
