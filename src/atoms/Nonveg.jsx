import React from 'react';

const Nonveg = () => {
  const nonVegMainCourse = [
    { image: "/maincourse/butterchicken.jpeg", name: "Butter Chicken", price: "₹988" },
    { image: "/maincourse/muttonroganjosh.jpeg", name: "Mutton Rogan Josh", price: "₹1480" },
    { image: "/maincourse/fishcurry.jpeg", name: "Fish Curry", price: "₹1300" },
    { image: "/maincourse/prawn.jpeg", name: "Garlic Butter Prawns", price: "₹1820" },
    { image: "/maincourse/prawnbiryani.jpeg", name: "Prawn Biryani", price: "₹1780" },
  ];

  return (
    <div className="bg-[#f7f3ef] rounded-3xl border border-[#D4A017]/30 shadow-md p-4 sm:p-5">
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <img src="/logo/nonveg.png" alt="non-veg" className="w-9 flex-shrink-0" />
        <h1 className="uppercase text-[18px] sm:text-[22px] lg:text-[26px] tracking-wide text-[#B8860B] font-serif font-semibold leading-tight">
          Special Non-Veg Main Course
        </h1>
        <div className="flex-1 h-px bg-[#D4A017]/30 hidden sm:block"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {nonVegMainCourse.map((item, index) => (
          <div key={index} className="bg-[#fffaf4] rounded-2xl p-2 border border-[#D4A017]/20 shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            <img src={item.image} alt={item.name} className="w-full h-28 sm:h-32 lg:h-36 object-cover rounded-xl" />
            <h2 className="uppercase text-center text-[11px] sm:text-[12px] font-semibold mt-2 sm:mt-3 text-[#3b2a1a] leading-4 sm:leading-5">{item.name}</h2>
            <h4 className="text-center text-[#B8860B] font-semibold mt-1 text-xs sm:text-sm">{item.price}</h4>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-5 gap-3">
        <div className="w-16 sm:w-20 h-px bg-[#D4A017]/30"></div>
        <p className="uppercase tracking-[2px] text-[10px] sm:text-[11px] text-[#B8860B] whitespace-nowrap">Full Non-Veg Main Course Inside</p>
        <div className="w-16 sm:w-20 h-px bg-[#D4A017]/30"></div>
      </div>
    </div>
  );
};

export default Nonveg;
