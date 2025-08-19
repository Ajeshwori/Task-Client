import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Morgan Drew",
      role: "Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Jeffery Walker", 
      role: "Lead Designer",
      image: "https://tse1.mm.bing.net/th/id/OIP.xvZEDLd42bN5fNXDw-BtFgHaD0?pid=Api&P=0&h=220",
    },
    {
      name: "Andrew Steve",
      role: "UI/UX Designer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">The Core of Our Team</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content Container */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-500 font-medium mb-4">{member.role}</p>
              
              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-sky-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaTelegramPlane className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;