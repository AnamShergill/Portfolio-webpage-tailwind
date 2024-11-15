import React from "react";
import { MdOutlineEmail } from "react-icons/md";

import { FaGithub } from "react-icons/fa"


const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex gap-6 justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div >
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:pinkyshergill1986@gmail.com?subject=Subject%20Here&body=Hello%2C%20I'd%20like%20to%20...">Send me an Email</a>

        </li>
        
        
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/AnamShergill" target="_blank">github.com/AnamShergill</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;