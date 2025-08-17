import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-6 max-w-[1100px] mx-auto">
      {/* Left - Logo and Links */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold">
          LookScout
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link
            to="/ourProduct"
            className="hover:text-blue-500 transition-colors"
          >
            Our Product
          </Link>
          <Link
            to="/resources"
            className="group flex items-center gap-1 text-gray-700 font-medium hover:text-blue-500 transition-colors duration-200"
          >
            Resources
            <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-hover:rotate-180" />
          </Link>

          <Link to="/contact" className="hover:text-blue-500 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Sign-up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
