import React from 'react'
import ProjectCard from './ProjectCard' 

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
    <div className="py-14 px-8 flex flex-wrap justify-center gap-8">
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
        title="Project 3: Mobile Landing Homepage "
        main="A responsive mobile landing page featuring smooth animations and a clean, user-friendly layout."
        demoLink="https://mobileweb-landing-page.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/SMIT-CSS-ASSIGNEMNT-3-mobile-landing-page-.git" 
      />

            {/* Project Card 4 */}
            <ProjectCard
        title="Project 4: E-Commerce Burger Website"
        main="A mouthwatering burger website designed to showcase delicious flavors, juicy patties, and the perfect bite. Featuring a sleek UI, smooth navigation, and tempting visuals, this project highlights my web development skills in creating an engaging and appetizing user experience.🍔"
     
        demoLink="https://burger-ecommerce-website.vercel.app/ "  
        sourceCodeLink="https://github.com/AnamShergill/burger-ecommerce-website"  
      />
      
      {/* Project Card 5 */}
      <ProjectCard
        title="Project 5: Food Recipe Website"
        main="A vibrant food recipe website where flavors come to life! This project features beautifully crafted articles, enticing food photography, and a user-friendly design to keep food lovers engaged. A perfect blend of content and aesthetics to showcase my web development skills. 🍽️✨"
        demoLink="https://food-blog-beryl.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/food-blog" 
      />

        {/* Project Card 6 */}
      <ProjectCard
        title="Project 6: Figma Template Webpage"
        main="Developed a responsive webpage based on a Figma design template using HTML, CSS, and Bootstrap. This project demonstrates my ability to translate design mockups into fully functional web pages, maintaining pixel-perfect accuracy, clean structure, and mobile-friendly responsiveness.🎨"
        demoLink="https://figma-template-bootstrap.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/SMIT-CSS-Assignment4-Figma-template-bootstrap.git" 
      />
      
      {/* Project Card 7 */}
      <ProjectCard
        title="Project 7: E-Commerce Furniture Website"
        main="A modern furniture website that combines elegance with functionality. Showcasing stylish designs, seamless navigation, and a visually appealing layout, this project reflects my expertise in creating sleek and engaging eCommerce experiences. 🛋️💡"
        demoLink="https://hackathon3-e-commerce-website-3zka.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/hackathon-e-commerce-website" 
      />

         {/* Project Card 8 */}
      <ProjectCard
        title="Project 8: Charity Website – Bootstrap"
        main="A responsive charity website designed using Bootstrap to ensure a clean layout, fast development, and full mobile compatibility. The project includes organized sections, modern UI components, and a user-friendly structure to effectively highlight causes and encourage donations.🌟"
        demoLink="https://charity-website-bootstrap.vercel.app/"  
        sourceCodeLink="https://github.com/AnamShergill/Charity-Website-SMIT-Assignment-Bootstrap.git" 
      />

         {/* Project Card 9 */}
      <ProjectCard
        title="Project 9: Game Master Agent- Python"
        main="A Python text adventure where your choices shape a dynamic fantasy story. Features a multi-agent system handling narration, combat, and inventory, creating an immersive interactive experience.🎮 Tech: Python | AI-inspired agents | Dice-based combat"
    
        demoLink="https://charity-website-bootstrap.vercel.app/"  
        sourceCodeLink="https://replit.com/@anamshergill/gamemaster-agent?v=1" 
      />
    </div>
    </div>
  )
}

export default Projects
