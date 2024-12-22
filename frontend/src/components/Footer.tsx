import React, { useState } from 'react';
import { Rss, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Footer = () => {
  return (
    <footer className="bg-[#1a0f2e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
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
            <p className="text-gray-400 mb-4">
              Your trusted companion for financial guidance and investment strategies.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-emerald-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-emerald-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-emerald-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-emerald-500">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-[#e341ff]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#e341ff]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/investments" className="hover:text-[#e341ff]">
                  Investments
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#e341ff]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#e341ff]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/blog" className="hover:text-[#e341ff]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#e341ff]">
                  News
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-[#e341ff]">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:text-[#e341ff]">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#e341ff]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#e341ff]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-[#e341ff]">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-[#e341ff]">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
  <GoogleTranslate />
</div>


        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 FinPulse. All Rights Reserved.</p>
          <p>Made with ♥ by Akshay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
