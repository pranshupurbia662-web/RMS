import React, { useEffect, useState } from 'react';
import axios from "axios";

const DrinksMenu = () => {

  const [mocktails, setMocktails] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchDrinksMenu();
  }, []);

  const fetchDrinksMenu = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/menu"
      );

      const mocktailItems = data.filter(
        (item) =>
          item.category === "Drinks" &&
          item.type === "Mocktail"
      );

      const cocktailItems = data.filter(
        (item) =>
          item.category === "Drinks" &&
          item.type === "Cocktail"
      );

      setMocktails(mocktailItems);

      setCocktails(cocktailItems);

    } catch (error) {

      console.log(error);

    }

  };


  const toggleAvailability = async (id) => {

    try {

      await axios.patch(
        `http://localhost:5000/api/menu/${id}`
      );

      fetchDrinksMenu();

    } catch (error) {

      console.log(error);

    }

  };


  const CardGrid = ({ items }) => (

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">

      {items.map((item, index) => (

        <div
          key={index}
          className="bg-[#fffaf3] rounded-3xl p-2 sm:p-3 border border-[#D4A017]/20 shadow-md cursor-pointer hover:scale-105 transition duration-300"
        >

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 sm:h-44 lg:h-56 object-cover rounded-2xl"
          />

          <div className="flex justify-between items-center mt-3 gap-2">

            <div>

              <h2 className="uppercase text-[11px] sm:text-[13px] lg:text-[15px] font-semibold text-[#3b2a1a] leading-4 sm:leading-6">
                {item.name}
              </h2>

              <h4 className="text-[#B8860B] font-bold mt-1 text-sm sm:text-lg">
                ₹{item.price}
              </h4>

            </div>

            <button
              onClick={() => toggleAvailability(item._id)}
              className={`
                relative w-14 h-8 rounded-full transition duration-300 flex-shrink-0

                ${
                  item.isAvailable
                    ? "bg-green-500"
                    : "bg-gray-300"
                }
              `}
            >

              <div
                className={`
                  absolute top-1 w-6 h-6 bg-white rounded-full transition duration-300

                  ${
                    item.isAvailable
                      ? "right-1"
                      : "left-1"
                  }
                `}
              ></div>

            </button>

          </div>

        </div>

      ))}

    </div>

  );

  return (

    <div className="w-full min-h-screen px-3 sm:px-6 lg:px-8 py-4">

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6 mb-6 sm:mb-10">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/mocktail.png"
            alt="mocktail"
            className="w-8 sm:w-10 flex-shrink-0"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Signature Mocktails
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <CardGrid items={mocktails} />

      </div>

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/cocktail.png"
            alt="cocktail"
            className="w-8 sm:w-10 flex-shrink-0"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Premium Cocktails
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <CardGrid items={cocktails} />

      </div>

    </div>
  );
};

export default DrinksMenu;