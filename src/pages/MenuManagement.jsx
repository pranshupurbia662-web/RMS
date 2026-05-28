import React, { useState } from "react";

import {
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import axios from "axios";

import { Plus } from "lucide-react";

import Desserts from "../Mole/DessertMenu";
import BreadMenu from "../Mole/BreadMenu";
import StarterMenu from "../Mole/StarterMenu";
import DrinksMenu from "../Mole/DrinksMenu";
import MainCourse from "../Mole/MainCourse";

const MenuManagement = () => {

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({

    name: "",
    price: "",
    category: "",
    type: "",
    image: "",
    isAvailable: true,

  });

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



  /* ADD ITEM */

  const handleAddItem = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/menu",
        formData
      );

      console.log(response.data);

      alert("Item Added Successfully");

      setFormData({

        name: "",
        price: "",
        category: "",
        type: "",
        image: "",
        isAvailable: true,

      });

      setShowForm(false);

    } catch (error) {

      console.log(error);

      alert("Failed To Add Item");

    }

  };



  return (

    <div className="w-full min-h-screen p-4 sm:p-6">

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

            onClick={() => setShowForm(!showForm)}

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

        <div className="flex flex-wrap gap-4 mb-6">

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

        {/* ADD ITEM FORM */}

        {
          showForm && (

            <div className="bg-[#fffaf4] p-6 rounded-3xl border border-[#D4A017]/20">

              <h2 className="text-2xl font-bold text-[#B8860B] mb-6">
                Add New Menu Item
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* NAME */}

                <input
                  type="text"
                  placeholder="Item Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-gray-300 outline-none"
                />

                {/* PRICE */}

                <input
                  type="number"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-gray-300 outline-none"
                />

                {/* CATEGORY */}

                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-gray-300 outline-none"
                >

                  <option value="">
                    Select Category
                  </option>

                  <option value="drinks">
                    Drinks
                  </option>

                  <option value="starter">
                    Starter
                  </option>

                  <option value="maincourse">
                    Main Course
                  </option>

                  <option value="bread">
                    Bread
                  </option>

                  <option value="dessert">
                    Dessert
                  </option>

                </select>

                {/* TYPE */}

                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-gray-300 outline-none"
                >

                  <option value="">
                    Select Type
                  </option>

                  <option value="veg">
                    Veg
                  </option>

                  <option value="nonveg">
                    NonVeg
                  </option>

                  <option value="mocktail">
                    Mocktail
                  </option>

                  <option value="cocktail">
                    Cocktail
                  </option>

                </select>

                {/* IMAGE */}

                <input
                  type="text"
                  placeholder="/drinks/example.jpeg"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image: e.target.value,
                    })
                  }
                  className="p-3 rounded-xl border border-gray-300 outline-none md:col-span-2"
                />

              </div>

              {/* SAVE BUTTON */}

              <button

                onClick={handleAddItem}

                className="
                  mt-6
                  bg-[#B8860B]
                  text-white
                  px-6 py-3
                  rounded-2xl
                  font-semibold
                  hover:bg-[#9A7209]
                  transition-all duration-300
                "
              >

                Save Item

              </button>

            </div>

          )
        }

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