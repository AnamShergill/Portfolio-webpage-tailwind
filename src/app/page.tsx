import React from 'react'
import '../app/globals.css';
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home' 
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'



function Page() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
<Navbar/>
<Home />
<About/>
<Skills/>
<Projects/>
<Footer/>


    </div>
  )
}

export default Page
