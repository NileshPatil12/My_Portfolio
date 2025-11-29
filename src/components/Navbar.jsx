import React, { useState, useMemo, useCallback } from "react";
/**
 * Navbar
 * - Uses centralized `navItems` (from utils/constants)
 * - Provides responsive navigation and theme toggle
 * - Minimizes re-renders by memoizing nav data and using a stable callback
 */
import pic from "../../public/ProfilePicture.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import ThemeToggle from './ThemeToggle';
import { navItems } from '../utils/constants';
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  // No direct theme logic needed here; ThemeToggle handles toggling.

  // Use centralized nav item constant so updates are consistent across the app
  const navs = useMemo(() => navItems, []);

  // Theme logic is handled by ThemeContext provider

  const handleCloseMenu = useCallback(() => setMenu(false), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        {/* Logo */}
          <div className="flex items-center space-x-3">
          <img
            src={pic}
            className="h-12 w-12 rounded-full border border-gray-300 dark:border-gray-700 shadow-sm"
            alt="Profile"
          />
          <div>
            <h1 className="text-xl font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              <Link to="Home" smooth={true} duration={500} offset={-70} className="flex items-center">
                Niles<span className="text-green-500">h</span>
              </Link>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navs.map(({ id, text }) => (
            <li key={id} className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-yellow-400 transition duration-200 cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-green-500 dark:text-yellow-400"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle className="bg-gray-100 dark:bg-gray-800" />
        </div>

        {/* Mobile Menu Toggle (visible on smaller screens) */}
          <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
          {menu ? (
            <IoCloseSharp size={28} className="text-gray-700 dark:text-gray-200" />
          ) : (
            <AiOutlineMenu size={28} className="text-gray-700 dark:text-gray-200" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
      <ul className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-8 space-y-6 md:hidden transition-colors">
          {navs.map(({ id, text }) => (
            <li
              key={id}
              className="text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-yellow-400 transition duration-200 cursor-pointer"
            >
              <Link
                onClick={handleCloseMenu}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-green-500 dark:text-yellow-400"
              >
                {text}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle className="bg-gray-100 dark:bg-gray-800" />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
