import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getLinkClass = (path) => {
    const baseClass = "px-3 py-1 rounded transition-colors duration-200";
    const activeClass = "bg-blue-600 text-white font-medium";
    const inactiveClass = "text-gray-600 hover:bg-blue-50 hover:text-blue-600";

    return location.pathname === path
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/Skills" },
    { name: "Contact", path: "/Contact" },
    { name: "Projects", path: "/Projects" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600"
              onClick={closeMenu}
            >
              MyPortfolio
            </Link>
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className={getLinkClass(link.path)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar / Drawer */}
      {/* Overlay (Background dimming) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <span className="text-xl font-bold text-blue-600">Menu</span>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-red-500"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block text-lg ${getLinkClass(link.path)}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sidebar Footer (Optional) */}
          <div className="mt-auto p-6 border-t bg-gray-50">
            <p className="text-sm text-gray-500 text-center">
              © 2025 MyPortfolio
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
