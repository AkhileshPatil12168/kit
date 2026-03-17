import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
          
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Build your next <span className="text-blue-600">big idea</span> faster.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Stop wasting time on boilerplate. Use our pre-built components to 
              launch your landing page in minutes, not hours.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-300">
                Live Demo
              </button>
            </div>
          </div>

          {/* Right Image/Graphic Section */}
          <div className="md:w-1/2 flex justify-center relative">
            {/* Decorative Background Blob */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            
            <div className="relative w-full max-w-md">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Hero Illustration" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;