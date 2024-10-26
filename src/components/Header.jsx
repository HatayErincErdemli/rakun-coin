import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Your Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/story" className="hover:text-gray-300">
              Story
            </Link>
          </li>
          <li>
            <Link to="/whitepaper" className="hover:text-gray-300">
              Whitepaper
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
