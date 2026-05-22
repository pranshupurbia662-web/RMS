import React from 'react';
import Lefthome from '../atoms/Lefthome';
import Cocktail from '../atoms/Cocktail';
import Mainc from '../atoms/Mainc';
import Nonveg from '../atoms/Nonveg';
import Mocktail from '../atoms/mocktail';
import Footer from '../atoms/footer';
import Vegstarter from '../atoms/Vegstarter';
import Nonvegstarter from '../atoms/Nonvegstarter';
import Desserts from '../atoms/Desserts';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7f3ef]">
      {/* Hero/Sidebar section: stacked on mobile, side-by-side on lg+ */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start px-3 sm:px-4 lg:px-6 pt-4 lg:pt-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[280px] xl:w-[320px] lg:sticky lg:top-6 lg:self-start">
          <Lefthome />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-5 sm:gap-6 w-full">
          <Mocktail />
          <Cocktail />
          <Vegstarter />
          <Nonvegstarter />
          <Mainc />
          <Nonveg />
          <Desserts />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
