import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

// REGISTER

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = () => {

  const data = {
    labels: [
      "Dine-In",
      "Take_Away",
      "Online",
      "Other",
    ],

    datasets: [
      {
        label: "Users",

        data: [300, 500, 100, 80],

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (

    <div className="w-full">

      <div className="bg-white p-6 rounded-3xl shadow-lg h-[420px] flex flex-col justify-center">

        <h2 className="text-2xl font-bold text-[#7B5A11] mb-6 text-center">
          User Devices
        </h2>

        <div className="w-full h-[280px]">

          <Doughnut
            data={data}
            options={options}
          />

        </div>

      </div>

    </div>
  );
};

export default DoughnutChart;