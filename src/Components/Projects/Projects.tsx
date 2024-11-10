import React from 'react'
import ProjectCard from './ProjectCard' 

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
    <div className="py-12 px-8 flex flex-wrap gap-5">
      {/* Project Card 1 */}
      <ProjectCard
        title="Project 1: Countdown Timer App"
        main="a Next.js and TypeScript powered App to track time with an interactive coundown feature."
        demoLink="https://countdown-timer-nine-beta.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/countdown-timer"  
      />
      
      {/* Project Card 2 */}
      <ProjectCard
        title="Project 2: ToDo List App"
        main="A Node.js & TypeScript based App for managing and organizing your tasks efficiently."
        demoLink="https://todo-list-omega-blue.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/todo-list" 
      />
      
      {/* Project Card 3 */}
      <ProjectCard
        title="Project 3: Interactive Static Resume "
        main="A TypeScript based Interactive Resume built with HTML & CSS,allowing users to showcase their skills dynamically ."
        demoLink="https://milestone-1-static-resume-by-anam.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/MILESTONE-1-STATIC-RESUME" 
      />
    </div>
    </div>
  )
}

export default Projects
