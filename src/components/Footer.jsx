import React from "react";
/**
 * Footer
 * - Simple footer that adapts to dark/light themes
 * - Contains social links with brand hover colors and CTA
 */
import { FaSquareGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { Link } from 'react-scroll';

function FooterComponent() {
  return (
    <>
      <hr className="border-gray-200 dark:border-gray-700" />
      <footer className="py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Nilesh Patil</h3>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com/NileshPatil12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200"
                aria-label="Github"
              >
                <FaSquareGithub className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/u/nileshrp239/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition duration-200"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
              <a
                href="https://app.netlify.com/teams/nileshpatil12/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-teal-400 transition duration-200"
                aria-label="Netlify"
              >
                <BiLogoNetlify className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nileshpatil1209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>

            <div className="flex justify-end items-center">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="text-sm text-gray-400 hover:text-white transition cursor-pointer"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row md:justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
            <span className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Nilesh Patil. All rights reserved.</span>
            <span className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">Built with React & Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default React.memo(FooterComponent);
