import React, { useState } from 'react';
import { FaSun, FaMoon, FaHome, FaInfoCircle, FaFlask, FaCog, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode = false, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome className="text-sm" /> },
    { name: 'About', href: '#about', icon: <FaInfoCircle className="text-sm" /> },
    { name: 'Lab Booking', href: '#lab-booking', icon: <FaFlask className="text-sm" /> },
    { name: 'Equipment', href: '#equipment', icon: <FaCog className="text-sm" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="text-sm" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-slate-900/95 border-b border-slate-700' 
        : 'bg-white/95 border-b border-gray-200'
    } backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className={`flex items-center space-x-2 font-bold text-xl lg:text-2xl ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            <div className={`p-2 rounded-lg ${
              darkMode ? 'bg-blue-600' : 'bg-blue-100'
            }`}>
              <FaFlask className={`text-xl ${
                darkMode ? 'text-white' : 'text-blue-600'
              }`} />
            </div>
            <span>SIF-FLAB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 font-medium text-base transition-all duration-300 hover:scale-105 relative group ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                  darkMode ? 'bg-blue-400' : 'bg-blue-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            {onToggleDarkMode && (
              <button 
                onClick={onToggleDarkMode}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'bg-slate-800 border-2 border-blue-400 hover:shadow-lg hover:shadow-blue-400/25' 
                    : 'bg-gray-100 border-2 border-blue-600 hover:shadow-lg hover:shadow-blue-600/25'
                }`}
              >
                {darkMode ? (
                  <FaSun className="text-lg text-yellow-400" />
                ) : (
                  <FaMoon className="text-lg text-blue-600" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-800 border border-blue-400 hover:shadow-lg hover:shadow-blue-400/25' 
                  : 'bg-gray-100 border border-blue-600 hover:shadow-lg hover:shadow-blue-600/25'
              }`}
            >
              {isMenuOpen ? (
                <FaTimes className={`text-lg ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              ) : (
                <FaBars className={`text-lg ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            darkMode ? 'border-slate-700' : 'border-gray-200'
          }`}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-800/50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;