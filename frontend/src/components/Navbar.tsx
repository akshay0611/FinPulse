import React, { useState, useEffect, useRef } from 'react';
import { Search, TrendingUp, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false); // State for Learn dropdown
  const [searchQuery, setSearchQuery] = useState(''); // Track search input
  const [searchResults, setSearchResults] = useState<string[]>([]); // Store filtered search results
  const menuRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null); // Ref for Learn dropdown
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

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

  // Suggestions for search
  const pages = [
    'About',
    'Contact',
    'Careers',
    'Press',
    'Feedback',
    'Blog',
    'News',
    'Guides',
    'Help Center',
    'Privacy Policy',
    'Terms of Service',
    'Cookie-Policy',
    'Disclaimer'
  ];
  
  // Handle input change and filter results
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filteredResults = pages.filter(page => page.toLowerCase().includes(query));
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result: string) => {
    setSearchQuery(result); // Set the search query to the clicked result
    setSearchResults([]); // Clear results after selection
  
    // Mapping specific page names to their route paths
    const routeMapping: { [key: string]: string } = {
      'Help Center': '/helpcenter', // Match "Help Center" to "/helpcenter"
      'Privacy Policy': '/privacy-policy', // Add other mappings if needed
      'Terms of Service': '/terms-of-service',
      'Cookie-Policy': '/cookie-policy',
      // Add more mappings here if needed
    };
  
    // Check if the result has a mapped route, otherwise format as before
    const formattedResult = routeMapping[result] || `/${result.toLowerCase().replace(/\s+/g, '-')}`;
  
    // Navigate to the corresponding page
    navigate(formattedResult);
  };
  
  

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

      {/* Search Bar */}
      <div className="flex-1 max-w-sm mx-auto hidden lg:block">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full bg-indigo-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
          
          {/* Dropdown container for search results */}
          {searchResults.length > 0 && (
            <div className="absolute w-full bg-indigo-800 text-white rounded-lg shadow-lg mt-2 z-50">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-indigo-700 cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

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
            <button className="bg-emerald-400 px-3 py-1.5 rounded-lg text-white-200 font-bold hover:bg-emerald-500 transition-all duration-200 ease-in-out">
              Sign In / Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
