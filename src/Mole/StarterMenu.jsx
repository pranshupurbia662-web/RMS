import React, { useEffect, useState } from 'react';
import axios from "axios";

const StarterMenu = () => {

  const [vegStarters, setVegStarters] = useState([]);
  const [nonVegStarters, setNonVegStarters] = useState([]);

  useEffect(() => {

    fetchStarterMenu();

  }, []);




  const fetchStarterMenu = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/menu"
      );



      const vegItems = data.filter(
        (item) =>
          item.category?.trim().toLowerCase() === "starter" &&
          item.type?.trim().toLowerCase() === "veg"
      );



      const nonVegItems = data.filter(
        (item) =>
          item.category?.trim().toLowerCase() === "starter" &&
          item.type?.trim().toLowerCase() === "nonveg"
      );



      setVegStarters(vegItems);

      setNonVegStarters(nonVegItems);

    } catch (error) {

      console.log(error);

    }

  };




  const toggleAvailability = async (id) => {

    try {

      await axios.patch(
        `http://localhost:5000/api/menu/${id}`
      );

      fetchStarterMenu();

    } catch (error) {

      console.log(error);

    }

  };




  const CardGrid = ({ items }) => (

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">

      {items.map((item) => (

        <div
          key={item._id}
          className="
            bg-white
            rounded-3xl
            p-2 sm:p-3
            border
            border-[#D4A017]/20
            shadow-md
            hover:scale-105
            transition
            duration-300
          "
        >

          {/* IMAGE */}

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 sm:h-44 lg:h-56 object-cover rounded-2xl"
          />



          {/* CONTENT */}

          <div className="flex justify-between items-center mt-3 gap-2">

            <div>

              <h2 className="uppercase text-[11px] sm:text-[13px] lg:text-[15px] font-semibold text-[#3b2a1a]">
                {item.name}
              </h2>

              <h4 className="text-[#B8860B] font-bold mt-1">
                ₹{item.price}
              </h4>

            </div>



            {/* TOGGLE BUTTON */}

            <button

              onClick={() => toggleAvailability(item._id)}

              className={`
                relative w-14 h-8 rounded-full transition duration-300

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

      {/* VEG STARTERS */}

      <div className="w-full bg-[#fffaf4] rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6 mb-10">

        <div className="flex items-center gap-4 mb-8">

          <img
            src="/logo/veg.jpeg"
            alt="veg"
            className="w-10 rounded-full"
          />

          <h1 className="uppercase text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Veg Starters
          </h1>

        </div>

        <CardGrid items={vegStarters} />

      </div>



      {/* NON VEG STARTERS */}

      <div className="w-full bg-[#fffaf4] rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">

        <div className="flex items-center gap-4 mb-8">

          <img
            src="/logo/nonveg.png"
            alt="nonveg"
            className="w-10"
          />

          <h1 className="uppercase text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Non Veg Starters
          </h1>

        </div>

        <CardGrid items={nonVegStarters} />

      </div>

    </div>

  );

};

export default StarterMenu;