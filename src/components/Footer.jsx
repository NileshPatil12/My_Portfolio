import React from "react";
import { FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";

function Footer() {
  return (
    <>
      <hr className="border-gray-300" />
      <footer className="py-12 bg-gray-800 text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://github.com/NileshPatil12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition duration-300"
              >
                <FaSquareGithub size={30} />
              </a>
              <a
                href="https://leetcode.com/u/nileshrp239/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition duration-300"
              >
                <SiLeetcode size={30} />
              </a>
              <a
                href="https://app.netlify.com/teams/nileshpatil12/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition duration-300"
              >
                <BiLogoNetlify size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/nileshpatil1209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition duration-300"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-600 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 All rights reserved.
              </p>
              <p className="text-sm mt-2">❤️ Designed with love by Nilesh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
