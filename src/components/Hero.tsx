import React from 'react';
import { FaBolt, FaChartLine, FaCircle, FaRegClock } from 'react-icons/fa'; // Import React Icons
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
    <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 relative">
      {/* Hero Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
        
        {/* Left Side */}
        <div className="space-y-6 text-left">
          {/* AI-Powered Badge */}
          <div className="inline-flex items-center bg-indigo-800 bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium shadow-md">
            <FaCircle className="text-green-400 w-2 h-2 mr-2" />
            Trusted Financial Guidance
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Empowering Your Financial <span className="text-green-400">Future</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-300 text-lg">
          At FinPulse, we provide comprehensive financial advice, market analysis, and investment strategies to help individuals and businesses secure their financial future.
          </p>
          
          {/* Feature Buttons */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-indigo-800 bg-opacity-50 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <FaBolt className="text-green-400" />
              Smart Financial Guidance
            </div>
            <div className="bg-indigo-800 bg-opacity-50 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <FaRegClock className="text-green-400" />
              Real-time Market Insights
            </div>
            <div className="bg-indigo-800 bg-opacity-50 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <FaChartLine className="text-green-400" />
              Investment Strategies
            </div>
          </div>
        </div>

       {/* Right Side */}
        <div className="bg-indigo-800 bg-opacity-50 rounded-lg p-6 shadow-lg">
           {/* Market Mood Header */}
            <div className="text-gray-200 text-sm font-medium flex items-center gap-2 mb-4">
             <FaCircle className="text-green-400 w-2 h-2" />
              Market Mood
              <span className="ml-auto text-green-400">Current Levels</span>
            </div>

           {/* Predictions/Market Levels */}
            <div className="space-y-4">
             {["NIFTY", "BANKNIFTY"].map((item) => (
             <div key={item} className="flex items-center bg-indigo-900 bg-opacity-70 rounded-lg px-4 py-3">
              <span className="text-white font-semibold">{item}</span>
               <div className="ml-auto flex items-center gap-2">
              {/* Current Level */}
               <span className="text-white font-medium">Current Level:</span>
              <span className="text-green-400 font-medium">XX,XXX</span> {/* Replace XX,XXX with actual market value */}
             </div>
            </div>
            ))}
          </div>
        </div>


      </div>
       {/* Centered Scroll Down Indicator with More Space */}
       <div 
        className="flex flex-col items-center justify-center mt-44 animate-bounce cursor-pointer"
        onClick={scrollDown}
      >
        <p className="text-sm text-white mb-4">Scroll down for more</p>
        <ArrowDown className="h-8 w-8 text-emerald-400" />
      </div>
    </div>
  );
};

export default Hero;
