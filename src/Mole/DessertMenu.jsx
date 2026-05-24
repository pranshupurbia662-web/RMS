import React, { useEffect, useState } from 'react';
import axios from "axios";

const DessertMenu = () => {

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {

    fetchDessertsMenu();

  }, []);

  const fetchDessertsMenu = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/menu"
      );

      console.log(response.data);

      const dessertItems = response.data.filter(
        (item) =>
          item.category?.trim().toLowerCase() === "dessert"
      );

      console.log(dessertItems);

      setDesserts(dessertItems);

    } catch (error) {

      console.log(error);

    }

  };

  const toggleAvailability = async (id) => {

    try {

      await axios.patch(
        `http://localhost:5000/api/menu/${id}`
      );

      fetchDessertsMenu();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="w-full min-h-screen px-3 sm:px-6 lg:px-8 py-4">

      <div className="w-full bg-[#fffaf4] rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">

        <div className="flex items-center gap-4 mb-8">

          <img
            src="/logo/dessert.jpeg"
            alt="dessert"
            className="w-10 rounded-full"
          />

          <h1 className="uppercase text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Signature Desserts
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {desserts.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-3 border border-[#D4A017]/20 shadow-md hover:scale-105 transition duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover rounded-2xl"
              />

              <div className="flex justify-between items-center mt-3 gap-2">

                <div>

                  <h2 className="uppercase text-sm font-semibold text-[#3b2a1a]">
                    {item.name}
                  </h2>

                  <h4 className="text-[#B8860B] font-bold mt-1">
                    ₹{item.price}
                  </h4>

                </div>

                <button
                  onClick={() => toggleAvailability(item._id)}
                  className={`relative w-14 h-8 rounded-full transition duration-300 ${
                    item.isAvailable
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                >

                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition duration-300 ${
                      item.isAvailable
                        ? "right-1"
                        : "left-1"
                    }`}
                  ></div>

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
};

export default DessertMenu;