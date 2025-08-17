import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left: Logo */}
       
            <Link to="/" className="text-xl font-bold text-gray-900">LookScout</Link>

          {/* Middle: Search Bar */}
          <div className="flex-1 mx-6 flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Right: Icons & User */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
              <CiBellOn className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg">
              <IoSettingsOutline className="w-6 h-6" />
            </button>

            {/* User avatar with dropdown */}
            <div className="relative">
              <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <FaUser className="w-5 h-5 text-white" />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Settings
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center">
                    Logout <MdOutlineLogout className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="p-6">
        <h2 className="text-lg font-semibold text-gray-700">Welcome to the Dashboard!</h2>
      </main>
    </div>
  );
};

export default Dashboard;
