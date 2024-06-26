import React from 'react';
import './about-us.css'; // Make sure to create and import the CSS file
import image from './service.png';

const Aboutus = () => {
  return (
    <div className="container mx-auto">
    {/* First row (Who we are container) */}

  
    {/* Second row (image and paragraph in two columns) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First column (image) */}
      <div className="bg-gray-100 p-4 shadow-md mt-4 mb-4">
        <div className="w-full">
          <img src="/src/component/Navigation/NavDiscover/service.png" alt="serviceimage" className="image" />
        </div>
      </div>
  
      {/* Second column (paragraph) */}
      <div className=" p-4  mt-4 mb-4">
        <div className='text-blue-900 text-3xl font-semibold mb-5' >Who we are!</div>
        <div className=" proudly w-full md:w-2/3 ml-5 lg:w-3/4 xl:w-4/5 md:pl-4 lg:pl-6 xl:pl-8 mt-4 md:mt-0">
          <p className="text-l text-gray-800">
            Proudly Sri Lanka, SEVO Group is a service-oriented company established twenty years ago by Sri Lanka with a vision to create a first class integrated services structure and other business solutions within the entire Sri Lanka.While various services are offered our core, business is the commercial brokerage that puts the best management know-how, stateof-the-art technology and efficient logistic follow-up to work for you and your company needs. In order to provide the kind of service that not only will ensure the retention of our customers but also attract others, we have established partnerships with some of the most reputable companies in the service industry in Eastern Province, North and Western Province. SEVO Group has a dedicated team of experts working around the clock to make sure that our customers get the best contacts, information, business management and marketing talent, which they need to become more profitable, better informed and competitive for all their business cycle.
          </p>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Aboutus;
