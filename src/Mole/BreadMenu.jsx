import React, { useState } from 'react';

const BreadMenu = () => {

  const [artisanBreads, setArtisanBreads] = useState([

    {
      image: "/breads/butternaan.jpeg",
      name: "Butter Naan",
      price: "₹180",
      available: true,
    },

    {
      image: "/breads/garlicnaan.jpeg",
      name: "Garlic Naan",
      price: "₹240",
      available: true,
    },

    {
      image: "/breads/cheese.jpeg",
      name: "Cheese Naan",
      price: "₹320",
      available: true,
    },

    {
      image: "/breads/tandoori.jpeg",
      name: "Tandoori Roti",
      price: "₹140",
      available: true,
    },

    {
      image: "/breads/butterroti.jpeg",
      name: "Butter Roti",
      price: "₹160",
      available: true,
    },

    {
      image: "/breads/lacha.jpeg",
      name: "Lachha Paratha",
      price: "₹260",
      available: true,
    },

    {
      image: "/breads/stuffedkulcha.jpeg",
      name: "Stuffed Kulcha",
      price: "₹340",
      available: true,
    },

    {
      image: "/breads/misi.jpeg",
      name: "Missi Roti",
      price: "₹220",
      available: true,
    },

  ]);

  const toggleAvailability = (index) => {

    const updatedartisanBreads = [...artisanBreads];

    updatedartisanBreads[index].available =
      !updatedartisanBreads[index].available;

    setArtisanBreads(updatedartisanBreads);

  };

  return (

    <div className="w-full min-h-screen bg-[#f7f3ef] px-3 sm:px-6 lg:px-8 py-4">

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/veg.jpeg"
            alt="veg"
            className="w-8 sm:w-10 flex-shrink-0 rounded-full"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Artisan Breads
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">

          {artisanBreads.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-2 sm:p-3 border border-[#D4A017]/20 shadow-md cursor-pointer hover:scale-105 transition duration-300"
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
                    {item.price}
                  </h4>

                </div>

                <button
                  onClick={() => toggleAvailability(index)}
                  className={`
                    relative w-14 h-8 rounded-full transition duration-300 flex-shrink-0

                    ${
                      item.available
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }
                  `}
                >

                  <div
                    className={`
                      absolute top-1 w-6 h-6 bg-white rounded-full transition duration-300

                      ${
                        item.available
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

      </div>

    </div>

  );
};

export default BreadMenu;