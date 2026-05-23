import React, { useState } from 'react';

const DessertMenu = () => {

  const [desserts, setDesserts] = useState([
    { image: "/dessert/gulabjamun.jpeg", name: "Gulab Jamun Cheesecake", price: "₹420", available: true },
    { image: "/dessert/rasmalai.jpeg", name: "Rasmalai Tres Leches", price: "₹520", available: true },
    { image: "/dessert/brownie.jpeg", name: "Brownie with Belgian Chocolate Ice Cream", price: "₹640", available: true },
    { image: "/dessert/lavacake.jpeg", name: "Chocolate Lava Cake", price: "₹690", available: true },
    { image: "/dessert/newchessecake.jpeg", name: "New York Cheesecake", price: "₹760", available: true },
    { image: "/dessert/tiramisu.jpeg", name: "Classic Tiramisu", price: "₹820", available: true },
    { image: "/dessert/faluda.jpeg", name: "Kulfi Falooda Royale", price: "₹620", available: true },
    { image: "/dessert/waffle.jpeg", name: "Belgian Waffle Supreme", price: "₹880", available: true },
    { image: "/dessert/royalsundae.jpeg", name: "Royal Ice Cream Sundae", price: "₹740", available: true },
    { image: "/dessert/rabdi.jpeg", name: "Rabdi with Dry Fruits", price: "₹480", available: true },
  ]);

  const toggleAvailability = (index) => {

    const updatedDesserts = [...desserts];

    updatedDesserts[index].available =
      !updatedDesserts[index].available;

    setDesserts(updatedDesserts);

  };

  return (

    <div className="w-full min-h-screen bg-[#f7f3ef] px-3 sm:px-6 lg:px-8 py-4">

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/dessert.jpeg"
            alt="dessert"
            className="w-8 sm:w-10 flex-shrink-0 rounded-full"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Signature Desserts
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">

          {desserts.map((item, index) => (

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

export default DessertMenu;