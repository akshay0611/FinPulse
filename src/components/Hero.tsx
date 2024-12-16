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
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 relative">
      <h1 className="text-6xl font-bold mb-8">
        INDIA'S FIRST<br />
        <span className="text-7xl">SMART <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">News FIN-APP</span></span>
      </h1>

      <p className="text-xl text-white mb-12">
        "Where Intelligence Meets Finance"
      </p>
      
      <button className="bg-emerald-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-colors text-white mb-16">
        www.FinPulse.in
      </button>

      {/* Centered Scroll Down Indicator with More Space */}
      <div 
        className="flex flex-col items-center justify-center mt-20 animate-bounce cursor-pointer"
        onClick={scrollDown}
      >
        <p className="text-sm text-white mb-4">Scroll down for more</p>
        <ArrowDown className="h-8 w-8 text-emerald-400" />
      </div>
    </div>
  );
};

export default Hero;
