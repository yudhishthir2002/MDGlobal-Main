import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/Logo/Mdglobal.png';
import './NavBar.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: 'https://mdglobalhr.com/blog/' },
  { name: 'Career', href: '/jobs' },
  { name: 'Contact Us', href: '/contact-us' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/60 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
        <div className="w-full mx-auto px-3 sm:px-6 lg:px-8">
          {/* Desktop View */}
          <div className="hidden navGrid md:grid  items-center h-16 w-full">
            {/* Logo */}
            <div className="logo h-auto">
              <Link to="/">
                <img src={img} alt="MD Global" className="LogoPNG" />
              </Link>
            </div>

            {/* Navigation */}
            <div className="Navbutton flex justify-center">
              <ul className="grid grid-flow-col gap-3 items-center">
                {navItems.map((item) => (
                  <li key={item.name} className="text-center">
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-blue-800 transition font-medium text-[15px]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brochure Button */}
            <div className="brochuseButton flex justify-end">
              <Link to="/download-brochure">
                <button className="brochureMP w-40 h-9 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 text-sm font-semibold">
                  Download Brochure
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex md:hidden justify-between items-center h-16">
            <div>
              <Link to="/">
                <img src={img} alt="MD Global" className="h-10" />
              </Link>
            </div>

            <div className="hambar">
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

        {/* Mobile Dropdown */}
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
            <div className="flex items-center justify-center mt-4">
              <Link to="/download-brochure">
                <button className="Download-brochure-sm bg-gradient-to-r h-6 w-40 from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-700 hover:to-blue-900 transition duration-300 font-semibold text-sm">
                  Download Brochure
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default NavBar;
