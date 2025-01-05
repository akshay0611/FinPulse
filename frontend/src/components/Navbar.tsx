'use client'

import React, { useState, useEffect, useRef } from 'react'
import { TrendingUp, Menu, X, ChevronDown, Search } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [menuOpen])

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-4 px-6 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ease-in-out">
      {/* Desktop logo - hidden on mobile */}
      <a href="/" className="hidden md:flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-emerald-400" />
        <h1 className="text-2xl font-bold">Fin<span className="text-emerald-400">Pulse</span></h1>
      </a>

      {/* Search Bar Component - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block">
        <SearchBar />
      </div> 

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/news">News</NavLink>
        <NavLink href="/schemes">Schemes</NavLink>
        <NavLink href="/investments">Investments</NavLink>
        <NavLink href="/blog">Blogs</NavLink>
        <NavDropdown title="Tools">
          <a href="/market-pulse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Market Pulse</a>
          <a href="/calculators" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Calculators</a>
        </NavDropdown>
        <NavDropdown title="Learn">
          <a href="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Courses</a>
          <a href="/quiz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Quiz</a>
        </NavDropdown>
        <a href="/signin-signup">
          <button className="px-6 py-2 rounded-full bg-emerald-400 text-white hover:bg-emerald-500 transition-all duration-200 ease-in-out">
            Sign In / Sign Up
          </button>
        </a>
      </div>

      {/* Mobile menu button and logo */}
      <div className="md:hidden flex items-center justify-between w-full">
        {/* Mobile logo - visible on mobile */}
        <a href="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-emerald-400" />
          <h1 className="text-2xl font-bold">Fin<span className="text-emerald-400">Pulse</span></h1>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 z-50 bg-indigo-900 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-4 pb-3 space-y-4">
          <div className="flex items-center justify-between">
            {/* Mobile logo - visible on mobile */}
            <a href="/" className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-emerald-400" />
              <h1 className="text-2xl font-bold text-white">Fin<span className="text-emerald-400">Pulse</span></h1>
            </a>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <X className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <SearchBar />
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/news">News</MobileNavLink>
          <MobileNavLink href="/schemes">Schemes</MobileNavLink>
          <MobileNavLink href="/investments">Investments</MobileNavLink>
          <MobileNavLink href="/blog">Blogs</MobileNavLink>
          <MobileNavDropdown title="Tools">
            <a href="/market-pulse" className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-700">Market Pulse</a>
            <a href="/calculators" className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-700">Calculators</a>
          </MobileNavDropdown>
          <MobileNavDropdown title="Learn">
            <a href="/courses" className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-700">Courses</a>
            <a href="/quiz" className="block px-3 py-2 text-base font-medium text-white hover:bg-indigo-700">Quiz</a>
          </MobileNavDropdown>
          <div className="mt-4">
            <a href="/signin-signup" className="block w-full">
              <button className="w-full px-6 py-2 rounded-full bg-emerald-400 text-white hover:bg-emerald-500 transition-all duration-200 ease-in-out">
                Sign In / Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-white hover:text-emerald-400 transition-all duration-200 ease-in-out">
    {children}
  </a>
)

const NavDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-emerald-400 transition-all duration-200 ease-in-out focus:outline-none"
      >
        {title} <ChevronDown className="inline-block h-4 w-4 ml-1" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700">
    {children}
  </a>
)

const MobileNavDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
      >
        {title} <ChevronDown className="inline-block h-4 w-4 ml-1" />
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  )
}

const SearchBar = () => (
  <div className="relative w-full max-w-md mx-auto">
    <input
      type="search"
      placeholder="Search..."
      className="w-full bg-indigo-800 text-white placeholder-indigo-300 border-indigo-700 focus:border-emerald-400 rounded-md py-2 px-4 pr-10"
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-300" />
  </div>
)

export default Navbar
