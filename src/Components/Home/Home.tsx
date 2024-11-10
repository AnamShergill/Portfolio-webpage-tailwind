import React from 'react'
import Image from 'next/image'
import TextChange from '../TextChange'

function Home() {
  return (
    <div className='text-white flex w-full  items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-20'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'> 
          <TextChange/>
        </h1>
        <br/>
        <p className='text-sm md:text-2xl tracking-tight'> I am a passionate developer currently mastering web technologies and building interactive, 
          user-friendly websites and apps. 
          <br/>Want to know more about me? <br/>Check out my portfolio below!
         
            </p>
            <a href="#Footer">
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button></a>
        </div>
        <Image 
  src="/image1.png" 
  alt="Description" 
  width={400} 
  height={400} 
  layout="responsive"
/>
        {/*<div style={{ position:'relative', width: '80%', height: '520px' }}>
        <Image
    src="/image1.png"
    alt="Description"
    layout="fill"
    objectFit="responsive" // Optionally add to control how the image fits
  />
  </div>*/}
      
    </div>

  )
}

export default Home
