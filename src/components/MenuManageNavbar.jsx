import React from "react";

const MenuManageNavbar = () => {
  return (
    <div className="w-full bg-white p-4 rounded-3xl shadow-md border border-gray-100">

      <div className="flex flex-wrap items-center gap-3">

        <button className="px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300">
          All
        </button>

        <button className="px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300">
          Drinks
        </button>

        <button className="px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300">
          Starters
        </button>

        <button className="px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300">
          Main Course
        </button>

        <button className="px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300">
          Breads
        </button>

        <button className="px-6 py-2.5 rounded-2xl bg-gray-50 text-gray-600 font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white hover:shadow-md hover:scale-105 transition duration-300">
          Desserts
        </button>

      </div>

    </div>
  );
};

export default MenuManageNavbar;