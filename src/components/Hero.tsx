import React from 'react';
import { FaNewspaper, FaLightbulb, FaRegClock } from 'react-icons/fa'; // Import React Icons
import { ArrowDown } from 'lucide-react';
import HeroImage from '../assets/Hero.png';  // Adjust the path if necessary

const Hero = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 relative">
      {/* Hero Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto w-full">
        
        {/* Left Side */}
        <div className="space-y-8 text-left">
          {/* Trusted Badge */}
          <div className="inline-flex items-center bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-full text-lg font-medium shadow-md">
            <FaNewspaper className="text-green-400 w-4 h-4 mr-3" />
            Stay Informed, Stay Ahead
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Discover Insights to <span className="text-green-400">Shape Your Future</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-300 text-xl md:text-2xl">
            FinPulse is your trusted partner for the latest financial news, insights into government schemes, and innovative investment ideas. Empower yourself with knowledge to make smarter decisions.
          </p>
          
          {/* Feature Buttons */}
          <div className="flex flex-wrap gap-6">
            <div className="bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3">
              <FaNewspaper className="text-green-400 text-xl" />
              Latest Financial News
            </div>
            <div className="bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3">
              <FaRegClock className="text-green-400 text-xl" />
              Government Schemes
            </div>
            <div className="bg-indigo-800 bg-opacity-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-3">
              <FaLightbulb className="text-green-400 text-xl" />
              Investment Ideas
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
              width: '80%',
              height: 'auto',
              objectFit: 'cover',
              marginLeft: '90px',
            }}
          />
        </div>
        
      </div>

      {/* Centered Scroll Down Indicator */}
      <div 
        className="flex flex-col items-center justify-center -mb-10 animate-bounce cursor-pointer"
        onClick={scrollDown}
      >
        <p className="text-lg text-white mb-6">Scroll down for more</p>
        <ArrowDown className="h-10 w-10 text-emerald-400" />
      </div>
    </div>
  );
};

export default Hero;
