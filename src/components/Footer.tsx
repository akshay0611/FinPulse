import React from 'react';
import { Rss, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import GoogleTranslate from './GoogleTranslate'; // Import GoogleTranslate component

const Footer = () => {
  return (
    <footer className="bg-[#1a0f2e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            {/* Icon before FinPulse text */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="rgb(52, 211, 153)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
            <h2 className="text-2xl font-bold">FinPulse</h2>
          </div>
          <p className="text-gray-400">Your trusted companion for financial guidance and investment strategies.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-[#e341ff]">About</Link></li> 
            <li><Link to="/investments" className="hover:text-[#e341ff]">Investments</Link></li>
            <li><Link to="/blog" className="hover:text-[#e341ff]">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/faq" className="hover:text-[#e341ff]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#e341ff]">Contact Us</Link></li> {/* Updated Contact Us link */}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#e341ff]"><Rss /></a>
            <a href="#" className="hover:text-[#e341ff]"><Twitter /></a>
            <a href="#" className="hover:text-[#e341ff]"><Facebook /></a>
          </div>
          <div className="mt-6"><GoogleTranslate /></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        © 2024 | FinPulse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;