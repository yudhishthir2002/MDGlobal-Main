import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/Logo/Mdglobal (1).png';
import './NavBar.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: 'https://mdglobalhr.com/blog/' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Contact Us', href: '/contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Nav */}
      <nav className="bg-white/60 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={img} alt="MD Global" className="h-50" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="text-gray-600 MainNavElement w-20 shrink-0 text-center group-hover:text-gray-900 text-[20px]"
                  >
                    <Link
                      to={item.href}
                      className="text-gray-700 font-medium group-hover:text-blue-800 text-[16px]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Get a Quote Button - Desktop */}
              <div className="h-auto flex items-center justify-center">
                <Link to="/download-brochure">
                  <button className="w-36 h-8 bg-gradient-to-r from-blue-600 to-blue-800  text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold text-sm">
                    Download Brochure
                  </button>
                </Link>
              </div>
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            <div className="md:hidden flex w-8 items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md shadow-md px-4 pt-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-center navElement text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Get a Quote Button - Mobile */}
            <div className="h-auto flex items-center justify-center mt-4">
              <Link to="/download-brochure">
                <button className="Download-brochure-sm bg-gradient-to-r h-6 w-40 from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold text-sm">
                  Download Brochure
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content behind navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default NavBar;
