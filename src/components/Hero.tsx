import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  // Scroll function to smoothly scroll the page down
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by one full screen
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <h1 className="text-6xl font-bold mb-6">
        INDIA'S FIRST<br />
        <span className="text-7xl">SMART <span className="text-yellow-300">News FIN-APP</span></span>
      </h1>
      
      <p className="text-2xl mb-8 text-gray-200">
        "Where Intelligence Meets Finance"
      </p>
      
      <button className="bg-yellow-300 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors text-indigo-900 mb-16">
        www.FinPulse.in
      </button>

      {/* Centered Scroll Down Indicator with More Space */}
      <div 
        className="flex flex-col items-center justify-center mt-20 animate-bounce cursor-pointer"
        onClick={scrollDown}
      >
        <p className="text-sm text-gray-300 mb-2">Scroll down for more</p>
        <ArrowDown className="h-8 w-8 text-yellow-300" />
      </div>
    </div>
  );
};

export default Hero;
