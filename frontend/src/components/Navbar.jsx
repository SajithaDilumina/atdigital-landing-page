import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-primary text-white z-50">
      <div className="px-[32px] mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={logo} alt="" className="w-24 sm:w-20 md:w-50 h-auto" />

          {/* Desktop Menu */}
          <div className="text-xs sm:text-xs md:text-sm hidden sm:flex md:space-x-6 space-x-2 uppercase">
            {["Services", "About us", "Contact us", "Careers"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-100 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white text-text-color z-50 shadow-lg">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="block px-4 py-2 hover:bg-accent hover:text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
