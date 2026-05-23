import React from 'react'
import logo from '../assets/logo.png'

import {
  House,
  Table,
  NotepadText,
  SquareMenu,
  UserRound,
  ChartNoAxesCombined,
  ReceiptIndianRupee,
  LogOut
} from 'lucide-react'

import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  return (

    <div className="bg-[#f8edd5ce] fixed left-0 top-0 bottom-0 w-20 md:w-60 z-50 flex flex-col overflow-y-auto">

      <ul className="text-[#7b5a11cf] font-semibold p-2 space-y-2 flex flex-col h-full">

        {/* LOGO */}

        <div className="flex justify-center mb-4">

          <img
            src={logo}
            alt="logo"
            className="w-12 md:w-20 cursor-pointer rounded-full"
          />

        </div>
        {/* PROFILE SECTION */}
        
          <div className="hidden md:flex items-center gap-3 bg-[#F9E4C0] rounded-xl px-3 py-3 mb-4 cursor-pointer">

            <div className="w-10 h-10 rounded-full bg-[#d89216] flex items-center justify-center text-white font-bold ">
              A
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#3b260c]">
                Admin User
              </h3>

              <p className="text-xs text-[#7b5a11cf]">
                Admin
              </p>
            </div>

          </div>

          <div className="md:hidden flex justify-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#d89216] flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>

        {/* DASHBOARD */}

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >
            <House />
            <span className="hidden md:inline">Dashboard</span>
          </NavLink>
        </li>

        {/* TABLES */}

        <li>
          <NavLink
            to="/table"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >
            <Table />
            <span className="hidden md:inline">Tables</span>
          </NavLink>
        </li>

        {/* ORDERS */}

        <li>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >
            <NotepadText />
            <span className="hidden md:inline">Orders</span>
          </NavLink>
        </li>

        {/* MENU */}

        <li>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <SquareMenu />

            <span className="hidden md:inline">
              Menu
            </span>

          </NavLink>

        </li>

        {/* STAFF */}

        <li>
          <NavLink
            to="/staff"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >
            <UserRound />
            <span className="hidden md:inline">Staff</span>
          </NavLink>
        </li>

        {/* BILLING */}

        <li>
          <NavLink
            to="/billing"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >
            <ReceiptIndianRupee />
            <span className="hidden md:inline">Billing</span>
          </NavLink>
        </li>

        {/* REPORT */}

        <li>
          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >
            <ChartNoAxesCombined />
            <span className="hidden md:inline">Report</span>
          </NavLink>
        </li>

        {/* CUSTOMER MENU */}

        <li className="border-t border-[#e6dcc3] pt-3 mt-3">

          <NavLink
            to="/customer-menu"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-100
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <SquareMenu />

            <span className="hidden md:inline">
              Customer Menu
            </span>

          </NavLink>

        </li>

        {/* LOGOUT */}

        <li className="mt-auto border-t border-[#e6dcc3] pt-3">

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-100 text-red-500 hover:bg-red-50 hover:text-red-600 w-full cursor-pointer"
          >

            <LogOut size={20} />

            <span className="hidden md:inline font-medium">
              Logout
            </span>

          </button>

        </li>

      </ul>

    </div>
  )
}

export default Sidebar