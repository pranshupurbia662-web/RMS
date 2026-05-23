import React from "react";
import {
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Plus } from "lucide-react";

import Desserts from "../Mole/DessertMenu";
import BreadMenu from "../Mole/BreadMenu";
import StarterMenu from "../Mole/StarterMenu";
import DrinksMenu from "../Mole/DrinksMenu";
import MainCourse from "../Mole/MainCourse";

const MenuManagement = () => {

  const navItems = [
    {
      name: "Drinks",
      path: "/menu/drinks",
    },

    {
      name: "Starter",
      path: "/menu/starter",
    },

    {
      name: "Main Course",
      path: "/menu/maincourse",
    },

    {
      name: "Bread",
      path: "/menu/bread",
    },

    {
      name: "Desserts",
      path: "/menu/desserts",
    },
  ];

  return (
    <div className="w-full min-h-screen  p-4 sm:p-6">

      {/* TOP SECTION */}

      <div className="w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-6">

        {/* HEADING */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

          <div>

            <h1 className="text-3xl font-bold text-[#B8860B]">
              Menu Management
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage restaurant food categories and menu items
            </p>

          </div>

          {/* ADD ITEM BUTTON */}

          <button
            className="
              flex items-center gap-2
              bg-[#B8860B]
              text-white
              px-5 py-3
              rounded-2xl
              font-semibold
              shadow-md
              hover:bg-[#9A7209]
              hover:shadow-xl
              hover:scale-105
              transition-all duration-300
            "
          >

            <Plus size={20} />

            Add Item

          </button>

        </div>

        {/* CATEGORY BUTTONS */}

        <div className="flex flex-wrap gap-4">

          {navItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}

              className={({ isActive }) =>
                `px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-[#D4A017] text-white shadow-lg scale-105"
                    : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-[#D4A017] hover:text-white hover:border-transparent hover:shadow-md hover:scale-105"
                }`
              }
            >

              {item.name}

            </NavLink>

          ))}

        </div>

      </div>

      {/* ROUTES */}

      <div className="mt-6">

        <Routes>

          {/* DEFAULT ROUTE */}

          <Route
            index
            element={<Navigate to="drinks" replace />}
          />

          {/* DRINKS */}

          <Route
            path="drinks"
            element={<DrinksMenu admin={true} />}
          />

          {/* STARTERS */}

          <Route
            path="starter"
            element={<StarterMenu admin={true} />}
          />

          {/* MAIN COURSE */}

          <Route
            path="maincourse"
            element={<MainCourse admin={true} />}
          />

          {/* BREAD */}

          <Route
            path="bread"
            element={<BreadMenu admin={true} />}
          />

          {/* DESSERTS */}

          <Route
            path="desserts"
            element={<Desserts admin={true} />}
          />

        </Routes>

      </div>

    </div>
  );
};

export default MenuManagement;