import React from "react";

import pic from "../../public/profile.jpg";

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb"; 
import { TbSql } from "react-icons/tb";

import LocalTyped from './LocalTyped';
import Tooltip from './Tooltip';

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pb-8"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl text-gray-700 dark:text-gray-300">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a  </h1>
              <LocalTyped
                className="text-red-700 dark:text-red-400 font-bold"
                strings={["Full Stack Developer", "Good Programmer","IT Professional"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <div className="h-6" />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center text-gray-800 dark:text-gray-100">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/NileshPatil12/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaSquareGithub className="text-2xl cursor-pointer hover:text-black dark:hover:text-white transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nileshpatil1209/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://leetcode.com/u/nileshrp239/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                      <SiLeetcode className="text-2xl cursor-pointer hover:text-orange-500 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://app.netlify.com/teams/nileshpatil12/overview" target="_blank" rel="noopener noreferrer" aria-label="Netlify">
                      <BiLogoNetlify className="text-2xl cursor-pointer hover:text-teal-400 transition" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center text-gray-800 dark:text-gray-100">Currently working on</h1>
                <div className="flex space-x-5">
                
                <Tooltip label="MongoDB">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </Tooltip>
                <Tooltip label="ExpressJs">
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </Tooltip>
                <Tooltip label="ReactJs">
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </Tooltip>
                <Tooltip label="NodeJs">
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </Tooltip>
                <Tooltip label="C++">
                  <TbBrandCpp className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </Tooltip>
                <Tooltip label="SQL">
                  <TbSql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </Tooltip>
                
  
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 sm:w-1/2 md:w-1/2 mx-auto md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full w-[150px] sm:w-[350px] md:w-[350px] h-[150px] sm:h-[350px] md:h-[350px] object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-700" />
    </>
  );
}

export default React.memo(Home);
