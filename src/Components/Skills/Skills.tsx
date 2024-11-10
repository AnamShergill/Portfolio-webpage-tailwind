import React from 'react'
import {FaCss3, FaFigma, FaHtml5, FaJs} from "react-icons/fa";
import {SiRedis} from "react-icons/si"
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import {IoArrowForward} from "react-icons/io5"


const Skills = () => {
  return (
    <div id="Skills" className="p-6 sm:p-10 md:p-16 lg:p-24 text-bold mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-8">
        {/* Icons Section */}
        <div className="flex gap-8 sm:w-2/3 md:w-2/5 flex-wrap justify-center">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4 sm:mb-0">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4 sm:mb-0">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4 sm:mb-0">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4 sm:mb-0">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4 sm:mb-0">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4 sm:mb-0">
            <FaGithub color="#FFFFFF" size={50} />
          </span>
          
        </div>

        {/* Paragraph Section */}
         
        <div className="flex-1 bg-slate-950 bg-opacity-45 mt-6 sm:mt-0 rounded-lg p-6 sm:p-8">
        <h3 className="text-indigo-500 text-xl md:text-4xl font-bold mb-4">Technologies & Tools I'm Learning</h3>
        
  <ul className="space-y-4 text-lg">
    <li className="flex items-baseline text-white"><span className="font-semibold mr-2">Front-End:</span> HTML, CSS, JavaScript, React</li>
    <li className="flex items-baseline text-white"><span className="font-semibold  mr-2">Back-End:</span> Node.js (exploring)</li>
    <li className="flex items-baseline text-white"><span className="font-semibold mr-2">Version Control:</span> Git, GitHub</li>
    <li className="flex items-baseline text-white"><span className="font-semibold mr-2">Other Tools:</span> VS Code, Figma (UI/UX Design)</li>
  </ul>

        </div>
      </div>
    </div>
  );
};

export default Skills;