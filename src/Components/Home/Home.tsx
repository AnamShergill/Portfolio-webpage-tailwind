import Image from 'next/image'
import image from '../../image/image1.png'
import TextChange from '../TextChange'

function Home() {
  return (
    <div className='text-white flex w-full  items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-20'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'> 
          <TextChange/>
        </h1>
        <br/>
        <p className='text-sm md:text-2xl tracking-tight'> I’m a passionate developer currently mastering web technologies and building interactive, 
          user-friendly websites and apps. 
          <br/>Want to know more about me? <br/>Check out my portfolio below!
         
            </p>
            <a href="#Footer">
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
            hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button></a>
        </div>
        <div ><img className='w-full h-auto md:h-96 ' src={image.src} alt="image 
        "/></div>
      
    </div>

  )
}

export default Home
