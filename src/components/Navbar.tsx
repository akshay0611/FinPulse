import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center gap-2"> {/* Ensure items are in a row */}
        <Link to="/" className="flex items-center gap-2"> {/* Wrap the logo with Link and align items horizontally */}
          <TrendingUp className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-bold">Fin<span className="text-emerald-400">Pulse</span></h1>
        </Link>
      </div>

      <div className="flex-1 max-w-sm mx-auto" style={{ marginLeft: '270px' }}> {/* Apply inline style to shift the search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full bg-indigo-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-300" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/about" className="hover:text-emerald-400">About</Link>
        <Link to="/news" className="hover:text-emerald-400">News</Link>
        <Link to="/schemes" className="hover:text-emerald-400">Schemes</Link>
        <Link to="/investments" className="hover:text-emerald-400">Investments</Link>
        <Link to="/blog" className="hover:text-emerald-400">Blogs</Link>
        {/* <a href="/blog" className="hover:text-emerald-400">Blogs</a> */}
        <Link to="/signin-signup">
          <button className="bg-emerald-400 px-4 py-2 rounded-lg text-indigo-900 font-bold hover:bg-emerald-500">
            Sign In / Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
