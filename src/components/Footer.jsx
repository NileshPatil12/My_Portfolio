import React from "react";
import {
  FaSquareGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://github.com/NileshPatil12/" target="_blank"><FaSquareGithub size={24} /></a>
              <a href="https://leetcode.com/u/nileshrp239/" target="_blank"><SiLeetcode size={24}  /></a>
              <a href="https://app.netlify.com/teams/nileshpatil12/overview" target="_blank"><BiLogoNetlify size={24}  /></a>
              <a href="https://www.linkedin.com/in/nileshpatil1209/" target="_blank"><FaLinkedinIn size={24} /></a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024  All rights reserved.
              </p>
              <p className="text-sm">❤️ Nilesh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
