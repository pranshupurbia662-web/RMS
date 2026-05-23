import React, { useState } from 'react';

const DrinksMenu = () => {

  const [mocktails, setMocktails] = useState([
    { image: "/drinks/virginmoito.jpeg", name: "Virgin Mojito", price: "₹420", available: true },
    { image: "/drinks/strawberry.jpeg", name: "Strawberry Mojito", price: "₹480", available: true },
    { image: "/drinks/bluelagoon.jpeg", name: "Blue Lagoon", price: "₹520", available: true },
    { image: "/drinks/watermeloncooler.jpeg", name: "Watermelon Cooler", price: "₹460", available: true },
    { image: "/drinks/mintlemon.jpeg", name: "Mint Lemonade", price: "₹390", available: true },
    { image: "/drinks/pineapplepunch (1).jpeg", name: "Pineapple Punch", price: "₹540", available: true },
    { image: "/drinks/kiwiblast.jpeg", name: "Kiwi Blast", price: "₹580", available: true },
    { image: "/drinks/cranberry.jpeg", name: "Cranberry Sparkler", price: "₹620", available: true },
    { image: "/drinks/greenapple.jpeg", name: "Green Apple Soda", price: "₹440", available: true },
    { image: "/drinks/mangofizz.jpeg", name: "Mango Mint Fizz", price: "₹520", available: true },
    { image: "/drinks/icedtea.jpeg", name: "Iced Peach Tea", price: "₹480", available: true },
    { image: "/drinks/coldcoffee.jpeg", name: "Cold Coffee Frappe", price: "₹520", available: true },
    { image: "/drinks/oreoshake.jpeg", name: "Oreo Shake", price: "₹560", available: true },
    { image: "/drinks/vanila.jpeg", name: "Vanilla Caramel Frappe", price: "₹620", available: true },
    { image: "/drinks/chocolateshake.jpeg", name: "Chocolate Shake Supreme", price: "₹640", available: true },
  ]);

  const [cocktails, setCocktails] = useState([
    { image: "/drinks/classicmojito.jpeg", name: "Classic Mojito", price: "₹780", available: true },
    { image: "/drinks/margrita.jpeg", name: "Margarita", price: "₹920", available: true },
    { image: "/drinks/cosmopolita.jpeg", name: "Cosmopolitan", price: "₹980", available: true },
    { image: "/drinks/sourwhis.jpeg", name: "Whiskey Sour", price: "₹1050", available: true },
    { image: "/drinks/oldfashion.jpeg", name: "Old Fashioned", price: "₹1180", available: true },
    { image: "/drinks/long.jpeg", name: "Long Island Iced Tea", price: "₹1320", available: true },
    { image: "/drinks/blodymary.jpeg", name: "Bloody Mary", price: "₹960", available: true },
    { image: "/drinks/martini.jpeg", name: "Martini", price: "₹1240", available: true },
    { image: "/drinks/pinacaloda.jpeg", name: "Pina Colada", price: "₹920", available: true },
    { image: "/drinks/tequila.jpeg", name: "Tequila Sunrise", price: "₹980", available: true },
  ]);

  const toggleMocktailAvailability = (index) => {

    const updatedMocktails = [...mocktails];

    updatedMocktails[index].available =
      !updatedMocktails[index].available;

    setMocktails(updatedMocktails);

  };

  const toggleCocktailAvailability = (index) => {

    const updatedCocktails = [...cocktails];

    updatedCocktails[index].available =
      !updatedCocktails[index].available;

    setCocktails(updatedCocktails);

  };

  const CardGrid = ({ items, toggleAvailability }) => (

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

    <div className="w-full min-h-screen  px-3 sm:px-6 lg:px-8 py-4">

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

        <CardGrid
          items={mocktails}
          toggleAvailability={toggleMocktailAvailability}
        />

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

        <CardGrid
          items={cocktails}
          toggleAvailability={toggleCocktailAvailability}
        />

      </div>

    </div>
  );
};

export default DrinksMenu;