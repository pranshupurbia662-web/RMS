import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
  { to: "/customer-menu", label: "Home" },
  { to: "/customer-menu/drinks", label: "Drinks" },
  { to: "/customer-menu/starter", label: "Starter" },
  { to: "/customer-menu/maincourse", label: "Main Course" },
  { to: "/customer-menu/bread", label: "Bread" },
  { to: "/customer-menu/desserts", label: "Desserts" },
];

  return (

    <div className="w-full bg-[#f7f3ef] border-b border-[#D4A017]/30 shadow-sm">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-3 py-2">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            className="w-12 sm:w-14 rounded-full shadow-lg"
            src="/logo/RMSlogo.png"
            alt="Logo"
          />

          <div>

            <h1 className="text-xl sm:text-3xl font-semibold text-[#111827]">
              Royal Spice
            </h1>

            <p className="text-[10px] sm:text-sm tracking-[3px] sm:tracking-[5px] text-[#D4A017] uppercase">
              Fine Dining
            </p>

          </div>

        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-[14px] lg:text-[17px] font-medium uppercase text-[#D4A017]">

          {links.map((l) => (

            <Link
              key={l.to}
              to={l.to}
              className="hover:text-[#B8860B] transition duration-300"
            >
              {l.label}
            </Link>

          ))}

        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >

          <span
            className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          ></span>

        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (

        <div className="md:hidden flex flex-col border-t border-[#D4A017]/20 bg-[#fdfaf6]">

          {links.map((l) => (

            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-[#D4A017] uppercase text-[14px] font-medium tracking-wide border-b border-[#D4A017]/10 hover:bg-[#D4A017]/10 transition duration-200"
            >
              {l.label}
            </Link>

          ))}

        </div>

      )}

    </div>
  );
};

export default Navbar;