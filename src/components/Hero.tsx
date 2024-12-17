import React from 'react';
import { FaBolt, FaChartLine, FaCircle, FaRegClock } from 'react-icons/fa'; // Import React Icons
import { ArrowDown } from 'lucide-react';
import HeroImage from '../assets/Hero.png';  // Adjust the path if necessary


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
        <div className="space-y-8 text-left">
          {/* AI-Powered Badge */}
          <div className="inline-flex items-center bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-full text-lg font-medium shadow-md">
            <FaCircle className="text-green-400 w-3 h-3 mr-3" />
            Trusted Financial Guidance
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Empowering Your Financial <span className="text-green-400">Future</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-300 text-xl md:text-2xl">
            At FinPulse, we provide comprehensive financial advice, market analysis, and investment strategies to help individuals and businesses secure their financial future.
          </p>
          
          {/* Feature Buttons */}
          <div className="flex flex-wrap gap-6">
            <div className="bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3">
              <FaBolt className="text-green-400 text-xl" />
              Smart Financial Guidance
            </div>
            <div className="bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3">
              <FaRegClock className="text-green-400 text-xl" />
              Real-time Market Insights
            </div>
            <div className="bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3">
              <FaChartLine className="text-green-400 text-xl" />
              Investment Strategies
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-between items-center">
          {/* Right-side Image */}
          <img
            src={HeroImage}
            alt="Financial Image"
            style={{
              width: '80%',    // Adjust the width (can use px, %, or rem)
              height: 'auto',  // Keep the height proportional to the width
              objectFit: 'cover',  // Ensures the image fills the container without distortion
              marginLeft: '90px',  // Shifts the image slightly to the right
            }}
          />
        </div>
        
      </div>

      {/* Centered Scroll Down Indicator with More Space */}
      <div 
        className="flex flex-col items-center justify-center mt-12 animate-bounce cursor-pointer"
        onClick={scrollDown}
      >
        <p className="text-lg text-white mb-6">Scroll down for more</p>
        <ArrowDown className="h-10 w-10 text-emerald-400" />
      </div>
    </div>
  );
};

export default Hero;
