import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#dca404] via-[#f0b90b] to-[#dca404] mt-6 px-4 sm:px-8 lg:px-10 py-4">
      {/* Mobile: stacked, Desktop: row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">

        {/* Follow Us */}
        <div className="flex items-center gap-3">
          <h5 className="uppercase text-white text-[11px] tracking-[3px] font-medium whitespace-nowrap">Follow Us</h5>
          <div className="flex items-center gap-3">
            <img src="/logo/facebook.png" alt="facebook" className="w-5 h-5 object-contain cursor-pointer hover:scale-110 transition duration-300" />
            <img src="/logo/insta.png" alt="instagram" className="w-5 h-5 object-contain cursor-pointer hover:scale-110 transition duration-300" />
            <img src="/logo/twiter.png" alt="twitter" className="w-5 h-5 object-contain cursor-pointer hover:scale-110 transition duration-300" />
          </div>
        </div>

        {/* Tagline */}
        <div className="flex items-center gap-2">
          <span className="text-white text-[11px]">✦</span>
          <p className="uppercase text-white text-[10px] sm:text-[12px] tracking-[3px] sm:tracking-[5px] text-center">We Serve Happiness On A Plate</p>
          <span className="text-white text-[11px]">✦</span>
        </div>

        {/* Taxes */}
        <div className="text-center sm:text-right">
          <p className="uppercase text-white text-[10px] sm:text-[12px] tracking-[2px] sm:tracking-[4px]">All Prices Are Inclusive Of Taxes</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
