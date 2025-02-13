import React from 'react'
import ProjectCard from './ProjectCard' 

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
    <div className="py-14 px-8 flex flex-wrap gap-5">
      {/* Project Card 1 */}
      <ProjectCard
        title="Project 1: Countdown Timer App"
        main="A Next.js and TypeScript powered App to track time with an interactive coundown feature."
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

            {/* Project Card 4 */}
            <ProjectCard
        title="Project 4: E-Commerce Burger Website"
        main="A mouthwatering burger website designed to showcase delicious flavors, juicy patties, and the perfect bite. Featuring a sleek UI, smooth navigation, and tempting visuals, this project highlights my web development skills in creating an engaging and appetizing user experience"
        demoLink="https://burger-ecommerce-website.vercel.app/ "  
        sourceCodeLink="https://github.com/AnamShergill/burger-ecommerce-website"  
      />
      
      {/* Project Card 5 */}
      <ProjectCard
        title="Project 5: Food Blog Website"
        main="A vibrant food blog where flavors come to life! This project features beautifully crafted articles, enticing food photography, and a user-friendly design to keep food lovers engaged. A perfect blend of content and aesthetics to showcase my web development and blogging skills. 🍽️✨"
        demoLink="https://food-blog-beryl.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/food-blog" 
      />
      
      {/* Project Card 6 */}
      <ProjectCard
        title="Project 6: E-Commerce Furniture Website"
        main="A modern furniture website that combines elegance with functionality. Showcasing stylish designs, seamless navigation, and a visually appealing layout, this project reflects my expertise in creating sleek and engaging eCommerce experiences. 🛋️💡"
        demoLink="https://hackathon3-e-commerce-website-3zka.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/hackathon-e-commerce-website" 
      />
    </div>
    </div>
  )
}

export default Projects
