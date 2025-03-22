import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const navItems = [
  { path: "/", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#expertise", label: "Expertise" },
  { path: "#services", label: "Services" },
  { path: "#realisation", label: "Realisation" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-white shadow-lg rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <a href="/" className="flex-shrink-0">
        <img src="assets/LOGO.png" alt="Logo" className="w-32" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-10">
        {navItems.map(({ path, label }) => (
          <a
            key={label}
            href={path}
            className="text-lg font-medium text-gray-800 hover:text-orange-500 transition-all duration-300 relative group"
          >
            {label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="md:hidden text-gray-800 text-3xl focus:outline-none"
      >
        {isNavOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div
          ref={navRef}
          className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-5 py-6 md:hidden"
        >
          {navItems.map(({ path, label }) => (
            <a
              key={label}
              href={path}
              className="text-lg font-medium text-gray-800 hover:text-orange-500 transition-all duration-300"
              onClick={() => setIsNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
