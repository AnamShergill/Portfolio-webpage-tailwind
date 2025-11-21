import React from "react";
import { MdOutlineEmail } from "react-icons/md";

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6";


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

      <ul className="text-sm md:text-xl space-y-3">
  <li className="flex gap-2 items-center">
    <MdOutlineEmail size={20} />
    <a href="mailto:pinkyshergill1986@gmail.com?subject=Subject%20Here&body=Hello%2C%20I'd%20like%20to%20..."
       className="transition-colors duration-300 hover:text-blue-500 hover:font-bold">
      Send me an Email
    </a>
  </li>

  <li className="flex gap-2 items-center">
    <FaLinkedin />
    <a href="https://www.linkedin.com/in/anam-zeeshan-shergill-01a214347/" target="_blank"
       className="transition-colors duration-300 hover:text-blue-500 hover:font-bold">
      LinkedIn/AnamShergill
    </a>
  </li>

  <li className="flex gap-2 items-center">
    <FaGithub />
    <a href="https://github.com/AnamShergill" target="_blank"
       className="transition-colors duration-300 hover:text-blue-500 hover:font-bold">
      github.com/AnamShergill
    </a>
  </li>
</ul>

    </div>
  );
};

export default Footer;