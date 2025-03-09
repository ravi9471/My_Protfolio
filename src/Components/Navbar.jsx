import React from "react";
import "./Style.css";

function Navbar() {
  return (
    <nav className="bg-black fixed flex justify-center items-center h-18 w-full top-0 left-0 z-50 shadow-lg">
      <ul className="flex space-x-8 md:space-x-12 text-white text-lg font-medium">
        <li>
          <a href="#Home" className="nav-link">Home</a>
        </li>
        <li>
          <a href="#Experience" className="nav-link">Experience</a>
        </li>
        <li>
          <a href="#Technology" className="nav-link">Technology</a>
        </li>
        <li>
          <a href="#About" className="nav-link">About</a>
        </li>
        <li>
          <a href="#Contacts" className="nav-link">Contacts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
