import React, { useState } from 'react';

const StarterMenu = () => {

  const [vegStarters, setVegStarters] = useState([
    { image: "/starter/pannertikka.jpeg", name: "Paneer Tikka", price: "₹760", available: true },
    { image: "/starter/harakabab.jpeg", name: "Hara Bhara Kebab", price: "₹680", available: true },
    { image: "/starter/crispycorn.jpeg", name: "Crispy Corn", price: "₹620", available: true },
    { image: "/starter/springroll.jpeg", name: "Veg Spring Rolls", price: "₹640", available: true },
    { image: "/starter/mushroom.jpeg", name: "Chilli Mushroom", price: "₹720", available: true },
    { image: "/starter/cheeseballs.jpeg", name: "Cheese Balls", price: "₹760", available: true },
    { image: "/starter/brocoli.jpeg", name: "Tandoori Broccoli", price: "₹820", available: true },
    { image: "/starter/honeypatato.jpeg", name: "Honey Chilli Potato", price: "₹660", available: true },
    { image: "/starter/manchurian.jpeg", name: "Veg Manchurian Dry", price: "₹720", available: true },
    { image: "/starter/garlicbread.jpeg", name: "Stuffed Garlic Bread", price: "₹580", available: true },
  ]);

  const [nonVegStarters, setNonVegStarters] = useState([
    { image: "/starter/chickentikka.jpeg", name: "Chicken Tikka", price: "₹980", available: true },
    { image: "/starter/tangedikebab.jpeg", name: "Tangdi Kebab", price: "₹1120", available: true },
    { image: "/starter/lolipop.jpeg", name: "Chicken Lollipop", price: "₹920", available: true },
    { image: "/starter/fishfinger.jpeg", name: "Fish Fingers", price: "₹1280", available: true },
    { image: "/starter/prawnstempura.jpeg", name: "Prawns Tempura", price: "₹1680", available: true },
    { image: "/starter/mutton.jpeg", name: "Mutton Seekh Kebab", price: "₹1420", available: true },
    { image: "/starter/butterprown.jpeg", name: "Butter Garlic Prawns", price: "₹1820", available: true },
    { image: "/starter/tandoorichicken.jpeg", name: "Tandoori Chicken", price: "₹1180", available: true },
    { image: "/starter/chickenwings.jpeg", name: "Crispy Chicken Wings", price: "₹960", available: true },
    { image: "/starter/chickenchilli.jpeg", name: "Chilli Chicken", price: "₹980", available: true },
  ]);

  const toggleVegAvailability = (index) => {

    const updatedVeg = [...vegStarters];

    updatedVeg[index].available =
      !updatedVeg[index].available;

    setVegStarters(updatedVeg);

  };

  const toggleNonVegAvailability = (index) => {

    const updatedNonVeg = [...nonVegStarters];

    updatedNonVeg[index].available =
      !updatedNonVeg[index].available;

    setNonVegStarters(updatedNonVeg);

  };

  const CardGrid = ({ items, toggleAvailability }) => (

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">

      {items.map((item, index) => (

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

  );

  return (

    <div className="w-full min-h-screen bg-[#f7f3ef] px-3 sm:px-6 lg:px-8 py-4">

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6 mb-6 sm:mb-10">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/veg.jpeg"
            alt="veg"
            className="w-8 sm:w-10 flex-shrink-0 rounded-full"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Veg Starters
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <CardGrid
          items={vegStarters}
          toggleAvailability={toggleVegAvailability}
        />

      </div>

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/nonveg.png"
            alt="nonveg"
            className="w-8 sm:w-10 flex-shrink-0"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Non Veg Starters
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <CardGrid
          items={nonVegStarters}
          toggleAvailability={toggleNonVegAvailability}
        />

      </div>

    </div>
  );
};

export default StarterMenu;