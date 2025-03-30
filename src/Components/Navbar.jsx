import React, { useState } from "react";
import "./Style.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        {/* Logo or Branding */}
        <h1 className="text-white text-xl font-bold">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li><a href="#Home" className="nav-link">Home</a></li>
          <li><a href="#Experience" className="nav-link">Experience</a></li>
          <li><a href="#Technology" className="nav-link">Technology</a></li>
          <li><a href="#About" className="nav-link">About</a></li>
          <li><a href="#Contacts" className="nav-link">Contacts</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black text-white text-lg py-4 space-y-4">
          <li><a href="#Home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#Experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#Technology" className="nav-link" onClick={() => setIsOpen(false)}>Technology</a></li>
          <li><a href="#About" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#Contacts" className="nav-link" onClick={() => setIsOpen(false)}>Contacts</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
