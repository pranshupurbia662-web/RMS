import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Wine,
  Plus,
} from "lucide-react";

function PremiumBars({ addToCart }) {

  const [premiumBars, setPremiumBars] = useState([]);

  useEffect(() => {

    fetchPremiumBars();

  }, []);

  const fetchPremiumBars = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/menu"
      );

      const cocktailItems = response.data.filter(
        (item) =>
          item.category?.trim().toLowerCase() === "drinks" &&
          item.type?.trim().toLowerCase() === "cocktail" &&
          item.isAvailable === true
      );

      setPremiumBars(cocktailItems);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <Wine
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Premium Bar

        </h2>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {premiumBars.map((item, index) => (

          <div
            key={index}

            className="
              bg-[#fffaf0]
              rounded-3xl
              overflow-hidden
              border
              border-gray-200
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            {/* IMAGE */}

            <img
              src={item.image}
              alt={item.name}
              className="h-52 w-full object-cover"
            />

            {/* CONTENT */}

            <div className="p-5">

              <h3 className="text-xl font-bold text-gray-800 mb-2">

                {item.name}

              </h3>

              <div className="flex items-center justify-between">

                <p className="text-[#D4A017] text-lg font-bold">

                  ₹{item.price}

                </p>

                <button

                  className="
                    bg-[#D4A017]
                    hover:bg-yellow-700
                    text-white
                    p-3
                    rounded-full
                    transition-all
                  "

                  onClick={() => addToCart(item)}

                >

                  <Plus size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default PremiumBars;