import React, { useState } from "react";
import pic from "../../public/ProfilePicture.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Tech Stack" },
    { id: 5, text: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={pic}
            className="h-12 w-12 rounded-full border border-gray-300 shadow-sm"
            alt="Profile"
          />
          <div>
            <h1 className="text-xl font-bold cursor-pointer">
              Niles<span className="text-green-500">h</span>
            </h1>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ id, text }) => (
            <li key={id} className="text-lg font-medium text-gray-600 hover:text-green-500 transition duration-200 cursor-pointer">
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-green-500"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
          {menu ? (
            <IoCloseSharp size={28} className="text-gray-700" />
          ) : (
            <AiOutlineMenu size={28} className="text-gray-700" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center py-8 space-y-6 md:hidden">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="text-lg font-semibold text-gray-600 hover:text-green-500 transition duration-200 cursor-pointer"
            >
              <Link
                onClick={() => setMenu(false)}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-green-500"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
