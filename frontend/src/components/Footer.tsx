import React, { useState } from 'react';
import { Rss, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import GoogleTranslate from './GoogleTranslate';

const Footer = () => {
  const [email, setEmail] = useState('');

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
            <p className="text-gray-400">
              Your trusted companion for financial guidance and investment strategies.
            </p>
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
              <li>
                <Link to="/contact" className="hover:text-[#e341ff]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with daily financial news, market insights, and investment strategies.
            </p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full py-3 px-4 rounded-lg border border-gray-600 bg-[#1a0f2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10b981] pr-28"
              />
              <button
                onClick={() => alert(`Signed up with: ${email}`)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#10b981] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#059669] transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Location, Email, Phone, Social Media, and Translation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li>
                <strong>Location:</strong> 1234 Finance Street, City, Country
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:info@finpulse.com" className="hover:text-[#e341ff]">info@finpulse.com</a>
              </li>
              <li>
                <strong>Phone:</strong> +123 456 7890
              </li>
            </ul>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-[#e341ff]">
                <Rss />
              </a>
              <a href="#" className="hover:text-[#e341ff]">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#e341ff]">
                <Facebook />
              </a>
            </div>
            <GoogleTranslate />
          </div>
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
