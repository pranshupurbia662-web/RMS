import React, { useState } from 'react';

const MainCourse = () => {

  const [vegMainCourse, setVegMainCourse] = useState([
    { image: "/maincourse/pannerbm.jpeg", name: "Paneer Butter Masala", price: "₹690", available: true },
    { image: "/maincourse/kadaipanner.jpeg", name: "Kadai Paneer", price: "₹720", available: true },
    { image: "/maincourse/shahipaneer.jpeg", name: "Shahi Paneer", price: "₹760", available: true },
    { image: "/maincourse/malaikofte.jpeg", name: "Malai Kofta", price: "₹740", available: true },
    { image: "/maincourse/kolhapuri.jpeg", name: "Veg Kolhapuri", price: "₹650", available: true },
    { image: "/maincourse/mixveg.jpeg", name: "Mix Veg Curry", price: "₹620", available: true },
    { image: "/maincourse/dalmakhni.jpeg", name: "Dal Makhani", price: "₹590", available: true },
    { image: "/maincourse/daltadka.jpeg", name: "Dal Tadka", price: "₹520", available: true },
    { image: "/maincourse/palakpanner.jpeg", name: "Palak Paneer", price: "₹710", available: true },
    { image: "/maincourse/kadaipanner.jpeg", name: "Paneer Lababdar", price: "₹780", available: true },
    { image: "/maincourse/veghandi.jpeg", name: "Veg Handi", price: "₹680", available: true },
    { image: "/maincourse/mushroom.jpeg", name: "Mushroom Masala", price: "₹760", available: true },
    { image: "/maincourse/korma.jpeg", name: "Navratan Korma", price: "₹820", available: true },
    { image: "/maincourse/biryaniveg.jpeg", name: "Hyderabadi Veg Biryani", price: "₹720", available: true },
    { image: "/maincourse/dumbiryani.jpeg", name: "Dum Veg Biryani", price: "₹760", available: true },
  ]);

  const [nonVegMainCourse, setNonVegMainCourse] = useState([
    { image: "/maincourse/butterchicken.jpeg", name: "Butter Chicken", price: "₹980", available: true },
    { image: "/maincourse/chickentikkamasala.jpeg", name: "Chicken Tikka Masala", price: "₹1050", available: true },
    { image: "/maincourse/kadaichicken.jpeg", name: "Kadai Chicken", price: "₹920", available: true },
    { image: "/maincourse/chickencurry.jpeg", name: "Chicken Curry", price: "₹880", available: true },
    { image: "/maincourse/muglaichicken.jpeg", name: "Mughlai Chicken", price: "₹1120", available: true },
    { image: "/maincourse/muttonroganjosh.jpeg", name: "Mutton Rogan Josh", price: "₹1480", available: true },
    { image: "/maincourse/muttonmasala.jpeg", name: "Mutton Masala", price: "₹1420", available: true },
    { image: "/maincourse/keema.jpeg", name: "Keema Curry", price: "₹1250", available: true },
    { image: "/maincourse/fishcurry.jpeg", name: "Fish Curry", price: "₹1320", available: true },
    { image: "/maincourse/fish.jpeg", name: "Butter Garlic Fish", price: "₹1480", available: true },
    { image: "/maincourse/prawnmasala.jpeg", name: "Prawn Masala", price: "₹1650", available: true },
    { image: "/maincourse/prawn.jpeg", name: "Garlic Butter Prawns", price: "₹1820", available: true },
    { image: "/maincourse/chickenbiryani.jpeg", name: "Chicken Biryani", price: "₹920", available: true },
    { image: "/maincourse/muttonbiryani.jpeg", name: "Hyderabadi Mutton Biryani", price: "₹1520", available: true },
    { image: "/maincourse/prawnbiryani.jpeg", name: "Prawn Biryani", price: "₹1780", available: true },
  ]);

  const toggleVegAvailability = (index) => {

    const updatedVeg = [...vegMainCourse];

    updatedVeg[index].available =
      !updatedVeg[index].available;

    setVegMainCourse(updatedVeg);

  };

  const toggleNonVegAvailability = (index) => {

    const updatedNonVeg = [...nonVegMainCourse];

    updatedNonVeg[index].available =
      !updatedNonVeg[index].available;

    setNonVegMainCourse(updatedNonVeg);

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

    <div className="w-full min-h-screen px-3 sm:px-6 lg:px-8 py-4">

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6 mb-6 sm:mb-10">

        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">

          <img
            src="/logo/veg.jpeg"
            alt="veg"
            className="w-8 sm:w-10 flex-shrink-0 rounded-full"
          />

          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">
            Veg Main Course
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <CardGrid
          items={vegMainCourse}
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
            Non Veg Main Course
          </h1>

          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>

        </div>

        <CardGrid
          items={nonVegMainCourse}
          toggleAvailability={toggleNonVegAvailability}
        />

      </div>

    </div>

  );
};

export default MainCourse;