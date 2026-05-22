import React from 'react';

import Sidebar from '../components/Sidebar';
import ReportTopCard from '../components/ReportTopCard';
import DoughnutChart from '../components/DoughnutChart';
import BargraphReport from '../components/BargraphReport';

const Report = () => {
  return (

    <div className="flex min-h-screen ">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Top Cards */}
        <ReportTopCard />

        {/* Charts Row */}
        <div className="flex gap-8 mt-10 items-start">

          {/* LEFT BAR GRAPH */}
          <div className="flex-[2]">
            <BargraphReport />
          </div>

          {/* RIGHT DOUGHNUT */}
          <div className="flex-1">
            <DoughnutChart />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Report;