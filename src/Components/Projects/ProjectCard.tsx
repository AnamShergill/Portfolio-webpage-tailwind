import React from 'react'
import Image from 'next/image';


interface ProjectCardProps {
  title: string;
  main: string;
  demoLink: string;
  sourceCodeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, main, demoLink, sourceCodeLink }) => {
  return (
    <div className='p-3 m:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <Image 
  src="/coding.image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
  layout="intrinsic"
/>
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
        {/* Demo Button */}
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
        </a>
        {/* Source Code Button */}
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
