import React from 'react';
import { Rss, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a0f2e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">FinPulse</h2>
          <p className="text-gray-400">Your trusted companion for financial guidance and investment strategies.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#e341ff]">About</a></li>
            <li><a href="#" className="hover:text-[#e341ff]">Fin-Buddy</a></li>
            <li><a href="#" className="hover:text-[#e341ff]">Investments</a></li>
            <li><a href="#" className="hover:text-[#e341ff]">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-[#e341ff]">Helpdesk</a></li>
            <li><a href="#" className="hover:text-[#e341ff]">FAQ</a></li>
            <li><a href="#" className="hover:text-[#e341ff]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#e341ff]"><Rss /></a>
            <a href="#" className="hover:text-[#e341ff]"><Twitter /></a>
            <a href="#" className="hover:text-[#e341ff]"><Facebook /></a>
          </div>
          <select className="mt-4 bg-[#2d1f42] text-white px-4 py-2 rounded-lg w-full">
            <option>Select Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        © 2024 | FinPulse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;