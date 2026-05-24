import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const links = [
    { to: "/customer-menu", label: "Home" },
    { to: "/customer-menu/drinks", label: "Drinks" },
    { to: "/customer-menu/starter", label: "Starter" },
    { to: "/customer-menu/maincourse", label: "Main Course" },
    { to: "/customer-menu/bread", label: "Bread" },
    { to: "/customer-menu/desserts", label: "Desserts" },
  ];

  return (

    <div className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#fdfaf6]/90 border-b border-[#D4A017]/20 shadow-sm">

      {/* TOP BAR */}

      <div className="flex items-center justify-between px-3 sm:px-5 lg:px-8 py-3">

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <img
            className="w-12 sm:w-14 rounded-full shadow-lg border border-[#D4A017]/20"
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

        {/* DESKTOP LINKS */}

        <div className="hidden md:flex items-center gap-5 lg:gap-8 text-[14px] lg:text-[16px] font-medium uppercase">

          {links.map((l) => (

            <Link
              key={l.to}
              to={l.to}
              className={`relative transition duration-300 pb-1

              ${
                location.pathname === l.to
                  ? "text-[#B8860B]"
                  : "text-[#D4A017]"
              }

              hover:text-[#B8860B]
              `}
            >

              {l.label}

              {location.pathname === l.to && (

                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B8860B] rounded-full"></span>

              )}

            </Link>

          ))}

        </div>

        {/* MOBILE BUTTON */}

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <span
            className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300
            ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}
            `}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}
            `}
          ></span>

          <span
            className={`block w-6 h-0.5 bg-[#D4A017] transition-all duration-300
            ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
            `}
          ></span>

        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="md:hidden flex flex-col border-t border-[#D4A017]/10 bg-[#fdfaf6]">

          {links.map((l) => (

            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={`px-6 py-4 uppercase text-[14px] tracking-wide border-b border-[#D4A017]/10 transition duration-200

              ${
                location.pathname === l.to
                  ? "bg-[#D4A017]/10 text-[#B8860B]"
                  : "text-[#D4A017]"
              }

              hover:bg-[#D4A017]/10
              `}
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