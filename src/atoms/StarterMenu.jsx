import React from 'react';

const StarterMenu = () => {
  const vegStarters = [
    { image: "/starter/pannertikka.jpeg", name: "Paneer Tikka", price: "₹760" },
    { image: "/starter/harakabab.jpeg", name: "Hara Bhara Kebab", price: "₹680" },
    { image: "/starter/crispycorn.jpeg", name: "Crispy Corn", price: "₹620" },
    { image: "/starter/springroll.jpeg", name: "Veg Spring Rolls", price: "₹640" },
    { image: "/starter/mushroom.jpeg", name: "Chilli Mushroom", price: "₹720" },
    { image: "/starter/cheeseballs.jpeg", name: "Cheese Balls", price: "₹760" },
    { image: "/starter/brocoli.jpeg", name: "Tandoori Broccoli", price: "₹820" },
    { image: "/starter/honeypatato.jpeg", name: "Honey Chilli Potato", price: "₹660" },
    { image: "/starter/manchurian.jpeg", name: "Veg Manchurian Dry", price: "₹720" },
    { image: "/starter/garlicbread.jpeg", name: "Stuffed Garlic Bread", price: "₹580" },
  ];

  const nonVegStarters = [
    { image: "/starter/chickentikka.jpeg", name: "Chicken Tikka", price: "₹980" },
    { image: "/starter/tangedikebab.jpeg", name: "Tangdi Kebab", price: "₹1120" },
    { image: "/starter/lolipop.jpeg", name: "Chicken Lollipop", price: "₹920" },
    { image: "/starter/fishfinger.jpeg", name: "Fish Fingers", price: "₹1280" },
    { image: "/starter/prawnstempura.jpeg", name: "Prawns Tempura", price: "₹1680" },
    { image: "/starter/mutton.jpeg", name: "Mutton Seekh Kebab", price: "₹1420" },
    { image: "/starter/butterprown.jpeg", name: "Butter Garlic Prawns", price: "₹1820" },
    { image: "/starter/tandoorichicken.jpeg", name: "Tandoori Chicken", price: "₹1180" },
    { image: "/starter/chickenwings.jpeg", name: "Crispy Chicken Wings", price: "₹960" },
    { image: "/starter/chickenchilli.jpeg", name: "Chilli Chicken", price: "₹980" },
  ];

  const CardGrid = ({ items }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-3xl p-2 sm:p-3 border border-[#D4A017]/20 shadow-md cursor-pointer hover:scale-105 transition duration-300">
          <img src={item.image} alt={item.name} className="w-full h-32 sm:h-44 lg:h-56 object-cover rounded-2xl" />
          <h2 className="uppercase text-center text-[11px] sm:text-[13px] lg:text-[15px] font-semibold mt-2 sm:mt-4 text-[#3b2a1a] leading-4 sm:leading-6">{item.name}</h2>
          <h4 className="text-center text-[#B8860B] font-bold mt-1 sm:mt-2 text-sm sm:text-lg">{item.price}</h4>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#f7f3ef] px-3 sm:px-6 lg:px-8 py-4">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="uppercase text-3xl sm:text-4xl lg:text-6xl text-[#7B1E1E] font-serif tracking-wide">Veg / Non-Veg Starter Menu</h1>
        <p className="text-[#D4A017] text-lg mt-3 sm:mt-4 tracking-[4px]">━━━━━━ ✦ ━━━━━━</p>
      </div>

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6 mb-6 sm:mb-10">
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
          <img src="/logo/veg.jpeg" alt="veg" className="w-8 sm:w-10 flex-shrink-0 rounded-full" />
          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">Veg Starters</h1>
          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>
        </div>
        <CardGrid items={vegStarters} />
      </div>

      <div className="w-full bg-[#fffaf4] rounded-[24px] sm:rounded-[32px] border border-[#D4A017]/30 shadow-md p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
          <img src="/logo/nonveg.png" alt="nonveg" className="w-8 sm:w-10 flex-shrink-0" />
          <h1 className="uppercase text-xl sm:text-2xl lg:text-3xl text-[#B8860B] font-serif font-semibold">Non Veg Starters</h1>
          <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>
        </div>
        <CardGrid items={nonVegStarters} />
      </div>
    </div>
  );
};

export default StarterMenu;
