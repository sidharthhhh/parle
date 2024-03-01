import React from 'react';
import logo from "../assets/home_logo.png";
import world from "../assets/world.avif";

const About = () => {
  return (
    <div id='about' className="flex justify-center">
      <div className="max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {/* First Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">Company Overview</h1>
          <p className="text-gray-700 mb-6">India's leading Manufacturer of biscuit and confectionery.</p>
          <h3 className="text-lg font-semibold mt-44">Parle Legacy</h3>
          <h4>------ <span>The Legacy</span> --------</h4>
          <h1 className='ml-16 w-20 text-red-600 font-bold  text-5xl'>90</h1>
          <h4>--------- <span>years</span> ----------</h4>
        </div>

        {/* Second Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="h-64 relative">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={logo}
              alt="Second Card Image"
            />
          </div>
          <h4>Parle</h4>
          <h2 className="text-xl font-bold mt-6">Corporate Social Responsibility</h2>
        </div>

        {/* Third Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Worldwide Presence</h2>
          <div className="h-64 relative mb-6">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={world}
              alt="Third Card Image"
            />
          </div>
          <p className="text-gray-700">Parle Biscuits and confectionaries are fast gaining acceptance in International Markets.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
