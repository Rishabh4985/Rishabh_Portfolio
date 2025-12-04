import React, { useEffect, useState } from "react"; 
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = (e, path) => {
    e.preventDefault();
    closeMenu();
    setActiveSection(path);

    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["#home", "#projects", "#skills", "#contact"];
      const offset = 150;

      sections.forEach((sec) => {
        const element = document.querySelector(sec);
        if (!element) return;

        const top = element.offsetTop - offset;
        const bottom = top + element.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  const getLinkClass = (path) => {
    const baseClass = "px-4 py-2 rounded-lg transition-all duration-300 font-medium";
    const activeClass = "text-cyan-400 border-b-2 border-cyan-400";
    const inactiveClass = "text-slate-300 hover:text-white";

    return activeSection === path
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  return (
    <>
      {/* Apply blur to entire page when sidebar is open */}
      {isOpen && (
        <style>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}

      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-700"
            : "bg-slate-950/90 backdrop-blur-sm"

        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition"
                onClick={(event) => handleScroll(event, "#home")}
              >
                RG.
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      onClick={(e) => handleScroll(e, link.path)}
                      className={getLinkClass(link.path)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Desktop Let's Talk Button */}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="ml-4 px-6 py-2 bg-white text-slate-900 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Hamburger Button - Always Visible on Top */}
            <div className="md:hidden z-50 relative">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 focus:outline-none transition-colors duration-300 p-2"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay - Strong Blur */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-slate-950/98 backdrop-blur-xl border-l border-slate-700 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-700">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={toggleMenu}
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="flex flex-col p-6 space-y-6 flex-grow overflow-y-auto">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className={`block text-lg font-semibold transition ${getLinkClass(
                    link.path
                  )}`}
                  onClick={(e) => handleScroll(e, link.path)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-slate-700">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full text-center hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
