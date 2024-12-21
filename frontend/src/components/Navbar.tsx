import React, { useState } from 'react';
import { Search, TrendingUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-bold">Fin<span className="text-emerald-400">Pulse</span></h1>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-sm mx-auto hidden lg:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full bg-indigo-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Menu items */}
      <div className={`lg:flex items-center space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:block transition-all duration-300 ease-in-out`}>
        <div className={`flex flex-col lg:flex-row ${menuOpen ? 'space-y-4 lg:space-y-0 lg:space-x-6' : 'space-x-6'}`}>
          <Link to="/about" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">About</Link>
          <Link to="/news" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">News</Link>
          <Link to="/schemes" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">Schemes</Link>
          <Link to="/investments" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">Investments</Link>
          <Link to="/blog" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">Blogs</Link>

          <Link to="/signin-signup">
            <button className="bg-emerald-400 px-4 py-2 rounded-lg text-indigo-900 font-bold hover:bg-emerald-500 transition-all duration-200 ease-in-out">
              Sign In / Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
