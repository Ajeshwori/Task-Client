import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { SiMoleculer } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import {  Link } from "react-router-dom";
import Faq from "../local/FAQ";
import { FaCcPaypal } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoSlack } from "react-icons/io5";
import { SiTwilio } from "react-icons/si";
import { FaPinterest } from "react-icons/fa6";
import { SiMailchimp } from "react-icons/si";
import Team from "../local/Team";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center bg-gray-100 h-[376px] md:h-[352px] lg:h-[404px] px-4">
        <div className="max-w-[640px] w-full flex flex-col items-center text-center gap-4">
          {/* Small Top Heading */}
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            1% of the industry
          </h2>

          {/* Hero Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-gray-900">
            Hype got you here. <br className="hidden md:block" />
            Stay for best ever help.
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-7 text-gray-600 max-w-[540px]">
            We've been told it is possible to revolutionize the payment industry.
            We have not reinvented the wheel, we decided to build upon it – successfully.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex justify-center items-center bg-white py-16 px-4">
        <div className="max-w-6xl w-full flex flex-col items-center text-center gap-8">
          {/* Heading + Subheading */}
          <header className="max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900">Message for all</h2>
            <p className="mt-2 text-gray-600">
              User generated content in real-time will have multiple touchpoints for offshoring.
            </p>
          </header>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

            {/* Card 1 */}
            <article className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center mb-4">
                <SiMoleculer className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Easier Work Organization</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.
              </p>
            </article>

            {/* Card 2 */}
            <article className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center mb-4">
                <FaShareAlt className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Streamlined Processes</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.
              </p>
            </article>

            {/* Card 3 */}
            <article className="bg-gray-50 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center mb-4">
                <SiReactrouter className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Marketing Analytics</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Phosfluorescently engage worldwide methodologies with web-enabled Interactively coordinate.
              </p>
            </article>

          </div>
        </div>
      </section>

 <div className="flex justify-center items-center bg-white py-20 px-6 sm:px-8 lg:px-12">
  <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Text Section */}
    <div className="space-y-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        Demonstrate branding consequently think outside
      </h1>

      <p className="text-lg text-gray-600 max-w-xl">
        Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. 
        Aenean malesuada tellus tellus faucibus mauris quisque mauris in.
      </p>

      <ul className="space-y-3">
        <li className="flex items-start">
          <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 text-lg">Enterprise-grade security</span>
        </li>
        <li className="flex items-start">
          <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 text-lg">99.9% guaranteed uptime SLA</span>
        </li>
        <li className="flex items-start">
          <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 text-lg">Designated customer success team</span>
        </li>
      </ul>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
         <Link 
    to="/login"
    className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-sm"
  >
    Start Now →
  </Link>
       
      </button>
    </div>

    {/* Right Image Section */}
    <div className="relative">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP._Pg_-LCHeUKeYxsgIDVGDwHaE8?pid=Api" 
        alt="Workspace" 
        className=" w-full  object-cover shadow-md"
      />
      
      {/* Floating Card inside Image */}
     <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-lg shadow-lg w-72 text-center">
  <h3 className="text-base font-semibold text-gray-900">Check Us Out</h3>
  
  <Link 
    to="/login"
    className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-sm"
  >
    Get Started Now
  </Link>
</div>

      </div>
    </div>
  </div>
     
      <Team />
      <Faq />
    <div className="relative flex flex-col justify-center items-center bg-blue-600 h-[450px] px-4 overflow-hidden">
  {/* Heading section */}
  <div className="text-center ">
    <h2 className="text-[15px] font-semibold uppercase tracking-widest text-blue-100 mb-2">
      1% OF THE INDUSTRY
    </h2>
    <h1 className="text-[25px] font-bold  text-white mb-6">
      Welcome to your new digital reality that
      <br className="hidden md:block" />
      which will rock your world truly at all.
    </h1>

    {/* Buttons */}
    <div className="flex gap-4 justify-center">
      <Link
        to="/signup"
        className="px-6 py-2.5 rounded-md bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors duration-200 shadow-sm"
      >
        Sign up
      </Link>
      <Link
        to="/login"
        className="px-6 py-2.5 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors duration-200 shadow-sm"
      >
        Sign in
      </Link>
    </div>
  </div>

  {/* Brand icons horizontally with names */}
  <div className="absolute bottom-6 flex flex-wrap justify-center items-center gap-8 md:gap-10 text-white text-lg">
    <div className="flex items-center gap-2">
      <SiTwilio className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Twilio</span>
    </div>
    <div className="flex items-center gap-2">
      <IoLogoSlack className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Slack</span>
    </div>
    <div className="flex items-center gap-2">
      <FcGoogle className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Google</span>
    </div>
    <div className="flex items-center gap-2">
      <FaCcPaypal className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">PayPal</span>
    </div>
    <div className="flex items-center gap-2">
      <FaPinterest className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Pinterest</span>
    </div>
    <div className="flex items-center gap-2">
      <SiMailchimp className="text-2xl md:text-3xl" />
      <span className="text-sm md:text-base">Mailchimp</span>
    </div>
  </div>
</div>


    </>
  );
};
export default Home;