import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the close (cross) icon
import logo from "../assets/home_logo.png";
import logo2 from "../assets/logo2.png";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-red-600 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 sm:py-6 lg:py-8">
          <div className="flex items-center mr-4">
            <img src={logo} alt="Logo" className="h-12 sm:h-16 lg:h-20" />
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-20 animate-pulse">
            <a href="/about" className="hover:scale-100 ease-in duration-300 text-white text-2xl font-thin">ABOUT US</a>
            <a href="/brand" className="hover:scale-100 ease-in duration-300 text-white text-2xl font-thin">BRAND</a>
            <a href="/about" className="hover:scale-100 ease-in duration-300 text-white text-2xl font-thin">PARLE RECIPIES</a>
            <a href="/about" className="hover:scale-100 ease-in duration-300 text-white text-2xl font-thin">CARRIERS</a>
            
            <FaBars
              className="text-4xl text-stone-50 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <img
              src={logo2}
              alt="Logo 2"
              className="h-12 sm:h-16 lg:h-20 ml-4  hover:text-gray-200"
            />
          </div>
          <div className="flex items-center sm:hidden">
            <a
              href="/"
              className="text-white text-2xl font-thin hover:text-gray-200"
              onClick={toggleSidebar}
            >
              <FaBars />
            </a>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-red-600 text-right">
          <div className="flex justify-between items-center px-4 py-2 ml-60 mt-14 text-5xl">
            <FaTimes
              className="text-black cursor-pointer"
              onClick={closeSidebar}
            />
          </div>
          <ul className="mt-8 ml-52 inline">
            <li className="py-2 px-4 text-white">CSR</li>
            <li className="py-2 px-4 text-white">MEDIA</li>
            <li className="py-2 px-4 text-white">CONTACT US</li>
            <li className="py-2 px-4 text-white">DOWNLOADS</li>
            <li className="py-2 px-4 text-white">SEND A GREETING</li>
            <li className="py-2 px-4 text-white">WORLDWIDE PRESENCE</li>
            <li className="py-2 px-4 text-white">CONTEST TERM AND CONDITION</li>
            <li className="py-2 px-4 text-white">MGT</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, text }) => (
  <a href={href} className="text-white text-2xl font-thin hover:text-gray-200">
    {text}
  </a>
);

export default Nav;
