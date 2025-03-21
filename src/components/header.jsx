import React, { useState, useEffect, useRef } from "react";
import "../style/components/header.css";


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
      if (navRef.current && !navRef.current.contains(e.target)) setIsNavOpen(false);
    };

    if (isNavOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  return (
    <header className="header-container">
      <a href="/" className={`logo-container ${isNavOpen ? "hide-logo" : ""}`}>
        <img src="assets/logo.png" className="imageLogo" alt="OKY Logo" />
      </a>

      <nav ref={navRef} className={`navigation ${isNavOpen ? "nav-open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <ul className="nav-list">
          {navItems.map(({ path, label }) => (
            <li key={label} className="nav-item">
              <a href={path} className="nav-link" onClick={() => setIsNavOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
