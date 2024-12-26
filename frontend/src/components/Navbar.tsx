import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import SearchBar from './SearchBar'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const toggleToolsDropdown = () => {
    setToolsDropdownOpen(prevState => !prevState);
  };

  const toggleLearnDropdown = () => {
    setLearnDropdownOpen(prevState => !prevState);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (toolsDropdownOpen && toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
      if (learnDropdownOpen && learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setLearnDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen, toolsDropdownOpen, learnDropdownOpen]);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none focus:ring-2 focus:ring-emerald-400">
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-bold">Fin<span className="text-emerald-400">Pulse</span></h1>
        </Link>
      </div>

      {/* Search Bar Component */}
      <SearchBar /> {/* Pass pages array inside SearchBar */}

      {/* Menu items */}
      <div ref={menuRef} className={`navbar-menu fixed top-0 left-0 h-full bg-indigo-900 z-40 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:flex lg:items-center lg:space-x-6 lg:translate-x-0 lg:bg-transparent`}>
        <div className={`flex flex-col lg:flex-row ${menuOpen ? 'space-y-4 mt-2 lg:space-y-0 lg:space-x-6' : 'space-x-6'}`}>
          <Link to="/about" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">About</Link>
          <Link to="/news" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">News</Link>
          <Link to="/schemes" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">Schemes</Link>
          <Link to="/investments" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">Investments</Link>
          <Link to="/blog" className="hover:text-emerald-400 transition-all duration-200 ease-in-out">Blogs</Link>

          {/* Tools Dropdown */}
          <div ref={toolsRef} className="relative">
            <button
              onClick={toggleToolsDropdown}
              className="flex items-center gap-1 hover:text-emerald-400 transition-all duration-200 ease-in-out focus:outline-none"
            >
              Tools <ChevronDown className="h-4 w-4 text-emerald-400" />
            </button>
            {toolsDropdownOpen && (
              <div className="absolute bg-indigo-800 text-white rounded-lg shadow-lg p-2 mt-2 space-y-2">
                <Link to="/market-pulse" className="flex items-center gap-2 hover:text-emerald-400 transition-all duration-200 ease-in-out">
                  Market Pulse
                </Link>
                <Link to="/calculators" className="flex items-center gap-2 hover:text-emerald-400 transition-all duration-200 ease-in-out">
                  Calculators
                </Link>
              </div>
            )}
          </div>

          {/* Learn Dropdown */}
          <div ref={learnRef} className="relative">
            <button
              onClick={toggleLearnDropdown}
              className="flex items-center gap-1 hover:text-emerald-400 transition-all duration-200 ease-in-out focus:outline-none"
            >
              Learn <ChevronDown className="h-4 w-4 text-emerald-400" />
            </button>
            {learnDropdownOpen && (
              <div className="absolute bg-indigo-800 text-white rounded-lg shadow-lg p-2 mt-2 space-y-2">
                <Link to="/courses" className="flex items-center gap-2 hover:text-emerald-400 transition-all duration-200 ease-in-out">
                  Courses
                </Link>
                <Link to="/quiz" className="flex items-center gap-2 hover:text-emerald-400 transition-all duration-200 ease-in-out">
                  Quiz
                </Link>
              </div>
            )}
          </div>

          <Link to="/signin-signup">
            <button className="px-6 py-2 rounded-full bg-emerald-400 text-white hover:bg-emerald-500 transition-all duration-200 ease-in-out">
              Sign In / Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
