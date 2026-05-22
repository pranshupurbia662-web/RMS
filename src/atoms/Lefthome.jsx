import React from 'react';

const Lefthome = () => {
  return (
    <div className="w-full bg-[#fdfaf6] border border-[#D4A017]/40 rounded-3xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center">
      {/* Crown Logo */}
      <img src="/logo/crown.png" alt="crown logo" className="w-14 sm:w-20 mb-4 sm:mb-5" />

      {/* Royal Spice */}
      <h1 className="uppercase text-3xl sm:text-5xl leading-tight tracking-wide text-[#8B6B2E] font-serif font-semibold">
        Royal <br /> Spice
      </h1>

      {/* Fine Dining */}
      <h3 className="uppercase tracking-[3px] sm:tracking-[4px] text-[12px] sm:text-[13px] text-[#5e4a2f] mt-4 sm:mt-6">
        Fine Dining Restaurant
      </h3>

      {/* Stars */}
      <h4 className="text-[#D4A017] text-base sm:text-lg tracking-[4px] sm:tracking-[6px] mt-3 sm:mt-5">
        ✦ ✦ ✦ ✦ ✦
      </h4>

      {/* MENU */}
      <h1 className="uppercase text-5xl sm:text-6xl text-[#7B1E1E] font-serif mt-8 sm:mt-16 tracking-wide">
        Menu
      </h1>

      {/* Divider */}
      <p className="text-[#D4A017] text-sm mt-4 sm:mt-5 tracking-[2px]">━━━━━━ ✦ ━━━━━━</p>

      {/* CENTER CONTENT */}
      <div className="flex-1 flex items-center py-4">
        <h3 className="text-xl sm:text-2xl leading-9 sm:leading-10 text-[#6a4d2f] font-serif italic">
          Where every dish is <br />a{" "}
          <span className="text-[#D4A017]">Royal Experience.</span>
        </h3>
      </div>

      {/* Bottom Divider */}
      <p className="text-[#D4A017] text-sm tracking-[2px]">━━━━ ✦ ━━━━ ✦ ━━━━</p>
    </div>
  );
};

export default Lefthome;
